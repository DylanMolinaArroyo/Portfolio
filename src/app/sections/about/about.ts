import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
