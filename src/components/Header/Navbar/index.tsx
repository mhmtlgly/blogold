import { Icon } from "@iconify/react"

import { Logo } from "@/components"
import { NavLink, navLinkData } from "./NavLinks"
import { useDarkMode } from "src/hooks"

export const Navbar = () => {
  const { handleDarkMode, isDarkmode } = useDarkMode()
  return (
    <nav>
      <ul className="flex justify-between items-center max-w-5xl mx-auto px-4 py-6 border-b border-gray-200 border-dashed">
        <Logo />
        <div className="flex items-center gap-10 mx-auto">
          {navLinkData.map((link) => (
            <NavLink
              key={link.id}
              icon={link.icon}
              title={link.title}
              link={link.link}
            />
          ))}
        </div>
        <div className="flex gap-10">
          <Icon icon="bi:search" height={24} />
          <Icon
            icon="carbon:brightness-contrast"
            height={24}
            onClick={handleDarkMode}
          />
        </div>
      </ul>
    </nav>
  )
}

// ;<button
//   className=" w-28 px-8 py-3 bg-sky-500 rounded-lg text-white font-semibold shadow-md shadow-cyan-500/30"
//   onClick={handleDarkMode}
// >
//   {isDarkmode ? "light" : "dark"}
// </button>
