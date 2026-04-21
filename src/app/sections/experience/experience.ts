import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TimelineComponent, TimelineItem } from '../../shared/timeline/timeline.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  imports: [ScrollAnimateDirective, TimelineComponent, TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit, OnDestroy {
  timelineItems: TimelineItem[] = [];
  private sub?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.sub = this.translate.stream('EXPERIENCE.ITEMS').subscribe((items: any[]) => {
      if (!Array.isArray(items)) return;
      this.timelineItems = items.map((e) => ({
        title: e.ROLE,
        subtitle: e.COMPANY,
        year: e.YEAR,
        description: e.DESCRIPTION,
        tags: e.TAGS,
      }));
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
