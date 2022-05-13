const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const User = require('../../models/user.model');

const signUpMethods = async ( req, res, next ) => {
  try {
    const { name,  email, password, phoneNumber } = req.body

    // Check if all fields are filled with joi
    const registrationSchema = joi.object().keys({
      name: joi.string().min(3).max(40).required(),
      email: joi.string().email().required(),
      password: joi.string().min(3).max(15).required(),
      phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    })

    const { error } = registrationSchema.validate({ name,  email, password, phoneNumber });

    // send error if anything is wrong
    if (error) {
      return res.status(400).send({ 
        'status': 'error',
        'message' : error.details[0].message
      })
    }

    // Check if user already exists
    const oldUser = await User.findOne({ email });

    if ( oldUser ) {
      return res.status(409).send({ 
        'status': 'error',
        'message' : "User Already Exist. Please Login" 
      });
    }

    // Hash password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      phoneNumber
    });

    // Create Jwt token after creating user
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    
    return res.status(201).send({ 
      'status': 'success',
      'message' : "User Created Successfully",
      'data' : user,
      'jwt' : token
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

const logInMethods = async ( req, res, next ) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are filled with joi
    const registrationSchema = joi.object().keys({
      email: joi.string().email().required(),
      password: joi.string().required(),
    })

    const { error } = registrationSchema.validate({ email, password });

    // send error if anything is wrong
    if (error) {
      res.status(400).send({ 
        'status': 'error',
        'message' : error.details[0].message 
      })
    }

    // Check if user exists
    const user = await User.findOne({ email });

    // If user exists then check if password is correct
    if (user && (await bcrypt.compare(password, user.password))) {
      // If password is correct then Create JWT token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      return res.status(200).send({ 
        'status': 'success',
        'message' : "User Logged in Successfully",
        'data' : user,
        'jwt' : token
      });

    } else {
      return res.status(401).send({ 
        'status': 'error',
        'message' : "Invalid Credentials" 
      });
    }

    
  } catch ( err ) {
    res.status(500).send({ 'message' : err });
  }
}

module.exports = { signUpMethods, logInMethods}