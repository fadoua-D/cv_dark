import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    ProfileComponent,
    SkillsComponent
  ]
})
export class HomeModule { }
