const jwt = require("jsonwebtoken")

exports.authenticateUser = (req, res, next) => {
    const token = req.headers['token'];
    if(token === null) return res.status(401);
    jwt.verify(token, 'Zenmonk', (err, user)=> {
        if(err) return res.status(498).json({message : 'No longer valid'});
        req.user = user;
        next();
    })
}
