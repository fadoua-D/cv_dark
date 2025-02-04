import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: '', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, 
{ path: '', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
{ path: '', loadChildren: () => import('./news/news.module').then(m => m.NewsModule)},
{ path: '', loadChildren: () => import('./education/education.module').then(m => m.EducationModule)},
{ path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
