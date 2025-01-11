import mongoose from 'mongoose';

const organisationPortfolioContactPageSchema = new mongoose.Schema({
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
  image: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  contactPhone: {
    type: String,
    required: true
  },
  contactMessage: {
    type: String,
    required: true
  }
});

const OrganisationPortfolioContactPage = mongoose.model('OrganisationPortfolioContactPage', organisationPortfolioContactPageSchema);

export default OrganisationPortfolioContactPage;