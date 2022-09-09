import UsersView from "../../lib/users/views"
import useUsersViewModel from "../../lib/users/viewModels/usersViewModel"
import GetAllUsersUsecase from "../../lib/users/useCases/getAllUsers"

const User = () => {
  const getAllUsersUsecase = GetAllUsersUsecase()
  const viewModel = useUsersViewModel({ getAllUsersUsecase })

  return <UsersView viewModel={viewModel} />
}

export default User