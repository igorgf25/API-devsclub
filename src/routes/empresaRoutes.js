import express from "express";
import * as service from "../service/empresaService.js";

const router = express.Router();

router.get("/getall", service.getAll);
router.post("/create", service.createEmpresa);
router.put("/update/:id", service.updateEmpresa);
router.delete("/delete/:id", service.deleteEmpresa);

export default router;
