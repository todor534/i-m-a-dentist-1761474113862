import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handle } from '../server/handlers/contact';

export default async function(req: VercelRequest, res: VercelResponse) {
  const body = req.body || (typeof req.rawBody === 'string' ? JSON.parse(req.rawBody) : undefined);
  const adaptedRequest = new Request('http://localhost/api/contact', {
    method: req.method,
    headers: req.headers as any,
    body: req.method === 'POST' ? JSON.stringify(body) : undefined,
  });
  const response = await handle(adaptedRequest);
  const text = await response.text();
  res.status(response.status).setHeader('Content-Type', 'application/json').send(text);
}
