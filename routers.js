const express = require('express');
const math_utils = require('./services/math_utils');

const router = express.Router();

router.get('/sum', (req, res) => {
    let values = req.body.values;

    let result = math_utils.sum( ...values );

    res.status( 200 ).send({ result });
});

router.get('/avg', (req, res) => {
    let values = req.body.values;

    let result = math_utils.avg( ...values );

    res.status( 200 ).send({ result });
});

module.exports = router;
