import express                  from 'express';
import { validateUserOnCreate } from '../middlewares/user/validateUser.js';
import { createUser }           from '../controllers/user.js';
import userRouter               from './user.js';

const taskRouter = express.Router();

taskRouter.post( '/',
                 validateTaskOnCreate,
                 createUser);

export default taskRouter;