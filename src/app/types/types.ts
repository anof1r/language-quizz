export interface Word {
  id: number,
  language: string,
  word: string,
  translation: string,
  diffuculty: 1
}
// {
//   "id": 1,
//   "word": "la gare",
//   "translation": "Вокзал",
//   "filt": {
//     "diffuculty": 1,
//     "type":"adjective",
//     "lang": "fr"
//   }
// }
//В будущем добавить таймер
export interface Answer {
  word: string,
  right?: true
}

export interface Question {
  word: string,
  ans: Array<Answer>
}

export type Quiz = Array<Question>

export type WordsList = Array<Word>
