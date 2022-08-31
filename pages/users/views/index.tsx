import { NextPage } from "next";
import Head from "next/head"
import Link from 'next/link'
import { Fragment } from "react";
import { User } from "../useCases/getAllUsers";
import { IUserViewModel } from "../viewModels/usersViewModel";

import styles from './users.module.css'

type ViewProps = {
  viewModel: IUserViewModel
}

const UsersView: NextPage<ViewProps> = ({ viewModel }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      {
        viewModel.users.map((user: User) => {
          return (
            <Fragment key={user.id}>
              <h3>{user.id}</h3>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
            </Fragment>
          )
        })
      }
      <h2>
        <Link href={'/'}>Go back to home</Link>
      </h2>
    </div>
  )
}

export default UsersView