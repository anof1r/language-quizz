import { Injectable } from '@angular/core';
import { Word, WordsList } from 'src/app/types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DB_BASE_URL } from 'src/app/environment/constants';
import { VocabularyApiService } from './vocabulary-api.service';

@Injectable({
  providedIn: 'root',
})
export class VocabularyService {
  protected words: WordsList = [];

  constructor(private vocabularyApiService: VocabularyApiService) {}

  // addNewWord() {
  //   this.http.post<Word>(`${DB_BASE_URL}/words`, {
  //     language: 'French',
  //     word: 'test',
  //     translation: 'тест',
  //     diffuculty: 1
  //   }).pipe().subscribe((response: Word) => {
  //     // untilDestroyed
  //     this.words.push(response);
  //   })
  //   this.getWords()
  // }

  getAllWords(): Observable<WordsList> {
    return this.vocabularyApiService.getWords();
  }
}
