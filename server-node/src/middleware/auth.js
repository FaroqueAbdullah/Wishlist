const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next ) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ "message": "user is unauthenticate" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY );
    res.user_id = decoded.user_id;
    res.user_email = decoded.email;
    
    if ( !decoded ) {
      return res.status(401).send({ "message": "user is unauthenticate login again" });
    }
  } catch (err) {
    return res.status(401).send({ "message": "user is unauthenticate login again" });
  }

  return next();
};

module.exports = verifyToken;