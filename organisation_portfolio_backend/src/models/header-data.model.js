import mongoose from 'mongoose';

const headerSchema = new mongoose.Schema({
  organisationName: { type: String, required: true },
  organisationLogo: { type: String, required: true },
  tagline: { type: String, required: true },
  navigationLinks: [{ type: String, required: true }],
  contactInfo: {
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
  },
  socialMediaLinks: {
    facebook: { type: String, required: true },
    twitter: { type: String, required: true },
    instagram: { type: String, required: true },
    linkedin: { type: String, required: true }
  }
}, { timestamps: true });

const Header = mongoose.model('Header', headerSchema);

export default Header;