import appErrors from '../../utils/applicationErrors'

/**
 * @param {EntityType} entity
 * @return {function({ActionType}): function(...[*]=)}
 */
export default (entities) => {

  return (action) => {

    return (req, res, next) => {
      try {
        next();
      } catch (e) {

      }
    };
  };
}