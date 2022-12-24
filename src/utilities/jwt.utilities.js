"use strict";
exports.__esModule = true;
exports.decode = exports.signJwt = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv = require("dotenv");
dotenv.config();
var privateKey = process.env.PRIVATE_KEY;
var publicKey = process.env.PUBLIC_KEY;
function signJwt(payload) {
    return jsonwebtoken_1["default"].sign(payload, privateKey, { algorithm: "RS256" });
}
exports.signJwt = signJwt;
function decode(token) {
    if (!token)
        return null;
    try {
        var decoded = jsonwebtoken_1["default"].verify(token, publicKey);
        return decoded;
    }
    catch (error) {
        console.error("error", error);
        return null;
    }
}
exports.decode = decode;
