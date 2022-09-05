import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { StorageFile } from 'src/app/articles/interfaces/storageFile';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends EntityCollectionServiceBase<StorageFile> {
  constructor(
    private http: HttpClient,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Storage', serviceElementsFactory);
  }

  getImages(entities: {
    id: string,
    previewImage?: string,
  }[]): Observable<Array<StorageFile>> {
    this.setLoading(true);

    const ids: Array<string> = [];
    entities.forEach(item => {
      if (item.previewImage)
        ids.push(item.previewImage);
    });

    let params = new HttpParams();
    ids.forEach((id: string) => {
      params = params.append('ids', id);
    });

    return this.http.get<Array<StorageFile>>(`${environment.apiUrl}storage/list`, {
      params,
    })
      .pipe(
        finalize(() => {
          this.setLoading(false);
        }),
        tap(images => {
          this.upsertManyInCache(images);
        }),
      );
  }
}
