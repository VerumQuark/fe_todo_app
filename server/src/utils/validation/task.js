import Joi                    from '@hapi/joi';

const isDoneSchema = Joi.boolean();
const valueSchema = Joi.string()
                       .trim()
                       .min( 1 )
                       .max( 255 );
const deadlineSchema = Joi.date();

export default Joi.object( {
                             isDone: isDoneSchema.label( 'isDone' ).when( '$isCreateMode', {
                               then: isDoneSchema.required(),
                             } ),
                             value: valueSchema.label( 'value' ).when( '$isCreateMode', {
                               then: valueSchema.required(),
                             } ),
                             deadline: deadlineSchema.label( 'deadline' ).when( '$isCreateMode', {
                               then: deadlineSchema.required(),
                             } ),

                           } ).min( 1 ).max( 3 );

