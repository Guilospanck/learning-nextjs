import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  id: string,
  name: string,
  createdAt: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id, name } = req.body  
  const createdAt = new Date().toLocaleString()
  const data: Data = {
    id, name, createdAt
  }

  console.log(`[server] Received: ${JSON.stringify(data)}`)

  res.status(200).json(data)
}