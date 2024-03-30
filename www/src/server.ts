import Fastify from "fastify";
import { renderToStringAsync } from "solid-js/web";
import fastifyHelmet from "@fastify/helmet";

import Home from "./routes/Home";
import { html } from "./routes/Html";
import { route } from "./routes/constants";

const server = Fastify({ logger: true });
server.register(fastifyHelmet);

server.route({
  method: "GET",
  url: route.Home,
  handler: async (_, reply) => {
    try {
      const home = await renderToStringAsync(() => Home());
      reply.type("text/html").send(html({ app: home, }));
    } catch (e) {}
  },
});

// Run the server!
try {
  await server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
