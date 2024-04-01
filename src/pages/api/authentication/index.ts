import { NextApiRequest, NextApiResponse } from 'next';
import signin from './signin';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;
  console.log("ola")
  if (method !== 'POST') {
    return response.status(404).json({ message: 'Caminho não encontrado!', code: 'authentication', error: 'route not found' });
  }
  return signin(request, response);
}
