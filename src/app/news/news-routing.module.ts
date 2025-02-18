import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  { path: 'actualites', component: NewsComponent },
  { path: 'actualites/:id', component: NewsDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
