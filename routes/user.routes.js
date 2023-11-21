const { Router } = require('express');
const {registerUser} = require("../controllers/users.controllers");



const router = Router();


router.get('/:uuid') // get information of a user contract

router.get('/contract/:uuid') // get data from a particular contract

router.post('/register', registerUser) // create a new contract

router.put('/:uuid') // update a contract

router.delete('/:uuid') // delete contract


module.exports = router;