import { Injectable, Optional } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Array<Article>;

  constructor(@Optional() articles: Array<Article>) {
    // this.articles = articles ? articles : [];
    this.articles = [];
    this.articles[0] = new Article('Pop', 'This is bear',
    'Content of article number one.', undefined);
    this.articles[1] = new Article('Lol', 'Love the new blog',
    'Content of article number two and some more content.', undefined);
    this.articles[2] = new Article('Top', 'Much development',
     'Content of article number three. Adding more stuff just to make it longer.', undefined);
    this.articles[3] = new Article('Dud', 'Now stop',
    'Last but not least of the best blog articles. Wow.', undefined);
  }

  getAll(): Array<Article> { return this.articles; }
}
