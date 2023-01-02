import { GetStaticProps, GetStaticPathsContext } from "next"
import { createClient } from "contentful"
import Link from "next/link"

import { Layout } from "@/components"
import { PostFields } from "@/types"

export default function SingleCategory(props) {
  // console.log({ props })

  return (
    <Layout>
      <div className="flex">
        <h2>CATEGORY: {props.category.fields.title}</h2>
        <img
          src={props.category.fields.icon.fields.file.url}
          alt={props.category.fields.slug}
          className="h-8 w-8"
        />
      </div>
      <div>
        {props.posts.length ? (
          <>
            Number of posts in category{" "}
            <div className="bg-red-400 p-4 w-5 h-5 rounded-full inline-flex items-center justify-center">
              {props.posts.length}
            </div>
          </>
        ) : (
          "No posts in this category"
        )}
      </div>
      {props.posts.map((post) => (
        <div key={post.fields.title}>
          <Link href={`/blog/${post.fields.slug}`}>{post.fields?.title}</Link>
          <div>
            {post.fields.category.map((category) => (
              <Link
                key={category.fields.slug}
                href={`/blog/category/${category.fields.slug}`}
                className="flex items-center mr-2 last-of-type:mr-0"
              >
                <img
                  src={category.fields.icon.fields.file.url}
                  alt={category.fields.slug}
                  className="h-8 w-8"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  const response = await client.getEntries<PostFields>({
    content_type: "category",
  })

  const paths = response.items.map((item) => {
    return {
      params: {
        category: item?.fields?.slug,
      },
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryName = context?.params?.category
  const categoryData = await client.getEntries({
    content_type: "category",
    ["fields.slug"]: categoryName,
  })

  const posts = await client
    .getEntries<PostFields>({
      content_type: "blogPost",
    })
    .then((entries) =>
      entries.items.filter((item) =>
        item.fields.category.some(
          (category) => category.fields.slug === categoryName
        )
      )
    )

  return {
    props: {
      category: categoryData.items[0],
      posts,

      // posts: posts.items.filter((item) =>
      //   item.fields.category.some((cat) => cat.fields.slug === categoryName)
      // ),
    },
  }
}
