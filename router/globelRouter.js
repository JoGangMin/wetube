import express from 'express';
import routes from '../routes';
import { home, search } from '../controller/videoController';
import { join, login, logout } from '../controller/userController';


const globelRouter = express.Router();

globelRouter.get(routes.home,home);
globelRouter.get(routes.join,join);
globelRouter.get(routes.login,login);
globelRouter.get(routes.logout,logout);
globelRouter.get(routes.search,search);

export default globelRouter;