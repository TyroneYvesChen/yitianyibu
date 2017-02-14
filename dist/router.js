'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _log = require('./middleware/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.get('/ping', function (req, res) {
    res.end('OK');
});

router.get('/', function (req, res) {
    (0, _log2.default)('router').info('访问首页');
    var applications = [{ name: 'ANIMATE.CSS', icon: 'animate', url: 'http://animate.coolfishstudio.com' }, { name: 'SNOW.JS', icon: 'snow', url: 'http://snow.coolfishstudio.com' }];
    res.renderPage('index', { applications: applications });
});
// 列表页
router.get('/posts', function (req, res) {
    var applications = [{ name: 'ANIMATE.CSS', icon: 'animate', url: 'http://animate.coolfishstudio.com' }, { name: 'SNOW.JS', icon: 'snow', url: 'http://snow.coolfishstudio.com' }];
    res.renderPage('post-list', { applications: applications });
});
// 帖子详情页
router.get('/post/:pid', function (req, res) {
    var applications = [{ name: 'ANIMATE.CSS', icon: 'animate', url: 'http://animate.coolfishstudio.com' }, { name: 'SNOW.JS', icon: 'snow', url: 'http://snow.coolfishstudio.com' }];
    res.renderPage('post', { applications: applications });
});
// 实验室
router.get('/labs', function (req, res) {
    var applications = [{ name: 'ANIMATE.CSS', icon: 'animate', url: 'http://animate.coolfishstudio.com' }, { name: 'SNOW.JS', icon: 'snow', url: 'http://snow.coolfishstudio.com' }];
    res.renderPage('labs', { applications: applications });
});
// 关于
router.get('/about', function (req, res) {
    var applications = [{ name: 'ANIMATE.CSS', icon: 'animate', url: 'http://animate.coolfishstudio.com' }, { name: 'SNOW.JS', icon: 'snow', url: 'http://snow.coolfishstudio.com' }];
    res.renderPage('about', { applications: applications });
});

router.get('/admin/login', function (req, res) {
    (0, _log2.default)('router').info('访问后台登录页');
    res.renderAdminPage('login', { title: '一天一步网', message: '模版测试' });
});
/* 后台管理 */
router.get('/admin/', function (req, res) {
    res.renderAdminPage('index');
}); // 基础平台
router.get('/admin/app', function (req, res) {
    res.renderAdminPage('app');
}); // 应用管理
router.get('/admin/content', function (req, res) {
    res.renderAdminPage('content');
}); // 内容管理
router.get('/admin/message', function (req, res) {
    res.renderAdminPage('message');
}); // 留言管理
router.get('/admin/category', function (req, res) {
    res.renderAdminPage('category');
}); // 类别管理
router.get('/admin/tag', function (req, res) {
    res.renderAdminPage('tag');
}); // 标签管理
router.get('/admin/stat', function (req, res) {
    res.renderAdminPage('stat');
}); // 统计分析
router.get('/admin/system', function (req, res) {
    res.renderAdminPage('system');
}); // 系统管理

exports.default = router;