const express = require('express');

const router = express.Router();

router.post('/add',(req,res) => {
    res.send('response from user add');
});

router.get('/getall', (req, res) => {
    res.send('response from user getall');
})

router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid');
})

router.get('/update', (req, res) => {
    res.send('response from update');
})



module.exports = router;