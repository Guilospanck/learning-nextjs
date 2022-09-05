import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import GetPostsData, { PostsData } from "../../lib/posts/posts"

interface Props {
  postData: PostsData
}

// React component to render the page
export default function Post({ postData }: Props) {
  return (
    <>
      <h1>{postData.id}</h1>
      <h1>{postData.title}</h1>
      <h1>{postData.date}</h1>
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
export const getStaticProps: GetStaticProps = ({ params }) => {
  const { test } = params as IParams
  const postData = GetPostsData().getBydId(test)
  return {
    props: {
      postData,
    },
  }
}