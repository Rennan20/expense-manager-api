import { Router } from "express";
import { Category } from "../models/Category";

const router = Router();
const categoryModel = new Category();

// Criação de uma nova categoria
router.post("/", async (req, res) => {
  const newCategory = await categoryModel.createCategory(req.body);
  res.json(newCategory);
});

// Obter todas as categorias
router.get("/", async (req, res) => {
  const categories = await categoryModel.getCategories();
  res.json(categories);
});

// Obter uma categoria pelo tag
router.get("/:tag", async (req, res) => {
  const category = await categoryModel.getCategoryByTag(req.params.tag);
  res.json(category);
});

// Atualizar uma categoria
router.put("/:tag", async (req, res) => {
  const updatedCategory = await categoryModel.updateCategory(
    req.params.tag,
    req.body
  );
  res.json(updatedCategory);
});

// Deletar uma categoria
router.delete("/:tag", async (req, res) => {
  const deletedCategory = await categoryModel.deleteCategory(req.params.tag);
  res.json(deletedCategory);
});

export default router;
