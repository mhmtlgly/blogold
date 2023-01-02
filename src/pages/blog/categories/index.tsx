import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { createClient } from "contentful"

// import {  } from "@/types"
import { Layout } from "@/components"

const Category: NextPage = (props) => {
  console.log({ props })
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h2 className="mb-10">
        Number of total Blog Categories:{" "}
        <span className="bg-sky-300 p-4 rounded-full font-bold">
          {props.data.total}
        </span>
      </h2>
      <div className="flex flex-wrap gap-4 gap-y-8">
        {props.data.items
          .sort((a, b) => (a.fields.slug > b.fields.slug ? 1 : -1))
          .map((category) => (
            <Link
              key={category.fields.slug}
              href={`/blog/category/${category.fields.slug}`}
              className="text-xs flex items-center mr-2 last-of-type:mr-0 border py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={category.fields.icon.fields.file.url}
                alt=""
                className="h-6 mr-2"
              />
              {category.fields.title}
            </Link>
          ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const data = await client.getEntries({
    content_type: "category",
  })

  return {
    props: { data },
  }
}

export default Category
