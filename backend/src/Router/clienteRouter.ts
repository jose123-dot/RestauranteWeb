import { Router } from "express";

const router = Router();

import clientectrl from "../Controller/ClienteController";

//agregar
router.post("/agregar", clientectrl.saveCliente);
router.put("/editar", clientectrl.editCliente);
router.delete("/eliminar", clientectrl.deleteCliente);

export default router;
