import express from "express";
import * as service from "../service/VagaService.js";

const router = express.Router();

router.get("/getall", service.getAll);
router.post("/create", service.createVaga);
router.put("/update/:id", service.updateVaga);
router.delete("/delete/:id", service.deleteVaga);

export default router;