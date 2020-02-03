import taskSchema from '../../utils/validation/task.js';

function createTaskValidationMW (isCreateMode = true) {
  return async (req, res, next) => {
    try {

      req.body = await taskSchema.validateAsync( req.body, {
        context: {
          isCreateMode,
        }
      } );
      next();
    } catch (e) {
      next( e );
    }
  };
}


export const validateTaskOnCreate = createTaskValidationMW();
export const validateTaskOnUpdate = createTaskValidationMW( false );