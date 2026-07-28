import Joi from "joi";

export const taskSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required(),

  description: Joi.string()
    .allow("")
    .optional(),

  status: Joi.string()
    .valid("Todo", "In Progress", "Done")
    .required(),

  priority: Joi.string()
    .valid("Low", "Medium", "High")
    .required(),

  dueDate: Joi.date()
    .required(),

  project: Joi.string()
    .required(),
});