const express = require('express');
const router = express.Router();

// Controller import karte hain
const { getRandomQuestion } = require('../controllers/questionController');

// Jab GET request aayegi /api/questions/random pe,
// toh getRandomQuestion function ko call karenge
router.get('/random', getRandomQuestion);

module.exports = router;
