// const express = require('express');
// const app = express();
// const contact = require('./database'); // Adjust path if model file is elsewhere

// // ... other app setup (routes, middleware, etc.)

// app.post('/', async (req, res) => {
//   try {
//     const newContact = new contact({
//       Username: req.body.name,
//       Email: req.body.email,
//       Message: req.body.message
//     });

//     const savedContact = await newContact.save();
//     res.json({ message: 'Message sent successfully!', data: savedContact });
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).json({ message: 'Failed to send message. Please try again.' });
//   }
// });

// // ... other app code
