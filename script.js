document.getElementById("clickplay").addEventListener("click", async () => {
    await Tone.start();


    Tone.Transport.bpm.value = 90;

    animateNotes();
    
    const synth = new Tone.Synth().toDestination();

    const piano = new Tone.Synth({
        oscillator: {
            type: "triangle"
        },
    }).toDestination();
    const pad = new Tone.PolySynth(Tone.Synth).toDestination();

    const bass = new Tone.MonoSynth({
        oscillator: {
            type: "triangle"
        }
    }).toDestination();

    const lead = new Tone.Synth({
        oscillator: {
            type: "sine"
        }
    }).toDestination();

    // MUSIC AYAYAAA


    // chords- Am-F-C-G
    const chords = [
        ["A3","C4","E4"],
        ["F3","A3","C4"],
        ["C3","E3","G3"],
        ["G3","B3","D4"]
    ];


    // bassbassbass
    const bassNotes = ["A2", "F2", "C2", "G2"];


    // MELODY !!
    const melody = [
        "E5", "G5", "A5", "G5",
        "E5", "D5", "C5", "D5"
    ];




    let sectionStart = 0;


    // intro (js piano)
    melody.forEach((note, i) => {
        piano.triggerAttackRelease(
            note,
            "8n",
            `+${sectionStart + i * 0.5}`
        );
    });
    
    sectionStart += 8;

    // add... (pad)
    chords.forEach((chord, i) => {
        pad.triggerAttackRelease(
            chord,
            "2n",
            `+${sectionStart + i *2}`
        );
    });

    melody.forEach((note, i) => {
        piano.triggerAttackRelease(
            note,
            "8n",
            `+${sectionStart + i * 0.5}`
        );
    });

    sectionStart += 8;

    // ADD (bass)
    chords.forEach((chord, i) => {
        pad.triggerAttackRelease(
            chord,
            "2n",
            `+${sectionStart + i *2}`
        );

        bass.triggerAttackRelease(
            bassNotes[i],
            "2n",
            `+${sectionStart + i * 2}`
        );
    });

    melody.forEach((note, i) => {
        piano.triggerAttackRelease(
            note,
            "8n",
            `+${sectionStart + i * 0.5}`
        );
    });

    sectionStart += 8;


    // MORE
    chords.forEach((chord, i) => {
        pad.triggerAttackRelease(
            chord,
            "2n",
            `+${sectionStart + i *2}`
        );

        bass.triggerAttackRelease(
            bassNotes[i],
            "2n",
            `+${sectionStart + i * 2}`
        );
    });

    melody.forEach((note, i) => {
        piano.triggerAttackRelease(
            note,
            "8n",
            `+${sectionStart + i * 0.5}`
        );
    });

    sectionStart += 8;

    // FULLLLLL
    chords.forEach((chord, i) => {
        pad.triggerAttackRelease(
            chord,
            "2n",
            `+${sectionStart + i *2}`
        );

        bass.triggerAttackRelease(
            bassNotes[i],
            "2n",
            `+${sectionStart + i * 2}`
        );
    });

    melody.forEach((note, i) => {
        piano.triggerAttackRelease(
            note,
            "8n",
            `+${sectionStart + i * 0.5}`
        );
    });

    sectionStart += 8;

    // ending
    chords.forEach((chord, i) => {
        pad.triggerAttackRelease(
            chord,
            "2n",
            `+${sectionStart + i *2}`
        );

        bass.triggerAttackRelease(
            bassNotes[i],
            "2n",
            `+${sectionStart + i * 2}`
        );
    });

    melody.forEach((note, i) => {
        piano.triggerAttackRelease(
            note,
            "8n",
            `+${sectionStart + i * 0.5}`
        );
    });
});







// DESIGNNN

const symbols = ["♬", "♫", "♪", "♩"]
const container = document.body;

const notes = [];

for (let i = 0; i < 30; i++) {
    const note = document.createElement('span')
    note.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    note.style.position = "absolute";
    
   let x;
   let y;
   let StopNow;

   do {
    x = Math.random() * 90 + 5;
    y = Math.random() * 80 + 5;

    StopNow = notes.some(n => {
        const distanceX = Math.abs(x - n.x);
        const distanceY = Math.abs(y - n.y);
        return distanceX < 10 && distanceY < 10;
    });
   } 

   while (StopNow);
   note.style.left = x + "vw";
   note.style.top = y + "vh";
   
   note.style.fontSize = (Math.random() * 3 + 1) + 'rem';
   note.style.opacity = '0.15';
   note.style.pointerEvents = 'none';
   note.style.zIndex = '-2';
    
    notes.push({
        el: note,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08
    });

    container.appendChild(note);
}

function animateNotes() {
    for (let n of notes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x > 95 || n.x < 5) {
            n.vx *= -1;
        }

        if (n.y > 90 || n.y < 5) {
            n.vy *= -1;
        }
        n.el.style.left = n.x + "vw";
        n.el.style.top = n.y + "vh";
    }

    requestAnimationFrame(animateNotes);
}