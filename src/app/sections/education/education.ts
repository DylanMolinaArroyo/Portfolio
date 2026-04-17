import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DEFAULT_CAROUSEL_OPTIONS, ResponsiveOption } from '../../shared/carousel.config';

export interface EducationItem {
  feat: string;
  institution: string;
  year: string;
  description: string[];
}

@Component({
  selector: 'app-education',
  imports: [ScrollAnimateDirective, CarouselModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit {
  items: EducationItem[] = [];
  responsiveOptions: ResponsiveOption[] = DEFAULT_CAROUSEL_OPTIONS;

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
  }
}
