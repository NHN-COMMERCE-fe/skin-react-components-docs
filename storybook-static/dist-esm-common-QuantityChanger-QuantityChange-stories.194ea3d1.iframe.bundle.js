'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [9857],
  {
    './dist/esm/common/QuantityChanger/QuantityChange.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => QuantityChange_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.number.constructor.js'),
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
          __webpack_require__('../../node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        TextField = __webpack_require__('./dist/esm/common/TextField/TextField.js');
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
      var filterQuantity = function filterQuantity(_ref) {
        var value = _ref.value,
          _ref$max = _ref.max,
          max = void 0 === _ref$max ? 1 / 0 : _ref$max,
          _ref$min = _ref.min,
          min = void 0 === _ref$min ? -1 / 0 : _ref$min;
        if (max < min) return console.error('설정된 max 값이 min 값보다 작습니다.'), value;
        var confirmedValue = value;
        return (
          confirmedValue > max && (confirmedValue = max), confirmedValue < min && (confirmedValue = min), confirmedValue
        );
      };
      const QuantityChanger_QuantityChanger = function QuantityChanger(_ref2) {
        var value = _ref2.value,
          onChange = _ref2.onChange,
          initialValue = _ref2.initialValue,
          max = _ref2.max,
          _ref2$min = _ref2.min,
          min = void 0 === _ref2$min ? 1 : _ref2$min,
          _ref2$disabled = _ref2.disabled,
          disabled = void 0 !== _ref2$disabled && _ref2$disabled,
          _useState2 = _slicedToArray(
            (0, react.useState)(initialValue ? filterQuantity({ value: initialValue, max, min }) : 0),
            2
          ),
          valueBucket = _useState2[0],
          setValueBucket = _useState2[1],
          _value = (0, react.useMemo)(
            function () {
              return value ? filterQuantity({ value, max, min }) : null;
            },
            [value]
          ),
          changeQuantity = function changeQuantity(offset) {
            if (null !== _value) {
              var changedValue = filterQuantity({ value: _value + offset, max, min });
              changedValue !== _value && (null == onChange || onChange(changedValue));
            } else {
              var changedValueBucket = filterQuantity({ value: valueBucket + offset, max, min });
              changedValueBucket !== valueBucket &&
                (null == onChange || onChange(changedValueBucket), setValueBucket(changedValueBucket));
            }
          };
        return (0, jsx_runtime.jsxs)('span', {
          className: 'quantity-changer',
          children: [
            (0, jsx_runtime.jsx)('button', {
              className: 'quantity-changer__decrease-btn',
              onClick: function handleDecreaseBtnClick() {
                changeQuantity(-1);
              },
              disabled,
              children: '-',
            }),
            (0, jsx_runtime.jsx)(TextField.Z, {
              className: 'quantity-changer__input',
              value: null === _value ? valueBucket : _value,
              valid: 'NUMBER',
              onChange: function handleInputChange(_ref3) {
                var currentTarget = _ref3.currentTarget,
                  inputValue = filterQuantity({ value: Number(currentTarget.value), max, min });
                if (null === _value) return null == onChange || onChange(inputValue), void setValueBucket(inputValue);
                null == onChange || onChange(inputValue);
              },
              disabled,
            }),
            (0, jsx_runtime.jsx)('button', {
              className: 'quantity-changer__increase-btn',
              onClick: function handleIncreaseBtnClick() {
                changeQuantity(1);
              },
              disabled,
              children: '+',
            }),
          ],
        });
      };
      const QuantityChange_stories = { title: 'common/QuantityChanger', component: QuantityChanger_QuantityChanger };
      var Default = function Default(args) {
        return (0, jsx_runtime.jsx)(QuantityChanger_QuantityChanger, Object.assign({}, args));
      };
      Default.parameters = Object.assign(
        { storySource: { source: '(args) => _jsx(QuantityChanger, { ...args })' } },
        Default.parameters
      );
      var __namedExportsOrder = ['Default'];
    },
    './dist/esm/common/TextField/TextField.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.replace.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.regexp.exec.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../../node_modules/react/index.js'),
        _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          '../shared/dist/esm/constants/index.js'
        ),
        _excluded = ['value', 'className', 'testId', 'valid', 'onChange'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var TextField = (0, react__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function (_ref, ref) {
        var value = _ref.value,
          className = _ref.className,
          _ref$testId = _ref.testId,
          testId = void 0 === _ref$testId ? 'text-field' : _ref$testId,
          valid = _ref.valid,
          onChange = _ref.onChange,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('span', {
          className: 'text-field ' + (null != className ? className : ''),
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
            'input',
            Object.assign(
              {
                ref,
                'data-testid': testId,
                type: 'text',
                value,
                onChange: function handleChange(e) {
                  var value = e.currentTarget.value;
                  valid &&
                    ((value = value.replace(_shopby_shared_constants__WEBPACK_IMPORTED_MODULE_8__.Iu[valid], '')),
                    (e.currentTarget.value = value)),
                    null == onChange || onChange(e);
                },
              },
              props
            )
          ),
        });
      });
      (TextField.displayName = 'TextField'),
        (TextField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextField',
          props: { testId: { defaultValue: { value: "'text-field'", computed: !1 }, required: !1 } },
        });
      const __WEBPACK_DEFAULT_EXPORT__ = TextField;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['dist/esm/common/TextField/TextField.js'] = {
          name: 'TextField',
          docgenInfo: TextField.__docgenInfo,
          path: 'dist/esm/common/TextField/TextField.js',
        });
    },
    '../../node_modules/core-js/modules/es.array.index-of.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
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
  },
]);
