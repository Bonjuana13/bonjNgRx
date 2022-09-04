// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
// import { ArticleService } from '../services/article.service';
// import { Observable, of } from 'rxjs';

// import { Article } from 'src/app/articles/interfaces/article';

// @Injectable({ providedIn: 'root' })
// export class ArticleResolver implements Resolve<Article> {
//   constructor(
//     private articleService: ArticleService,
//     private router: Router,
//   ) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//   ): Observable<Article> | Promise<Article> | Article {
//     this.router.navigate(['/404']);
//     return of();
//   }
// }
