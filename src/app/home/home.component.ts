import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_modules/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
[x: string]: any;

featuredProject = {} as Project;
picture: any;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Arseni's-Home");

  }

  ngOnInit(): void {

    this.featuredProject = this.projectService.GetProjectById(0);
  }
}
