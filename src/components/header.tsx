"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
      <div className="container ml-8 px-1">
        <div className="flex items-center justify-between h-1">
          <div className="flex-shrink-0 text-2xl flex font-bold">   
              <Code className="mt-14 mr-4"></Code>
              <p className="mt-12">Prova</p>
          </div>

         
          <nav className="hidden md:flex  space-x-4 mt-14">
            {menuItems.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-semibold transition-colors"
              >
                <Button>
                <Image src={"https://static.wikia.nocookie.net/heroism/images/d/d9/Flying_Nimbus.png/revision/latest?cb=20170525153738"} width={400} height={400} priority alt={""} className="w-8 h-5 mr-1"></Image>
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

         
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"  className="mt-12 mr-8">
                  <Menu className="h-6 w-6 " />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle className="sr-only">My API</SheetTitle>
              <SheetContent side="left" className="w-[180px] sm:w-[200px]" aria-describedby={undefined}>
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