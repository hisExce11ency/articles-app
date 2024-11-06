import { Component, OnInit } from '@angular/core';
import { Article, ArticleData } from '../data/data';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {

    const articleData = new ArticleData();
    this.articles = articleData.getData();

  }
  trackByFn(index: number, item: Article) {
    return item.title; // Replace with a unique identifier 
  }
}
