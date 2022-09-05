import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import GetPostsData from "../../lib/posts/posts"
import TestPostView, { TestProps } from "./views/test_index"

// React component to render the page
export default function Post({ postData }: TestProps) {
  return <TestPostView postData={postData} />
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