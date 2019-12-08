import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import userRouter from './router/userRouter';
import videoRouter from './router/videoRouter';
import globelRouter from './router/globelRouter';
import routes from './routes';
import { localsMiddleweare } from './middleWears';

const app = express();

app.set('view engine', 'pug');
app.use('/uploads', express.static('uploads'))

app.use(helmet());
app.use(morgan('tiny'))
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(localsMiddleweare)

app.use(routes.home,globelRouter) // '/' ,objact Home
app.use(routes.users,userRouter)// '/users'
app.use(routes.videos,videoRouter)// '/videos'

export default app;