import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_BASE_URL } from 'src/app/environment/constants';
import { WordsList } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class VocabularyApiService {
  constructor(private http: HttpClient) {}

  getWords(): Observable<WordsList> {
    return this.http.get<WordsList>(`${DB_BASE_URL}/words`);
  }
}
