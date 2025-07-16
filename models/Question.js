const mongoose = require('mongoose');

// Question ka schema banate hain
const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  input_format: {
    type: String,
    required: true
  },
  output_format: {
    type: String,
    required: true
  },
  sample_input: {
    type: String,
    required: true
  },
  sample_output: {
    type: String,
    required: true
  },
  constraints: {
    type: String
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  tags: {
    type: [String]
  },
  test_cases: [
    {
      input: String,
      output: String
    }
  ]
});

module.exports = mongoose.model('Question', questionSchema);
