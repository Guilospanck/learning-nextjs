import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Post = {
  title: string
  date: string
}

export type PostsData = Post & { id: string }

export interface IGetSortedPostsData {
  sort: () => PostsData[]
}

const GetSortedPostsData = (): IGetSortedPostsData => {

  const postsDirectory = path.join(process.cwd(), 'lib')

  const sort = () => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)

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

  return {
    sort
  }
}

export default GetSortedPostsData