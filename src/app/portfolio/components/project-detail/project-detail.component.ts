import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {

  projectId: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
   
    this.projectId = this.route.snapshot.paramMap.get('id');
  }

}
