/*! For license information please see common-Pagination-Pagination-stories.21f915a1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [6186],
  {
    './common/Pagination/Pagination.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          PaginationComp: () => PaginationComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Pagination_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.fill.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.concat.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.regexp.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.date.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.from.js');
      var react = __webpack_require__('../../node_modules/react/index.js'),
        jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (('undefined' != typeof Symbol && null != iter[Symbol.iterator]) || null != iter['@@iterator'])
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
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
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Pagination = function Pagination(_ref) {
        var _recursive,
          totalCount = _ref.totalCount,
          onPageBtnClick = _ref.onPageBtnClick,
          _ref$pageRangeDisplay = _ref.pageRangeDisplayed,
          pageRangeDisplayed = void 0 === _ref$pageRangeDisplay ? 5 : _ref$pageRangeDisplay,
          _ref$itemsCountPerPag = _ref.itemsCountPerPage,
          itemsCountPerPage = void 0 === _ref$itemsCountPerPag ? 10 : _ref$itemsCountPerPag,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _useState2 = _slicedToArray((0, react.useState)(0), 2),
          bundleIdx = _useState2[0],
          setBundleIdx = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(1), 2),
          currentPage = _useState4[0],
          setCurrentPage = _useState4[1],
          pageNumList = Array(Math.ceil(totalCount / itemsCountPerPage))
            .fill('')
            .map(function (_, idx) {
              return idx + 1;
            }),
          createPageRange =
            ((_recursive = function _recursive(start, list, perNum, acc) {
              return start >= list.length
                ? acc
                : _recursive(
                    start + perNum,
                    list,
                    perNum,
                    [].concat(_toConsumableArray(acc), [list.slice(start, start + perNum)])
                  );
            }),
            function (list, perNum) {
              return _recursive(0, list, perNum, []);
            }),
          pageRanges = (0, react.useMemo)(
            function () {
              return createPageRange(pageNumList, pageRangeDisplayed);
            },
            [pageNumList, pageRangeDisplayed]
          ),
          handleCurrentPageClick = function handleCurrentPageClick(count) {
            setCurrentPage(count), onPageBtnClick(count);
          };
        return (0, jsx_runtime.jsxs)('div', {
          className: 'pagination ' + className,
          children: [
            (0, jsx_runtime.jsx)('button', {
              disabled: !bundleIdx,
              className: 'pagination__btn pagination__prev',
              onClick: function handlePrevBundleClick() {
                setBundleIdx(function (prev) {
                  var num = prev < 0 ? 0 : prev - 1,
                    currentRange = pageRanges[num];
                  return handleCurrentPageClick(currentRange[currentRange.length - 1]), num;
                });
              },
              children: (0, jsx_runtime.jsx)('span', { className: 'a11y', children: '이전' }),
            }),
            pageRanges[bundleIdx].map(function (count) {
              return (0, jsx_runtime.jsx)(
                'button',
                {
                  className: 'pagination__btn ' + (currentPage === count ? 'is-active' : ''),
                  onClick: function onClick() {
                    return handleCurrentPageClick(count);
                  },
                  children: count,
                },
                count.toString()
              );
            }),
            (0, jsx_runtime.jsx)('button', {
              disabled: 1 === pageRanges.length || bundleIdx === pageRanges.length - 1,
              className: 'pagination__btn pagination__next',
              onClick: function handleNextBundleClick() {
                setBundleIdx(function (prev) {
                  var num = prev >= pageRanges.length ? prev : prev + 1;
                  return handleCurrentPageClick(pageRanges[num][0]), num;
                });
              },
              children: (0, jsx_runtime.jsx)('span', { className: 'a11y', children: '다음' }),
            }),
          ],
        });
      };
      Pagination.displayName = 'Pagination';
      const Pagination_Pagination = Pagination;
      try {
        (Pagination.displayName = 'Pagination'),
          (Pagination.__docgenInfo = {
            description: '',
            displayName: 'Pagination',
            props: {
              totalCount: {
                defaultValue: null,
                description: '',
                name: 'totalCount',
                required: !0,
                type: { name: 'number' },
              },
              onPageBtnClick: {
                defaultValue: null,
                description: '',
                name: 'onPageBtnClick',
                required: !0,
                type: { name: '(count: number) => void' },
              },
              pageRangeDisplayed: {
                defaultValue: { value: '5' },
                description: '',
                name: 'pageRangeDisplayed',
                required: !1,
                type: { name: 'number' },
              },
              itemsCountPerPage: {
                defaultValue: { value: '10' },
                description: '',
                name: 'itemsCountPerPage',
                required: !1,
                type: { name: 'number' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Pagination/Pagination.tsx#Pagination'] = {
              docgenInfo: Pagination.__docgenInfo,
              name: 'Pagination',
              path: 'common/Pagination/Pagination.tsx#Pagination',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Pagination_stories = { title: 'common/Pagination', component: Pagination_Pagination };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Pagination_Pagination, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var PaginationComp = Template.bind({});
      (PaginationComp.args = {
        totalCount: 37,
        pageRangeDisplayed: 5,
        itemsCountPerPage: 10,
        onPageBtnClick: function onPageBtnClick(num) {
          return console.log(num);
        },
      }),
        (PaginationComp.parameters = Object.assign(
          { storySource: { source: '(args) => <Pagination {...args} />' } },
          PaginationComp.parameters
        ));
      var __namedExportsOrder = ['PaginationComp'];
    },
    '../../node_modules/core-js/modules/es.date.to-string.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var uncurryThis = __webpack_require__('../../node_modules/core-js/internals/function-uncurry-this.js'),
        defineBuiltIn = __webpack_require__('../../node_modules/core-js/internals/define-built-in.js'),
        DatePrototype = Date.prototype,
        nativeDateToString = uncurryThis(DatePrototype.toString),
        thisTimeValue = uncurryThis(DatePrototype.getTime);
      'Invalid Date' != String(new Date(NaN)) &&
        defineBuiltIn(DatePrototype, 'toString', function toString() {
          var value = thisTimeValue(this);
          return value == value ? nativeDateToString(this) : 'Invalid Date';
        });
    },
    '../../node_modules/react/cjs/react-jsx-runtime.production.min.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict';
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
      'use strict';
      module.exports = __webpack_require__('../../node_modules/react/cjs/react-jsx-runtime.production.min.js');
    },
  },
]);
