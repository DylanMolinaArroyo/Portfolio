import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

export interface EducationItem {
  feat: string;
  institution: string;
  year: string;
  description: string[];
}

@Component({
  selector: 'app-education',
  imports: [CarouselModule, CommonModule, ButtonModule, TagModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  items: EducationItem[] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.items = [
      {
        feat: 'Network technician',
        institution: 'C.T.P Santa Rosa de Pocosol',
        year: '2019 - 2022',
        description: [
          'Network infrastructure design and configuration',
          'TCP/IP protocols and network architecture principles',
          'LAN/WAN technologies and network topology design',
          'Router and switch configuration (Cisco)',
          'Network troubleshooting and diagnostic tools (Wireshark, ping, traceroute)',
          'Network security fundamentals and threat mitigation',
          'Network documentation and diagram creation',
        ],
      },

      {
        feat: 'Computer Engineering',
        institution: 'Tecnológico de Costa Rica',
        year: '2023 - Present',
        description: [
          'System architecture design',
          'Cloud computing solutions',
          'Backend development with microservices and API design',
          'Database design, optimization, and data management',
          'Algorithm development and computational problem-solving',
          'Cybersecurity principles and secure coding practices',
          'Technical documentation and system specifications',
          'Project management and cross-functional team collaboration',
          'Research and implementation of emerging technologies',
        ],
      },
    ];

    this.responsiveOptions = [
      { breakpoint: '1280px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
      { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    ];
  }
}
