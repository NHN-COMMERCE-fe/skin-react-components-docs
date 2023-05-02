/*! For license information please see dist-esm-common-SnsShare-SnsShare-stories.e9f0a256.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [8154],
  {
    './dist/esm/common/SnsShare/SnsShare.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ShareBtn: () => ShareBtn,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SnsShare_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        IconBtn = __webpack_require__('./dist/esm/common/IconBtn/IconBtn.js');
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1;
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return;
                  _n = !1;
                } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var FOLDING_CLASS_NAME_MAP = {
        isFolded: { icon: 'circle-x-white-bg', active: 'is-active' },
        isNotFolded: { icon: 'share-node', active: '' },
      };
      const SnsShare_SnsShare = function SnsShare(_ref) {
        var list = _ref.list,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          isFolded = _useState2[0],
          setIsFolded = _useState2[1],
          foldingClassName = (0, react.useMemo)(
            function () {
              return isFolded ? FOLDING_CLASS_NAME_MAP.isFolded : FOLDING_CLASS_NAME_MAP.isNotFolded;
            },
            [isFolded]
          );
        return (0, jsx_runtime.jsxs)('div', {
          className: 'sns-share ' + foldingClassName.active + ' ' + className,
          children: [
            (0, jsx_runtime.jsx)(IconBtn.Z, {
              className: 'sns-share__trigger',
              iconType: foldingClassName.icon,
              rounded: !0,
              label: '공유하기',
              onClick: function onClick() {
                return (function handleToggle() {
                  setIsFolded(function (prev) {
                    return !prev;
                  });
                })();
              },
            }),
            (0, jsx_runtime.jsx)('ul', {
              className: 'sns-share__list',
              children:
                null == list
                  ? void 0
                  : list.map(function (item, index) {
                      return (0,
                      jsx_runtime.jsx)('li', { className: 'sns-share__item', children: (0, jsx_runtime.jsx)(IconBtn.Z, { iconType: item.name, onClick: item.onClick }) }, 'sns-share__item_' + index + '_' + item.name);
                    }),
            }),
          ],
        });
      };
      const SnsShare_stories = { title: 'components/SnsShare', component: SnsShare_SnsShare };
      var ShareBtn = function Template(args) {
        return (0, jsx_runtime.jsx)(SnsShare_SnsShare, Object.assign({}, args));
      }.bind({});
      (ShareBtn.args = {
        list: [
          {
            name: 'facebook-black-bg',
            url: 'https://m.facebook.com/sharer.php?u=',
            onClick: function onClick() {
              return null;
            },
          },
          {
            name: 'tweet-black-bg',
            url: 'https://twitter.com/intent/tweet?text=',
            onClick: function onClick() {
              return null;
            },
          },
          {
            name: 'youtube-black-bg',
            url: 'http://yotube.com',
            onClick: function onClick() {
              return null;
            },
          },
          {
            name: 'blog',
            url: 'http://blog',
            onClick: function onClick() {
              return null;
            },
          },
          {
            name: 'url-gray-bg',
            url: '',
            onClick: function onClick() {
              return null;
            },
          },
        ],
      }),
        (ShareBtn.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(SnsShare, { ...args })' } },
          ShareBtn.parameters
        ));
      var __namedExportsOrder = ['ShareBtn'];
    },
    './dist/esm/common/Icon/Icon.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.function.name.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = function Icon(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          name = _ref.name;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
          className: 'ico ico--' + name + ' ' + className,
        });
      };
    },
    './dist/esm/common/IconBtn/IconBtn.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./dist/esm/common/Icon/Icon.js');
      const __WEBPACK_DEFAULT_EXPORT__ = function IconBtn(_ref) {
        var _ref$label = _ref.label,
          label = void 0 === _ref$label ? '' : _ref$label,
          iconType = _ref.iconType,
          _ref$rounded = _ref.rounded,
          rounded = void 0 !== _ref$rounded && _ref$rounded,
          onClick = _ref.onClick,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _ref$testId = _ref.testId,
          testId = void 0 === _ref$testId ? 'icon-btn' : _ref$testId,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          _ref$hiddenLabel = _ref.hiddenLabel,
          hiddenLabel = void 0 === _ref$hiddenLabel || _ref$hiddenLabel;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('button', {
          type: 'button',
          className: (rounded ? 'icon-btn--round' : '') + ' ' + (null != className ? className : ''),
          disabled,
          onClick,
          'data-testid': testId,
          children: [
            iconType &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z, {
                name: iconType,
              }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
              className: hiddenLabel ? 'a11y' : '',
              children: label,
            }),
          ],
        });
      };
    },
    '../../node_modules/react/cjs/react-jsx-runtime.production.min.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var f = __webpack_require__('../../node_modules/react/index.js'),
        k = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        m = Object.prototype.hasOwnProperty,
        n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = '' + g),
        void 0 !== a.key && (e = '' + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    '../../node_modules/react/jsx-runtime.js': (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__('../../node_modules/react/cjs/react-jsx-runtime.production.min.js');
    },
  },
]);
