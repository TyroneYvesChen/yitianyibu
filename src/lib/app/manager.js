/* eslint-disable */
import 'babel-polyfill'
/* eslint-enable */
import App from './model'

const addApp = async (options = {}) => {
    const result = await App.create(Object.assign({}, options))
    return result
}
const getAppById = async (appId) => {
    const result = await App.findById(appId)
    return result
}
const findApps = async (options = {}) => {
    let obj = Object.assign({ removed: false }, options)
    const result = await App.find(obj).sort({ createdAt: -1 })
    return result
}
const updateAppById = async (appId, options = {}) => {
    let analyse = await App.findById(appId)
    if (!analyse) {
        return null
    }
    analyse.name = options.name || analyse.name
    analyse.title = options.title || analyse.title
    analyse.icon = options.icon || analyse.icon
    analyse.cover = options.cover || analyse.cover
    analyse.url = options.url || analyse.url
    analyse.desc = options.desc || analyse.desc
    analyse.type = options.type || analyse.type
    analyse.isTop = options.isTop || analyse.isTop
    analyse.updatedAt = Date.now()
    const result = await analyse.save()
    return result
}
const hitAppById = async (appId) => {
    let analyse = await App.findById(appId)
    if (!analyse) {
        return null
    }
    const hits = analyse.hits
    analyse.hits = hits + 1
    const result = await analyse.save()
    return result
}
const removeAppById = async (appId) => {
    let analyse = await App.findById(appId)
    if (!analyse) {
        return null
    }
    analyse.removed = true
    analyse.updatedAt = Date.now()
    const result = await analyse.save()
    return result
}

export default {
    addApp,
    getAppById,
    findApps,
    updateAppById,
    removeAppById,
    hitAppById
}
