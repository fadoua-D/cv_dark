import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-portfolio',
  standalone: false,
  templateUrl: './card-portfolio.component.html',
  styleUrl: './card-portfolio.component.scss'
})
export class CardPortfolioComponent {

  @Input() projectInfo: any;  

}