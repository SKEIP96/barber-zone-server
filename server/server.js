import Fastify from "fastify";
import app from "./app.js"; // импортируем файл с маршрутами

const server = Fastify({ logger: true });

// Регистрируем все маршруты и модули из app.js
server.register(app);

// Запуск сервера
server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
