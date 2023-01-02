import Link from "next/link"

type CategoryTagProps = {
  icon: string
  content: string
  link: string
}

export const CategoryTag = ({ icon, content, link }: CategoryTagProps) => (
  <div className="group">
    <Link
      data-content={content}
      href={link}
      className="text-xs flex items-center mr-2 last-of-type:mr-0 border py-2 px-2
         rounded-full relative transition-all w-auto
         group-hover:px-4 group-hover:after:right-0
         after:content-[attr(data-content)] after:-right-20 after:hidden
         after:ml-2 after:opacity-0 group-hover:after:opacity-100 group-hover:after:inline
         "
    >
      <img src={icon} alt="" className="h-6 w-6" />
    </Link>
  </div>
)
