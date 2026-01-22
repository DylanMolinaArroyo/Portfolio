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
        icon: 'pi pi-prime',
        name: 'Angular',
      },
      {
        icon: 'pi pi-code',
        name: 'TypeScript',
      },
      {
        icon: 'pi pi-server',
        name: 'Node.js',
      },
      {
        icon: 'pi pi-cloud',
        name: 'AWS',
      },
      {
        icon: 'pi pi-box',
        name: 'Docker',
      },
      {
        icon: 'pi pi-database',
        name: 'PostgreSQL',
      },
      {
        icon: 'pi pi-github',
        name: 'GitHub',
      },
    ];

    this.skills = [
      {
        title: 'fsfsfsdfsdfsd',
        description: 'fhfhfhfhf',
      },
      {
        title: 'sfsfsfsfsf',
        description: 'fhfhfhfhfhfhfhfhf',
      },
      {
        title: 'sfsfsdfsd',
        description: 'ghfghghhgfhfghfhfhfhf',
      },
    ];

    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    ];
  }
}
