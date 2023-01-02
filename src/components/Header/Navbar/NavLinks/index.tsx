import Link from "next/link"
import { ReactNode } from "react"

export * from "./data"

type NavLinkProps = {
  title: string
  link: string
  icon: ReactNode
}

export const NavLink = ({ icon, link, title }: NavLinkProps) => (
  <li className="group">
    <Link href={link}>
      <div className="flex items-center">
        {icon}
        <span className="text-gray-900 font-medium group-hover:text-pink-500 duration-500 transition-all uppercase ">
          {title}
        </span>
      </div>
    </Link>
  </li>
)
