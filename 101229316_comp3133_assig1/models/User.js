const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        unique: [true, "Duplicate id Not allowed"],
        trim: true,
        lowercase: true
      },
      username: {
        type: String,
        unique: [true, "Duplicate username Not allowed"],
        required: true,
        trim: true,
      },
      password: {
          type:String,
          required: true,
          trim: true
      },
      email: {
        type: String,
        required: true,
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        validate: function(value) {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(value);
        }
      }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;