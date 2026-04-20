import app from "./app.js";

// puerto 3000 es una convencion de puertos en node
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `http://localhost:${PORT} || Servidor iniciado: ${new Date().toLocaleTimeString()}`,
  );
});
