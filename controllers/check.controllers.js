const { response } = require('express')
const {selectRut} = require("../models/query_check");


const checkRut = async (req, res = response) => {
    const resp = await selectRut(req.params);
    if (resp){
        return res.status(200).json({
            "exists":true
        })
    }
    return res.status(400).json({
        "exists":false
    })
}


module.exports = {
    checkRut
}