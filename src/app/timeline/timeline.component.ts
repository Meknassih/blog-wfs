import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {
  private allArticles: Array<Article>;
  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this.allArticles = this._articleService.getAll();
  }

}
