import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { TranslatePipe } from '@ngx-translate/core';

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string[];
}

@Component({
  selector: 'app-certifications',
  imports: [ScrollAnimateDirective, CarouselComponent, TranslatePipe],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications implements OnInit {
  items: CertificationItem[] = [];

  ngOnInit() {
    this.items = [];
  }
}
