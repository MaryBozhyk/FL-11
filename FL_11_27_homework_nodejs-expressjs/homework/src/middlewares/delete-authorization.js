const authorization = (req, res, next) =>{
    let authorization = req.header('Authorization');
    if (authorization === 'X-Password qwerty'){
        return next()
    } else {
        res.status(401).send('Unauthorized')  
    }
};

module.exports = authorization;