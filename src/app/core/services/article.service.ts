import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { ArticleObject } from 'src/app/articles/interfaces/articleObject';
import { Article } from 'src/app/articles/interfaces/article';
import { ImageService } from './image.service';
import { Page } from 'src/app/articles/interfaces/page';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends EntityCollectionServiceBase<Article> {

  constructor(
    private http: HttpClient,
    private imageService: ImageService,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Articles', serviceElementsFactory);
  }

  getAllArticles() {
    this.setLoading(true);
    return this.http.get<ArticleObject>(`${environment.apiUrl}articles/list`)
      .pipe(
        catchError((error) => {
          throw new Error(error);
        }),
        finalize(() => {
          this.setLoading(false);
          this.setLoaded(true);
        }),
        tap(({applicationsView}) => {
          this.imageService.loadImagesForArticles(applicationsView).subscribe();
          this.addManyToCache(applicationsView);
        }),
        map(({ applicationsView, pageViewModel }) => {
          return {
            applicationsView: applicationsView,
            pageViewModel: pageViewModel,
          };
        }),
      );
  }

}
