import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls:['./project-list.component.css']
})

export class ProjectListComponent implements OnInit, OnDestroy 
{
  pro!: Project[];
  subscription!: Subscription;

  
  constructor(private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) 
              {
              }

  
  ngOnInit() 
  {
    this.subscription = this.projectService.projectChanged
      .subscribe(
        (recipes: Project[]) => {
          this.pro = recipes;
        }
      );
    this.pro = this.projectService.getProjects();
  }


  ngOnDestroy() 
  {
    this.subscription.unsubscribe();
  }

 
  onNewProject() 
  {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

 
}
