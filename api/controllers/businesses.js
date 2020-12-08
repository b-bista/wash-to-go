const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { route } = require('./auth');
const { Business, Service } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 


//Find all user orders
router.get('/', (req,res) => {
  Business.findAll({include: [Service]})
    .then(businesses => res.json(businesses));
});

router.get('/:businessId/', (req,res) => {
  Business.findByPk(req.params.businessId, {include: [Service]})
    .then(businesses => res.json(businesses));
});


//handles creating an order
router.post('/:businessId/createOrder', passport.isAuthenticated(),
  (req, res) => {
    let { status, total, orderDate, comments, orderItems } = req.body;
    let user = req.user;
    let { businessId } = req.params;

    Order.create({
      status,
      total,
      orderDate,
      comments,
      orderItems
    },{include: [OrderItem]})
    .then(order => {
      Customer.findOne({where: {userId: user.id}})
      .then(customer => {
        console.log(customer);
        order.setCustomer(customer)
      })
      Business.findByPk(businessId)
      .then (business => {
        order.setBusiness(business);
      })
    })
    .then(res => {
      res.json(res);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  }
);


// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   Order.findByPk(id)
//     .then(order => {
//       if(!order) {
//         return res.sendStatus(404);
//       }

//       res.json(order);
//     });
// });


// router.put('/:id',
//   passport.isAuthenticated(),
//   (req, res) => {
//     const { id } = req.params;
//     Post.findByPk(id)
//       .then(post => {
//         if(!post) {
//           return res.sendStatus(404);
//         }

//         post.content = req.body.content;
//         post.save()
//           .then(post => {
//             res.json(post);
//           })
//           .catch(err => {
//             res.status(400).json(err);
//           });
//       });
//   }
// );


// router.delete('/:id',
//   passport.isAuthenticated(),
//   (req, res) => {
//     const { id } = req.params;
//     Post.findByPk(id)
//       .then(post => {
//         if(!post) {
//           return res.sendStatus(404);
//         }

//         post.destroy();
//         res.sendStatus(204);
//       });
//   }
// );


module.exports = router;