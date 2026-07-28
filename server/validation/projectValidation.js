import Joi from "joi";

export const projectSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required(),

  description: Joi.string()
    .trim()
    .required(),

  status: Joi.string()
    .valid("Active", "Pending", "Completed")
    .required(),

  progress: Joi.number()
    .min(0)
    .max(100)
    .optional(),

  dueDate: Joi.date()
    .required(),
});