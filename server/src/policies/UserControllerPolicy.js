const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(8) .required() .regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
    });

    const {error, value} = schema.validate(req.body)
        if(error) {
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Entered password failed to meet the next requirements:
                        <br>
                        1. Password can contain only lower case letters, upper case letters and numbers
                        <br>
                        2. Password must contain more than 7 characters and less than 33 characters
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        }else{
            next()
        }
    }
}