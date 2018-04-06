import { Component, OnInit, Input } from '@angular/core';
import { NewsModel } from '../../news-model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() public newsModel: NewsModel;

  constructor() {
    /* this.title = 'Британия передала Юлии Скрипаль предложение российского посольства';
    this.description = 'посольства России о предоставлении консульской помощи, и теперь решение за ней';
    this.imageUrl = 'https://avatars.mds.yandex.net/get-banana/37571/x25CS1S7_049Z4CzMu60v489P_banana_20161021_table_240.png/optimize';
    this.date = new Date();
    this.newsLink = 'ya.ru'; */
   }

  ngOnInit() {
  }

}
