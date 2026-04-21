import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { NgTemplateOutlet, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent<T> implements OnInit, OnDestroy {
  @Input() items: T[] = [];
  @Input() theme: 'dark' | 'light' = 'dark';
  @Input() autoplayInterval = 0;

  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<{ $implicit: T }>;
  @ViewChild('track') trackRef!: ElementRef<HTMLElement>;

  private platformId = inject(PLATFORM_ID);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId) || !this.autoplayInterval) return;
    this.timer = setInterval(() => this.next(), this.autoplayInterval);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  next() {
    const track = this.trackRef?.nativeElement;
    if (!track) return;
    const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
    if (atEnd) {
      track.scrollTo({ left: 0, behavior: 'instant' });
    } else {
      track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  }

  prev() {
    const track = this.trackRef?.nativeElement;
    if (!track) return;
    const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    if (track.scrollLeft <= 1) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'instant' });
    } else {
      track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  }
}
