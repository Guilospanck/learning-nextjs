export type User = {
  id: string
  name: string
  email: string
}

export interface IGetAllUsersUsecase {
  getAll: () => User[]
}

const GetAllUsersUsecase = (): IGetAllUsersUsecase => {
  const getAll = (): User[] => {
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