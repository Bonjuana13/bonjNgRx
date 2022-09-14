/* General */
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { ArticleImageComponent } from './article-image/article-image.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    ArticleImageComponent
  ],
  exports: [
    ArticleComponent,
    ArticleImageComponent
  ],
  providers: [
  ],
})

export class ArticleModule {}
