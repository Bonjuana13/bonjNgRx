import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DefaultDataService, EntityCollectionServiceElementsFactory, HttpUrlGenerator } from '@ngrx/data';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticleObject } from 'src/app/articles/interfaces/articleObject';
import { Article } from 'src/app/articles/interfaces/article';
import { ImageService } from './image.service';
import { Observable } from 'rxjs';
import { StorageEntityService } from './storage-entity.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends DefaultDataService<Article> {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private storageService: StorageEntityService,
    private imageService: ImageService,
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Article', http, httpUrlGenerator);
  }

  override getAll(): Observable<Article[]> {
    return this.http.get<ArticleObject>(`${environment.apiUrl}articles/list`)
      .pipe(
        catchError((error) => {
          throw new Error(error);
        }),
        tap(({applicationsView}) => {
          this.imageService.loadImagesForArticles(applicationsView).subscribe();
        }),
        map(({applicationsView}) => applicationsView)
      );
  }

}
