import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Article } from '../../interfaces/article';
import { ArticleEntityService } from 'src/app/core/services/article-entity.service';
import { StorageEntityService } from 'src/app/core/services/storage-entity.service';
import { StorageFile } from '../../interfaces/storageFile';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;
  storage$: Observable<StorageFile[]> | undefined;

  constructor(
    private articleEntityService: ArticleEntityService,
    private storageEntityService: StorageEntityService,
  ) { }

  ngOnInit() {
    console.log('sdlkfjklsdf')
    this.articles$ = this.articleEntityService.entities$;
    this.storage$ = this.storageEntityService.entities$;

      // .pipe(
      //   switchMap(articles => {
      //     return this.
      //   })
      //   map(items => items.)
      // )
  }

}
