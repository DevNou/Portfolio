import { Component,OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit{

  isWorkExperienceOpen : boolean = false;
  isEducationOpen : boolean = false;
  isCertificationOpen : boolean = false;
  isSkillsOpen : boolean = false;
  constructor(private titleService:Title,private renderer: Renderer2){
    this.titleService.setTitle("Arseni's-Resume");
  }
  
  ngOnInit(): void {
    
  }

  DownloadFile()
  {
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download','Resume.pdf');
    link.click();
    link.remove();
  }
  }
  