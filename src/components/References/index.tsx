type ReferencesProps = {
  post: {
    fields: {
      references: []
    }
  }
}

export const References = (props: ReferencesProps) => {
  return (
    <>
      {props.post.fields.references !== undefined && (
        <>
          <h2 className="text-xl mt-28">References</h2>
          <div className="flex flex-col gap-4 mt-4">
            {props.post.fields.references?.map((reference) => {
              // const reference = ref.toLowerCase()
              return (
                <a
                  key={reference}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href={reference}
                  className="text-xs text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4"
                >
                  {reference}
                </a>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
