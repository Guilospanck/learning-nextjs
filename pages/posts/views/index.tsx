import { Fragment } from "react";
import { PostsData } from "../../../lib/posts/posts";

export interface Props {
  allPostsData: PostsData[]
  errorCode?: number | false
  stars?: number
}

const PostsView = ({ allPostsData }: Props) => {
  return (
    <>
      <h1>All Posts sorted:</h1>
      {
        allPostsData?.map((post: PostsData) => (
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