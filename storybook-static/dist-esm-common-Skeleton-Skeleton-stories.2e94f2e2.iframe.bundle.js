/*! For license information please see dist-esm-common-Skeleton-Skeleton-stories.2e94f2e2.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [545],
  {
    './dist/esm/common/Skeleton/Skeleton.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Gallery: () => Gallery,
          List: () => List,
          Square: () => Square,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Skeleton_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const Skeleton_SkeletonGallery = function SkeletonGallery() {
        return (0, jsx_runtime.jsxs)('div', {
          className: 'skeleton skeleton--gallery',
          children: [
            (0, jsx_runtime.jsx)('div', { className: 'skeleton__media' }),
            (0, jsx_runtime.jsx)('div', { className: 'skeleton__line' }),
            (0, jsx_runtime.jsx)('div', { className: 'skeleton__line' }),
          ],
        });
      };
      const Skeleton_SkeletonList = function SkeletonList() {
        return (0, jsx_runtime.jsxs)('div', {
          className: 'skeleton skeleton--list',
          children: [
            (0, jsx_runtime.jsx)('div', { className: 'skeleton__media' }),
            (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)('div', { className: 'skeleton__line skeleton__line--tit' }),
                (0, jsx_runtime.jsx)('div', { className: 'skeleton__line' }),
              ],
            }),
          ],
        });
      };
      const Skeleton_SkeletonSquare = function SkeletonSquare() {
        return (0, jsx_runtime.jsx)('div', {
          className: 'skeleton',
          children: (0, jsx_runtime.jsx)('div', { className: 'skeleton__media' }),
        });
      };
      const Skeleton_Skeleton = function Skeleton(_ref) {
        var _component$type,
          _component$type2,
          component = {
            SQUARE: function SQUARE() {
              return (0, jsx_runtime.jsx)(Skeleton_SkeletonSquare, {});
            },
            GALLERY: function GALLERY() {
              return (0, jsx_runtime.jsx)(Skeleton_SkeletonGallery, {});
            },
            LIST: function LIST() {
              return (0, jsx_runtime.jsx)(Skeleton_SkeletonList, {});
            },
          };
        return null !==
          (_component$type =
            null === (_component$type2 = component[_ref.type]) || void 0 === _component$type2
              ? void 0
              : _component$type2.call(component)) && void 0 !== _component$type
          ? _component$type
          : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {});
      };
      const Skeleton_stories = { title: 'components/Skeleton', component: Skeleton_Skeleton };
      var Template = function Template(args) {
          return (0, jsx_runtime.jsx)(Skeleton_Skeleton, Object.assign({}, args));
        },
        Square = Template.bind({});
      Square.args = { type: 'SQUARE' };
      var Gallery = Template.bind({});
      Gallery.args = { type: 'GALLERY' };
      var List = Template.bind({});
      (List.args = { type: 'LIST' }),
        (Square.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(Skeleton, { ...args })' } },
          Square.parameters
        )),
        (Gallery.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(Skeleton, { ...args })' } },
          Gallery.parameters
        )),
        (List.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(Skeleton, { ...args })' } },
          List.parameters
        ));
      var __namedExportsOrder = ['Square', 'Gallery', 'List'];
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
