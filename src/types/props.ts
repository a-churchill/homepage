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
};

export type UpdatesProps = {
  mobile: boolean;
  contentFile: string;
};

export type UpdateProps = {
  title: string;
  subtitle: string;
  anchor: string;
  body: string;
  date: string;
};

export type HeroProps = {
  pxWidth: number;
  imageName: string;
  height: number /** 0 to 100% of viewport height */;
  horizontalWeight?: number /** 0 is all the way to left, 100 is all the way to right */;
  text: string;
  box?: boolean;
  refHeight?: number;
};

export type FooterProps = {
  standalone: boolean;
};

export type CardProps = {
  title: string;
  subtitle: string;
  description: string; // markdown
  active?: boolean;
  key?: string;
  mobile?: boolean;
  offset?: boolean;
  timeline?: boolean;
};

export type NavLinkProps = {
  name: string;
  key: string;
  active: boolean;
  scrollTo: number;
};

export type SectionHeaderProps = {
  contentFile: string;
  reverse: boolean;
  mobile: boolean;
};

export type CirclesProps = {
  size: number;
  fill: string;
  className: string;
};

export interface ImageProps {
  src: string;
  alt: string;
  overlaySrc?: string;
  className?: string;
  [propName: string]: any;
}
