import express       from 'express';
import userRouter    from './user.js';
import errorHandlers from '../middlewares/errorHandlers.js';

const router = express.Router();

router.use( '/user', userRouter );

router.use( errorHandlers );

export default router;