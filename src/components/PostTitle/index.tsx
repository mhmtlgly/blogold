type PostTitleProps = {
  title: string
}

export const PostTitle = ({ title }: PostTitleProps) => {
  return (
    <>
      <h1 className="text-3xl font-medium">{title}</h1>
    </>
  )
}
