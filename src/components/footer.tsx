import {Pagination,PaginationContent,PaginationLink, PaginationItem, PaginationPrevious, PaginationNext} from "@/components/ui/pagination"


interface PaginationVars {
    currentPage: number;       // Página atual
    totalPages: number;        // Total de páginas
    setPage: (page: number) => void;  // Função que lida com a troca de página
  }

export default function Footer({
    currentPage,
    totalPages,
    setPage

  }: PaginationVars) {
    
    if (currentPage >= totalPages) {
        currentPage = totalPages
    }
    else if(currentPage <= 1){
        currentPage = 1
    }

  return (
    <footer>
        <Pagination>
            <PaginationContent>

            <PaginationItem >
                <PaginationPrevious className="hover:bg-slate-200 hover:cursor-pointer delay-200" href="#" onClick={() => setPage(currentPage-1)} />
            </PaginationItem>


                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(1)}  >1</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(2)}>2</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(3)}>3</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(4)}>4</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(5)}>5</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(6)}>6</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href="#" onClick={() => setPage(currentPage+1)} />
                </PaginationItem>


            </PaginationContent>



        </Pagination>

    </footer>
  )
}