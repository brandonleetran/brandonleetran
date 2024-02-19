import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Brandon Lee Tran',
  description:
    "Send a note!",
};

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl mb-5">Read Blogs</h1>
      <p>This is currently under development</p>
    </>
  )
}