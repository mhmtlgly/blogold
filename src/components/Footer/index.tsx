import { Icon } from "@iconify/react"
import { ReactNode } from "react"

export const Footer = ({ children }: { children?: ReactNode }) => {
  const date = new Date().getFullYear()
  return (
    <footer className="bg-gray-100 p-4 border-l mt-40">
      <div className="max-w-5xl mx-auto">
        {children}
        <div className="dark:text-white flex items-center mt-6">
          <Icon icon="ph:copyright-light" />
          &nbsp;
          <span className="text-xs">{date}</span>
        </div>
      </div>
    </footer>
  )
}
