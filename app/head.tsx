import { NEXT_SEO_DEFAULT } from '../next-seo.config';
import { NextSeo } from 'next-seo';

export default async function Head() {
  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicon/apple-touch-icon.png" color="#5bbad5"/>
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </>
  );
}