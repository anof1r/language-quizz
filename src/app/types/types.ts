import { FormControl, FormGroup } from '@angular/forms';

export interface Word {
  id?: number;
  word: string;
  translation: string;
  filt: {
    difficulty: number;
    class: WordClass;
    lang: string;
    group: string;
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

export type WordGroup = {
  word: FormControl<string>;
  translation: FormControl<string>;
  filt: FormGroup<FiltersGroup>;
};

export interface FiltersGroup {
  difficulty: FormControl<number>;
  class: FormControl<WordClass>;
  lang: FormControl<string>;
  group: FormControl<string>;
}

export type Quiz = Array<Question>;

export type WordsList = Array<Word>;

export type WordClass =
  | ''
  | 'adverb'
  | 'adjective'
  | 'noun'
  | 'pronoun'
  | 'verb'
  | 'preposition'
  | 'conjunction'
  | 'interjection';
