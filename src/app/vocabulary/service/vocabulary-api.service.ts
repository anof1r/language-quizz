import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DB_BASE_URL } from 'src/app/environment/constants';
import { Word, WordsList } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class VocabularyApiService {
  constructor(private http: HttpClient) {}

  addNewWord(newWord: Word): Observable<Word> {
    return this.http.post<Word>(`${DB_BASE_URL}/words`, newWord);
  }

  getWords(): Observable<WordsList> {
    return this.http.get<WordsList>(`${DB_BASE_URL}/words`);
  }
}
