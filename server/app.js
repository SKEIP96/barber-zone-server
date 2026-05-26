export default async function (fastify) {
  // регистрация маршрутов
  fastify.get("/health", async () => ({ status: "ok" }));
}
