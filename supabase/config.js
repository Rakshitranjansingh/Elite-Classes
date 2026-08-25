/* Elite Classes — Supabase Client Configuration & Credential Manager */

let SUPABASE_URL = localStorage.getItem('ec_supabase_url') || 'https://atxowatuiiggecsqqeby.supabase.co';
let SUPABASE_ANON_KEY = localStorage.getItem('ec_supabase_key') || 'sb_publishable_J4o-ZcZfEf9Y5t9UwgaNyA_99vn68o0';

let supabaseClient = null;

function initSupabaseClient() {
    if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('[Supabase] Client initialized successfully for', SUPABASE_URL);
            return true;
        } catch (e) {
            console.warn('[Supabase] Client initialization failed:', e);
            supabaseClient = null;
        }
    } else {
        supabaseClient = null;
    }
    return false;
}

function saveSupabaseCredentials(url, key) {
    SUPABASE_URL = url.trim();
    SUPABASE_ANON_KEY = key.trim();
    localStorage.setItem('ec_supabase_url', SUPABASE_URL);
    localStorage.setItem('ec_supabase_key', SUPABASE_ANON_KEY);
    return initSupabaseClient();
}

function isSupabaseConnected() {
    return !!supabaseClient;
}
