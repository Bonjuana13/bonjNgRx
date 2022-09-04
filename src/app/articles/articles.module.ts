/* General */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { ArticlesRoutingModule } from './articles.routing.module';
import { ArticleComponent } from './components/article/article.component';

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
  ],
})

export class ArticlesModule { }
