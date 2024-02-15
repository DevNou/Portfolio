import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  constructor(private titleService:Title){
    this.titleService.setTitle("Arseni's-Portfolio");
  }
  
  ngOnInit(): void {
    
  }
  }
  
