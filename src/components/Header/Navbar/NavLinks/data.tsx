import { Icon } from "@iconify/react"
import { ReactNode } from "react"

type navLinksDataType = {
  id: number
  title: string
  link: string
  icon: ReactNode
}

export const navLinkData: navLinksDataType[] = [
  {
    id: 1,
    title: "blog",
    link: "/blog",
    icon: (
      <Icon
        icon="bi:layout-text-window"
        height={24}
        className="mr-2 text-gray-900 group-hover:text-pink-600  transition-all duration-500"
      />
    ),
  },

  {
    id: 2,
    title: "categories",
    link: "/blog/categories",
    icon: (
      <Icon
        icon="bi:folder"
        height={24}
        className="mr-2 text-gray-900 group-hover:text-pink-600  transition-all duration-500"
      />
    ),
  },
]
