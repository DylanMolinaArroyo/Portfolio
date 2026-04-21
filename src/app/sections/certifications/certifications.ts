import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
export class Certifications implements OnInit, OnDestroy {
  items: CertificationItem[] = [];
  private sub?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.sub = this.translate.stream('CERTIFICATIONS.ITEMS').subscribe((items: any[]) => {
      if (!Array.isArray(items)) return;
      this.items = items.map((c) => ({
        title: c.TITLE,
        issuer: c.ISSUER,
        year: c.YEAR,
        description: c.DESCRIPTION,
      }));
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
