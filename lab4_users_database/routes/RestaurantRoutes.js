const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//task 4
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
  //Select Specific Column
  const restaurants = await restaurantModel.find({})
    .select()
  
  try {
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

//task 5
//http://localhost:3000/restaurants/cuisine/Japanese
//http://localhost:3000/restaurants/cuisine/Bakery
//http://localhost:3000/restaurants/cuisine/Italian
app.get('/restaurant', async (req, res) => {
  //Select Specific Column
  const restaurants = await restaurantModel.find({})
    .select()
    .sort({'cuisine' : 1});  
  
  try {
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

//task 6
//http://localhost:3000/restaurants?sortBy=ASC
//http://localhost:3000/restaurants?sortBy=DESC
app.post('/restaurant', async (req, res) => {
  const order = req.params.byorder

  const restaurant = await restaurantModel.find({_id: req.query.id}).select("cuisine, name, city, restaurant_id")
  .sort({'restaurant_id' : order});  

  try {
    await restaurant.save((err) => {
      if(err){
        res.send(err)
      }else{
        res.send(restaurant);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//task 7
//http://localhost:3000/restaurants/Delicatessen
app.get('/restaurants/test', async (req, res) => {
  try {
    const restaurants = restaurantModel.
                        find({})
                        .where('cuisine').equals('Delicatessen')
                        .where({$not :'Brooklyn'})
                        .sort('name')
                        .select('cuisines name city')
                        .exec((err, data) => {
                          if (err){
                              res.send(JSON.stringify({status:false, message: "No data found"}));
                          }else{
                              res.send(data);
                          }
                        });
    } catch (err) {
      res.status(500).send(err);
    }
});


//Update Record
//http://localhost:3000/restaurant/60174acfcde1ab2e78a3a9b0
app.patch('/restaurant/:id', async (req, res) => {
  try {
    const restaurant =  await restaurantModel.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
    res.send(restaurant)
  } catch (err) {
    res.status(500).send(err)
  }
})

//Delete Record by ID
//http://localhost:3000/restaurant/5d1f6c3e4b0b88fb1d257237
app.delete('/restaurant/:id', async (req, res) => {
    try {
      const restaurant = await restaurantModel.findByIdAndDelete(req.params.id)

      if (!restaurant) 
      {
        res.status(404).send(JSON.stringify({status: false, message:"No item found"}))
      }else{
        res.status(200).send(JSON.stringify({status: true, message:"Record Deleted Successfully"}))
      }
    } catch (err) {
      res.status(500).send(err)
    }
  })

  module.exports = app