import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VocabularyService } from './service/vocabulary.service';
import { Word, WordsList } from '../types/types';
import { Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DB_BASE_URL } from '../environment/constants';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VocabularyComponent implements OnInit, OnDestroy {
  protected words: WordsList = [];
  private destroy$ = new Subject<void>();

  constructor(
    protected vocabularyService: VocabularyService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.vocabularyService
      .getAllWords()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        response.map((word) => this.words.push(word));
      });
  }

  //testing new word
  addNewWord() {
    this.http
      .post<Word>(`${DB_BASE_URL}/words`, {
        language: 'French',
        word: 'Denis',
        translation: 'Dunie',
        diffuculty: 1,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Word) => {
        this.words.push(response);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
