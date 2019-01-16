import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemProductComponent,
    TopHeaderComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
