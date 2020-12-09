const router = require('express').Router();
const { User, Customer, Business } = require('../models');
const passport = require('../middlewares/authentication');

router.get('/getCustomer', (req,res) => {
  Customer.findOne({where: {userId: req.user.id}})
    .then(customer => res.json(customer));
});

router.post('/signup', (req, res) => {
  console.log("POST body: ", req.body);
  
  User.create({
    email: req.body.email,
    password: req.body.password,
    customer: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country
    }
  }, {
    include: [Customer]
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/signup-business', (req, res) => {
  console.log("POST body: ", req.body);
  
  User.create({
    email: req.body.email,
    password: req.body.password,
    business: {
      name: req.body.name,
      phone: req.body.phone,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country
    }
  }, {
    include: [Business]
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login', passport.authenticate('local'),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

router.get('/protected',
passport.isAuthenticated(),
(req, res) => {
  res.status(200).json({ message: 'Authenticated' });
});

module.exports = router;