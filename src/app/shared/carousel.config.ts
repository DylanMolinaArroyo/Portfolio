export interface ResponsiveOption {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

export const DEFAULT_CAROUSEL_OPTIONS: ResponsiveOption[] = [
  { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
  { breakpoint: '991px', numVisible: 2, numScroll: 1 },
  { breakpoint: '767px', numVisible: 1, numScroll: 1 },
];
