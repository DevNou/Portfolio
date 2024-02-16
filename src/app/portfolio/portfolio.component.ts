import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modules/Project';
import { ProjectsService } from '../_services/projects.service';
import { Tag } from '../_modules/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed: boolean = true;
  typescript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Arseni's-Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.typescript || this.angular || this.python || this.csharp || this.java || this.javascript)
    {
      this.filtering=true;
    }
    else
    {
      this.filtering=false;
    }
      this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.javascript = false;

  }
}

