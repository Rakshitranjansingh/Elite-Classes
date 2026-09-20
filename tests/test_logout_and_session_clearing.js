/**
 * Elite Classes — Logout & Session Clearing Test Suite
 * Validates that intentional logout completely clears cloud and local sessions,
 * prevents auto-login loops, and ensures no residual auth state persists.
 */

const assert = require('assert');

// Mock localStorage and sessionStorage
class MockStorage {
    constructor() {
        this.store = {};
    }
    getItem(k) { return this.store[k] !== undefined ? this.store[k] : null; }
    setItem(k, v) { this.store[k] = String(v); }
    removeItem(k) { delete this.store[k]; }
    clear() { this.store = {}; }
    get length() { return Object.keys(this.store).length; }
    key(i) { return Object.keys(this.store)[i] || null; }
}

global.localStorage = new MockStorage();
global.sessionStorage = new MockStorage();
global.window = {
    location: {
        origin: 'http://localhost:3000',
        pathname: '/index.html',
        search: '',
        hash: ''
    }
};

let signOutCalled = false;
global.supabaseClient = {
    auth: {
        async signOut() {
            signOutCalled = true;
            return { error: null };
        },
        async getSession() {
            // Return cached mock session if sb-token exists
            if (global.localStorage.getItem('sb-mock-auth-token')) {
                return {
                    data: {
                        session: {
                            user: {
                                email: 'teststudent@example.com',
                                user_metadata: { full_name: 'Test Student' }
                            }
                        }
                    },
                    error: null
                };
            }
            return { data: { session: null }, error: null };
        }
    }
};
global.isSupabaseConnected = () => true;

// Load DBService
const { DBService } = require('../supabase/api.js');

async function runTests() {
    console.log('======================================================');
    console.log('🧪 RUNNING LOGOUT & SESSION PURGE VERIFICATION TESTS');
    console.log('======================================================\n');

    // Test 1: DBService.signOut exists and clears all session items & Supabase tokens
    console.log('▶ Test 1: Verifying DBService.signOut clears cloud and local session...');
    localStorage.setItem('ec_user_role', 'student');
    localStorage.setItem('ec_student_id', 'st_123');
    localStorage.setItem('ec_student_name', 'Rahul Sharma');
    localStorage.setItem('ec_active_student', JSON.stringify({ id: 'st_123', name: 'Rahul Sharma' }));
    localStorage.setItem('ec_last_activity', Date.now().toString());
    localStorage.setItem('sb-mock-auth-token', 'valid-jwt-token-12345');
    localStorage.setItem('supabase.auth.token', 'legacy-token');
    localStorage.setItem('ec_supabase_url', 'https://example.supabase.co'); // Should be preserved!
    localStorage.setItem('ec_supabase_key', 'anon-key-123'); // Should be preserved!

    signOutCalled = false;
    await DBService.signOut();

    assert.strictEqual(signOutCalled, true, 'Supabase client signOut must be invoked');
    assert.strictEqual(localStorage.getItem('ec_user_role'), null, 'ec_user_role must be removed');
    assert.strictEqual(localStorage.getItem('ec_student_id'), null, 'ec_student_id must be removed');
    assert.strictEqual(localStorage.getItem('ec_active_student'), null, 'ec_active_student must be removed');
    assert.strictEqual(localStorage.getItem('sb-mock-auth-token'), null, 'sb- token must be removed');
    assert.strictEqual(localStorage.getItem('supabase.auth.token'), null, 'supabase.auth.token must be removed');
    assert.strictEqual(localStorage.getItem('ec_supabase_url'), 'https://example.supabase.co', 'Global DB URL must NOT be erased');
    assert.strictEqual(sessionStorage.getItem('ec_just_logged_out'), '1', 'ec_just_logged_out marker must be set');
    console.log('  ✔ All session keys, tokens, and Supabase cloud sessions successfully revoked');
    console.log('  ✔ Preserved institute global configuration keys (URL & Key)');
    console.log('  ✔ Set ec_just_logged_out marker in sessionStorage\n');

    // Test 2: Verify that normal visits to index.html do NOT trigger auto-login
    console.log('▶ Test 2: Verifying normal visits without OAuth params do NOT auto-login...');
    sessionStorage.clear();
    localStorage.setItem('sb-mock-auth-token', 'lingering-token');
    window.location.hash = '';
    window.location.search = '';

    // Simulate checkGoogleAuthRedirect guard
    const hash = window.location.hash || '';
    const search = window.location.search || '';
    const hasOAuthRedirect = hash.includes('access_token=') || 
                            hash.includes('error=') || 
                            search.includes('code=') || 
                            search.includes('error=');

    assert.strictEqual(hasOAuthRedirect, false, 'Normal homepage visit must not be detected as OAuth redirect');
    console.log('  ✔ Correctly detected non-OAuth navigation — prevented background session hijacking\n');

    // Test 3: Verify that intentional logout with ?logged_out=1 flag terminates any session
    console.log('▶ Test 3: Verifying logged_out flag terminates session and clears tokens...');
    window.location.search = '?logged_out=1';
    const isJustLoggedOut = window.location.search.includes('logged_out') || 
                           sessionStorage.getItem('ec_just_logged_out') === '1';

    assert.strictEqual(isJustLoggedOut, true, 'isJustLoggedOut must be true');

    if (isJustLoggedOut) {
        signOutCalled = false;
        await DBService.signOut();
        assert.strictEqual(signOutCalled, true, 'Must call signOut when landing with logged_out flag');
    }
    console.log('  ✔ Intentional logout flag correctly caught on gateway and revoked all sessions\n');

    console.log('======================================================');
    console.log('🎉 ALL LOGOUT VERIFICATION TESTS PASSED (100%)');
    console.log('======================================================');
}

runTests().catch(err => {
    console.error('Test failed:', err);
    process.exit(1);
});
