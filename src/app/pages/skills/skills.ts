import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

export interface TechnologyItem {
  icon: string;
  name: string;
}

interface Skill {
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CarouselModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  responsiveOptions: any[] | undefined;

  technologies: TechnologyItem[] = [];
  skills: Skill[] = [];

  ngOnInit() {
    this.technologies = [
      {
        icon: '../assets/icons/postgresql.svg',
        name: 'Postgresql',
      },
      {
        icon: '../assets/icons/github.svg',
        name: 'Github',
      },
      {
        icon: '../assets/icons/mongodb.svg',
        name: 'Mongodb',
      },
      {
        icon: '../assets/icons/supabase.svg',
        name: 'Supabase',
      },
      {
        icon: '../assets/icons/go.svg',
        name: 'Go',
      },
      {
        icon: '../assets/icons/typescript.svg',
        name: 'Typescript',
      },
      {
        icon: '../assets/icons/firebase.svg',
        name: 'Firebase',
      },
      {
        icon: '../assets/icons/python.svg',
        name: 'Python',
      },
      {
        icon: '../assets/icons/nodejs.svg',
        name: 'Nodejs',
      },
      {
        icon: '../assets/icons/java.svg',
        name: 'Java',
      },
      {
        icon: '../assets/icons/angular.svg',
        name: 'Angular',
      },
      {
        icon: '../assets/icons/react.svg',
        name: 'React',
      },
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

    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    ];
  }
}
