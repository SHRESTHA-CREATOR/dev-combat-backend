const Question = require('../models/Question');

// Random question fetch karne ka controller function
const getRandomQuestion = async (req, res) => {
  try {
    const count = await Question.countDocuments(); // Kitne questions hain total
    const randomIndex = Math.floor(Math.random() * count); // Random index generate
    const randomQuestion = await Question.findOne().skip(randomIndex); // Us index wala question laao

    if (!randomQuestion) {
      return res.status(404).json({ message: 'No question found' });
    }

    res.json(randomQuestion); // Question bhej do frontend ko
  } catch (error) {
    console.error('Error fetching random question:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getRandomQuestion };
