import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../../news-model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: NewsModel[];

  constructor() {
  this.news = [
    {title: 'nbhbyhy', description: 'bhbhb', newsLink: 'gvgjnn', imageUrl: 'gvgv', date: new Date()},
    {title: 'fgfcvcgvnb', description: 'bhbngvhgvhgvhggvhb', newsLink: 'vhghgv', imageUrl: 'gvgv', date: new Date()},
    {title: 'c bbvbvvb', description: 'bhbhvchghgvhgvghb', newsLink: 'gvgjnn', imageUrl: 'gvgv', date: new Date()}
  ];
  }

  ngOnInit() {
  }

}
