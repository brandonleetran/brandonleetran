import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="backdrop-blur-3xl bg-white/[.6] w-full z-10 top-0 sticky md:py-5 pt-3 pb-3" >
      <div className="w-full m-auto max-w-2xl container flex flex-wrap items-center justify-end md:justify-center">
        <div className="w-full flex-grow flex items-center bg-transparent text-white z-20" id="nav-content">
          <ul className="text-sm font-normal flex flex-1 items-center text-left pl-1 md:pl-0">
            <li>
            <Link className="font-bold hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-all duration-300" href="/">
                me
              </Link>
            </li>
            <li>
            <Link className="font-bold hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-all duration-300" href="/snippets">
                portfolio
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-all duration-300" href="/snippets">
                blog
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-all duration-300" href="/snippets">
                drops
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navigation
