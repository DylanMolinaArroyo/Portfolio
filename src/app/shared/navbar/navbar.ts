import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

export interface NavItem {
  label: string;
  icon: string;
  section: string;
}

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  navItems: NavItem[] = [];
  menuOpen = false;
  hasShadow = false;
  currentLang = 'en';
  activeSection = 'home';

  private sectionObserver?: IntersectionObserver;

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit() {
    this.setupRouterScrollSpy();
    this.initLang();

    this.navItems = [
      { label: 'NAV.HOME', icon: 'assets/icons/ui/house.svg', section: 'home' },
      { label: 'NAV.ABOUT', icon: 'assets/icons/ui/user.svg', section: 'about' },
      { label: 'NAV.EDUCATION', icon: 'assets/icons/ui/graduation-cap.svg', section: 'education' },
      {
        label: 'NAV.CERTIFICATIONS',
        icon: 'assets/icons/ui/badge-check.svg',
        section: 'certifications',
      },
      { label: 'NAV.PROJECTS', icon: 'assets/icons/ui/palette.svg', section: 'projects' },
      { label: 'NAV.EXPERIENCE', icon: 'assets/icons/ui/briefcase.svg', section: 'experience' },
      { label: 'NAV.SKILLS', icon: 'assets/icons/ui/code.svg', section: 'skills' },
    ];

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupSectionObserver(), 200);
    }
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
  }

  private setupSectionObserver(): void {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
            history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      this.sectionObserver?.observe(section);
    });
  }

  toggleLang(): void {
    const next = this.currentLang === 'en' ? 'es' : 'en';
    this.currentLang = next;
    this.translate.use(next);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', next);
    }
  }

  private initLang(): void {
    let lang = 'en';
    if (isPlatformBrowser(this.platformId)) {
      lang = localStorage.getItem('lang') ?? (navigator.language.startsWith('es') ? 'es' : 'en');
    }
    this.currentLang = lang;
    this.translate.use(lang);
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
    const currentPath = this.router.url.split('#')[0];
    if (currentPath !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      history.replaceState(null, '', `#${sectionId}`);
      this.smoothScroll(sectionId);
    }
  }

  private smoothScroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  private setupRouterScrollSpy(): void {
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
