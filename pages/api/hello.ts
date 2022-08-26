// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: {
    name: string
  }
}

 const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json({data: { name: 'John Doe' }})
}

export default handler;
