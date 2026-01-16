import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium text-foreground">
          mrdjan.net
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button size="sm" className="font-medium">
            Contact
          </Button>
        </div>
      </nav>
    </header>
  )
}
