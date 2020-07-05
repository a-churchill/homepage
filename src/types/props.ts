export type IconProps = {
  name: string;
  key: string;
  link: string;
};

export type SidebarProps = {
  width: string;
};

export type TimelineProps = {
  mobile: boolean;
  contentFile: string;
}

export type HeroProps = {
  pxWidth: number;
  imageName: string;
  height: number /** 0 to 100% of viewport height */;
  horizontalWeight?: number /** 0 is all the way to left, 100 is all the way to right */;
};

export type FooterProps = {
  standalone: boolean;
}

export type CardProps = {
  title: string;
  subtitle: string;
  description: string; // markdown
  active?: boolean;
  key?: string;
};

export type NavLinkProps = {
  name: string;
  key: string;
  active: boolean;
  scrollTo: number;
};

export interface ImageProps {
  src: string;
  alt: string;
  overlaySrc?: string;
  className?: string;
  [propName: string]: any;
}
