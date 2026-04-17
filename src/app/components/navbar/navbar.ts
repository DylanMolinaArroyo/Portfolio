import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface NavItem {
  label: string;
  icon: string;
  section: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  navItems: NavItem[] = [];
  menuOpen = false;
  hasShadow = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setupScrollSpy();

    this.navItems = [
      { label: 'Home', icon: 'assets/icons/ui/house.svg', section: 'home' },
      { label: 'About', icon: 'assets/icons/ui/user.svg', section: 'about' },
      { label: 'Education', icon: 'assets/icons/ui/graduation-cap.svg', section: 'education' },
      { label: 'Projects', icon: 'assets/icons/ui/palette.svg', section: 'projects' },
      { label: 'Experience', icon: 'assets/icons/ui/briefcase.svg', section: 'experience' },
      { label: 'Skills', icon: 'assets/icons/ui/code.svg', section: 'skills' },
    ];
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : 'auto';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      this.router
        .navigate([], { fragment: sectionId, queryParamsHandling: 'preserve' })
        .then(() => this.smoothScroll(sectionId));
    }
  }

  private smoothScroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  private setupScrollSpy(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const fragment = this.router.parseUrl(event.url).fragment;
        if (fragment) {
          setTimeout(() => this.smoothScroll(fragment), 100);
        }
      });
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: UIEvent): void {
    if (window.innerWidth > 767 && this.menuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.hasShadow = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.menuOpen && target.closest('.navbar') && !target.closest('.hamburger-btn')) {
      this.closeMenu();
    }
  }
}
