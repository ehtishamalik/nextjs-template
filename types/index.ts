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
