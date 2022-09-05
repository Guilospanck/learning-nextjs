import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import GetPostsData, { PostsData } from "../../lib/posts/posts"

interface Props {
  postData: PostsData
}

export default function Post({ postData }: Props) {
  return (
    <>
      <h1>{postData.id}</h1>
      <h1>{postData.title}</h1>
      <h1>{postData.date}</h1>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = GetPostsData().getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as IParams
  const postData = GetPostsData().getBydId(id)
  return {
    props: {
      postData,
    },
  }
}