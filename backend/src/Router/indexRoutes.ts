import { Router } from "express";
const router = Router();

import { indexController } from "../Controller/indexController";
const indexCtrl: indexController = new indexController();

router.get("/", indexCtrl.saludar);

export default router;
