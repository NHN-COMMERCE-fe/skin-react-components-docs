'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [4905],
  {
    './dist/esm/common/RatingStar/RatingStar.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          PointColorRatingStar: () => PointColorRatingStar,
          RatingSmall: () => RatingSmall,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => RatingStar_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        utils =
          (__webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../shared/dist/esm/utils/index.js')),
        _excluded = ['score', 'isSmall', 'limit'];
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
      const RatingStar_RatingStar = function RatingStar(_ref) {
        var _ref$score = _ref.score,
          score = void 0 === _ref$score ? 0 : _ref$score,
          _ref$isSmall = _ref.isSmall,
          isSmall = void 0 !== _ref$isSmall && _ref$isSmall,
          _ref$limit = _ref.limit,
          limit = void 0 === _ref$limit ? 0 : _ref$limit,
          props = _objectWithoutProperties(_ref, _excluded),
          percentageRatingScore = (0, utils.hq)({ score });
        return (0, jsx_runtime.jsxs)(
          'button',
          Object.assign({ className: 'rating-star ' + (isSmall ? 'rating-star--sm' : '') }, props, {
            children: [
              (0, jsx_runtime.jsx)('span', {
                className: 'rating-star__progress',
                style: { width: percentageRatingScore + '%' },
              }),
              (0, jsx_runtime.jsxs)('span', { className: 'a11y', children: ['평점 별', limit, '개 중 ', score, '개'] }),
            ],
          })
        );
      };
      const RatingStar_stories = { title: 'common/RatingStar', component: RatingStar_RatingStar };
      var Default = function Default(args) {
          return (0, jsx_runtime.jsx)(RatingStar_RatingStar, Object.assign({}, args));
        },
        PointColorRatingStar = Default.bind({});
      PointColorRatingStar.args = { score: 3 };
      var RatingSmall = Default.bind({});
      (RatingSmall.args = { score: 5, isSmall: !0 }),
        (PointColorRatingStar.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(RatingStar, { ...args })' } },
          PointColorRatingStar.parameters
        )),
        (RatingSmall.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(RatingStar, { ...args })' } },
          RatingSmall.parameters
        ));
      var __namedExportsOrder = ['PointColorRatingStar', 'RatingSmall'];
    },
  },
]);
