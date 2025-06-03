import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

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
