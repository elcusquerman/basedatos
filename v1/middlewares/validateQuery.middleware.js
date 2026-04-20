export const validateQueryMiddleware = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query, { abortEarly: false });
    if (error) {
      console.log("dio error");
      return res.status(400).json({
        error: error.message,
      });
    }
    req.validatedQuery = value;
    next();
  };
};
