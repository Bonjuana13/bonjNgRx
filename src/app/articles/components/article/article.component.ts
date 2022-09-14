import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/article';
import { ArticleEntityService } from 'src/app/core/services/article-entity.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;

  constructor(
    private articleEntityService: ArticleEntityService,
  ) { }

  ngOnInit() {
    this.articles$ = this.articleEntityService.entities$;
  }

}
