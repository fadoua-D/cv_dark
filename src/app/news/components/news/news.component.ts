import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { News } from '../../../core/models/news.model';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  public newsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data;
      console.log(this.newsList);
    });
     
  }

}
