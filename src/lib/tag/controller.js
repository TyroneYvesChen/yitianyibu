import log from '../../middleware/log'

const viewAdminPage = (req, res) => {
    log('tag_controller').info('标签')
    res.renderAdminPage('tag')
}

export default {
    viewAdminPage
}