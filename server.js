const express = require("express");
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
