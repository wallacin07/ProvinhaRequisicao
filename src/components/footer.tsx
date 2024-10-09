"use client"

import { Button } from "@/components/ui/button"
import {Pagination,PaginationContent,PaginationLink, PaginationItem, PaginationPrevious, PaginationNext} from "@/components/ui/pagination"

export default function Footer() {


  return (
    <footer>
        <Pagination>
            <PaginationContent>

            <PaginationItem >
                <PaginationPrevious className="hover:bg-slate-200 hover:cursor-pointer delay-200" href="#" />
            </PaginationItem>


                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200">1</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200">2</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200">3</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200">4</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200">5</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200">6</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href="#" />
                </PaginationItem>


            </PaginationContent>



        </Pagination>

    </footer>
  )
}