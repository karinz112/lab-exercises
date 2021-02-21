const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: Int!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: Int!
   }

   type User {
    user_id: Int!
    username: String!
    password: String!
    email: String!
   }

   type Booking{
      hotel_id: Int!
      booking_date: String!
      booking_start: String!
      booking_end: String!
      user_id: Int!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getBooking: [Booking]
   }

   type Mutation {
     addHotel(
      hotel_id: Int!
      hotel_name: String!
      street: String!
      city: String!
      postal_code: String!
      price: Float!
      email: String!
      user_id: Int!): Hotel

      addBooking(
        hotel_id: Int!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Int!): Booking
  
       addUser(
        user_id: Int!
        username: String!
        password: String!
        email: String!): User
     }
`