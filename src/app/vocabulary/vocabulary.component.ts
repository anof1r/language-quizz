import { Component, OnDestroy, OnInit } from '@angular/core';
import { VocabularyService } from './service/vocabulary.service';
import { FiltersGroup, WordGroup, WordsList } from '../types/types';
import { Subject } from 'rxjs';
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

  words: WordsList = [];
  protected newWordForm: FormGroup<WordGroup>;
  protected dropdownWordsLanguage = LanguagesArray;
  protected dropdownWordsClasses = WordClassesArray;
  protected dropdownWordsDifficulties = WordDifficultiesArray;

  constructor(
    protected vocabularyService: VocabularyService,
    private formBuilder: FormBuilder,
  ) {
    // need to find a way how to type this group
    this.newWordForm = this.formBuilder.group<WordGroup>({
      word: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(50)],
      }),
      translation: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(50)],
      }),
      filt: this.formBuilder.group<FiltersGroup>({
        difficulty: new FormControl(0, {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.min(1),
            Validators.max(3),
          ],
        }),
        class: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        lang: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        group: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      }),
    });
  }

  ngOnInit(): void {
    this.vocabularyService.getAllWords().subscribe((response) => {
      this.words = [...response]; //async pipe
    });
  }

  addNewWord() {
    this.vocabularyService
      .addNewWord(this.newWordForm.getRawValue())
      .subscribe((word) => {
        this.words = [...this.words, word];
      });
  }

  isButtonDisabled() {
    console.log(this.newWordForm.invalid);

    return this.newWordForm.invalid ? true : false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
