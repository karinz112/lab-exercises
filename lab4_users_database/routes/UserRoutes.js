const express = require('express');
const mongoose = require('mongoose');
// const userModel = require('../models/User');
const app = express();
const User = require('../models/User')

// http://localhost:3000/users
app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save((err) => {
            if(err) {
                res.send(err);
            }
            else {
                res.send(user);
            }
        })
    }
    catch (err) {
        res.status(500).send(err);
    }
});


// const user = new User();
// user.save((err) => {
//     assert.equal(err.errors['name'].message, // assert does not work
//     'Path ´name´ is required');

//     err = user.validateSync();
// })

module.exports = app