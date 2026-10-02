import { Note } from "./Note.js";
import { Key } from "./Key.js";
import { ScaleType } from "./ScaleType.js";
import { ChromaticScale } from "./ChromaticScale.js";

export class Scale {
    private static readonly LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
    private readonly _notes: Note[] = [];
    private readonly _numbers: Number[] = [];


    constructor(
        private readonly _key: Key,
        private readonly _scaleType: ScaleType
    ) { }
    public static getPitches(startPitch: number, pattern: readonly number[]): number[] {
        const pitches: number[] = [];
        let currentPitch = startPitch;

        for (const step of pattern) {
            pitches.push(currentPitch);
            currentPitch = (currentPitch + step) % 12;
        }

        return pitches;
    }

    public static toNotes(pitches: number[], startLetter: string): Note[] {
        const notes: Note[] = [];
        const startIndex = Scale.LETTERS.indexOf(startLetter);

        for (let i = 0; i < pitches.length; i++) {
            const pitch = pitches[i];
            const letter = Scale.LETTERS[(startIndex + i) % 7];

            if (pitch === undefined || letter === undefined) {
                throw new Error(`Could not read pitch or letter at position ${i}`);
            }

            const name = ChromaticScale.spell(pitch, letter);
            notes.push(new Note(name, pitch));
        }

        return notes;
    }


    public generateScale(): void {
        const startPitch = this.key.tonic.pitchClass;
        const  scalePattern = this._scaleType.pattern;

       const pitchesArray = Scale.getPitches (startPitch, scalePattern);

       const notesArray =   Scale.toNotes(pitchesArray, this.key.tonic.name.charAt(0));

       this._notes.length=0;
       this._notes.push(...notesArray);


        










      
    }

    public get key(): Key { return this._key; }
    public get scaleType(): ScaleType { return this._scaleType; }
    public get notes(): readonly Note[] { return this._notes; }
}