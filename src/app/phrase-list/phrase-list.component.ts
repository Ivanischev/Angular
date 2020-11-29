import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Phrase as PHRASES } from '../core/data/phrases';
import { PhraseInt } from '../core/models/phrase';


@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})

export class PhraseListComponent implements OnInit {
  Phrase: PhraseInt[] = PHRASES.slice();
  addPhrase: string;
  addCountry: string;

  constructor() {}

  ngOnInit(): void {
    
  }

  addItem() {
    this.Phrase.push({ value: this.addPhrase, language: this.addCountry});    
  }

}
