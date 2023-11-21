const { Router } = require('express');



const router = Router();


router.get('/user/:uuid') // get information of a user contract

router.get('/contract/:uuid') // get data from a particular contract

router.post('/insert') // create a new contract

router.put('/update/:uuid') // update a contract

router.delete('/:uuid') // delete contract


module.exports = router;