import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    CoreModule
  ],
  exports: [
    PortfolioComponent,
    ProjectDetailComponent
  ]
})
export class PortfolioModule { }
