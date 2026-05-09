"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Nosotros" },
    { href: "/services", label: "Servicios" },
    { href: "/contact", label: "Contáctanos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line-soft bg-cream-soft/80 backdrop-blur-md supports-[backdrop-filter]:bg-cream-soft/70">
      <div className="sca-wrap flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logoSCA.png"
            alt="SCA Contadores"
            className="h-9 w-9 rounded-md object-contain"
          />
          <div className="leading-tight">
            <div className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
              SCA Contadores
            </div>
            <div className="mono mt-0.5 text-[10px] uppercase tracking-[0.08em] text-ink-3">
              Desde 1953
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] transition-colors hover:text-cobalt ${
                pathname === item.href ? "text-cobalt" : "text-ink-2"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-cobalt"
            style={{ height: 42, fontSize: 14, padding: "0 18px" }}
          >
            Agendar
            <ArrowRight className="arrow h-3 w-3" />
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink-2 transition hover:bg-ink hover:text-cream-soft md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream-soft">
            <div className="mt-8 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors hover:text-cobalt ${
                    pathname === item.href ? "text-cobalt" : "text-ink-2"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn btn-cobalt mt-2"
                style={{ height: 44, fontSize: 14 }}
              >
                Agendar
                <ArrowRight className="arrow h-3.5 w-3.5" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
