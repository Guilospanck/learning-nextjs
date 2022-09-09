import Head from "next/head"
import Date from "../../../components/date"
import { PostsData } from "../useCases/getPostsUsecase"
import test_styles from './test_index.module.css'

export interface TestProps {
  postData: PostsData
}

// React component to render the page
export default function TestPostView({ postData }: TestProps) {
  return (
    <>
      <Head><title>{postData?.title}</title></Head>
      <article className={test_styles.article}>
        <h1>{postData?.title}</h1>
        {postData?.date && <Date dateString={postData.date} />}
        <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml! }} />
      </article>
    </>
  )
}