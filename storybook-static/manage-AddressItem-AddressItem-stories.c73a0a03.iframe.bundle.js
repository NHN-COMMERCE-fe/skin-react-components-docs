/*! For license information please see manage-AddressItem-AddressItem-stories.c73a0a03.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [9199],
  {
    './manage/AddressItem/AddressItem.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AddressItem: () => AddressItem,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var _AddressItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./manage/AddressItem/AddressItem.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'manage/AddressItem',
        component: _AddressItem__WEBPACK_IMPORTED_MODULE_3__.Z,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _AddressItem__WEBPACK_IMPORTED_MODULE_3__.Z,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var AddressItem = Template.bind({});
      (AddressItem.args = {
        zipCode: '08393',
        roadAddress: '서울특별시 구로구 디지털로26길 72 (구로동, NHN KCP)',
        jibunAddress: '서울특별시 구로구 구로동 222-22',
      }),
        (AddressItem.parameters = Object.assign(
          { storySource: { source: '(args) => <AddressItemComponent {...args} />' } },
          AddressItem.parameters
        ));
      var __namedExportsOrder = ['AddressItem'];
    },
    './manage/AddressItem/AddressItem.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        AddressItem = function AddressItem(_ref) {
          var _ref$roadAddressLabel = _ref.roadAddressLabel,
            roadAddressLabel = void 0 === _ref$roadAddressLabel ? '도로명' : _ref$roadAddressLabel,
            _ref$jibunAddressLabe = _ref.jibunAddressLabel,
            jibunAddressLabel = void 0 === _ref$jibunAddressLabe ? '지번' : _ref$jibunAddressLabe,
            _ref$zipCode = _ref.zipCode,
            zipCode = void 0 === _ref$zipCode ? '' : _ref$zipCode,
            _ref$roadAddress = _ref.roadAddress,
            roadAddress = void 0 === _ref$roadAddress ? '' : _ref$roadAddress,
            _ref$jibunAddress = _ref.jibunAddress,
            jibunAddress = void 0 === _ref$jibunAddress ? '' : _ref$jibunAddress,
            _onClick = _ref.onClick;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className: 'address',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                className: 'address__zip-code',
                children: zipCode,
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('dl', {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'address__row',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dt', {
                        className: 'address__label',
                        children: roadAddressLabel,
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dd', {
                        className: 'address__detail',
                        children: roadAddress,
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'address__row',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dt', {
                        className: 'address__label',
                        children: jibunAddressLabel,
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dd', {
                        className: 'address__detail',
                        children: jibunAddress,
                      }),
                    ],
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
                className: 'address__btn',
                onClick: function onClick() {
                  return null == _onClick ? void 0 : _onClick({ zipCode, roadAddress, jibunAddress });
                },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                  className: 'a11y',
                  children: 'Address',
                }),
              }),
            ],
          });
        };
      AddressItem.displayName = 'AddressItem';
      const __WEBPACK_DEFAULT_EXPORT__ = AddressItem;
      try {
        (AddressItem.displayName = 'AddressItem'),
          (AddressItem.__docgenInfo = {
            description: '',
            displayName: 'AddressItem',
            props: {
              zipCode: {
                defaultValue: { value: '' },
                description: '',
                name: 'zipCode',
                required: !1,
                type: { name: 'string' },
              },
              roadAddress: {
                defaultValue: { value: '' },
                description: '',
                name: 'roadAddress',
                required: !1,
                type: { name: 'string' },
              },
              jibunAddress: {
                defaultValue: { value: '' },
                description: '',
                name: 'jibunAddress',
                required: !1,
                type: { name: 'string' },
              },
              roadAddressLabel: {
                defaultValue: { value: '도로명' },
                description: '',
                name: 'roadAddressLabel',
                required: !1,
                type: { name: 'string' },
              },
              jibunAddressLabel: {
                defaultValue: { value: '지번' },
                description: '',
                name: 'jibunAddressLabel',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(({ zipCode, roadAddress, jibunAddress }: AddressItemPropsOnClickParam) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['manage/AddressItem/AddressItem.tsx#AddressItem'] = {
              docgenInfo: AddressItem.__docgenInfo,
              name: 'AddressItem',
              path: 'manage/AddressItem/AddressItem.tsx#AddressItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
