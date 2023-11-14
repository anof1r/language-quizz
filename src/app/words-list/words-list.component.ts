import { Component, Input, OnInit } from '@angular/core';
import { WordsList } from '../types/types';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss'],
})
export class WordsListComponent implements OnInit {
  @Input() wordsList: WordsList = [];

  data: { word: string }[] = [
    { word: 'firstValue' },
    { word: 'secondValue' },
    { word: 'thirdValue' },
  ];

  ngOnInit(): void {
    console.log(this.wordsList);
  }
}
