import Link from "next/link"
import { Icon } from "@iconify/react"

export const Logo = () => {
  return (
    <div className="z-10">
      <Link href="/">
        <div className="flex items-center">
          {/* <Icon
            icon="jam:newspaper-f"
            height={40}
            className="mr-1 text-gray-900"
          /> */}
          <div
            className="relative before:content-[''] before:bg-yellow-200 before:absolute before:w-full before:h-full 
            before:inset-1 before:scale-75 before:rounded-[2px_2px_2px_2px_/_8px_16px_24px_8px] before:-z-10 before:skew-y-3"
          >
            <Icon icon="ph:article-thin" height={40} />
          </div>
          <div
            className="font-black text-2xl p-1"
            // className="relative font-black text-2xl p-1 text-gray-900
            // before:content-[''] before:bg-yellow-200 before:absolute before:w-full before:h-full
            // before:inset-0 before:rounded-[2px_2px_2px_2px_/_8px_16px_24px_8px] before:-z-10 before:skew-y-3"
          >
            BLOG
          </div>
        </div>
      </Link>
      <p className="text-xs font-bold">Sharing knowledge</p>
    </div>
  )
}
