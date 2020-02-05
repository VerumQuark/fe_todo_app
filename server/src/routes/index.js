import express                from 'express';
import AppErrors              from '../utils/applicationErrors';
import userRouter             from './user.js';
import taskRouter             from './task.js';
import checkUserAuthorization from '../middlewares/authorization/checkUserAuthorization.js';
import tasksRouter            from './tasks.js';

const router = express.Router();

router.use( checkUserAuthorization );

router.use( '/user', userRouter );
router.use( '/task', taskRouter );
router.use( '/tasks', tasksRouter );

router.use( '/*', function (req, res, next) {
  next( new AppErrors.NotFoundError() );
} );

export default router;