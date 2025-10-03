import { Request, Response } from "express";

export const helloController = {
  hello: (_req: Request, res: Response) => {
    res.json({ message: "Hello, world !!!" });
  }
};
