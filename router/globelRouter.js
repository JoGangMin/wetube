import express from 'express';
import routes from '../routes';
import { home, search } from '../controller/videoController';
import { postJoin, getJoin, getLogin, postLogin, logout } from '../controller/userController';


const globelRouter = express.Router();

globelRouter.get(routes.home,home);

globelRouter.get(routes.join, getJoin);
globelRouter.post(routes.join, postJoin);

globelRouter.get(routes.login, getLogin);
globelRouter.post(routes.login, postLogin);

globelRouter.get(routes.logout,logout);
globelRouter.get(routes.search,search);

export default globelRouter;