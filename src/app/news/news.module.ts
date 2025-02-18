import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailsComponent } from './components/news-details/news-details.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
