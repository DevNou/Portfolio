import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
constructor(private titleService:Title){
  this.titleService.setTitle("Arseni's-Home");
}

ngOnInit(): void {
  
}
}
