'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log = require('../../middleware/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewAdminPage = function viewAdminPage(req, res) {
    (0, _log2.default)('content_controller').info('内容');
    res.renderAdminPage('content');
};

exports.default = {
    viewAdminPage: viewAdminPage
};