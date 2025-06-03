import { Router } from "express";
import task from "../controllers/TaskController.js";
const router = Router();

router.get("/", task.get);

router.post("/", task.post);

router.put("/", (req, res) => {
  res.json({ msg: "ok" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "ok" });
});

export default router;
