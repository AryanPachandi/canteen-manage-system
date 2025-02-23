const express = require('express')
const jwt = require('jsonwebtoken')


function authforstudent (req, res,next) {
    const token = req.headers.authorization;
    if(!token){
        res.status(401).send({ msg: "No token provided" });
        return;
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
    if(decodedToken !== "admin"){
        res.status(401).send({ msg: "access denied token admin only" });
    }
    req.adminID = decodedToken.id;
}catch(err){
    res.status(401).send({ msg: "access denied token not found" });
}
}
