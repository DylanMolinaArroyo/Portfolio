import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface TechnologyItem {
  icon: string;
  name: string;
}

export interface Skill {
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  technologies: TechnologyItem[] = [];
  skills: Skill[] = [];

  ngOnInit() {
    this.technologies = [
      { icon: '../assets/icons/skills/postgresql.svg', name: 'PostgreSQL' },
      { icon: '../assets/icons/skills/github.svg', name: 'GitHub' },
      { icon: '../assets/icons/skills/mongodb.svg', name: 'MongoDB' },
      { icon: '../assets/icons/skills/supabase.svg', name: 'Supabase' },
      { icon: '../assets/icons/skills/go.svg', name: 'Go' },
      { icon: '../assets/icons/skills/typescript.svg', name: 'TypeScript' },
      { icon: '../assets/icons/skills/firebase.svg', name: 'Firebase' },
      { icon: '../assets/icons/skills/python.svg', name: 'Python' },
      { icon: '../assets/icons/skills/nodejs.svg', name: 'Node.js' },
      { icon: '../assets/icons/skills/java.svg', name: 'Java' },
      { icon: '../assets/icons/skills/angular.svg', name: 'Angular' },
      { icon: '../assets/icons/skills/react.svg', name: 'React' },
    ];

    this.skills = [
      { title: 'SKILLS.COLLABORATION.TITLE', description: 'SKILLS.COLLABORATION.DESC' },
      { title: 'SKILLS.PROBLEM_SOLVING.TITLE', description: 'SKILLS.PROBLEM_SOLVING.DESC' },
      { title: 'SKILLS.LEARNING.TITLE', description: 'SKILLS.LEARNING.DESC' },
      { title: 'SKILLS.TIME_MANAGEMENT.TITLE', description: 'SKILLS.TIME_MANAGEMENT.DESC' },
      { title: 'SKILLS.COMMUNICATION.TITLE', description: 'SKILLS.COMMUNICATION.DESC' },
      { title: 'SKILLS.CRITICAL_THINKING.TITLE', description: 'SKILLS.CRITICAL_THINKING.DESC' },
    ];
  }
}
