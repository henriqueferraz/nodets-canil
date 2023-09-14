import { Request, Response } from "express";

import{ createMenu}from "../helper/createMenu"


export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenu('all'),
        banner:{
            titulo: 'Todos os animais',
            imagemFundo: 'allanimals.jpg'
        }
    });
};

export const cao = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenu('cao'),
        banner:{
            titulo: 'Cachorros',
            imagemFundo: 'banner_dog.jpg'
        }
    });
};

export const gato = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenu('gato'),
        banner:{
            titulo: 'Gatos',
            imagemFundo: 'banner_cat.jpg'
        }
    });
};

export const peixe = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenu('peixe'),
        banner:{
            titulo: 'Peixes',
            imagemFundo: 'banner_fish.jpg'
        }
    });
};