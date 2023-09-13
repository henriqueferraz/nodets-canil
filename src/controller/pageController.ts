import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {
    res.send('pagina principal');
};

export const cao = (req: Request, res: Response) => {
    res.send('pagina cao');
};

export const gato = (req: Request, res: Response) => {
    res.send('pagina gato');
};

export const peixe = (req: Request, res: Response) => {
    res.send('pagina peixe');
};