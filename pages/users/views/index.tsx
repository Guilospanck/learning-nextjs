import { NextPage } from "next";
import Link from 'next/link'
import { User } from "../useCases/getAllUsers";
import { IUserViewModel } from "../viewModels/usersViewModel";

type ViewProps = {
  viewModel: IUserViewModel
}

const UsersView: NextPage<ViewProps> = ({ viewModel }) => {
  return (
    <>
      <h1>Users</h1>
      {
        viewModel.users.map((user: User) => {
          return (
            <>
              <h3>{user.id}</h3>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
            </>
          )
        })
      }
      <h2>
        <Link href={'/'}>Go back to home</Link>
      </h2>
    </>
  )
}

export default UsersView