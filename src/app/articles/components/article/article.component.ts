import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles$: Observable<Article[]> = this.articleService.entities$;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
  }

}
