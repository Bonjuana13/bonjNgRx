import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { StorageFile } from 'src/app/articles/interfaces/storageFile';

@Injectable({
  providedIn: 'root',
})
export class StorageEntityService extends EntityCollectionServiceBase<StorageFile> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Storage', serviceElementsFactory);
  }

}
