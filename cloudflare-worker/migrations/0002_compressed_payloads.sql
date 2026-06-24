ALTER TABLE exports ADD COLUMN payload_encoding TEXT NOT NULL DEFAULT 'json';
ALTER TABLE exports ADD COLUMN payload_data TEXT;

DELETE FROM exports WHERE device_id = 'codex-smoke-test';
