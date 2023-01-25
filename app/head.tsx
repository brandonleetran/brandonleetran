import { NEXT_SEO_DEFAULT } from '../next-seo.config';
import { NextSeo } from 'next-seo';

export default async function Head() {
  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script async src="https://cdn.tailwindcss.com" />
    </>
  );
}