const jwt = require('jsonwebtoken')
const generateJWT = ( uuid = '') => {
    return new Promise( (resolve, reject) => {
        const payload = { uuid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '1h'
        }, (err, token ) => {
            if (err) {
                console.log(err);
                reject('Cant generate token');
            }else {
                resolve(token);
            }
        })
    })
}

module.exports = {
    generateJWT
}