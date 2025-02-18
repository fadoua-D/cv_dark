import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { News } from '../../../core/models/news.model';
import { Observable} from 'rxjs';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-news-details',
  standalone: false,
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit{

  newsDetails!: News;
  private newsId!: number;

  constructor (private newsService: NewsService, private route: ActivatedRoute){}

  ngOnInit(): void{
    //this.route.snapshot.paramMap.get('id');
    this.newsId = +this.route.snapshot.params['id'];
    this.newsService.getNewsById(this.newsId).subscribe(
      (data: News) => {
        this.newsDetails = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l\'actualité', error);
      }
    );
    
  }


}
