import { Fragment } from "react";
import { PostsData } from "../../../lib/posts";

export interface Props {
  allPostsData: PostsData[]
}

const PostsView = ({ allPostsData }: Props) => {
  return (
    <>
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