import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VocabularyService } from './service/vocabulary.service';
import { WordsList } from '../types/types';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VocabularyComponent implements OnInit, OnDestroy {
  protected words: WordsList = [];
  private destroy$ = new Subject<void>();

  constructor(protected vocabularyService: VocabularyService) {}

  ngOnInit(): void {
    this.vocabularyService
      .getAllWords()
      .pipe()
      .subscribe((response) => {
        response.map((word) => this.words.push(word));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
