document.getElementById("clickplay").addEventListener("click", async () => {
    await Tone.start();

    const synth = new Tone.Synth().toDestination();
    const drum = new Tone.MembraneSynth().toDestination();

    // MUSIC AYAYAAA

    const melody = [
        "C4",
        "E4",
        "G4",
        "E4"
    ];

    melody.forEach((note, index) => {
        synth.triggerAttackRelease(
            note,
            "8n",
            `+${index * 0.5}`
        );
    });

    drum.triggerAttackRelease("C2", "8n", "+0");
    drum.triggerAttackRelease("C2", "8n", "+1");
    drum.triggerAttackRelease("C2", "8n", "+2");
    drum.triggerAttackRelease("C2", "8n", "+3");
});

