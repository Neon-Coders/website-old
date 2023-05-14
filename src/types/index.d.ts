export type LinkItem = {
  title: string;
  description?: string;
  href: string;
};

export type MainLinkItem = LinkItem;

export type LinkConfig = {
  mainLink: MainLinkItem[];
};
