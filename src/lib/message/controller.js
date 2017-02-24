import log from '../../middleware/log'

const viewPage = (req, res) => {
    log('message_controller').info('访问留言板')
    res.renderPage('message')
}
const viewAdminPage = (req, res) => {
    log('message_controller').info('访问留言板后台')
    res.renderAdminPage('message')
}

export default {
    viewPage,
    viewAdminPage
}