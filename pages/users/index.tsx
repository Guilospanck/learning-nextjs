import UsersView from "./views"
import useUsersViewModel from "./viewModels/usersViewModel"
import GetAllUsersUsecase from "./useCases/getAllUsers"

const User = () => {
  const getAllUsersUsecase = GetAllUsersUsecase()
  const viewModel = useUsersViewModel({ getAllUsersUsecase })
   
  return (
    <UsersView viewModel={viewModel} />
  )
}

export default User