import Joi                                 from '@hapi/joi';
import { LOGIN_PATTERN, PASSWORD_PATTERN } from '../../constants';

const nameSchema = Joi.string()
                      .pattern( /^[A-Z][a-z]{0,63}$/ );
const emailSchema = Joi.string().email();
const loginSchema = Joi.string()
                       .pattern( LOGIN_PATTERN )
                       .required();
const passwordSchema = Joi.string()
                          .pattern( PASSWORD_PATTERN )
                          .required();

export const createUserSchema = Joi.object( {
                                              firstName: nameSchema.required(),
                                              lastName: nameSchema.required(),
                                              email: emailSchema.required(),
                                              login: loginSchema.required(),
                                              password: passwordSchema
                                            }

export const updateUserSchema = Joi.object( {
                                              firstName: nameSchema.required(),
                                              lastName: nameSchema.required(),
                                              email: emailSchema.required(),
                                              login: loginSchema.required(),
                                              password: passwordSchema
                                            } ).min( 1 ).max( 5 );