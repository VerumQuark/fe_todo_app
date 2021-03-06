export const LOGIN_PATTERN = /^(?!.*?[ \\/\[\]:;|=,+*?<>]).{6,16}$/;
export const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;
export const NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;

/**
 *
 * @typedef {Symbol} ActionType
 */

/**
 * @readonly
 * @enum {ActionType}
 */
export const ACTION = {
  CREATE: Symbol( 'CREATE' ),
  READ: Symbol( 'READ' ),
  UPDATE: Symbol( 'UPDATE' ),
  DELETE: Symbol( 'DELETE' ),
};

/**
 *
 * @typedef {Symbol} EntityType
 */

/**
 * @readonly
 * @enum {EntityType}
 */
export const ENTITY = Object.freeze( {
  USER: Symbol( 'USER' ),
  TASK: Symbol( 'TASK' ),
} );

/**
 * @typedef {string} RoleType
 */

/**
 *
 *@enum {RoleType}
 */
export const ROLE = Object.freeze( {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
} );