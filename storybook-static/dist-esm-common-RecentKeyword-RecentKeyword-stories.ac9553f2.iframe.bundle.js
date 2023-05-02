'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [9809],
  {
    './dist/esm/common/RecentKeyword/RecentKeyword.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          EmptyRecentKeyword: () => EmptyRecentKeyword,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/react-router-dom/dist/index.js'
        ),
        _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './dist/esm/common/RecentKeywordProvider/RecentKeywordProvider.js'
        ),
        _RecentKeyword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './dist/esm/common/RecentKeyword/RecentKeyword.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Common/RecentKeyword',
        component: _RecentKeyword__WEBPACK_IMPORTED_MODULE_3__.Z,
      };
      var Default = function Default(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VK,
            {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_5__.ZP,
                {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _RecentKeyword__WEBPACK_IMPORTED_MODULE_3__.Z,
                    Object.assign({}, props)
                  ),
                }
              ),
            }
          );
        },
        EmptyRecentKeyword = Default.bind({});
      (Default.parameters = Object.assign(
        {
          storySource: {
            source:
              '(props) => (_jsx(Router, { children: _jsx(RecentKeywordProvider, { children: _jsx(RecentKeyword, { ...props }) }) }))',
          },
        },
        Default.parameters
      )),
        (EmptyRecentKeyword.parameters = Object.assign(
          {
            storySource: {
              source:
                '(props) => (_jsx(Router, { children: _jsx(RecentKeywordProvider, { children: _jsx(RecentKeyword, { ...props }) }) }))',
            },
          },
          EmptyRecentKeyword.parameters
        ));
      var __namedExportsOrder = ['Default', 'EmptyRecentKeyword'];
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
    './dist/esm/common/RecentKeyword/RecentKeyword.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _RecentKeywordItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './dist/esm/common/RecentKeywordItem/RecentKeywordItem.js'
        ),
        _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './dist/esm/common/RecentKeywordProvider/RecentKeywordProvider.js'
        ),
        RecentKeywordTop = function RecentKeywordTop() {
          var deleteAll = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__.Kd)().deleteAll;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
            className: 'recent-keyword__top',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', { children: '최근검색어' }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('button', {
                onClick: function onClick() {
                  return deleteAll();
                },
                children: '검색어 전체삭제',
              }),
            ],
          });
        },
        EmptyRecentKeyword = function EmptyRecentKeyword() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: 'recent-keyword__content-empty',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', {
              children: '최근 검색어 내역이 없습니다.',
            }),
          });
        },
        RecentKeywordContent = function RecentKeywordContent(_ref) {
          var onKeywordClick = _ref.onKeywordClick,
            _useRecentKeywordStat = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__.Oc)(),
            keywords = _useRecentKeywordStat.keywords,
            size = _useRecentKeywordStat.size,
            action = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__.Kd)(),
            onDelete = function onDelete(keyword) {
              action.delete(keyword);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: 'recent-keyword__content',
            children: size
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('ul', {
                  'data-testid': 'recent-keyword__list',
                  children: keywords.map(function (keyword, idx) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_RecentKeywordItem__WEBPACK_IMPORTED_MODULE_3__.Z, { onClick: onKeywordClick, onDelete, keyword }, 'recent-keyword-' + keyword + '_' + idx);
                  }),
                })
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyRecentKeyword, {}),
          });
        };
      const __WEBPACK_DEFAULT_EXPORT__ = function RecentKeyword(_ref2) {
        var onKeywordClick = _ref2.onKeywordClick,
          _ref2$className = _ref2.className,
          className = void 0 === _ref2$className ? '' : _ref2$className;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
          className: 'recent-keyword ' + className,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RecentKeywordTop, {}),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RecentKeywordContent, { onKeywordClick }),
          ],
        });
      };
    },
    './dist/esm/common/RecentKeywordItem/RecentKeywordItem.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./dist/esm/common/IconBtn/IconBtn.js');
      const __WEBPACK_DEFAULT_EXPORT__ = function RecentKeywordItem(_ref) {
        var keyword = _ref.keyword,
          onDelete = _ref.onDelete,
          _ref$deleteBtnTestId = _ref.deleteBtnTestId,
          deleteBtnTestId = void 0 === _ref$deleteBtnTestId ? 'recent-keyword__item-delete-btn' : _ref$deleteBtnTestId,
          _onClick = _ref.onClick;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('li', {
          className: 'recent-keyword__item',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
              onClick: function onClick() {
                return _onClick(keyword);
              },
              children: keyword,
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_1__.Z, {
              testId: deleteBtnTestId,
              onClick: function onClick() {
                return onDelete(keyword);
              },
              label: '인풋 클리어',
              iconType: 'circle-x-gray-bg',
            }),
          ],
        });
      };
    },
    './dist/esm/common/RecentKeywordProvider/RecentKeywordProvider.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Kd: () => useRecentKeywordActionContext,
        Oc: () => useRecentKeywordStateContext,
        ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      __webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.from.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('../../node_modules/react/index.js'),
        _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          '../shared/dist/esm/helpers/index.js'
        );
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
      var _commonHelper$recentK = _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_13__.xt.recentKeyword,
        Helper = _commonHelper$recentK.Helper,
        QUERY_KEY = _commonHelper$recentK.QUERY_KEY,
        MUTATION_KEY = _commonHelper$recentK.MUTATION_KEY,
        DEFAULT_STATE_keywords = [],
        RecentKeywordStateContext = (0, react__WEBPACK_IMPORTED_MODULE_12__.createContext)(null),
        RecentKeywordActionContext = (0, react__WEBPACK_IMPORTED_MODULE_12__.createContext)(null);
      const __WEBPACK_DEFAULT_EXPORT__ = function RecentKeywordProvider(_ref) {
        var children = _ref.children,
          _ref$maxSize = _ref.maxSize,
          maxSize = void 0 === _ref$maxSize ? Helper.MAX_SIZE : _ref$maxSize,
          _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(DEFAULT_STATE_keywords), 2),
          keywords = _useState2[0],
          setKeywords = _useState2[1],
          size = (0, react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(
            function () {
              return keywords.length;
            },
            [keywords]
          ),
          _useMemo = (0, react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(function () {
            return (0, _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_13__.p6)(new Helper({ maxSize }));
          }, []),
          executeQuery = _useMemo.executeQuery,
          executeMutation = _useMemo.executeMutation,
          addKeyword = executeMutation(MUTATION_KEY.POST_KEYWORD).mutate,
          deleteKeyword = executeMutation(MUTATION_KEY.DELETE_KEYWORD).mutate,
          deleteAllKeywords = executeMutation(MUTATION_KEY.DELETE_ALL_KEYWORDS).mutate,
          action = (0, react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(function () {
            return {
              add: function add(keyword) {
                addKeyword({
                  payload: { keyword },
                  onSuccess: function onSuccess(_ref2) {
                    var data = _ref2.data;
                    setKeywords(data);
                  },
                });
              },
              delete: function _delete(keyword) {
                deleteKeyword({
                  payload: { keyword },
                  onSuccess: function onSuccess(_ref3) {
                    var data = _ref3.data;
                    setKeywords(data);
                  },
                });
              },
              deleteAll: function deleteAll() {
                deleteAllKeywords({
                  onSuccess: function onSuccess(_ref4) {
                    var data = _ref4.data;
                    setKeywords(data);
                  },
                });
              },
            };
          }, []);
        return (
          (0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
            executeQuery(QUERY_KEY.QUERY_KEYWORDS_BY_LATEST, {
              onSuccess: function onSuccess(_ref5) {
                var data = _ref5.data;
                setKeywords(data);
              },
            });
          }, []),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(RecentKeywordStateContext.Provider, {
            value: { size, keywords },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(RecentKeywordActionContext.Provider, {
              value: action,
              children,
            }),
          })
        );
      };
      var useRecentKeywordStateContext = function useRecentKeywordStateContext() {
          var ctx = (0, react__WEBPACK_IMPORTED_MODULE_12__.useContext)(RecentKeywordStateContext);
          if (!ctx) throw new Error('INVALID_RecentKeywordStateContext');
          return ctx;
        },
        useRecentKeywordActionContext = function useRecentKeywordActionContext() {
          var ctx = (0, react__WEBPACK_IMPORTED_MODULE_12__.useContext)(RecentKeywordActionContext);
          if (!ctx) throw new Error('INVALID_RecentKeywordActionContext');
          return ctx;
        };
    },
  },
]);
