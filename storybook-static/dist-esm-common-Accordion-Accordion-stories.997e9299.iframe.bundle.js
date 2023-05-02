/*! For license information please see dist-esm-common-Accordion-Accordion-stories.997e9299.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [2459],
  {
    './dist/esm/common/Accordion/Accordion.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AccordionComp: () => AccordionComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Accordion_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const Accordion_Accordion = function Accordion(_ref) {
        var title = _ref.title,
          children = _ref.children,
          _ref$isOpen = _ref.isOpen,
          isOpen = void 0 !== _ref$isOpen && _ref$isOpen,
          className = _ref.className,
          Title = _ref.Title;
        return (0, jsx_runtime.jsxs)('details', {
          className: 'accordion ' + className,
          open: isOpen,
          children: [
            (0, jsx_runtime.jsx)('summary', { className: 'accordion__title', children: null != title ? title : Title }),
            (0, jsx_runtime.jsx)('div', { className: 'accordion__items', children }),
          ],
        });
      };
      const Accordion_stories = { title: 'common/Accordion', component: Accordion_Accordion };
      var AccordionComp = function Template(args) {
        return (0, jsx_runtime.jsx)(
          Accordion_Accordion,
          Object.assign({}, args, {
            children: (0, jsx_runtime.jsx)('summary', { className: 'accordion__desc', children: 'Test Component' }),
          })
        );
      }.bind({});
      (AccordionComp.args = { title: 'title', isOpen: !1 }),
        (AccordionComp.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (_jsx(Accordion, { ...args, children: _jsx("summary", { className: "accordion__desc", children: "Test Component" }) }))',
            },
          },
          AccordionComp.parameters
        ));
      var __namedExportsOrder = ['AccordionComp'];
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
