/* General */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../core/services/article.service';
import { SharedModule } from '../_shared/shared.module';
import { ArticlesRoutingModule } from './articles.routing.module';
import { ArticleEntityService } from '../core/services/article-entity.service';
import { StorageService } from '../core/services/storage.service';
import { ImageService } from '../core/services/image.service';
import { ArticleResolver } from '../core/resolvers/article.resolver';
import { StorageEntityService } from '../core/services/storage-entity.service';
import { ArticleModule } from './components/article/article.module';

@NgModule({
  imports: [
    ArticleModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesRoutingModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    ArticleService,
    ArticleEntityService,
    StorageService,
    ImageService,
    ArticleResolver,
    StorageEntityService
  ],
})

export class ArticlesModule {}
