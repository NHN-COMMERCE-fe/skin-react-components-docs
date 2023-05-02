/*! For license information please see dist-esm-common-Tabs-Tabs-stories.f483f947.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [2464],
  {
    './dist/esm/common/Tabs/Tabs.stories.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Example: () => Example,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Tabs_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        dist =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.find.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('../../node_modules/react-router-dom/dist/index.js'));
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
      var TabsStateContext = (0, react.createContext)(null),
        TabsActionContext = (0, react.createContext)(null);
      const Tabs_TabsProvider = function TabsProvider(_ref) {
        var children = _ref.children,
          initialState = _ref.initialState,
          _ref$usesQueryParam = _ref.usesQueryParam,
          usesQueryParam = void 0 !== _ref$usesQueryParam && _ref$usesQueryParam,
          _ref$queryParamKeyNam = _ref.queryParamKeyName,
          queryParamKeyName = void 0 === _ref$queryParamKeyNam ? 'tabType' : _ref$queryParamKeyNam,
          _useSearchParams2 = _slicedToArray((0, dist.lr)(), 2),
          searchParams = _useSearchParams2[0],
          setSearchParams = _useSearchParams2[1],
          initialTab = (0, react.useMemo)(function () {
            var _ref3, _initialState$current;
            return usesQueryParam &&
              initialState.tabs.find(function (_ref2) {
                return _ref2.value === searchParams.get(queryParamKeyName);
              })
              ? searchParams.get(queryParamKeyName)
              : null !==
                  (_ref3 =
                    null !== (_initialState$current = initialState.currentTab) && void 0 !== _initialState$current
                      ? _initialState$current
                      : initialState.tabs[0].value) && void 0 !== _ref3
              ? _ref3
              : null;
          }, []),
          _useState2 = _slicedToArray(
            (0, react.useState)(function () {
              return initialState.tabs;
            }),
            2
          ),
          tabs = _useState2[0],
          setTabs = _useState2[1],
          _useState4 = _slicedToArray(
            (0, react.useState)(function () {
              return initialTab;
            }),
            2
          ),
          tab = _useState4[0],
          setTab = _useState4[1],
          changeQueryParam = function changeQueryParam(tab) {
            searchParams.set(queryParamKeyName, tab),
              setSearchParams(
                function () {
                  return searchParams;
                },
                { replace: !0 }
              );
          };
        (0, react.useLayoutEffect)(
          function () {
            usesQueryParam && initialTab && changeQueryParam(initialTab);
          },
          [_toConsumableArray(searchParams.keys()).length]
        );
        var action = (0, react.useMemo)(
          function () {
            return {
              updateTabs: function updateTabs(tabs) {
                setTabs(function () {
                  return tabs;
                });
              },
              selectTab: function selectTab(selectedTab) {
                setTab(selectedTab), usesQueryParam && selectedTab && changeQueryParam(selectedTab);
              },
            };
          },
          [changeQueryParam]
        );
        return (0, jsx_runtime.jsx)(TabsStateContext.Provider, {
          value: { currentTab: tab, tabs },
          children: (0, jsx_runtime.jsx)(TabsActionContext.Provider, { value: action, children }),
        });
      };
      var useTabsStateContext = function useTabsStateContext() {
          var context = (0, react.useContext)(TabsStateContext);
          if (!context) throw new Error('INVALID_TabsStateContext');
          return context;
        },
        Tab = function Tab(_ref) {
          var value = _ref.value,
            label = _ref.label,
            currentTab = useTabsStateContext().currentTab,
            selectTab = (function useTabsActiveContext() {
              var context = (0, react.useContext)(TabsActionContext);
              if (!context) throw new Error('INVALID_TabsActionContext');
              return context;
            })().selectTab,
            isActive = (0, react.useMemo)(
              function () {
                return currentTab === value;
              },
              [currentTab]
            );
          return (0, jsx_runtime.jsx)('li', {
            className: 'tabs__item ' + (isActive ? 'on' : ''),
            children: (0, jsx_runtime.jsx)('button', {
              type: 'button',
              onClick: function onClick() {
                return selectTab(value);
              },
              children: label,
            }),
          });
        };
      const Tabs_Tabs = function Tabs(_ref2) {
        var _ref2$className = _ref2.className,
          className = void 0 === _ref2$className ? '' : _ref2$className,
          tabs = useTabsStateContext().tabs;
        return (0, jsx_runtime.jsx)('ul', {
          className: 'tabs ' + className,
          children: tabs.map(function (tab) {
            return (0, jsx_runtime.jsx)(Tab, Object.assign({}, tab), tab.value);
          }),
        });
      };
      const Tabs_stories = { title: 'common/Tabs', component: Tabs_Tabs };
      var Example = function Default(props) {
        return (0, jsx_runtime.jsx)(
          Tabs_TabsProvider,
          Object.assign({}, props, { children: (0, jsx_runtime.jsx)(Tabs_Tabs, {}) })
        );
      }.bind({});
      (Example.args = {
        initialState: {
          currentTab: 'PRODUCT_DETAIL',
          tabs: [
            { value: 'PRODUCT_DETAIL', label: '상품 상세정보' },
            { value: 'PRODUCT_REVIEW', label: '상품후기' },
            { value: 'PRODUCT_INQUIRY', label: '상품 Q&A' },
            { value: 'SHIPPING_CLAIM', label: '배송/교환/반품' },
          ],
        },
      }),
        (Example.parameters = Object.assign(
          { storySource: { source: '(props) => (_jsx(TabsProvider, { ...props, children: _jsx(Tabs, {}) }))' } },
          Example.parameters
        ));
      var __namedExportsOrder = ['Example'];
    },
    '../../node_modules/core-js/internals/array-reduce.js': (module, __unused_webpack_exports, __webpack_require__) => {
      var aCallable = __webpack_require__('../../node_modules/core-js/internals/a-callable.js'),
        toObject = __webpack_require__('../../node_modules/core-js/internals/to-object.js'),
        IndexedObject = __webpack_require__('../../node_modules/core-js/internals/indexed-object.js'),
        lengthOfArrayLike = __webpack_require__('../../node_modules/core-js/internals/length-of-array-like.js'),
        $TypeError = TypeError,
        createMethod = function (IS_RIGHT) {
          return function (that, callbackfn, argumentsLength, memo) {
            aCallable(callbackfn);
            var O = toObject(that),
              self = IndexedObject(O),
              length = lengthOfArrayLike(O),
              index = IS_RIGHT ? length - 1 : 0,
              i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              for (;;) {
                if (index in self) {
                  (memo = self[index]), (index += i);
                  break;
                }
                if (((index += i), IS_RIGHT ? index < 0 : length <= index))
                  throw $TypeError('Reduce of empty array with no initial value');
              }
            for (; IS_RIGHT ? index >= 0 : length > index; index += i)
              index in self && (memo = callbackfn(memo, self[index], index, O));
            return memo;
          };
        };
      module.exports = { left: createMethod(!1), right: createMethod(!0) };
    },
    '../../node_modules/core-js/modules/es.array.index-of.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict';
      var $ = __webpack_require__('../../node_modules/core-js/internals/export.js'),
        uncurryThis = __webpack_require__('../../node_modules/core-js/internals/function-uncurry-this-clause.js'),
        $indexOf = __webpack_require__('../../node_modules/core-js/internals/array-includes.js').indexOf,
        arrayMethodIsStrict = __webpack_require__('../../node_modules/core-js/internals/array-method-is-strict.js'),
        nativeIndexOf = uncurryThis([].indexOf),
        NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
      $(
        { target: 'Array', proto: !0, forced: NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf') },
        {
          indexOf: function indexOf(searchElement) {
            var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
            return NEGATIVE_ZERO
              ? nativeIndexOf(this, searchElement, fromIndex) || 0
              : $indexOf(this, searchElement, fromIndex);
          },
        }
      );
    },
    '../../node_modules/core-js/modules/es.array.reduce.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict';
      var $ = __webpack_require__('../../node_modules/core-js/internals/export.js'),
        $reduce = __webpack_require__('../../node_modules/core-js/internals/array-reduce.js').left,
        arrayMethodIsStrict = __webpack_require__('../../node_modules/core-js/internals/array-method-is-strict.js'),
        CHROME_VERSION = __webpack_require__('../../node_modules/core-js/internals/engine-v8-version.js');
      $(
        {
          target: 'Array',
          proto: !0,
          forced:
            (!__webpack_require__('../../node_modules/core-js/internals/engine-is-node.js') &&
              CHROME_VERSION > 79 &&
              CHROME_VERSION < 83) ||
            !arrayMethodIsStrict('reduce'),
        },
        {
          reduce: function reduce(callbackfn) {
            var length = arguments.length;
            return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
          },
        }
      );
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
