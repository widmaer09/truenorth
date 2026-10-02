import { Note } from "./Note.js";



export class ChromaticScale{
    private static readonly NATURAL_PITCHES: Record<string, number> = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
};

  // Name a pitch using a specific letter: spell(6, "F") -> "F#", spell(6, "G") -> "Gb"
  public static spell(pitchClass: number, letter: string): string {
    const natural = ChromaticScale.getNaturalPitch(letter);
    const distance = ChromaticScale.wrap(pitchClass - natural);

    switch (distance) {
      case 0:
        return letter;
      case 1:
        return letter + "#";
      case 2:
        return letter + "##";
      case 11:
        return letter + "b";
      case 10:
        return letter + "bb";
      default:
        throw new Error(`Cannot spell pitch class ${pitchClass} with the letter ${letter}`);
    }
  }

  // Turn a name back into a pitch: "Bb" -> 10, "E#" -> 5
  public static getPitchClass(name: string): number {
    const letter = name.charAt(0);
    const accidentals = name.slice(1);

    let pitch = ChromaticScale.getNaturalPitch(letter);
    for (const symbol of accidentals) {
      if (symbol === "#") {
        pitch += 1;
      } else if (symbol === "b") {
        pitch -= 1;
      } else {
        throw new Error(`Invalid note name: ${name}`);
      }
    }
    return ChromaticScale.wrap(pitch);
  }

 //get the natural name from the map
 private static getNaturalPitch(letter:string): number {
    const natural = ChromaticScale.NATURAL_PITCHES[letter];
    if(natural === undefined){
        throw new Error('Invalid note letter');

    }
    return natural;
 }

 // Keep any number inside 0-11, including negatives: wrap(-1) -> 11
  private static wrap(value: number): number {
    return ((value % 12) + 12) % 12;
  }
 


    
}