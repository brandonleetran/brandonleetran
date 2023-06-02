import type { NextSeoProps } from 'next-seo'

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Brandon Lee Tran',
  description: 'Front-end developer, blogger, dog dad.',
  openGraph: {
    type: 'website',
    url: 'https://brandonleetran.tech/',
    title: 'Brandon Lee Tran - Software Developer',
    description: 'Front-end developer, blogger, dog dad.',
    images: [
      {
        url: '/brandon_tran.jpg',
        alt: 'Brandon Lee Tran',
        width: 150,
        height: 150,
      },
    ],
    siteName: 'Brandon Lee Tran',
  },
}