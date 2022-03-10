import { Component, OnInit } from '@angular/core';
import {IWord} from "../../iword";
import {DictionaryServiceService} from "../../dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  iword: IWord;
  constructor(private dictionaryServiceService: DictionaryServiceService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    const word =this.activatedRoute.snapshot.params.word
    this.iword=this.dictionaryServiceService.translate(word);
    console.log(this.iword)
  }

}
