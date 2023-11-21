const { Router } = require('express');
const { login, userData} = require("../controllers/auth.controller");
const { check } = require('express-validator');
const { validateValues } = require("../middleware/validate_values");

const router = Router();

router.post('/login', [
    check('username', 'Missing username').not().isEmpty(),
    check('username', 'Invalid length').isLength({min:6, max:9}),
    check('username', 'Invalid format').isNumeric(),
    check('password', 'Missing password').not().isEmpty(),
    validateValues
], login);

router.post('/:uuid', userData); // will require token auth

router.get('/contract/:uuid')  // consult by a specific contract
router.get('/contract/') // consult by all user contracts
router.post('/contract') //
module.exports = router;