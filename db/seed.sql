-- \connect to the database
\c data_wharehouse_dev;

-- initial data for animes_03 table

INSERT INTO music_notes (name, description) VALUES
    ('Cb','{"Cb","Db","Eb","Fb","Gb","Ab","Bb","Cb"}'),
    ('C', '{"C","D","E","F","G","A","B","C"}'),
    ('C#', '{"C#","D#","E#","F#","G#","A#","B#","C#"}'),
    ('Db', '{"Db","Eb","F","Gb","Ab","Bb","C","Db"}'),
    ('D', '{"D","E","F#","G","A","B","C#","D"}'),
    ('D#', '{"D#","E#","F##","G#","A#","B#","C##","D#"}'),
    ('Eb', '{"Eb","F","G","Ab","Bb","C","D","Eb"}'),
    ('E', '{"E","F#","G#","A","B","C#","D#","E"}'),
    ('F', '{"F","F","G","A","Bb","C","D","E","F"}'),
    ('F#', '{"F#","G#","A#","B","C#","D#","E#","F#"}'),
    ('Gb', '{"Gb","Ab","Bb","Cb","Db","Eb","F","Gb"}'),
    ('G', '{"G","A","B","C","D","E","F#","G"}'),
    ('G#', '{"G#","A#","B#","C#","D#","E#","F##","G#"}'),
    ('Ab', '{"Ab","Bb","C","Db","Eb","F","G","Ab"}'),
    ('A', '{"A","B","C#","D","E","F#","G#","A"}'),
    ('A#', '{"A#","B#","C##","D#","E#","F##","G##","A#"}'),
    ('Bb', '{"Bb","C","D","Eb","F","G","A","Bb"}'),
    ('B', '{"B","C#","D#","E","F#","G#","A#","B"}'),
    ('chroma_b', '{"C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"}'),
    ('chroma_#', '{"C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C"}');

INSERT INTO music_modes (mode, scale_type) VALUES
    ('ionian', 'maj'),
    ('dorian', 'min'),
    ('phrygian','min'),
    ('lydian','maj'),
    ('mixolydian', 'dom'),
    ('aeolian','min'),
    ('locrian', 'dim');
    
INSERT INTO music_do (mode, do_scale) VALUES
    ('ionian', '{"do","re","mi","fa","sol","la","ti","do"}'),
    ('dorian', '{"re","mi","fa","sol","la","ti","do","re"}'),
    ('phrygian', '{"mi","fa","sol","la","ti","do","re","mi"}'),
    ('lydian', '{"fa","sol","la","ti","do","re","mi","fa"}'),
    ('mixolydian', '{"sol","la","ti","do","re","mi","fa","sol"}'),
    ('aeolian', '{"la","ti","do","re","mi","fa","sol","la"}'),
    ('locrian', '{"ti","do","re","mi","fa","sol","la","ti"}'),
    ('chroma', '{"do","di","re","ri","mi","fa","fi","sol","si","la","li", "ti","do"}'),
    
    