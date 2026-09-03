-- =========================================================================
-- MIGRATION 013: Set Default Duration for Class 10 Science Tests to 90 Mins
-- Idempotent update to align with institute CBT standard (90 mins / 100 Qs)
-- =========================================================================

UPDATE test_series
SET duration_mins = 90
WHERE cls = 'Class 10' AND subject = 'Science' AND (duration_mins = 120 OR duration_mins IS NULL);

-- Explicitly update all 13 chapter master assessments
UPDATE test_series
SET duration_mins = 90
WHERE id IN (
    'ts_c10_sci_ch1',
    'ts_c10_sci_ch2',
    'ts_c10_sci_ch3',
    'ts_c10_sci_ch4',
    'ts_c10_sci_ch5',
    'ts_c10_sci_ch6',
    'ts_c10_sci_ch7',
    'ts_c10_sci_ch8',
    'ts_c10_sci_ch9',
    'ts_c10_sci_ch10',
    'ts_c10_sci_ch11',
    'ts_c10_sci_ch12',
    'ts_c10_sci_ch13'
);
