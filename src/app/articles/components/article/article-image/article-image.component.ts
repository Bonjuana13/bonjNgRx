import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from 'src/app/articles/interfaces/article';
import { StorageFile } from 'src/app/articles/interfaces/storageFile';
import { StorageEntityService } from 'src/app/core/services/storage-entity.service';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.css']
})
export class ArticleImageComponent implements OnInit {

  @Input() set article(value: Article) {
    if (!value) return;
    this.file$ = this.storageEntityService.entities$
    .pipe(
      map(files => files.find(file => file.id === value.previewImage)),
    )
  };

  file$?: Observable<StorageFile | undefined>;

  constructor(
    private storageEntityService: StorageEntityService
  ) { }

  ngOnInit() {
  }

}
