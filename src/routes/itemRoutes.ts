import { Router } from "express";
import { Item } from "../models/Item";

const router = Router();
const itemModel = new Item();

// Criação de um novo item
router.post("/", async (req, res) => {
  const newItem = await itemModel.createItem(req.body);
  res.json(newItem);
});

// Obter todos os itens
router.get("/", async (req, res) => {
  const items = await itemModel.getItems();
  res.json(items);
});

// Obter um item pelo ID
router.get("/:id", async (req, res) => {
  const item = await itemModel.getItemById(Number(req.params.id));
  res.json(item);
});

// Atualizar um item
router.put("/:id", async (req, res) => {
  const updatedItem = await itemModel.updateItem(
    Number(req.params.id),
    req.body
  );
  res.json(updatedItem);
});

// Deletar um item
router.delete("/:id", async (req, res) => {
  const deletedItem = await itemModel.deleteItem(Number(req.params.id));
  res.json(deletedItem);
});

export default router;
