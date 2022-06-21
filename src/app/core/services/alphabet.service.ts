import { Injectable } from '@angular/core';
import { Letter } from '../models/letter';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  private ALPHABET: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  get alphabet(): Letter[] {
    return this.ALPHABET.map((letter) => new Letter(letter));
  }

  constructor() {}
}
