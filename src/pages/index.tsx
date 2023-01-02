import type { NextPage, GetStaticProps } from "next"
import { createClient } from "contentful"

import { Layout } from "@/components"
import Link from "next/link"

const Home: NextPage = (props) => {
  console.log(props)
  return (
    <Layout
      footerProps={
        <div className="grid md:grid-cols-4 gap-x-10">
          {props.categoryTags
            .sort((a, b) => (a.fields.slug > b.fields.slug ? 0 : -1))
            .map((categoryTag) => {
              const categoryHeading = categoryTag.fields.title
              const categorySlug = categoryTag.fields.slug
              const categories = props.categories.items.filter((category) =>
                category.fields?.tag?.some(
                  (c) => c.fields.slug === categorySlug
                )
              )
              return (
                <div key={categorySlug} className="mb-10">
                  <p className="text-lg text-gray-800 mb-2">
                    {categoryHeading}
                  </p>
                  {categories.map((category) => (
                    <p
                      key={category.fields.slug}
                      className="text-sm text-gray-600 mb-1"
                    >
                      <Link
                        href={`/blog/category/${category.fields.slug}`}
                        className="flex gap-2 items-center"
                      >
                        <img
                          src={category.fields.icon.fields.file.url}
                          alt=""
                          className="w-4 h-4 object-contain "
                        />
                        {category.fields.title}
                      </Link>
                    </p>
                  ))}
                </div>
              )
            })}
        </div>
      }
    >
      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-600 uppercase">
          since January 2019
        </h3>
        <h1
          className="text-7xl w-min mx-auto font-extrabold uppercase text-gray-900 mt-4 mb-6 relative p-8
          before:content-[''] before:bg-yellow-100 before:absolute before:w-full before:h-full before:inset-0 
          before:rounded-[200px_200px_200px_200px_/_8px_16px_240px_800px] before:-z-10 before:skew-y-3"
        >
          Knowledge acquisition
        </h1>
        <h2 className="text-2xl font-light text-gray-600">
          Everything i learned in the past 4 years
        </h2>
      </div>
      <br />
    </Layout>
  )
}

export default Home

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryTags = await client.getEntries({
    content_type: "categoryTag",
  })

  const categories = await client.getEntries({
    content_type: "category",
  })

  return {
    props: {
      categoryTags: categoryTags.items,
      categories,
    },
  }
}
