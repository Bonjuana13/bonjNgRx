import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { finalize, Observable, tap } from 'rxjs';
import { StorageFile } from 'src/app/articles/interfaces/storageFile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageEntityService extends EntityCollectionServiceBase<StorageFile> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
  ) {
    super('Storage', serviceElementsFactory);
  }

  getByKeys(ids: Array<string>): Observable<Array<StorageFile>> {
    this.setLoading(true);
    let params = new HttpParams();
    ids.forEach((id: string) => {
      params = params.append('ids', id);
    });

    return this.http.get<Array<StorageFile>>(`${environment.apiUrl}storage/list`, { params })
      .pipe(
        finalize(() => {
          this.setLoading(false);
        }),
        tap(files => {
          this.upsertManyInCache(files);
        }),
      );
  }

}
