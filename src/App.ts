import * as GeolocationRepository from "./repository/GeolocationRepository"
import { config } from './config'
import { checkToken } from './auth/middleware'
import { login } from './auth/login'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

app.get('/', checkToken, async (req, res) => {
  return res.json(await GeolocationRepository.getAll())
})

app.post('/', checkToken, async (req, res) => {
  if(!req.body.data) {
    return res.status(400).json({
      message: "Missing 'data' parameter"
    })
  }
  const geo = await GeolocationRepository.getByRequest(req.body.data)
  if (geo) {
    return res.status(200).json(geo);
  }

  request(`http://api.ipstack.com/${req.body.data}?access_key=${config.apiKey}`, (err, response, body) => {
    if (err) { return res.status(503).json({}); }

    body = JSON.parse(body);
    GeolocationRepository.save({ request: req.body.data, ...body, location: undefined });
    return res.status(200).json(body);
  })
})

app.delete('/', checkToken, async (req, res) => {
  await GeolocationRepository.remove(req.body.data);

  return res.status(201).json({});
})

app.post('/login', login);
