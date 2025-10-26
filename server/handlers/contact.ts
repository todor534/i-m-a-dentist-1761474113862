export async function handle(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }
    // Here you would integrate with email service or database.
    // For demo, just respond OK.
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }
}
