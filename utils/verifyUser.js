const { errorHandler } = require("./error");
const jwt =  require("jsonwebtoken")

exports.verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;

    if (!token) return next(errorHandler(401, "Unauthorise"));
    
    jwt.verify(token, process.env.JWT_SECRET, (err, userid)=>{
        if(err) return next(errorHandler(401, 'Forbidden'));
        req.user = userid;
        next();
    })
}