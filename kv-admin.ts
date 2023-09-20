import generateFreshHandlers from './fresh.ts'

export default async function denoKvAdmin(req, prefix = '/kv') {
    const headers = {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Headers': '*'}

    const handler = {...generateFreshHandlers({
        prefix,
    }), 'OPTIONS': req => new Response()};

    if ( req.method === 'GET' && new URL(req.url).pathname === prefix && ! new URL(req.url).search.startsWith('?key=') ) {
        const resp = await fetch('https://storage.googleapis.com/rppico.appspot.com/index.html')
        return new Response(resp.body, {
            headers: {
            "content-type": "text/html",
            },
        });
    }
    const res = await handler[req.method](req)
    return new Response(res.body, {headers: {...Object.fromEntries(res.headers), ...headers}})
}