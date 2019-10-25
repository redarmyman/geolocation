import { config } from '../config'
let jwt = require('jsonwebtoken');

export const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'] || '';
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (!token) {
   return res.status(401).json({
      message: 'Auth token is not supplied'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Token is not valid'
      });
    }
    
    req.decoded = decoded;
    next(); 
  });
};
