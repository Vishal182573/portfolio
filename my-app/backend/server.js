const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace 'your_mongo_uri' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://sharmavs9205:<password>@cluster1.qzp8odb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a mongoose model for the contact form submissions
const Contact = mongoose.model('Contact', {
  name: String,
  email: String,
  message: String,
});

app.use(bodyParser.json());

// Handle form submissions
app.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
