import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component, OnInit } from '@angular/core';

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
  imports: [ScrollAnimateDirective, ],
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
      {
        title: 'Effective Collaboration',
        description:
          'I have worked seamlessly within multidisciplinary teams, fostering a positive environment and ensuring project goals were met through clear, constant communication.',
      },
      {
        title: 'Adaptive Problem Solving',
        description:
          'I successfully tackled complex technical challenges by breaking them down into manageable tasks and finding creative, efficient solutions under pressure.',
      },
      {
        title: 'Continuous Learning',
        description:
          'I have demonstrated a strong commitment to professional growth by quickly mastering new technologies and staying updated with the latest industry trends.',
      },
      {
        title: 'Time Management',
        description:
          'I consistently delivered high-quality results within tight deadlines by effectively prioritizing tasks and managing my workflow with precision.',
      },
      {
        title: 'Empathetic Communication',
        description:
          'I have translated technical jargon into clear, actionable insights for non-technical stakeholders, ensuring everyone stayed aligned on the project vision.',
      },
      {
        title: 'Critical Thinking',
        description:
          'I analyzed project requirements from multiple perspectives to identify potential risks early and implement proactive improvements to the development process.',
      },
    ];
  }
}
