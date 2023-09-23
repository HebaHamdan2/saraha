import joi from 'joi';
export const signupSchema={
    body:joi.object( {
        userName:joi.string().alphanum().required(),
        email:joi.string().email().required(),
        gender:joi.string().valid('Male','Female'),
         age:joi.number().integer().min(20).max(80).required(),
        password:joi.string().required(),
        cPassword:joi.valid(joi.ref('password')).required(),
        }),
//   query:joi.object({test:joi.boolean().required()})
}

export const signinSchema=joi.object({
email:joi.string().email().required().min(5).messages({
    'string.email':"plz enter a valid email",
    'string.empty':"email is required"
}),
password:joi.string().required().min(3).messages({
    'string.empty':"password is required"

})
})
