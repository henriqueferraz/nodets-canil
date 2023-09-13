import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

import todasRotas from './router/index';


dotenv.config();

const server = express();

//Configuração Templat Engine - Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configurando a Pasta Publica
server.use(express.static(path.join(__dirname, '../public')));

//Configuração de Rotas
server.use(todasRotas);
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada - 404');
});


server.listen(process.env.PORT);