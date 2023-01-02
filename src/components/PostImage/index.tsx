import Link from "next/link"

type PostImageProps = {
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

export const PostImage = (props: PostImageProps) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-10 flex-wrap">
        {props.post.fields.category
          .sort((a, b) => (a.fields.slug < b.fields.slug ? -1 : 0))
          .map((category) => (
            <Link
              key={category.fields.slug}
              href={`/blog/category/${category.fields.slug}`}
              className="text-xs flex items-center last-of-type:mr-0 relative
                transition-all duration-300 border py-4 px-4 rounded-2xl border-dashed
                hover:bg-gray-100 hover:scale-110
                 before:content-[''] before:absolute before:bg-white/20 before:inset-0 before:rounded-full
                "
            >
              <img
                src={category.fields.icon.fields.file.url}
                alt=""
                className="h-20 w-20 object-contain py-1 px-1 select-none grayscale-0"
              />
              <span>{category.fields.title}</span>
            </Link>
          ))}
      </div>
    </>
  )
}
