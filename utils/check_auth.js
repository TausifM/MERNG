const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");
const { JWT_SECRET } = require("../config");
module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        return user;
      } catch (error) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
//context.req.headers.authorization is the authorization header from the request object.
//It is a string. The string is split into two parts,
//the first part is "Bearer" and the second part is the token.
//The token is then verified using the JWT_SECRET. If the token is valid,
//the user object is returned. If the token is invalid, an error is thrown.
//Bearer is a standard way of saying that the token is a JWT.
