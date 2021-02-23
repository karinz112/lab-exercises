const express = require('express');
const mongoose = require('mongoose');
const { use } = require('./routes/UserRoutes.js');
const userRouter = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://username:87867753@cluster0.nvzkv.mongodb.net/gbc-fall2020?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});