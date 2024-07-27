const router = require('express').Router();
const auth = require('../middleware/auth');
let Order = require('../models/order.model');

router.route('/').get(auth, (req, res) => {
    Order.find({ user: req.user.id })
        .populate('products.product')
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(auth, (req, res) => {
    const { products, totalPrice } = req.body;

    const newOrder = new Order({
        user: req.user.id,
        products,
        totalPrice,
    });

    newOrder.save()
        .then(() => res.json('Order placed!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
