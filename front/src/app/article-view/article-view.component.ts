import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.sass']
})
export class ArticleViewComponent implements OnInit {
  private article: Article;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe({
      next: (params) => {
        this.article = this._articleService.get(params.get('id'));
      },
      error: (e) => { console.error('Parameters observer threw an error.'); }
    });
  }

}
