import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardPortfolioComponent } from './components/card-portfolio/card-portfolio.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardPortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    CardPortfolioComponent
  ]
})
export class CoreModule { }
