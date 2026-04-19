import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TimelineComponent, TimelineItem } from '../../shared/timeline/timeline.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [ScrollAnimateDirective, TimelineComponent, TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit, OnDestroy {
  experiences: ExperienceItem[] = [];
  timelineItems: TimelineItem[] = [];
  private sub?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.sub = this.translate.stream('EXPERIENCE').subscribe(() => {
      this.experiences = [];
      this.timelineItems = this.experiences.map((e) => ({
        title: e.role,
        subtitle: e.company,
        year: e.year,
        description: e.description,
        tags: e.tags,
      }));
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
