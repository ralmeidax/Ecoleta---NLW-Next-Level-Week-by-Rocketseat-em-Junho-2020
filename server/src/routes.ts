import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItemsController();

//Rotas do Projeto - API Coleta
//a) index - Para listar vários itens
//b) show - Para listar um único item
//c) create - Para criar um ou mais itens
//d)update
//e)delete
routes.get('/items', itensController.index);

routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;