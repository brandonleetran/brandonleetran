import NavBarLink from "./NavBarLink"

const Navigation = () => {
  return (
    <nav className="backdrop-blur-3xl bg-white/[.6] w-full z-10 top-0 sticky md:py-5 pt-3 pb-3" aria-label='Navigation'>
      <div className="w-full m-auto max-w-2xl container flex flex-wrap items-center justify-end md:justify-center">
        <div className="w-full flex-grow flex items-center bg-transparent text-white z-20" id="nav-content">
          <ul className="text-sm font-normal flex flex-1 items-center text-left pl-1 md:pl-0">
            <li>
              <NavBarLink path="/">
                Home
              </NavBarLink>
            </li>
            <li>
              <NavBarLink path="/portfolio">
                Portfolio
              </NavBarLink>
            </li>
            <li>
              <NavBarLink path="/blog">
                Blog
              </NavBarLink>
            </li>
            <li>
              <NavBarLink path="/drops">
                Drops
              </NavBarLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
