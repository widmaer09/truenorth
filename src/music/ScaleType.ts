export class ScaleType {
  static readonly MAJOR = new ScaleType("Major", [2, 2, 1, 2, 2, 2, 1]);
  static readonly MELODIC_MINOR = new ScaleType("Melodic Minor", [2, 1, 2, 2, 2, 2, 1]);
  static readonly HARMONIC_MINOR = new ScaleType("Harmonic Minor", [2, 1, 2, 2, 1, 3, 1]);

  private constructor(
    private readonly _name: string,
    private readonly _pattern: readonly number[]
  ) {}

  public get name(): string {
    return this._name;
  }

  public get pattern(): readonly number[] {
    return this._pattern;
  }
}