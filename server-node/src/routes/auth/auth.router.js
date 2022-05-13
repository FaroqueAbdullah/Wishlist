const express = require('express');

const auth = require('./auth.controller');

const authRouter = express.Router();

authRouter.post('/registration' , auth.signUpMethods);

authRouter.post('/login' , auth.logInMethods);

module.exports =  authRouter;