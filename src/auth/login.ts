import { config } from '../config'

const jwt = require('jsonwebtoken')

export const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let mockedUsername = config.adminUsername;
  let mockedPassword = config.adminPassword;

  if (!username || !password) {
    return res.send(400).json({
      message: 'Authentication failed! Please check the request'
    });
  }

  if (username !== mockedUsername || password !== mockedPassword) {
    return res.send(403).json({
      message: 'Incorrect username or password'
    });
  }

  let token = jwt.sign({username: username},
    config.secret,
    { 
      expiresIn: '24h'
    }
  );
  return res.json({
    message: 'Authentication successful!',
    token: token
  });
}
