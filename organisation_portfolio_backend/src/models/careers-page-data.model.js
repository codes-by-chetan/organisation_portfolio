import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  organisationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisation',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [
    {
      type: String,
      required: true
    }
  ],
  responsibilities: [
    {
      type: String,
      required: true
    }
  ],
  benefits: [
    {
      type: String,
      required: true
    }
  ],
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'internship'],
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Career = mongoose.model('Career', careerSchema);

export default Career;