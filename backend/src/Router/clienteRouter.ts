import express, { Router, Request, Response } from "express";

const router = Router();

import clientectrl from "../Controller/ClienteController";

//agregar
router.post("/agregar", clientectrl.saveCliente);

export default router;
