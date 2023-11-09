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

  addNewWord(newWord: Word): Observable<Word> {
    return this.vocabularyApiService.addNewWord(newWord);
  }

  getAllWords(): Observable<WordsList> {
    return this.vocabularyApiService.getWords();
  }
}
