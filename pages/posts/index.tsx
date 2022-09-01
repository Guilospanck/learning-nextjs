import PostsView, { Props } from "./views"
import { GetStaticProps, NextPage } from "next"
import GetSortedPostsData from "../../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = GetSortedPostsData().sort()

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