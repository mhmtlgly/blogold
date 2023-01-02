import Link from "next/link"

type CategoryTagsProps = {
  post: {
    fields: {
      category: [
        {
          fields: {
            title: string
            slug: string
            icon: {
              fields: {
                file: {
                  url: string
                }
              }
            }
          }
        }
      ]
    }
  }
}

export const CategoryTags = (props: CategoryTagsProps) => {
  return (
    <>
      <div className="mt-4 border-t-2 pt-4 border-gray-100">
        {/* <div className="flex items-center">
            {props.post.fields.category.map((category) => (
              <Link
                key={category.fields.slug}
                href={`/blog/category/${category.fields.slug}`}
                className="flex items-center mr-2 last-of-type:mr-0"
              >
                <img
                  src={category.fields.icon.fields.file.url}
                  alt=""
                  className="h-8"
                />
              </Link>
            ))}
          </div> */}
        <div className="flex items-center gap-2">
          {props.post.fields.category
            .sort((a, b) => (a.fields.slug < b.fields.slug ? -1 : 0))
            .map((category) => (
              <Link
                key={category.fields.slug}
                href={`/blog/category/${category.fields.slug}`}
                className="text-xs flex items-center mr-2 last-of-type:mr-0 border py-2 px-4 rounded-full
                transition-all duration-300 hover:scale-105 whitespace-nowrap
                hover:bg-gray-100 group-hover:scale-100"
              >
                <img
                  src={category.fields.icon.fields.file.url}
                  alt=""
                  className="h-6 w-6 mr-2"
                />
                <span>{category.fields.title}</span>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}
