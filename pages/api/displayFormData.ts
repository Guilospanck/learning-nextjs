import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  id: string,
  name: string,
  createdAt: string
}

// Remember that code that lies here in the API will be used for 
// SSR, therefore we can't have things like `localStorage` or other
// browser-related stuff.
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id, name } = req.body  
  const createdAt = new Date().toLocaleString()
  const data: Data = {
    id, name, createdAt
  }

  console.log(`[server] Received: ${JSON.stringify(data)}`)

  res.status(200).json(data)
}

export default handler