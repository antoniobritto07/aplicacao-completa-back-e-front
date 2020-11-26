const { Segments, Joi } = require('celebrate');

let userValidator = new Object();

userValidator.create = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        createdAt: Joi.string().optional(),
    })
}

userValidator.index = {
    [Segments.PARAMS]: Joi.object().keys({
        name: Joi.string().required(),
    })
}

userValidator.delete = {
    [Segments.PARAMS]: Joi.object().keys({
        userId: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}

userValidator.update = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
        userId: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        createdAt: Joi.string().optional(),
    })
}

module.exports = userValidator;