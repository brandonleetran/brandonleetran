// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex">
      <div>
        <h1 className="font-bold">Brandon Lee Tran</h1>
      </div>
      <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="Brandon Lee Tran" />
    </div>
  );
}