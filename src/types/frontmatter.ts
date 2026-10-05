interface Frontmatter {
  date: string;
  title: string;
  slug?: string;
  category: string;
  template: string;
  description?: string;
  summary?: string;
  buttonLabel?: string;
  tags?: Array<string>;
  socialImage?: { publicURL: string };
}

export { type Frontmatter };
