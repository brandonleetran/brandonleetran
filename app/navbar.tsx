import Link from 'next/link'

const Navigation = () => {
    return (
      <nav className="backdrop-blur-3xl bg-transparent w-full z-10 top-0 sticky">
        <div className="w-full m-auto max-w-2xl container flex flex-wrap items-center justify-center mt-0 py-2">
  
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-black hover:text-gray-900">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
  
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-transparent text-white p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex flex-1 items-center text-left">
              <li className="mr-3">
                <Link className="inline-block py-2 pr-4 text-black font-medium no-underline hover:bg-sky-700" href="/">
                  Home
                </Link>
              </li>
              <li className="mr-3">
              <Link className="link-item inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 hover:bg-sky-700" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="mr-3">
              <Link className="link-item inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 hover:bg-sky-700 " href="/snippets">
                  Code Snippets
                </Link>
              </li>
              <li className="mr-3">
                <Link className="link-item inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 hover:bg-sky-700" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  

export default Navigation
