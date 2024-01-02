import joi from "joi";

const addTodoSchema = joi.object({
  title: joi.string().required()
});

const updateTodoSchema = joi
  .object({
    title: joi.string().optional(),
    isCompleted: joi.boolean().optional()
  })
  .or("title", "isCompleted");

const getTodoQuerySchema = joi.object({
  search: joi.string().optional(),
  status: joi.string().valid("completed", "remaining").optional()
});

export { addTodoSchema, updateTodoSchema, getTodoQuerySchema };
