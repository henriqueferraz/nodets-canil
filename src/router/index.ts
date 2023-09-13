import { Router, Request, Response } from "express";

import * as Pagecontroller from '../controller/pageController';
import * as Searchcontroller from '../controller/searchController';

const router = Router();

router.get('/', Pagecontroller.home);
router.get('/cao', Pagecontroller.cao);
router.get('/gato', Pagecontroller.gato);
router.get('/peixe', Pagecontroller.peixe);

router.get('/search', Searchcontroller.search);

export default router;