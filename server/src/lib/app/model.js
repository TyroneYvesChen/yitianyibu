import { mongoose } from '../../middleware/db'

const Schema = mongoose.Schema

const AppSchema = new Schema({
  name: { type: String, default: '' },
  title: { type: String, default: '' },
  pathname: { type: String, default: '' }, // 自定义链接
  icon: { type: String, default: '' },
  cover: { type: String, default: '' },
  url: { type: String, default: '' },
  desc: { type: String, default: '' },
  type: { type: Number, default: 0 },
  hits: { type: Number, default: 0 },
  removed: { type: Boolean, default: false },
  createdById: { type: Schema.Types.ObjectId, required: true }
}, {
  collection: 'app',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
})

export default mongoose.model('App', AppSchema)
