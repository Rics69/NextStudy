'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks } : Props) => {
  const pathName = usePathname();

  return <>
    {
      navLinks.map((link) => {
        const isActive = pathName === link.href;

        return <Link href={link.href} key={link.label} className={isActive ? "active" : ""}>{link.label}</Link>
      })
    }
  </>
}

export default Navigation;