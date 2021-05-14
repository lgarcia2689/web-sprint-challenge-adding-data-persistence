// build your server here and require it from index.js
const express = require('express');
const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

const server = express();

server.use(express.json());

server.use('/api/tasks', taskRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/project', projectRouter);

server.use('*',(req,res) => {
  res.json({api:'up'})
})
module.exports = server;