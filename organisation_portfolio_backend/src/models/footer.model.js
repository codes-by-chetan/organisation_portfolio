import mongoose, { Schema } from 'mongoose';

const footerSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  socialMediaLinks: [
    {
      platform: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  copyrightText: { type: String, required: true },
  termsAndConditionsLink: { type: String, required: true },
  privacyPolicyLink: { type: String, required: true },
});

const Footer = mongoose.model('Footer', footerSchema);

export default Footer;