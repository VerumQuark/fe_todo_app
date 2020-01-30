import ApplicationError from './ApplicationErrors.js';

class NotFoundError extends ApplicationError {

  constructor (resource) {
    super( `${resource || 'Resource'} not found`, 404 );
  }

}

export default NotFoundError;