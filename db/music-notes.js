const musicNotes = [
    {key: 'Cb', notes: ["Cb","Db","Eb","Fb","Gb", "Ab","Bb","Cb"]},
    {key: 'C', notes: ["C","D","E","F","G","A","B","C"]},
    {key: 'C#', notes: ["C#","D#","E#","F#","G#","A#","B#","C#"]},
    {key: 'Db', notes: ["Db","Eb","F","Gb","Ab","Bb","C","Db"]},
    {key: 'D', notes: ["D","E","F#","G","A","B","C#","D"]},
    {key: 'D#', notes: ["D#","E#","F##","G#","A#","B#","C##","D#"]},
    {key: 'Eb', notes: ["Eb","F","G","Ab","Bb","C","D","Eb"]},
    {key: 'E', notes: ["E","F#","G#","A","B","C#","D#","E"]},
    {key: 'F', notes: ["F","F","G","A","Bb","C","D","E","F"]},
    {key: 'F#', notes: ["F#","G#","A#","B","C#","D#","E#","F#"]},
    {key: 'Gb', notes: ["Gb","Ab","Bb","Cb","Db","Eb","F","Gb"]},
    {key: 'G', notes: ["G","A","B","C","D","E","F#","G"]},
    {key: 'G#', notes: ["G#","A#","B#","C#","D#","E#","F##","G#"]},
    {key: 'Ab', notes: ["Ab","Bb","C","Db","Eb","F","G","Ab"]},
    {key: 'A', notes: ["A","B","C#","D","E","F#","G#","A"]},
    {key: 'A#', notes: ["A#","B#","C##","D#","E#","F##","G##","A#"]},
    {key: 'Bb', notes: ["Bb","C","D","Eb","F","G","A","Bb"]},
    {key: 'B', notes: ["B","C#","D#","E","F#","G#","A#","B"]},
    {key: 'chroma_b', notes: ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"]},
    {key: 'chroma_#', notes: ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C"]},
];
const music_modes = [
    {mode: 'ionian', scale_type: "maj"},
    {mode: 'dorian', scale_type: 'min'},
    {mode: 'lydian', scale_type: 'maj'},
    {mode: 'mixolydian', scale_type: 'dom'},
    {mode: 'aeolian',  scale_type: 'min'},
    {mode: 'locrian',  scale_type: 'dim'},
];

const music_do = [
    {mode: 'ionian', do_scale: ["do","re","mi","fa","sol","la","ti","do"]},
    {mode: 'dorian', do_scale: ["re","mi","fa","sol","la","ti","do","re"]},
    {mode: 'phrygian]', do_scale: ["mi","fa","sol","la","ti","do","re","mi"]},
    {mode: 'lydian', do_scale: ["fa","sol","la","ti","do","re","mi","fa"] },
    {mode: 'mixolydian', do_scale: ["sol","la","ti","do","re","mi","fa","sol"]},
    {mode: 'aeolian',  do_scale: ["la","ti","do","re","mi","fa","sol","la"]},
    {mode: 'locrian',  do_scale: ["ti","do","re","mi","fa","sol","la","ti"]},
    {mode: 'locrian',  do_scale: ["ti","do","re","mi","fa","sol","la","ti"]},
    {mode: 'chroma', do_schale: ["do","di","re","ri","mi","fa","fi","sol","si","la","li", "ti","do"]}
];


module.exports = {
    musicNotes,
    music_modes,
    music_do
}