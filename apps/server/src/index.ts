import Fastify from "fastify";

const server = Fastify({
  logger: true,
});

server.get("/health", async () => {
  return {
    status: "ok",
  };
});

const start = async () => {
  try {
    await server.listen({
      port: 3000,
      host: "0.0.0.0",
    });

    console.log("CLIPZEN server running on http://localhost:3000");
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
