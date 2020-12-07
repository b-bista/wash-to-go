const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Service, Business } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Service.findAll({})
    .then(posts => res.json(posts));
});


router.post('/:businessId/createService',
  (req, res) => {
    let { name, description, price } = req.body;
    let { businessId } = req.params;

    Business.findByPk(businessId)
    .then(business => {
      business.createService({name, description, price})
    })
    .then(service => {
      res.status(201).json(service);
    })
    .catch(err => {
      res.status(400).json(err);
    });


    
    // Service.create({ name, description, price }, {include: {model: Business}})
    //   .then(post => {
    //     res.status(201).json(post);
    //   })
    //   .catch(err => {
    //     res.status(400).json(err);
    //   });
  }
);


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});


router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.content = req.body.content;
        post.save()
          .then(post => {
            res.json(post);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  }
);


router.delete('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;