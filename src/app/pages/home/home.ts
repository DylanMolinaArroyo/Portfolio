import { Component } from '@angular/core';
import { Card, CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
