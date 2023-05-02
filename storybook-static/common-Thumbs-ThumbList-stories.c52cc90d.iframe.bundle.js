'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [2408],
  {
    './common/Thumbs/ThumbList.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ThumbListComp: () => ThumbListComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ThumbList_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var dist = __webpack_require__('../../node_modules/react-router-dom/dist/index.js'),
        ThumbItem = __webpack_require__('./common/Thumbs/ThumbItem.tsx'),
        constants = __webpack_require__('../shared/dist/esm/constants/index.js'),
        jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        ThumbList = function ThumbList(_ref) {
          var _ref$displayType = _ref.displayType,
            displayType = void 0 === _ref$displayType ? constants.rL.LIST : _ref$displayType,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            _ref$style = _ref.style,
            style = void 0 === _ref$style ? {} : _ref$style,
            children = _ref.children;
          return (0, jsx_runtime.jsx)('div', { style, className: 'thumb-' + displayType + ' ' + className, children });
        };
      ThumbList.displayName = 'ThumbList';
      const Thumbs_ThumbList = ThumbList;
      try {
        (ThumbList.displayName = 'ThumbList'),
          (ThumbList.__docgenInfo = {
            description: '',
            displayName: 'ThumbList',
            props: {
              onClientError: {
                defaultValue: null,
                description: '',
                name: 'onClientError',
                required: !1,
                type: { name: '((errorInfo: ErrorOption) => void)' },
              },
              displayType: {
                defaultValue: { value: 'LIST' },
                description: '',
                name: 'displayType',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"SWIPE"' },
                    { value: '"LIST"' },
                    { value: '"GALLERY"' },
                    { value: '"SIMPLE_IMAGE"' },
                    { value: '"CART"' },
                    { value: '"PRODUCT_MOVE"' },
                  ],
                },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              style: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Thumbs/ThumbList.tsx#ThumbList'] = {
              docgenInfo: ThumbList.__docgenInfo,
              name: 'ThumbList',
              path: 'common/Thumbs/ThumbList.tsx#ThumbList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const ThumbList_stories = { title: 'components/ThumbList', component: Thumbs_ThumbList };
      var items = [
          {
            id: 1,
            href: 'https://www.naver.com',
            src: 'https://rlyfaazj0.toastcdn.net/20210602/093953.536672000/91ebb3ee9184add9b2ce8af7dcbf93c4.jpg',
            title: 'product1',
            desc: 'description',
          },
          { id: 2, href: '', src: '', title: 'product2', desc: 'description' },
          { id: 3, href: '', src: '', title: 'product3', desc: 'description' },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            Thumbs_ThumbList,
            Object.assign({}, args, {
              children: (0, jsx_runtime.jsx)(dist.VK, {
                children: items.map(function (data) {
                  return (0,
                  jsx_runtime.jsxs)(ThumbItem.Z, { href: data.href, src: data.src, children: [(0, jsx_runtime.jsx)('h2', { children: data.title }), (0, jsx_runtime.jsx)('p', { children: data.desc })] }, data.id);
                }),
              }),
            })
          );
        };
      Template.displayName = 'Template';
      var ThumbListComp = Template.bind({});
      ThumbListComp.parameters = Object.assign(
        {
          storySource: {
            source:
              '(args) => (\n  <ThumbList {...args}>\n    <Router>\n      {items.map((data) => (\n        <ThumbItem key={data.id} href={data.href} src={data.src}>\n          <h2>{data.title}</h2>\n          <p>{data.desc}</p>\n        </ThumbItem>\n      ))}\n    </Router>\n  </ThumbList>\n)',
          },
        },
        ThumbListComp.parameters
      );
      var __namedExportsOrder = ['ThumbListComp'];
    },
    './common/Thumbs/ThumbItem.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../shared/dist/esm/utils/index.js'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        ThumbItem = function ThumbItem(_ref) {
          var href = _ref.href,
            _ref$HoverViewCompone = _ref.HoverViewComponent,
            HoverViewComponent =
              void 0 === _ref$HoverViewCompone
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    {}
                  )
                : _ref$HoverViewCompone,
            _ref$resize = _ref.resize,
            resize = void 0 === _ref$resize ? '' : _ref$resize,
            adult = _ref.adult,
            src = _ref.src,
            children = _ref.children,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            _ref$alt = _ref.alt,
            alt = void 0 === _ref$alt ? '' : _ref$alt;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
            className: 'thumb-item ' + className,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
                className: 'thumb-item__media',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('a', {
                    href,
                    className: 'thumb-item__img-box',
                    children: [
                      adult &&
                        !(0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_0__.kJ)() &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                          className: 'bg bg--adult thumb-item__adult',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                            className: 'a11y',
                            children: '성인 인증이 필요 합니다.',
                          }),
                        }),
                      src &&
                        (!adult || (0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_0__.kJ)()) &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                          className: 'thumb-item__img',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('img', {
                            src: src + (resize ? '?' + resize : ''),
                            alt,
                            loading: 'lazy',
                          }),
                        }),
                    ],
                  }),
                  HoverViewComponent,
                ],
              }),
              children &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                  className: 'thumb-item__info',
                  children,
                }),
            ],
          });
        };
      ThumbItem.displayName = 'ThumbItem';
      const __WEBPACK_DEFAULT_EXPORT__ = ThumbItem;
      try {
        (ThumbItem.displayName = 'ThumbItem'),
          (ThumbItem.__docgenInfo = {
            description: '',
            displayName: 'ThumbItem',
            props: {
              onClientError: {
                defaultValue: null,
                description: '',
                name: 'onClientError',
                required: !1,
                type: { name: '((errorInfo: ErrorOption) => void)' },
              },
              href: { defaultValue: null, description: '', name: 'href', required: !0, type: { name: 'string' } },
              src: { defaultValue: null, description: '', name: 'src', required: !1, type: { name: 'string' } },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              adult: { defaultValue: null, description: '', name: 'adult', required: !1, type: { name: 'boolean' } },
              HoverViewComponent: {
                defaultValue: { value: '<></>' },
                description: '',
                name: 'HoverViewComponent',
                required: !1,
                type: { name: 'Element' },
              },
              resize: {
                defaultValue: { value: '' },
                description: '',
                name: 'resize',
                required: !1,
                type: { name: 'string' },
              },
              alt: {
                defaultValue: { value: '' },
                description: '',
                name: 'alt',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Thumbs/ThumbItem.tsx#ThumbItem'] = {
              docgenInfo: ThumbItem.__docgenInfo,
              name: 'ThumbItem',
              path: 'common/Thumbs/ThumbItem.tsx#ThumbItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
