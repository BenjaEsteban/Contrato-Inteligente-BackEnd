const { Router } = require('express');
const {checkRut} = require("../controllers/check.controllers");


const router = Router();

router.get('/rut/:rut', checkRut) // check if a rut exists


module.exports = router;