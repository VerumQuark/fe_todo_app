import Joi from '@hapi/joi';
import {}  from '../../constants';

export default Joi.object( {
                             isDone: Joi.boolean().label( 'isDone' ).when( '$isCreateMode', {
                               then: Joi.boolean().required(),
                             } ),
                             value: Joi.string().label( 'value' ).when( '$isCreateMode', {
                               then: Joi.string().required(),
                             } ),
                             deadline: Joi.date().label( 'deadline' ).when( '$isCreateMode', {
                               then: Joi.date().required(),
                             } ),

                           } ).min( 1 ).max( 3 );