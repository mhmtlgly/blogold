import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  prism,
  duotoneEarth,
} from "react-syntax-highlighter/dist/cjs/styles/prism"

import { useDarkMode } from "src/hooks"

type ContentProps = {
  content: string
}

export const Content = ({ content }: ContentProps) => {
  const { isDarkmode } = useDarkMode()
  return (
    <>
      {/* <div> */}
      <div className="prose prose-pre:p-0 prose-pre:bg-transparent mt-14 dark:prose-invert prose-h2:text-xl prose-h2:font-normal">
        <ReactMarkdown
          children={content}
          components={{
            code({ node, inline, className, children, ...props }) {
              // console.log({ node, inline, className, children, props })
              const match = /language-(\w+)/.exec(className || "")
              // console.log({ match })
              return !inline && match ? (
                <>
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={isDarkmode ? duotoneEarth : prism}
                    language={match[1]}
                    // {...props}
                  />
                </>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
            // h6: (props) => {
            //   return (
            //     <h6
            //       className="text-red-600 font-black uppercase"
            //       {...props}
            //     ></h6>
            //   )
            // },
          }}
        />
      </div>
    </>
  )
}
