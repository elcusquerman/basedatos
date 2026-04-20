import jwt from "jsonwebtoken";

export const authJWTMiddleware = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({message: "No autorizado"});
    }

    const token = auth.split(" ")[1];
    if (!token){
        return res.status(401).json({message: "No token"});
    }

    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err){
            return res.status(401).json({message: "Token inválido"});
        }
        console.log(decoded);
        req.user = decoded;
        next();
    });
}