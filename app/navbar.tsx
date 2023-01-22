import Link from "next/link";

export default function Navbar() {
    return (
        <nav role="navigation" className="bg-transparent w-full h-auto max-w-2xl m-auto">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/snippets">Snippets</Link>
        </nav>
    )
}