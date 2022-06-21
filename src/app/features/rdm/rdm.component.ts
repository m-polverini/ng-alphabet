import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take, takeUntil, takeWhile } from 'rxjs';
import { Letter } from 'src/app/core/models/letter';
import { AlphabetService } from 'src/app/core/services/alphabet.service';

@Component({
  selector: 'app-rdm',
  templateUrl: './rdm.component.html',
  styleUrls: ['./rdm.component.scss'],
})
export class RdmComponent implements OnDestroy {
  alphabet: Letter[];
  searching: boolean = false;
  choicedLetter?: Letter;
  searchSub?: Subscription;
  seconds: number = 10;

  constructor(private _alphabetService: AlphabetService) {
    this.alphabet = this._alphabetService.alphabet;
  }
  ngOnDestroy(): void {
    if (this.searchSub) this.searchSub.unsubscribe();
  }

  search() {
    this.searching = true;
    this.choicedLetter = undefined;
    let unselectedLetters = this.alphabet
      .filter((letter) => !letter.selected)
      .filter((letter) => letter.active);

    if (unselectedLetters && unselectedLetters.length > 0) {
      this.searchSub = interval(500)
        .pipe(takeWhile((value, index) => index < this.seconds))
        .subscribe((value) => {
          let letter =
            unselectedLetters[
              Math.floor(Math.random() * unselectedLetters.length)
            ];
          letter.toggleMaybe();
          setTimeout(() => letter.toggleMaybe(), 500);
          if (value === this.seconds - 1) {
            setTimeout(() => {
              letter.select();
              this.choicedLetter = letter;
              this.searching = false;
              setTimeout(() => (this.choicedLetter = undefined), 10000);
            }, 500);
          }
        });
    }
  }

  disableLetter(letter: Letter) {
    letter.toggleStatus();
  }

  reset() {
    this.alphabet = this._alphabetService.alphabet;
    this.choicedLetter = undefined;
    this.searching = false;
    if (this.searchSub) this.searchSub.unsubscribe();
  }
}
