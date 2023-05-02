/*! For license information please see common-Button-Button-stories.d2d521b8.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [460],
  {
    './common/Button/Button.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Danger: () => Danger,
          Dark: () => Dark,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./common/Button/Button.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'common/Button', component: _Button__WEBPACK_IMPORTED_MODULE_3__.Z };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_3__.Z,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { theme: 'default', label: 'default' };
      var Dark = Template.bind({});
      Dark.args = { theme: 'dark', label: 'Button' };
      var Danger = Template.bind({});
      (Danger.args = { theme: 'caution', label: 'caution' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Default.parameters
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Dark.parameters
        )),
        (Danger.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Danger.parameters
        ));
      var __namedExportsOrder = ['Default', 'Dark', 'Danger'];
    },
    './common/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/react/index.js'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        _excluded = ['theme', 'label', 'className', 'children'];
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
      var Button = (0, react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function (_ref, ref) {
        var _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? 'default' : _ref$theme,
          label = _ref.label,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          children = _ref.children,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)('button', Object.assign({ ref, type: 'button', className: 'btn btn--' + theme + ' ' + className }, props, { children: children || label }));
      });
      const __WEBPACK_DEFAULT_EXPORT__ = Button;
      Button.displayName = 'Button';
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              theme: {
                defaultValue: { value: 'default' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'enum', value: [{ value: '"caution"' }, { value: '"default"' }, { value: '"dark"' }] },
              },
              label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Button/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'common/Button/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
