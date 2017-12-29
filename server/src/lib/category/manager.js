import Model from './model'
import { getMeta } from '../util/pagination'

const findAll = async (queryOptions = {}, options = {}) => {
  const total = await Model.count({ removed: false })
  options = Object.assign(options, { removed: false })
  const list = await Model.find(options).limit(queryOptions.limit).skip(queryOptions.offset).sort({ weight: -1, createdAt: -1 })
  return {
    meta: getMeta(total, list.length, queryOptions),
    list
  }
}

export default {
  findAll
}
