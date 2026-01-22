import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-about',
  imports: [SplitterModule, ImageModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
