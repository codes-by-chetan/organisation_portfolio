import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  organisationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' },
  title: { type: String, required: true },
  description: { type: String },
  mediaType: { type: String, enum: ['image', 'video', 'audio'] },
  mediaUrl: { type: String },
  thumbnailUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Media = mongoose.model('Media', mediaSchema);

export default Media;