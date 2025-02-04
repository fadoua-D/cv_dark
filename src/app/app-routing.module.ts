import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
