import PostsView, { Props } from "./views"
import { GetStaticProps, NextPage } from "next"
import GetPostsData from "../../lib/posts/posts";

/** Pre-rendering */
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = GetPostsData().sort()

  return {
    props: {
      allPostsData
    }
  }
}

const Posts: NextPage<Props> = ({ allPostsData }) => {
  return <PostsView allPostsData={allPostsData} />
}

export default Posts