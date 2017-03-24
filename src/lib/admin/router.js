import { Router } from 'express'

import authController from '../auth/controller'
import appController from '../app/controller'
import categoryController from '../category/controller'
import commentController from '../comment/controller'
import contentController from '../content/controller'
import messageController from '../message/controller'
import settingController from '../setting/controller'
import statController from '../stat/controller'
import tagController from '../tag/controller'
import adminController from './controller'
import authMiddleware from '../../middleware/auth'

const router = new Router()

router.get('/login', authMiddleware.auth2Home, authController.viewAdminLogin)

router.get('/comment', authMiddleware.notAuth2Login, commentController.viewAdminPage)
router.get('/message', authMiddleware.notAuth2Login, messageController.viewAdminPage)
router.get('/stat', authMiddleware.notAuth2Login, statController.viewAdminPage)
/* content */
router.get('/content', authMiddleware.notAuth2Login, contentController.viewAdminContent)
router.get('/content/create', authMiddleware.notAuth2Login, contentController.viewAdminCreateContent)
router.post('/upload', authMiddleware.notAuth2Login, contentController.uploadImage)
router.post('/content/create', authMiddleware.notAuth2Login, contentController.createContent)
router.get('/content/:contentId/update', authMiddleware.notAuth2Login, contentController.viewAdminUpdateContent)
router.post('/content/:contentId/update', authMiddleware.notAuth2Login, contentController.updateContent)
router.get('/content/:contentId/remove', authMiddleware.notAuth2Login, contentController.viewAdminRemoveContent)
router.post('/content/:contentId/remove', authMiddleware.notAuth2Login, contentController.removeContent)
/* app */
router.get('/app', authMiddleware.notAuth2Login, appController.viewAdminApp)
router.get('/app/create', authMiddleware.notAuth2Login, appController.viewAdminCreateApp)
router.post('/app/create', authMiddleware.notAuth2Login, appController.createApp)
router.get('/app/:appId/top', authMiddleware.notAuth2Login, appController.topApp)
router.get('/app/:appId/untop', authMiddleware.notAuth2Login, appController.untopApp)
router.get('/app/:appId/update', authMiddleware.notAuth2Login, appController.viewAdminUpdateApp)
router.post('/app/:appId/update', authMiddleware.notAuth2Login, appController.updateApp)
router.get('/app/:appId/remove', authMiddleware.notAuth2Login, appController.viewAdminRemoveApp)
router.post('/app/:appId/remove', authMiddleware.notAuth2Login, appController.removeApp)
/* category */
router.get('/category', authMiddleware.notAuth2Login, categoryController.viewAdminCategory)
router.get('/category/create', authMiddleware.notAuth2Login, categoryController.viewAdminCreateCategory)
router.post('/category/create', authMiddleware.notAuth2Login, categoryController.createCategory)
router.get('/category/:categoryId/update', authMiddleware.notAuth2Login, categoryController.viewAdminUpdateCategory)
router.post('/category/:categoryId/update', authMiddleware.notAuth2Login, categoryController.updateCategory)
router.get('/category/:categoryId/remove', authMiddleware.notAuth2Login, categoryController.viewAdminRemoveCategory)
router.post('/category/:categoryId/remove', authMiddleware.notAuth2Login, categoryController.removeCategory)
/* tag */
router.get('/tag', authMiddleware.notAuth2Login, tagController.viewAdminTag)
router.get('/tag/create', authMiddleware.notAuth2Login, tagController.viewAdminCreateTag)
router.post('/tag/create', authMiddleware.notAuth2Login, tagController.createTag)
router.get('/tag/:tagId/update', authMiddleware.notAuth2Login, tagController.viewAdminUpdateTag)
router.post('/tag/:tagId/update', authMiddleware.notAuth2Login, tagController.updateTag)
router.get('/tag/:tagId/remove', authMiddleware.notAuth2Login, tagController.viewAdminRemoveTag)
router.post('/tag/:tagId/remove', authMiddleware.notAuth2Login, tagController.removeTag)
/* setting */
router.get('/setting', authMiddleware.notAuth2Login, settingController.viewAdminSetting)
router.get('/setting/update', authMiddleware.notAuth2Login, settingController.viewAdminUpdateSetting)
router.post('/setting/update', authMiddleware.notAuth2Login, settingController.updateSetting)
router.get('/setting/create', authMiddleware.notAuth2Login, settingController.createSetting)

router.get('/', authMiddleware.notAuth2Login, adminController.viewAdminPage)

export default router
