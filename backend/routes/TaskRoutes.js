import { Router } from "express";
import task from "../controllers/TaskController.js";
const router = Router();

router.get("/", task.Get);

router.get("/:id", task.GetById);

router.post("/", task.Post);

router.put("/:id", task.Put);

router.delete("/:id", task.Delete);

export default router;
