const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    unique: [true, "Duplicate id Not allowed"],
    required: [true],
    trim: true,
  },
  hotel_name: {
    type: String,
    required: [true, "Please enter hotel name"],
    unique: [true, "Duplicate Name Not allowed"],
    trim: true
  },
  street:{
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  city:{
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  postal_code:{
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  price: {
    type: Number,
    default: 0.0,
    validate(value) {
      if (value < 0.0){
         throw new Error("Negative Price aren't real.");
      }
    }
  },
  email: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    //minlength:10,
    //maxlength: 50,
    //Custom validation
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  user_id: {
    type: Number,
    required: true,
    trim: true
  }
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;