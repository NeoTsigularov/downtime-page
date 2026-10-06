export default {
  async fetch(request, env) {
    const page = await env.ASSETS.fetch(
      new Request("https://assets.local/index.html")
    );

    const headers = new Headers(page.headers);

    headers.set("Content-Type", "text/html; charset=UTF-8");
    headers.set("Cache-Control", "no-store");
    headers.set("Retry-After", "3600");
    headers.set("X-Robots-Tag", "noindex");

    return new Response(page.body, {
      status: 503,
      headers
    });
  }
};
