import { Injectable } from '@angular/core';
import {IWord} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  iwords: IWord [] =[{
    word: 'hello',
    mean: 'xin chào'
  },{
    word: 'house',
    mean: 'nhà'
  },{
    word: 'table',
    mean: 'bàn'
  }
  ];

  constructor() { }

  translate(word: string): IWord{
    return this.iwords.find(IWord => IWord.word === word)
  }
}
