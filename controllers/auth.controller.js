const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { selectCredentials, selectUserData} = require("../models/query_users");
const {generateJWT} = require("../helpers/generate_jwt");
const {selectRut} = require("../models/query_check");


const login = async (req, res = response) => {
    try{
        // extract data from request
        const { username, password } = req.body;

        // getting credentials according username
        const credentials = await selectCredentials( username );

        // check if exists credentials on DB
        if (!credentials){
            return res.status(400).json({
                "msg":"unauthorized",
                "details": "no credentials for user"
            })
        }

        // check if encrypted password from db match with the text password
        const aux_pass = await bcryptjs.compare(password, credentials.password);
        if (!aux_pass) return res.status(401).json({
            "msg":"unauthorized",
            "details":"password doesn't match"
        });
        const { uuid_account, status } = credentials;
        if (status !== 'ACTIVE') return res.status(401).json({
            "msg":"unauthorized",
            "details":"Blocked account"
        });

        // generate session token
        const token = await generateJWT(uuid_account);
        return res.status(200).json({
            "msg":"authorized",
            token:token
        })
    }catch (e) {
        console.log(e)
        return false

    }
}
const userData = async (req, res = response) => {
    try {
        const { uuid } = req.params;
        const { url_image, names, lastname_1, lastname_2 } = await selectUserData( uuid );
        // generate session token

        return res.status(200).json({
            uuid:uuid,
            url_image:url_image,
            names:names,
            lastname_1:lastname_1,
            lastname_2:lastname_2
        })
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    login,
    userData
}