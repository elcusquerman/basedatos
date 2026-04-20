export const validateBodyMiddleware = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      console.log("dio error");
      return res.status(400).json({
        error: error.message,
      });
    }
    req.validatedBody = value;
    next();
  };
};
