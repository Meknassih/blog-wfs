import { Injectable, Optional } from '@angular/core';
import { Article } from './article';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Array<Article>;

  constructor(@Optional() articles: Array<Article>) {
    // this.articles = articles ? articles : [];
    this.articles = [];
    this.articles[0] = new Article('Pop', 'This is bear',
    'Content of article number one.', undefined)
    .addComment(new Comment('Mark', 'I don\'t like this article.'))
    .addComment(new Comment('Zack', 'Nobody asked you Mark.'))
    .addComment(new Comment('Mark', 'Get a life bruh'));
    this.articles[1] = new Article('Lol', 'Love the new blog',
    'Content of article number two and some more content.', undefined);
    this.articles[2] = new Article('Top', 'Much development',
     'Content of article number three. Adding more stuff just to make it longer.', undefined);
    this.articles[3] = new Article('Dud', 'Now stop',
    'Last but not least of the best blog articles. Wow.', undefined)
    .addComment(new Comment('Linda', 'I won\'t stop. What you gonna do?'))
    .addComment(new Comment('Dud', 'Reported.'));
  }

  getAll(): Array<Article> { return this.articles; }
}
