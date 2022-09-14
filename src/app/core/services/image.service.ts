import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/articles/interfaces/article';
import { StorageEntityService } from './storage-entity.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(
    private storageService: StorageEntityService,
  ) { }

  loadImagesForArticles(entities: Article[]) {
    if (!entities) return of([]);
    if (entities.length === 0) return of([]);

    const ids: Array<string> = [];
    entities.forEach(item => {
      if (item.previewImage)
        ids.push(item.previewImage);
    });
    return this.storageService.getByKeys(ids);
  }

}
