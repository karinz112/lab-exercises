const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    address: {
      type: Object,
      required: [true, 'Please enter address'],
      trim: true,
      lowercase: true
    },
    building: {
        type: Number,
        required: [true, 'Please enter building'],
        trim: true,
        lowercase: true
      },
      street: {
        type: String,
        required: [true, 'Please enter street'],
        trim: true,
        lowercase: true
      },
      zipcode: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
    city: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    cuisine: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      restaurant_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
    created: { 
      type: Date,
      default: Date.now
    },
  });


  RestaurantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
  RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
  RestaurantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  
  RestaurantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;