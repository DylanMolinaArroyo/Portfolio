import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { CarouselComponent } from '../../shared/carousel/carousel.component';

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string[];
}

@Component({
  selector: 'app-certifications',
  imports: [ScrollAnimateDirective, CarouselComponent],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications implements OnInit {
  items: CertificationItem[] = [];

  ngOnInit() {
    this.items = [];
  }
}
