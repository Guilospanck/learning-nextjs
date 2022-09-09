import { Fragment } from "react"
import { PostsData } from "../useCases/getPostsUsecase"
import { IPostsViewModel } from "../viewModels/usePostsViewModel"
import Error from "next/error"

interface PostsViewProps {
  viewModel: IPostsViewModel
}

const PostsView = ({ viewModel }: PostsViewProps) => {
  return (
    viewModel?.errorCode ?
      <Error statusCode={viewModel.errorCode} />
      :
      <>
        <h1>All Posts sorted:</h1>
        {/* <h2>Stars: {viewModel.rating(viewModel.stars ?? 0)}</h2> */}
        {
          viewModel?.allPostsData && viewModel.allPostsData.map((post: PostsData) => (
            <Fragment key={post.id}>
              <h2>{post.id}</h2>
              <h2>{post.title}</h2>
              <h2>{post.date}</h2>
            </Fragment>
          ))
        }
      </>
  )
}

export default PostsView