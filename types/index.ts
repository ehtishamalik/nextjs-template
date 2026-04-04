export interface Blog {
  thumbnail: string;
  heading: string;
  title: string;
  highlights: string[];
  paragraphsBefore: string[];
  paragraphsAfter: string[];
  blockquote: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface BlogSmall {
  day: string;
  month: string;
  year: string;
  author: string;
  country: string;
  title: string;
  link: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  link: string;
  bg: string;
}

export interface Portfolio {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

export interface Projects {
  title: string;
  description: string;
  link: string;
  image: string;
}
