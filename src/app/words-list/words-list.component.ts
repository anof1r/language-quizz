import { Component, Input } from '@angular/core';
import { WordsList } from '../types/types';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss'],
})
export class WordsListComponent {
  @Input() wordsList: WordsList = [];
}
