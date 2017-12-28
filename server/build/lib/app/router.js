'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.post('/', _controller2.default.insert);
router.get('/', _controller2.default.findAll);
router.get('/:id([0-9a-f]{24})', _controller2.default.getById);
router.put('/:id([0-9a-f]{24})', _controller2.default.updateById);
router.delete('/:id([0-9a-f]{24})', _controller2.default.removeById);

exports.default = router;
//# sourceMappingURL=router.js.map