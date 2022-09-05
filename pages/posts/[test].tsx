import { GetStaticProps } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"
import Date from "../../components/date"
import GetPostsData, { PostsData } from "../../lib/posts/posts"

interface Props {
  postData: PostsData
}

// React component to render the page
export default function Post({ postData }: Props) {
  return (
    <>
      <Head><title>{postData.title}</title></Head>
      <h1>{postData.title}</h1>
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml! }} />
    </>
  )
}

// Returns an array with possible values for [test]
export const getStaticPaths = async () => {
  const paths = GetPostsData().getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  test: string
}

// Fetches necessary data for the [test]
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { test } = params as IParams
  const postData = await GetPostsData().getBydId(test)
  return {
    props: {
      postData,
    },
  }
}