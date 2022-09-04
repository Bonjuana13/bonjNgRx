import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Image } from 'src/app/articles/interfaces/image';
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
