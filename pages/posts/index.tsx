import PostsView, { Props } from "./views"
import { GetStaticProps, NextPage } from "next"
import GetPostsData from "../../lib/posts/posts";
import Error from "next/error";

/** Pre-rendering */
// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = GetPostsData().sort()

//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export const getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.status
  const json = await res.json()

  const allPostsData = GetPostsData().sort()

  return {
    props: { errorCode, stars: json.stargazers_count as number, allPostsData },
  }
}

const Posts: NextPage<Props> = ({ allPostsData, errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  console.log(`Stars count: ${stars}`)

  return <PostsView allPostsData={allPostsData} />
}

export default Posts