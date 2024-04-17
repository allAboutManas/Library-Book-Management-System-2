import express from "express";
import { addBooks,deletebooks,updateBooks,findBooks } from "../controllers/libraryController.mjs";

const router = express.Router();
router.get('/api/books',findBooks);
router.post('/api/books/add',addBooks)
router.delete('/api/books/delete/:id',deletebooks)
router.put('/api/books/update/:id',updateBooks)

export default router;