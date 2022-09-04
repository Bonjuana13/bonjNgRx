import { Article } from "./article";
import { Page } from "./page";

export interface ArticleObject {
  applicationsView: Article[],
  pageViewModel: Page
}
