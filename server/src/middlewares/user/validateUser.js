import {createUserSchema} from '../../utils/validation/user.js';

export default async function validateUser (req, res, next) {
  try {

    await req.method.toUpperCase() === 'POST'
    ? createUserSchema,
    : up;

    if (valid) {
      return next();
    }
    next( new Error() );
  } catch (e) {
    next( e );
  }

}