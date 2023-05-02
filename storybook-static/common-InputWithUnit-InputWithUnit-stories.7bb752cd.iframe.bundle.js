'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [7352],
  {
    './common/InputWithUnit/InputWithUnit.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          InputWithUnitComp: () => InputWithUnitComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => InputWithUnit_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.number.constructor.js');
      var react = __webpack_require__('../../node_modules/react/index.js'),
        utils = __webpack_require__('../shared/dist/esm/utils/index.js'),
        TextField = __webpack_require__('./common/TextField/TextField.tsx'),
        jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        _excluded = ['unitLabel', 'className', 'value', 'valid', 'showsComma'];
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
      var InputWithUnit = function InputWithUnit(_ref) {
        var unitLabel = _ref.unitLabel,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          value = _ref.value,
          valid = _ref.valid,
          showsComma = _ref.showsComma,
          props = _objectWithoutProperties(_ref, _excluded),
          _showsComma = (0, react.useMemo)(
            function () {
              return (
                !(!showsComma || 'NUMBER' !== valid) ||
                (showsComma &&
                  'NUMBER' !== valid &&
                  console.error('showsComma 옵션을 활성화하려면 valid가 NUMBER로 설정되어야 합니다.'),
                !1)
              );
            },
            [valid, showsComma]
          ),
          _value = (0, react.useMemo)(
            function () {
              if (void 0 !== value) return _showsComma ? (0, utils.o5)(Number(value)) : value;
            },
            [_showsComma, value]
          );
        return (0, jsx_runtime.jsxs)('div', {
          className: 'input-with-unit ' + className,
          children: [
            (0, jsx_runtime.jsx)(
              TextField.Z,
              Object.assign({}, props, { className: 'input-with-unit__input', value: _value, valid, placeholder: '' })
            ),
            (0, jsx_runtime.jsxs)('span', { className: 'input-with-unit__unit', children: [unitLabel, ' '] }),
          ],
        });
      };
      InputWithUnit.displayName = 'InputWithUnit';
      const InputWithUnit_InputWithUnit = InputWithUnit;
      try {
        (InputWithUnit.displayName = 'InputWithUnit'),
          (InputWithUnit.__docgenInfo = {
            description: '',
            displayName: 'InputWithUnit',
            props: {
              testId: { defaultValue: null, description: '', name: 'testId', required: !1, type: { name: 'string' } },
              valid: {
                defaultValue: null,
                description: '',
                name: 'valid',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"NUMBER"' },
                    { value: '"ENGLISH_NUMBER"' },
                    { value: '"ENGLISH_NUMBER_SPECIAL"' },
                    { value: '"CURRENCY"' },
                    { value: '"NEGATIVE_NUM"' },
                    { value: '"DECIMAL_NUM"' },
                    { value: '"NO_SPECIAL"' },
                    { value: '"NO_PART_SPECIAL"' },
                    { value: '"NO_SPECIAL_SPACE"' },
                    { value: '"NO_SPACE"' },
                    { value: '"NO_ENGLISH"' },
                    { value: '"NO_NUMBER"' },
                    { value: '"NO_PASSWORD_SPECIAL"' },
                    { value: '"NON_PASSWORD_SPECIAL"' },
                    { value: '"NO_KOREAN"' },
                    { value: '"NO_COMMON_SPECIAL"' },
                    { value: '"NO_QUATATION"' },
                    { value: '"EMAIL_ID"' },
                    { value: '"EMAIL_DOMAIN"' },
                  ],
                },
              },
              unitLabel: {
                defaultValue: null,
                description: '',
                name: 'unitLabel',
                required: !0,
                type: { name: 'string' },
              },
              showsComma: {
                defaultValue: null,
                description: '',
                name: 'showsComma',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/InputWithUnit/InputWithUnit.tsx#InputWithUnit'] = {
              docgenInfo: InputWithUnit.__docgenInfo,
              name: 'InputWithUnit',
              path: 'common/InputWithUnit/InputWithUnit.tsx#InputWithUnit',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const InputWithUnit_stories = { title: 'common/InputWithUnit', component: InputWithUnit_InputWithUnit };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(InputWithUnit_InputWithUnit, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var InputWithUnitComp = Template.bind({});
      (InputWithUnitComp.args = { unitLabel: '원', showsComma: !0, value: '10000', valid: 'NUMBER' }),
        (InputWithUnitComp.parameters = Object.assign(
          { storySource: { source: '(args) => <InputWithUnit {...args} />' } },
          InputWithUnitComp.parameters
        ));
      var __namedExportsOrder = ['InputWithUnitComp'];
    },
    './common/TextField/TextField.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.replace.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.regexp.exec.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/react/index.js'),
        _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          '../shared/dist/esm/constants/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
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
      var TextField = (0, react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function (_ref, ref) {
        var value = _ref.value,
          className = _ref.className,
          _ref$testId = _ref.testId,
          testId = void 0 === _ref$testId ? 'text-field' : _ref$testId,
          valid = _ref.valid,
          onChange = _ref.onChange,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)('span', {
          className: 'text-field ' + (null != className ? className : ''),
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
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
                    ((value = value.replace(_shopby_shared_constants__WEBPACK_IMPORTED_MODULE_7__.Iu[valid], '')),
                    (e.currentTarget.value = value)),
                    null == onChange || onChange(e);
                },
              },
              props
            )
          ),
        });
      });
      TextField.displayName = 'TextField';
      const __WEBPACK_DEFAULT_EXPORT__ = TextField;
      try {
        (TextField.displayName = 'TextField'),
          (TextField.__docgenInfo = {
            description: '',
            displayName: 'TextField',
            props: {
              testId: {
                defaultValue: { value: 'text-field' },
                description: '',
                name: 'testId',
                required: !1,
                type: { name: 'string' },
              },
              valid: {
                defaultValue: null,
                description: '',
                name: 'valid',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"NUMBER"' },
                    { value: '"ENGLISH_NUMBER"' },
                    { value: '"ENGLISH_NUMBER_SPECIAL"' },
                    { value: '"CURRENCY"' },
                    { value: '"NEGATIVE_NUM"' },
                    { value: '"DECIMAL_NUM"' },
                    { value: '"NO_SPECIAL"' },
                    { value: '"NO_PART_SPECIAL"' },
                    { value: '"NO_SPECIAL_SPACE"' },
                    { value: '"NO_SPACE"' },
                    { value: '"NO_ENGLISH"' },
                    { value: '"NO_NUMBER"' },
                    { value: '"NO_PASSWORD_SPECIAL"' },
                    { value: '"NON_PASSWORD_SPECIAL"' },
                    { value: '"NO_KOREAN"' },
                    { value: '"NO_COMMON_SPECIAL"' },
                    { value: '"NO_QUATATION"' },
                    { value: '"EMAIL_ID"' },
                    { value: '"EMAIL_DOMAIN"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/TextField/TextField.tsx#TextField'] = {
              docgenInfo: TextField.__docgenInfo,
              name: 'TextField',
              path: 'common/TextField/TextField.tsx#TextField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
