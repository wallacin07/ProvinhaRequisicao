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
    <footer >
        <Pagination>
            <PaginationContent>

            <PaginationItem >
                <PaginationPrevious className="hover:bg-slate-200 hover:cursor-pointer delay-200" href="#" onClick={() => setPage(currentPage-1)} />
            </PaginationItem>


                <PaginationItem>
                    {currentPage === 1 ? 
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(1)} isActive>1</PaginationLink> 
                        :
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(1)} >1</PaginationLink> 
                    }
                    
                </PaginationItem>

                <PaginationItem>
                    {currentPage === 2 ? 
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(2)} isActive>2</PaginationLink> 
                        :
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(2)} >2</PaginationLink> 
                    }
                </PaginationItem>

                <PaginationItem>
                    {currentPage === 3 ? 
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(3)} isActive>3</PaginationLink> 
                        :
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(3)} >3</PaginationLink> 
                    }
                </PaginationItem>

                <PaginationItem>
                    {currentPage === 4 ? 
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(4)} isActive>4</PaginationLink> 
                        :
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(4)} >4</PaginationLink> 
                    }
                </PaginationItem>

                <PaginationItem>
                    {currentPage === 5 ? 
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(5)} isActive>5</PaginationLink> 
                        :
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(5)} >5</PaginationLink> 
                    }
                </PaginationItem>

                <PaginationItem>
                    {currentPage === 6 ? 
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(6)} isActive>6</PaginationLink> 
                        :
                        <PaginationLink  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href={"#"} onClick={() => setPage(6)} >6</PaginationLink> 
                    }
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext  className="hover:bg-slate-200 hover:cursor-pointer delay-200" href="#" onClick={() => setPage(currentPage+1)} />
                </PaginationItem>


            </PaginationContent>



        </Pagination>

    </footer>
  )
}