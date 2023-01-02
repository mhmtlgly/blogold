import { ReactNode } from "react"
import { Navbar, Footer, Container } from "@/components"

type LayoutProps = {
  children: ReactNode
  footerProps?: ReactNode
}

export const Layout = ({ children, footerProps }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-zinc-800 dark:text-white">
      <Navbar />
      <Container className="max-w-5xl justify-self-center flex-grow mx-auto p-4 w-full">
        <main>{children}</main>
      </Container>
      <Footer children={footerProps} />
    </div>
  )
}
