import { mongoose } from '../../middleware/db'

const Schema = mongoose.Schema

const ContentSchema = new Schema({
  title: { type: String, default: '' },
  html: { type: String, default: '' },
  markdown: { type: String, default: '' },
  images: { type: Array, default: null },
  tag: { type: Array, default: null },
  category: { type: String, default: null },
  status: { type: String, default: 'published' }, // privated published
  featured: { type: Boolean, default: true },
  hits: { type: Number, default: 0 },
  isTop: { type: Number, default: 0 },
  removed: { type: Boolean, default: false },
  createdByID: { type: Schema.Types.ObjectId, required: true }
}, {
  collection: 'content',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
})

export default mongoose.model('Content', ContentSchema)
