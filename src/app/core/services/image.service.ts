import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(
    private storageService: StorageService,
  ) { }

  loadImagesForArticles(entities: { id: string }[]) {
    return this.storageService.getImages(entities)
      .pipe(
        map(images => {
          return images;
        }),
      );
  }

}
