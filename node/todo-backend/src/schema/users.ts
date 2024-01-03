import joi from "joi";

const addUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export { addUserSchema };
