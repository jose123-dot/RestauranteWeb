import express, { Request, Response } from "express";

//ejemplo
export class indexController {
  saludar(req: Request, res: Response) {
    res.send("BIENVENIDOS");
    console.log("BIENVENIDOS");
  }
}
