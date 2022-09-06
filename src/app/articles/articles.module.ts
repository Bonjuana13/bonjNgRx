/* General */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../core/services/article.service';
import { SharedModule } from '../_shared/shared.module';
import { ArticlesRoutingModule } from './articles.routing.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleEntityService } from '../core/services/article-entity.service';
import { StorageService } from '../core/services/storage.service';
import { ImageService } from '../core/services/image.service';
import { ArticleResolver } from '../core/resolvers/article.resolver';
import { StorageEntityService } from '../core/services/storage-entity.service';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent
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
