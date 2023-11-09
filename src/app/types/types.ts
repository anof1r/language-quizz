import { FormControl } from '@angular/forms';

export interface Word {
  id: number;
  word: string;
  translation: string;
  filt: {
    difficulty: number;
    class: WordClass;
    lang: string;
  };
}

export interface Answer {
  word: string;
  right?: true;
}

export interface Question {
  word: string;
  ans: Array<Answer>;
}

export type NewWordForm = {
  word: FormControl<string>;
  translation: FormControl<string>;
  filt: {
    difficulty: FormControl<number>;
    class: FormControl<WordClass>;
    lang: FormControl<string>;
  };
};

export type Quiz = Array<Question>;

export type WordsList = Array<Word>;

export type WordClass =
  | 'adverb'
  | 'adjective'
  | 'noun'
  | 'pronoun'
  | 'verb'
  | 'preposition'
  | 'conjunction'
  | 'interjection';
