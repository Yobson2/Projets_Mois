const express = require('express');
const router = express.Router();
const session=require('express-session');

router.get('/', (req, res) => {
    res.send('add_users');
});


module.exports = router;
