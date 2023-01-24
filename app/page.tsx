// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="flex pb-10 bg-gradient-to-r from-rose-400 via-fuchsia-500 from-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
        <div className="pr-1 max-w-md">
          <h1 className="font-bold text-4xl text-gray-700">Brandon Lee Tran</h1>
          <p className="text-sm pt-3">Software Developer</p>
          <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
        </div>
        <div className="ml-auto">
          <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="Brandon Lee Tran" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">Projects</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">Blog</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">Contact Me</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
    </>
  );
}