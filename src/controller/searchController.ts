import { Request, Response } from "express";

import { createMenu } from '../helper/createMenu';
import { Pet } from '../model/pet';


export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = Pet.getFromName(query);

    if (!query) {
        res.redirect('/');
        return;
    };

    res.render('pages/page', {
        menu: createMenu(''),
        list,
        query
    });
}