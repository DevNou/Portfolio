import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
project: Project={
  id: 0,
  name: 'Sample Angular App',
  summary: 'Test Desrciption',
  description: '',
  projectLink: '',
  tags:  [Tag.ANGULAR,Tag.TYPESCRIPT],
  pictures: []
};
  
  constructor(private titleService:Title){
    this.titleService.setTitle("Arseni's-Portfolio");
  }
  
  ngOnInit(): void {
    
  }
  }
  
