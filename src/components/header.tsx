"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ROUTES } from "@/constants/routes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: ROUTES.home },
    { name: "Fetch", href: ROUTES.fetch },
    { name: "Axios", href: ROUTES.axios },
    { name: "Server", href: ROUTES.server },
  ]

  return (
    <header className="w-full bg-background">
      <div className="container ml-5 px-1">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl flex font-bold">   
              <Code className="mt-2 mr-4"></Code>
              <p>Prova</p>
          </div>

         
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

         
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle className="sr-only">My API</SheetTitle>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]" aria-describedby={undefined}>
                <nav className="flex flex-col space-y-4 mt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}