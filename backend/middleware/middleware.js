
const jwt = require('jsonwebtoken')
const JWT_SECRET = "aryan_pachandi"

function authforstudent (req, res,next) {
    const token = req.headers.authorization;
    if(!token){
        res.status(401).send({ msg: "No token provided" });

    }
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.studentID = decodedToken.id;
    next();
}

function authforadmin (req, res,next) {
const token = req.headers.authorization;
if(!token){
    res.status(401).send({ msg: "No token provided" });
}
try {

    const decodedToken = jwt.verify(token, JWT_SECRET);
    if(decodedToken.role !== 'admin'){
        res.status(401).send({ msg: "access denied token admin only" });
    }
    req.adminID = decodedToken.id;
}catch(err){
    res.status(401).send({ msg: "access denied token not found" });
}

next();
}
module.exports = {
    authforstudent,
    authforadmin,
}

