import { Request, Response } from "express";

import { createMenu } from "../helper/createMenu";
import { Pet } from '../model/pet';


export const home = (req: Request, res: Response) => {
    let list = Pet.getAll()
    res.render('pages/page', {
        menu: createMenu('all'),
        banner: {
            titulo: 'Todos os animais',
            imagemFundo: 'allanimals.jpg'
        },
        list
    });
};

export const cao = (req: Request, res: Response) => {
    let list = Pet.getFromType('cao')
    res.render('pages/page', {
        menu: createMenu('cao'),
        banner: {
            titulo: 'Cachorros',
            imagemFundo: 'banner_dog.jpg'
        },
        list
    });
};

export const gato = (req: Request, res: Response) => {
    let list = Pet.getFromType('gato')
    res.render('pages/page', {
        menu: createMenu('gato'),
        banner: {
            titulo: 'Gatos',
            imagemFundo: 'banner_cat.jpg'
        },
        list
    });
};

export const peixe = (req: Request, res: Response) => {
    let list = Pet.getFromType('peixe')
    res.render('pages/page', {
        menu: createMenu('peixe'),
        banner: {
            titulo: 'Peixes',
            imagemFundo: 'banner_fish.jpg'
        },
        list
    });
};