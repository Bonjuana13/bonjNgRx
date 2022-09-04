import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
// import { ArticleResolver } from './../core/resolvers/article.resolver';


const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    // resolve: {
    //   articles: ArticleResolver
    // }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
