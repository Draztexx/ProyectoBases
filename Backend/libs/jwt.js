/*
const  promise  = require("bcrypt/promises");
const  resolve  =require ("path");


const jwt = require ("jsonwebtoken")

function createAccessToken(payload){
    return new Promise((resolve,reject)=>{
        jwt.sign(
            payload,
            "secret123",
            {expiresIn:"1d"},(err,token)=>{
            if(err) reject(err);
            resolve(token)
        });
    })
}
*/


Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccessToken = void 0;
const jsonwebtoken = require("jsonwebtoken");

function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, 'secret123', { expiresIn: '1d' }, (err, token) => {
            if (err)
                reject(err);
            resolve(token);
        });
    });
}
exports.createAccessToken = createAccessToken;