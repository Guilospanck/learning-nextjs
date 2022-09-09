import { useEffect, useState } from "react"
import { IGetAllUsersUsecase, User } from "../useCases/getAllUsers"

export interface IUserViewModel {
  users: User[]
}

type UsersProps = {
  getAllUsersUsecase: IGetAllUsersUsecase
}

const useUsersViewModel = (props: UsersProps): IUserViewModel => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await props.getAllUsersUsecase.getAll()
      setUsers(fetchedUsers)
    }
    getUsers()
  }, [props.getAllUsersUsecase])

  return {
    users
  }

}
export default useUsersViewModel