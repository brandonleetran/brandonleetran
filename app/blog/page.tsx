import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Brandon Lee Tran',
  description:
    "Send a note!",
};

export default function Page() {
  return (
    <>
      <h1 className="text-medium text-2xl mb-5">read my blogs</h1>
      <p>This is currently under development</p>
    </>
  )
}