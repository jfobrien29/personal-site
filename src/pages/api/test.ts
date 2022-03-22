import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  res.setHeader('Cache-Control', ['s-maxage=5', 'stale-while-revalidate']);
  res.status(200).json({ viewers: Math.ceil(Math.random() * 1000) });
};

export default handler;
