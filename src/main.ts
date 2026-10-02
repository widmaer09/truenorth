import { Note } from "./music/Note.js";
import { Key } from "./music/Key.js";
import { ScaleType } from "./music/ScaleType.js";
import { Scale } from "./music/Scale.js";

const scale = new Scale(new Key(new Note("D", 2)), ScaleType.MAJOR);
scale.generateScale();
console.log(scale.notes.map((note) => note.name).join(" "));