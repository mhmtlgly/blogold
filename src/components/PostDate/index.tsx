import { Icon } from "@iconify/react"

type PostDateProps = {
  post: {
    sys: {
      createdAt: string
    }
  }
}

export const PostDate = (props: PostDateProps) => {
  return (
    <>
      <div className="flex gap-1 text-xs font-medium text-gray-700 mb-3">
        <Icon
          icon="ic:outline-access-time"
          height={16}
          className="text-gray-700 mx-auto mb-1"
        />
        <span>
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
          }).format(new Date(props.post.sys.createdAt))}
        </span>
      </div>
    </>
  )
}
