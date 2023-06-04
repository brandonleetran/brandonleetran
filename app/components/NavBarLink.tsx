'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLink = {
  path: string;
  name: string;
};

export interface NavBarLinkProps {
  navlink: NavLink;
}

const NavBarLink = ({ navlink }: NavBarLinkProps) => {
  console.log("The NavBarLink component was rendered in the client!")
  const pathName = usePathname()
  const isActiveLink = (path: string) => {
    return pathName === path;
  };
  return (
        <Link
          href={navlink.path}
          key={navlink.name}
          className={`${isActiveLink(navlink.path) ? "text-black bg-black/[.05]" : "text-stone-500"} lowercase font-bold hover:text-black bg-transparent inline-block py-2 px-4 no-underline rounded-md transition-bg duration-300`}
        >
          {navlink.name}
        </Link>
  );
};

export default NavBarLink;
