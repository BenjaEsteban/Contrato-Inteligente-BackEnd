const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { insertUser } = require("../models/query_users");
const {selectRut} = require("../models/query_check");



const registerUser = async (req, res = response) => {
    // Encrypting password

    const data = { rut:req.body.rut }
    const exists = await selectRut(data);
    if (exists){
        return res.status(400).json({
            "error":"rut already exists"
        })
    }

    const salt = bcryptjs.genSaltSync();
    const password = bcryptjs.hashSync(req.body.password, salt)

    // send to db new hashed password

    req.body.password = password;

    const resp = await insertUser(req.body, salt);
    if (resp){
        return res.status(200).json({
            "msg":resp
        });
    }
    return res.status(401).json({
        "msg":"error"
    })
}



module.exports = {
    registerUser
}

