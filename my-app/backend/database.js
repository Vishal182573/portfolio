const mongoose = require('mongoose');
const express = require('express');

// Connect to MongoDB (replace 'mongodb://localhost:27017/portfolio' with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = mongoose.Schema({
  Username:String,
  Email:String,
  Message:String,
})
// Create a mongoose model for the contact form submissions
module.exports= mongoose.model('Contact',contactSchema);