import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './components/education/education.component';
import { EducationRoutingModule } from './education-routing.module';



@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  exports: [
    EducationComponent
  ]
})
export class EducationModule { }
