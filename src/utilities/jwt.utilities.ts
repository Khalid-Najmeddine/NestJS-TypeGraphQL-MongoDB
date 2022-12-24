import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

dotenv.config()

const privateKey = process.env.PRIVATE_KEY
const publicKey = process.env.PUBLIC_KEY

export function signJwt(payload) {
  return jwt.sign(payload, privateKey, {algorithm: "RS256"})
}

export function decode(token: string) {

  if (!token) return null;
  try {
    const decoded = jwt.verify(token, publicKey)
    return decoded
  } 
  catch (error) {
    console.error(`error`, error)
    return null
  }
  
}