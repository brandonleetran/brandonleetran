"use client";
import React from "react";
import { useState, useEffect } from "react";

const STATUS_DATE: string = "2025-08-18:00:00:00" as const;
const MESSAGES: string[] = [
  "Thank you.",
  "Gracias.",
  "Merci.",
  "Danke.",
  "ありがとう。",
  "Cảm ơn.",
  "고마워요.",
  "Grazie.",
] as const;
const today: Date = new Date();
const daysFromStatus: number = Math.floor(
  (today.getTime() - new Date(STATUS_DATE).getTime()) / (1000 * 60 * 60 * 24)
);
const status: string = `${daysFromStatus} ${
  daysFromStatus > 1 ? "days" : "day"
} ago - First day of Georgia Tech!`;

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="mb-10">
        <figure className="flex items-center gap-4 mb-4">
          <a
            href="/"
            className="flex justify-center items-center p-[2px] w-[100px] h-[100px] hover:bg-[#1a1a1a] bg-gradient-to-r from-blue-400 via-indigo-600 to-gray-400 rounded-full"
          >
            <div className="bg-[#1a1a1a] w-full h-full p-[2px] rounded-full flex items-center justify-center">
              <img
                src="/brandonleetran-ai.jpeg"
                className="w-full h-full rounded-full"
                alt="Brandon Lee Tran"
              />
            </div>
          </a>
          <figcaption className="flex flex-col gap-1 text-white">
            <h1 className="text-sm">Brandon Lee Tran</h1>
            <span className="text-sm">
              Software Engineer @{" "}
              <a
                href="https://www.gallup.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gallup"
                className="hover:underline underline-offset-2 transition-all duration-300"
              >
                Gallup
              </a>
            </span>
          </figcaption>
        </figure>
        <div className="w-fit border border-neutral-500 py-2 px-4 rounded-md text-xs bg-neutral-800 font-mono font-light">
          {status}
        </div>
      </header>
      <section className="mb-10">
        <h2 className="font-mono font-light text-xs mb-4">About</h2>
        <p className="text-sm leading-6 mb-2">
          Hi, I'm Brandon — a frontend engineer at Gallup based in Omaha. I
          build user interfaces that are performant and accessible.
        </p>
        <p className="text-sm leading-6 mb-2">
          When I'm not coding, I enjoy lifting, traveling, and playing video
          games.
        </p>
        <p className="text-sm leading-6">
          CV and latest portfolio of work available upon request.
        </p>
      </section>
      <section className="mb-10 bg-zinc-800 p-4 rounded-lg">
        <h2 className="font-mono font-light text-xs mb-4">Featured Work</h2>
        <ul className="flex flex-col gap-4 text-sm text-white">
          <li className="flex items-center gap-4">
            <img
              alt="Gallup.com / Gallup News"
              src="/gallup-logo.png"
              className="rounded-md"
              width="48"
              height="48"
            ></img>
            <a
              href="https://www.gallup.com/"
              target="_blank"
              aria-label="Gallup"
              rel="noopener noreferrer"
            >
              <h3>Gallup.com / Gallup News</h3>
              <p className="text-xs text-white">
                Empowering leaders with advice and analytics.
              </p>
            </a>
          </li>
          <li className="flex items-center gap-4">
            <img
              alt="West Health - Gallup"
              src="/gallup-logo.png"
              className="rounded-md"
              width="48"
              height="48"
            ></img>
            <a
              href="https://www.westhealth.gallup.com/"
              target="_blank"
              aria-label="West Health - Gallup"
              rel="noopener noreferrer"
            >
              <h3>West Health - Gallup</h3>
              <p className="text-xs text-white">
                Taking the pulse of healthcare in America.
              </p>
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="font-mono font-light text-xs mb-4">Featured Photos</h2>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <div className="flex flex-col gap-10">
              <figure className="flex flex-col gap-2">
                <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-md">
                  <img
                    src="/featured-seattle.jpeg"
                    className="aspect-square p-[2px] rounded-md"
                  />
                </div>
                <time className="uppercase text-sm">2025</time>
                <figcaption className="text-xs">Seattle (120)</figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-10">
              <figure className="flex flex-col gap-2">
                <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-md">
                  <img
                    src="/featured-vietnam.jpeg"
                    className="aspect-square p-[2px] rounded-md"
                  />
                </div>
                <time className="uppercase text-sm">2024</time>
                <figcaption className="text-xs">Vietnam (560)</figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-">
              <figure className="flex flex-col gap-2">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-700 rounded-md">
                  <img
                    src="/featured-chicago.jpeg"
                    className="aspect-square p-[2px] rounded-md"
                  />
                </div>
                <time className="uppercase text-sm">2023</time>
                <figcaption className="text-xs">Chicago (121)</figcaption>
              </figure>
            </div>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="font-mono font-light text-xs mb-4">Featured Blogs</h2>
        <ul>
          <li className="flex flex-col">
            <article className="bg-neutral-800 p-4 rounded-lg flex items-center justify-between gap-1">
              <header>
                <p className="text-sm text-white">TBA</p>
                <time className="text-xs">2025-08-16</time>
              </header>
              <span className="text-xs font-mono font-light">1,234 views</span>
            </article>
          </li>
          <li className="flex flex-col">
            <article className="p-4 rounded-lg flex items-center justify-between gap-1">
              <header>
                <p className="text-sm text-white">TBA</p>
                <time className="text-xs">2025-08-16</time>
              </header>
              <span className="text-xs font-mono font-light">1,234 views</span>
            </article>
          </li>
          <li className="flex flex-col">
            <article className="bg-neutral-800 p-4 rounded-lg flex items-center justify-between gap-1">
              <header>
                <p className="text-sm text-white">TBA</p>
                <time className="text-xs">2025-08-16</time>
              </header>
              <span className="text-xs font-mono font-light">1,234 views</span>
            </article>
          </li>
          <li className="flex flex-col">
            <article className="p-4 rounded-lg flex items-center justify-between gap-1">
              <header>
                <p className="text-sm text-white">TBA</p>
                <time className="text-xs">2025-08-16</time>
              </header>
              <span className="text-xs font-mono font-light">1,234 views</span>
            </article>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="font-mono font-light text-xs mb-4">Last Played</h2>
        <figure className="flex items-center gap-4">
          <img
            src="/song-placeholder.jpg"
            className="w-16 h-16 rounded-md"
            alt="Song Placeholder"
          />
          <figcaption className="flex flex-col gap-1">
            <h3 className="text-sm">Take Care</h3>
            <p className="text-xs text-white">Drake</p>
          </figcaption>
        </figure>
      </section>
      <footer className="text-sm text-white flex justify-between w-full">
        <span>&copy; 2025 Brandon Lee Tran</span>
        <span key={MESSAGES[index]} className="italic font-bold inline-block">
          {MESSAGES[index]}
        </span>
      </footer>
    </>
  );
}
