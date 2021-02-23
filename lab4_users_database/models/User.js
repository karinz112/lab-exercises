const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter your name.'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Please enter your username.'],
        trim: true,
        minLength: 4
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address.'],
        unique: [true, 'Dupicate email not allowed'],
        trim: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    address: {
        street: {
            type: String,
            required: [true, 'Please enter your street address.'],
            trim: true
        },
        suite: {
            type: String,
            required: [true, 'Please enter your suite.'],
            trim: true
        },
        city: {
            type: String,
            required: [true, 'Please enter your city.'],
            trim: true,
            validate: function(value) {
                var cityRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
                return cityRegex.test(value);
            }
        },
        zipcode: {
            type: Number,
            required: [true, 'Please enter your zipcode.'],
            trim: true,
            validate: function(value) {
                // DDDDD-DDDD
                var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
                return zipRegex.test(value);
            }
        },
        geo: {
            lat: {
                type: Number,
                required: [true, 'Please enter the latitude.'],
                trim: true
            },
            lng: {
                type: Number,
                required: [true, 'Please enter the longitude.'],
                trim: true
            }
        }
    },
    phone: {
        type: Number,
        required: [true, 'Please enter your phone number.'],
        trim: true,
        validate: function(value) {
            // D-DDD-DDD-DDDD
            var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
            return phoneRegex.test(value);
        }
    },
    website: {
        type: String,
        required: [true, 'Please enter your website.'],
        trim: true,
        validate: function(value) {
            // D-DDD-DDD-DDDD
            var webRegex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

            return webRegex.test(value);
        }
    },
    company: {
        name: {
            type: String,
            required: [true, 'Please enter the name of the company.'],
            trim: true
        },
        catchPhrase: {
            type: String,
            required: [true, 'Please enter the company\'s catchPhrase.'],
            trim: true
        },
        bs: {
            type: String,
            required: [true, 'Please enter the company\'s bs.'],
            trim: true
        }
    }

});

UserSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
});
UserSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});
UserSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
});
UserSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
});

const User = mongoose.model('User', UserSchema);
module.exports = User;