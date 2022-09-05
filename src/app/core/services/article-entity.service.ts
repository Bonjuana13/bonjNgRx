import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Article } from "src/app/articles/interfaces/article";

@Injectable()
export class ArticleEntityService extends EntityCollectionServiceBase<Article> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
      super('Article', serviceElementsFactory);
  }
}
