import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

type Post = {
  title: string
  date: string
  contentHtml?: string
}

export type PostsData = Post & { id: string }

export interface IGetPostsData {
  sort: () => PostsData[],
  getAllPostIds: () => {
    params: {
      test: string
    }
  }[],
  getBydId: (id: string) => Promise<{
    id: string
    contentHtml: string
  }>
}

const GetPostsData = (): IGetPostsData => {
  const postsDirectory = path.join(process.cwd(), 'lib/posts/files')
  const fileNames = fs.readdirSync(postsDirectory)

  const getBydId = async (id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    }
  }

  const sort = () => {
    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        ...matterResult.data as Post,
      }
    })

    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1
      } else {
        return 0
      }
    })
  }

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  const getAllPostIds = () => {
    return fileNames.map((fileName) => {
      return {
        params: {
          test: fileName.replace(/\.md$/, ''),
        },
      }
    })
  }

  return {
    sort,
    getAllPostIds,
    getBydId
  }
}

export default GetPostsData