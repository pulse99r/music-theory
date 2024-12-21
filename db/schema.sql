\c data_wharehouse_dev;

DROP TABLE IF EXIST music_notes;
CREATE TABLE music_notes(
    id SERIAL PRIMARY KEY,
    muisc_key VARCHAR(3),
    notes TEXT[]
    type VARCHAR(3)
);

DROP TABLE IF EXIST music_modes;
CREATE TABLE music_modes(
    id SERIAL PRIMARY KEY,
    mode VARCHAR(10)
    scale_type VARCHAR(3)
);
DROP TABLE IF EXIST music_do;
CREATE TABLE music_do(
    id SERIAL PRIMARY KEY,
    mode VARCHAR(10)
    do_scale TEXT[]
);
