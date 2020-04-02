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
  image: string;
  height: number /** 0 to 100% of viewport height */;
};

export type NavLinkProps = {
  name: string;
  key: string;
  active: boolean;
  scrollTo: number;
};
