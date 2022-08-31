export type User = {
  id: string
  name: string
  email: string
}

export interface IGetAllUsersUsecase {
  getAll: () => Promise<User[]>
}

const GetAllUsersUsecase = () => {
  const getAll = async (): Promise<User[]> => {
    const test: User[] = [{
      id: 'Hi',
      name: 'Guilherme',
      email: 'guilherme@email.com'
    }]

    return test
  }

  return {
    getAll
  }
}

export default GetAllUsersUsecase