import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VocabularyService } from './service/vocabulary.service';
import { WordsList } from '../types/types';
import { Subject, takeUntil } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  LanguagesArray,
  WordClassesArray,
  WordDifficultiesArray,
} from '../models/models';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  protected words: WordsList = [];
  protected newWordForm: FormGroup;
  protected dropdownWordsLanguage = LanguagesArray;
  protected dropdownWordsClasses = WordClassesArray;
  protected dropdownWordsDifficulties = WordDifficultiesArray;

  constructor(
    protected vocabularyService: VocabularyService,
    private formBuilder: FormBuilder,
  ) {
    // need to find a way how to type this group
    this.newWordForm = this.formBuilder.group({
      word: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      translation: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      filt: this.formBuilder.group({
        difficulty: new FormControl(0, [
          Validators.required,
          Validators.min(1),
          Validators.max(5),
        ]),
        class: new FormControl(null, [Validators.required]),
        lang: new FormControl('', [Validators.required]),
      }),
    });
  }

  ngOnInit(): void {
    this.vocabularyService
      .getAllWords()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        response.map((word) => this.words.push(word));
      });
  }

  addNewWord() {
    console.log(this.newWordForm.getRawValue(), this.newWordForm.invalid);
    this.vocabularyService
      .addNewWord(this.newWordForm.getRawValue())
      .pipe(takeUntil(this.destroy$))
      .subscribe((word) => this.words.push(word));
  }

  isButtonDisabled() {
    return this.newWordForm.invalid ? true : false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
