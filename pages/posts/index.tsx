import PostsView from "../../lib/posts/views"
import { NextPage } from "next"
import GetPostsData, { PostsData } from "../../lib/posts/useCases/getPostsUsecase"
import usePostsViewModel from "../../lib/posts/viewModels/usePostsViewModel"

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

type Props = {
  allPostsData: PostsData[]
  errorCode?: number | false
  stars?: number
}

const Posts: NextPage<Props> = ({ allPostsData, errorCode, stars }) => {
  const viewModel = usePostsViewModel({ allPostsData, errorCode, stars })

  return <PostsView viewModel={viewModel} />
}

export default Posts