import { Router } from "express";
import usuario from "../controllers/TaskController.js";
const router = Router();

router.get("/", usuario.get);

router.post("/", (req, res) => {
  res.json({ msg: "ok" });
});

router.put("/", (req, res) => {
  res.json({ msg: "ok" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "ok" });
});

export default router;
