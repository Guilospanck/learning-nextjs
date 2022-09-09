import { PostsData } from "../useCases/getPostsUsecase"

type Props = {
  allPostsData?: PostsData[]
  errorCode?: number | false
  stars?: number
}

export interface IPostsViewModel {
  allPostsData: PostsData[]
  errorCode?: number | false
  stars?: number
  rating: (stars: number) => string
}

const usePostsViewModel = ({ allPostsData = [], errorCode = false, stars = 0 }: Props): IPostsViewModel => {

  const rating = (stars: number) => '★'.repeat(stars) + '☆'.repeat(5 - stars);

  return {
    allPostsData,
    errorCode,
    stars,
    rating
  }

}

export default usePostsViewModel