export interface Word {
  id: number;
  word: string;
  translation: string;
  filt: {
    difficulty: number;
    type: WordClass;
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
