import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass'],
  animations: [
    trigger('toggleComments', [
      state('expanded', style({
        opacity: 1
      })),
      state('collapsed', style({
        display: 'none',
        top: '-200px',
        opacity: 0
      })),
      transition('expanded => collapsed', [
        animate('0.3s 0s ease-out')
      ]),
      transition('collapsed => expanded', [
        animate('0.3s 0s ease-out')
      ]),
    ]),
  ]
})
export class TimelineComponent implements OnInit {
  private allArticles: Array<Article>;
  private commentSectionCollapsed: Array<boolean>;

  constructor(
    private _articleService: ArticleService
  ) {
    this.allArticles = [];
    this.commentSectionCollapsed = [];
  }

  ngOnInit() {
    this.allArticles = this._articleService.getAll();
    this.allArticles.forEach(() => (this.commentSectionCollapsed.push(true)));
  }

  toggleCommentSection(index: number, action?: string) {
    switch (action) {
      case 'collapse':
        this.commentSectionCollapsed[index] = true;
        break;
      case 'expand':
        this.commentSectionCollapsed[index] = false;
        break;
      default:
        this.commentSectionCollapsed[index] = !this.commentSectionCollapsed;
    }
  }
}
