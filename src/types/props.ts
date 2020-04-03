export type IconProps = {
  name: string;
  key: string;
  link: string;
};

export type SidebarProps = {
  width: string;
};

export type HeroProps = {
  pxWidth: number;
  imageName: string;
  height: number /** 0 to 100% of viewport height */;
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
