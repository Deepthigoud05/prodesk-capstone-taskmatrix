import { toolSchema } from "../validation/toolValidation.js";

const validateTool = (req, res, next) => {
  const { error } = toolSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};

export default validateTool;