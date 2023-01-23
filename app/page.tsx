// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className="pr-1 max-w-md">
          <h1 className="font-bold text-4xl text-gray-700">Brandon Lee Tran</h1>
          <p className="text-sm pt-3">Software Developer at Gallup Inc.</p>
          <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
        </div>
        <div>
          <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="Brandon Lee Tran" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">About Me</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">Blog</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">Code Snippets</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-gray-700 pt-10">Contact Me</h1>
        <p className="pt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta quisquam architecto quos molestias nisi est facilis ea a dolorem voluptates modi aut ipsa tempora, quidem praesentium mollitia perspiciatis cupiditate!</p>
      </div>
    </>
  );
}