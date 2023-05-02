'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [9858],
  {
    './common/Slider/Slider.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Slider: () => Slider_stories_Slider,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Slider_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var dist = __webpack_require__('../../node_modules/react-router-dom/dist/index.js'),
        ThumbItem = __webpack_require__('./common/Thumbs/ThumbItem.tsx'),
        swiper_esm =
          (__webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/swiper/swiper.esm.js')),
        swiper_react = __webpack_require__('../../node_modules/swiper/react/swiper-react.js'),
        jsx_runtime =
          (__webpack_require__('../../node_modules/swiper/swiper.min.css'),
          __webpack_require__('../../node_modules/swiper/modules/pagination/pagination.min.css'),
          __webpack_require__('../../node_modules/swiper/modules/navigation/navigation.min.css'),
          __webpack_require__('../../node_modules/swiper/modules/effect-fade/effect-fade.min.css'),
          __webpack_require__('../../node_modules/react/jsx-runtime.js')),
        _excluded = ['effect', 'navigation', 'pagination', 'className', 'children'];
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
      var Slider = function Slider(_ref) {
        var effect = _ref.effect,
          navigation = _ref.navigation,
          pagination = _ref.pagination,
          className = _ref.className,
          children = _ref.children,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, jsx_runtime.jsx)(
          swiper_react.tq,
          Object.assign(
            {
              effect,
              modules: [swiper_esm.tl, swiper_esm.W_, swiper_esm.pt, swiper_esm.xW, swiper_esm.s5],
              className,
              navigation,
              pagination,
            },
            props,
            { children }
          )
        );
      };
      Slider.displayName = 'Slider';
      const Slider_Slider = Slider;
      try {
        (SwiperSlide.displayName = 'SwiperSlide'),
          (SwiperSlide.__docgenInfo = { description: '', displayName: 'SwiperSlide', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Slider/Slider.tsx#SwiperSlide'] = {
              docgenInfo: SwiperSlide.__docgenInfo,
              name: 'SwiperSlide',
              path: 'common/Slider/Slider.tsx#SwiperSlide',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Slider.displayName = 'Slider'),
          (Slider.__docgenInfo = { description: '', displayName: 'Slider', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Slider/Slider.tsx#Slider'] = {
              docgenInfo: Slider.__docgenInfo,
              name: 'Slider',
              path: 'common/Slider/Slider.tsx#Slider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Slider_stories = { title: 'common/Slider', component: Slider_Slider };
      var items = [
          { href: '', src: '', children: 'item 1' },
          { href: '', src: '', children: 'item 2' },
          { href: '', src: '', children: 'item 3' },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(dist.VK, {
            children: (0, jsx_runtime.jsx)(
              Slider_Slider,
              Object.assign({}, args, {
                children: items.map(function (item, idx) {
                  return (0,
                  jsx_runtime.jsx)(swiper_react.o5, { children: (0, jsx_runtime.jsx)(ThumbItem.Z, Object.assign({}, item)) }, idx);
                }),
              })
            ),
          });
        };
      Template.displayName = 'Template';
      var Slider_stories_Slider = Template.bind({});
      (Slider_stories_Slider.args = {
        pagination: {
          clickable: !0,
          renderBullet: function renderBullet(_, className) {
            return '<span class="' + className + '"></span>';
          },
        },
        navigation: !1,
        draggable: !0,
        loop: !1,
        cssMode: !0,
        spaceBetween: 10,
        className: 'my-slider',
        slidesPerView: 6,
      }),
        (Slider_stories_Slider.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Router>\n    <SliderComponent {...args}>\n      {items.map((item, idx) => (\n        <Slide key={idx}>\n          <ThumbItem {...item} />\n        </Slide>\n      ))}\n    </SliderComponent>\n  </Router>\n)',
            },
          },
          Slider_stories_Slider.parameters
        ));
      var __namedExportsOrder = ['Slider'];
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
