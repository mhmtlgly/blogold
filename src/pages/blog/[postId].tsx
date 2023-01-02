import { GetStaticProps, GetStaticPathsContext } from "next"
import { createClient } from "contentful"
import { useRouter } from "next/router"

import {
  Layout,
  Breadcrumb,
  CategoryTags,
  PostImage,
  PostDate,
  References,
  Content,
  PostTitle,
} from "@/components"
import { PostFields } from "@/types"

export default function SingleBlogPost(props) {
  const router = useRouter()
  const paths = router.asPath.split("/").filter((p) => p)

  return (
    <Layout>
      <article className="flex flex-col items-center text-center mt-10">
        <PostImage post={props.post} />
        <Breadcrumb paths={paths} />
        <PostDate post={props.post} />
        <PostTitle title={props.post.fields.title} />
        <CategoryTags post={props.post} />
        <Content post={props.post} />
        <References post={props.post} />
      </article>
    </Layout>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

/////////////////////////////////////////////////////////////////

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  console.log({ context })
  const response = await client.getEntries<PostFields>({
    content_type: "blogPost",
    // locale: "de-DE",
  })

  const paths = response.items.map((item) => {
    return {
      params: {
        postId: item?.fields?.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
    // fallback: true,
    // fallback: "blocking",
  }
}

/////////////////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps = async (context) => {
  console.log({ context })
  const data = await client.getEntries({
    content_type: "blogPost",
    ["fields.slug"]: context?.params?.postId,
    locale: context.locale,
  })

  return {
    props: {
      post: data.items[0],
    },
    // revalidate: 60,
  }
}
