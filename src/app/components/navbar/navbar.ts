import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'About',
        icon: 'pi pi-user',
      },
      {
        label: 'Experience',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'My Projects',
        icon: 'pi pi-palette',
      },
      {
        label: 'Skills',
        icon: 'pi pi-code',
      },
      {
        label: 'Resume',
        icon: 'pi pi-file',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
