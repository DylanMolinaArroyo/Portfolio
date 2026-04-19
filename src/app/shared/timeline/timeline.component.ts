import { Component, Input } from '@angular/core';

export interface TimelineItem {
  title: string;
  subtitle: string;
  year: string;
  description: string[];
  tags?: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  @Input() items: TimelineItem[] = [];
  @Input() theme: 'dark' | 'light' = 'dark';
}
