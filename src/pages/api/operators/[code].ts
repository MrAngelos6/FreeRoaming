import { NextApiRequest, NextApiResponse } from 'next'
import Operator from '@/interfaces/operator'
import ResponseError from '@/interfaces/responseError'

const operatorsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Operator[] | ResponseError>
) => {
  const { query: { code } } = req;
  let data;
  try {
    data = await import(`../../../data/${code}`);
  } catch {}

  return data
    ? res.status(200).json(data.default)
    : res.status(404).json({ message: `Le Pays avec le code: ${code} n'existe pas.` });
}

export default operatorsHandler