import { NextApiRequest, NextApiResponse } from 'next'
import type Operator from '@/interfaces/operator';
import type ResponseError from '@/interfaces/responseError';

const operatorsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Operator[] | ResponseError>
) => {
  const { query: { code } } = req;

  let data = await import(`@/data/${code}`).catch(() => {
    return res.status(404).json({ message: `Le Pays avec le code: ${code} n'existe pas.` });
  });

  return res.status(200).json(data.default);
}

export default operatorsHandler