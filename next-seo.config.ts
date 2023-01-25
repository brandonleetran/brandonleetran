import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Brandon Lee Tran - Software Developer',
  description: 'Welcome, I am a Software Developer based in Omaha, NE with a passion for full-stack development. I enjoy learning new technologies and gaming on the side.',
  openGraph: {
    type: 'website',
    url: 'https://brandonleetran.vercel.app/',
    title: 'Brandon Lee Tran - Software Developer',
    description: 'Welcome, I am a Software Developer based in Omaha, NE with a passion for full-stack development. I enjoy learning new technologies and gaming on the side.',
    images: [
      {
        url: 'https://brandonleetran.com/brandon_tran.jpg',
        alt: 'Brandon Lee Tran',
        width: 150,
        height: 150,
      },
    ],
    siteName: 'Brandon Lee Tran - Software Developer',
  },
};