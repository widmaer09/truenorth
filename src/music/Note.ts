export class Note {
  constructor(
    private readonly _name: string,
    private readonly _pitchClass: number
  ) {
    if (!Number.isInteger(_pitchClass) || _pitchClass < 0 || _pitchClass > 11) {
      throw new Error(`Pitch class must be a whole number from 0 to 11, got ${_pitchClass}`);
    }
  }

  public get name(): string {
    return this._name;
  }

  public get pitchClass(): number {
    return this._pitchClass;
  }
}