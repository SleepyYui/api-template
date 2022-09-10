var express = require('express'),
    router = express.Router();

router
    .get('/', (req, res) => {
        res.status(200).send({
            status: 'OK',
            message: 'Server is running',
        });
    })

    .post('/', (req, res) => {

        const { test } = req.body;
    
        if ( !test ) {
            res.status(418).send({
                status: 'ERROR',
                message: 'No test message provided',
            });
        }
    
        res.send({
            status: 'OK',
            message: 'Server is running',
            test: test
        });
    });

module.exports = router;