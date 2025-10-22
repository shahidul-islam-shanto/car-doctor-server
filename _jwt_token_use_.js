/**
 * token use korar jonno
 * 1. install jsonwebtoken
 * 2. const token = jwt.sign(user, "secret", {expiresIn:});
 * 3. token get client side
 * 1. terminal a giya node dite hobe
 * 2. require('crypto').randomBytes(64).toString('hex'), diya enter press korte hobe.
 * 3. Enter press korle akta token jenaret kore dibe aita .env file giya akta name diya bosai dite hobe.
 * 4. sei token ta index.js file ar, api ar moddhe bosai dite hobe.
 */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage --> ok type (XSS)
 * 3. cookies --> http only
 *   1. npm install cookie-parser
 *
 */

/**
 * 1.set cookies with http only for development secure: false
 * 2. cors
 *  app.use(
   cors({
     origin: ["http://localhost:5000/"],
     credentials: true,
   })
 );
 * 3. client site axios setting
     in axios set withCredentials: true 
 */
