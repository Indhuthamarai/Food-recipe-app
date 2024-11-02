const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
  username: String,
  password: String,
});

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred. Please try again.' });
    } else if (!user) {
      res.status(401).json({ error: 'Invalid username or password.' });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: 'An error occurred. Please try again.' });
        } else if (!result) {
          res.status(401).json({ error: 'Invalid username or password.' });
        } else {
          res.json({ message: 'Login successful!' });
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});