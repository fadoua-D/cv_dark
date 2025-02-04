import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';


const routes: Routes = [
  { path: 'education', component: EducationComponent },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
