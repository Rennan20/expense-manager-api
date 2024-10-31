import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Importando o middleware CORS
import itemRoutes from "./routes/itemRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import authRoutes from "./routes/authRouthe";


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Adicionando o middleware CORS
app.use(bodyParser.json());

// Rotas
app.use("/items", itemRoutes);
app.use("/categories", categoryRoutes);
app.use("/auth", authRoutes); // Adicione a rota de autenticação

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
