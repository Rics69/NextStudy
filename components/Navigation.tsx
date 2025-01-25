"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();
  const session = useSession();


  return (
    <>
      {
        navLinks.map((link) => {
          const isActive = pathName === link.href;

          return <Link href={link.href} key={link.label} className={isActive ? "active" : ""}>{link.label}</Link>;
        })
      }
      {session?.data && (
        <Link href="/profile">Profile</Link>
      )}
      {session?.data ? <Link href="#" onClick={() => signOut({callbackUrl: "/"})}>Sign out</Link> : <Link href="/api/auth/signin">Sign in</Link>}
    </>
  );
};

export default Navigation;