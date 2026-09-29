import { Note } from "./Note.js";

export class Key{
    public get tonic(): Note {
        return this._tonic;
    }
    constructor( private readonly _tonic: Note){}
}