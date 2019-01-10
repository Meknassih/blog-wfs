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
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla.
    Nullam gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus.
    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
    Donec dui urna, vehicula et sem eget, facilisis sodales sem.`, 'j9DNb', undefined)
      .addComment(new Comment('Mark', 'I don\'t like this article.'))
      .addComment(new Comment('Zack', 'Nobody asked you Mark.'))
      .addComment(new Comment('Mark', 'Get a life bruh'));
    this.articles[1] = new Article('Lol', 'Love the new blog',
      `Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla.
    Nullam gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus.`, '54Mds', undefined);
    this.articles[2] = new Article('Top', 'Much development',
      'Content of article number three. Adding more stuff just to make it longer.', undefined);
    this.articles[3] = new Article('Dud', 'Now what?',
      `Nullam gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus.
    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
    Donec dui urna, vehicula et sem eget, facilisis sodales sem.`, 'f9Hg0', undefined)
      .addComment(new Comment('Linda', 'I won\'t stop. What you gonna do?'))
      .addComment(new Comment('Dud', 'Reported.'));
  }

  getAll(): Array<Article> { return this.articles; }
  get(id: string): Article { return this.articles.find(a => (a.getId() === id)); }
}
