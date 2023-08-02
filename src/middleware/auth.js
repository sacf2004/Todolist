const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
    const user = {
      id: 1,
      username: 'Chambita',
      email: 'sergiochamba69@gmail.com',
    };
    const token = jwt.sign(user, 'password');
    res.json({ token });
});
