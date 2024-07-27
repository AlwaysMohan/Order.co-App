const router = require('express').Router();
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

router.route('/register').post(async (req, res) => {
    const { username, password } = req.body;

    const newUser = new User({ username, password });

    try {
        await newUser.save();
        res.json('User registered!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.route('/login').post(async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json('Error: Invalid username or password');
        }

        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
