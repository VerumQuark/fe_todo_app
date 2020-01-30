import ApplicationError from './ApplicationErrors.js';

class MethodNotAllowedError extends ApplicationError {
  constructor (method = 'method', requestURI = 'Request-URI') {
    super( `The ${method || 'method'} not allowed for the resource identified by the ${requestURI}.` );
  }
}

export default MethodNotAllowedError;