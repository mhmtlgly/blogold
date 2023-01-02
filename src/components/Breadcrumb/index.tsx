import Link from "next/link"

type BreadcrumbProps = {
  paths: string[]
}

export const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  return (
    <>
      <div className="mb-10 italic text-sm font-extralight">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1
          const route = paths.slice(0, index + 1).join("/")
          console.log({ isLast, route })

          return isLast ? (
            // <span className="font-normal">{path.split("-").join(" ")}</span>
            <span className="font-normal">{path}</span>
          ) : (
            <>
              <Link className="underline" href={`/${route}`}>
                {`${path}`}
              </Link>
              <span className="no-underline"> {">"} </span>
            </>
          )
        })}
      </div>
    </>
  )
}
