export class Letter {
  private _char: string;
  private _active: boolean;
  private _selected: boolean;
  private _maybe: boolean;

  constructor(char: string) {
    this._char = char;
    this._active = true;
    this._selected = false;
    this._maybe = false;
  }

  get char(): string {
    return this._char;
  }
  get active(): boolean {
    return this._active;
  }
  get selected(): boolean {
    return this._selected;
  }
  get maybe(): boolean {
    return this._maybe;
  }

  select(): void {
    this._selected = true;
  }
  unselect(): void {
    this._selected = false;
  }

  toggleMaybe(): void {
    this._maybe = !this._maybe;
  }

  toggleStatus(): void {
    this._active = !this._active;
  }
}
