import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { filter, first, Observable, tap } from "rxjs";
import { ArticleEntityService } from "../services/article-entity.service";

@Injectable()
export class ArticleResolver implements Resolve<boolean>{

    constructor(private articlesEntityService: ArticleEntityService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {
                return this.articlesEntityService.loaded$
                .pipe(
                    tap(loaded => {
                        if (!loaded) {
                            this.articlesEntityService.getAll()
                        }
                    }),
                    filter(loaded => !!loaded),
                    first()
                );
    }
}
