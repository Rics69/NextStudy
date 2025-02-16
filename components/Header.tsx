import Link from "next/link";
import Navigation from "@/components/Navigation";

const navItems = [
  {label: "Home", href: "/"},
  {label: "Blog", href: "/blog"},
  {label: "About", href: "/about"}
]

const Header = () => {
    return (
        <header className="container">
          <Navigation navLinks={navItems} />
        </header>
    )
}

export default Header;