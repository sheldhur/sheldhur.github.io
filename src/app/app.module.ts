import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {TitleComponent} from './title/title.component';
import {EmojiListComponent} from './emoji-list/emoji-list.component';
import {EmojiListService} from './emoji-list/emoji-list.service';
import {EmojiLayoutComponent} from './emoji-layout/emoji-layout.component';
import {MenuComponent} from './menu/menu.component';
import {ImgLoadingSpinnerDirective} from './directives/img-loading-spinner.directive';
import {ImgPreviewDirective} from './directives/img-preview.directive';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ItemsFilterPipe} from './items-filter/items-filter.pipe';
import { ItemsFilterComponent } from './items-filter/items-filter.component';

const routes = [
  {path: '', component: EmojiLayoutComponent, data: {title: 'Все', listType: null}},
  {path: 'favorite', component: EmojiLayoutComponent, data: {title: 'Любимые', listType: 'favorite'}},
  {path: 'deleted', component: EmojiLayoutComponent, data: {title: 'Удаленные', listType: 'deleted'}},
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    EmojiListComponent,
    EmojiLayoutComponent,
    ImgLoadingSpinnerDirective,
    ImgPreviewDirective,
    ItemsFilterPipe,
    ItemsFilterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [EmojiListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
