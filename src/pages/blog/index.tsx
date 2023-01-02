import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { createClient } from "contentful"
import ReactMarkdown from "react-markdown"
import { useRouter } from "next/router"

// import {  } from "@/types"
import { Layout, CategoryTag } from "@/components"
import { useEffect, useState } from "react"

const Blog: NextPage = (props) => {
  const router = useRouter()
  console.log(router)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // console.log({ searchQuery })
  }, [searchQuery])

  let filteredArray = props.data.items.filter(
    (post) =>
      searchQuery
        .split(" ")
        .filter((a) => a)
        .every((query) => post.fields.title.toLowerCase().includes(query))
    // .every((query) =>
    //   post.fields.title
    //     .toLowerCase()
    //     .split(" ")
    //     .some((t) => t.includes(query))
    // )
  )

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <div className="mb-20">
        <label htmlFor="search">
          Search...
          <input
            className="border rounded p-2"
            type="search"
            name="search"
            id="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </label>
      </div>
      <h2 className="mb-8 font-semibold text-xl">
        Number of total Blog Posts:{" "}
        <span className="bg-sky-800 rounded-full p-2 text-gray-50">
          {filteredArray.length}
        </span>
      </h2>
      {filteredArray.map((post) => (
        // {props.data.items.map((post) => (
        <div key={post.fields.slug} className="mb-8 underline">
          <Link
            href={`blog/${post.fields.slug}`}
            // className="bg-purple-500 px-5 py-2 mt-4 rounded text-white"
          >
            {post.fields.title}
          </Link>
        </div>

        // <div
        //   key={post.fields.slug}
        //   className={`p-2 shadow mb-10 last-of-type:mb-0`}
        // >
        //   <h2 className="text-[32px] font-bold">{post.fields.title}</h2>
        //   <p className="text-gray-500 font-light text-sm">
        //     {new Intl.DateTimeFormat("de-DE", {
        //       dateStyle: "long",
        //     }).format(new Date(post.sys.createdAt))}
        //   </p>
        //   <div className="flex items-center mt-4">
        //     {post.fields.category.map((category) => (
        //       <Link
        //         key={category.fields.slug}
        //         href={`/blog/category/${category?.fields?.slug}`}
        //         className="flex items-center mr-2 last-of-type:mr-0"
        //       >
        //         <img
        //           src={category.fields.icon.fields.file.url}
        //           alt=""
        //           className="h-8 w-8"
        //         />
        //       </Link>
        //     ))}
        //   </div>
        //   <div className="mt-8 mb-4">
        //     <Link
        //       href={`blog/${post.fields.slug}`}
        //       className="bg-purple-500 px-5 py-2 mt-4 rounded text-white"
        //     >
        //       read more
        //     </Link>
        //   </div>
        // </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const data = await client.getEntries({
    content_type: "blogPost",
    // skip: 0,
    // limit: 200,
    // order: "sys.updatedAt",
    order: "-sys.createdAt",
    // locale: context.locale,
  })

  return {
    props: { data },
  }
}

export default Blog
