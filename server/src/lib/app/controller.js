import appManager from './manager'
import { getFromReq } from '../util/pagination'
import { formatResult } from '../util/format'
import { APP_LIMIT_DEFAULT } from '../util/const'

const findAll = async (req, res, next) => {
  const result = await appManager.findAll(getFromReq(req.query, APP_LIMIT_DEFAULT))
  res.json(formatResult(result))
}

export default {
  findAll
}
