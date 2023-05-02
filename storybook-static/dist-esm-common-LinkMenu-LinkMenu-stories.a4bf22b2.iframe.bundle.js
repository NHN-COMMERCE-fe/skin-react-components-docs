/*! For license information please see dist-esm-common-LinkMenu-LinkMenu-stories.a4bf22b2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [2610],
  {
    './dist/esm/common/LinkMenu/LinkMenu.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LinkMenuComp: () => LinkMenuComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => LinkMenu_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        dist = __webpack_require__('../../node_modules/react-router-dom/dist/index.js');
      const LinkMenu_LinkMenu = function LinkMenu(_ref) {
        var href = _ref.href,
          label = _ref.label,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className;
        return (0, jsx_runtime.jsx)(dist.rU, {
          className: 'link-menu ' + className,
          to: href,
          children: (0, jsx_runtime.jsx)('span', { className: 'link-menu__label', children: label }),
        });
      };
      const LinkMenu_stories = { title: 'common/LinkMenu', component: LinkMenu_LinkMenu };
      var LinkMenuComp = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VK, {
          children: (0, jsx_runtime.jsx)(LinkMenu_LinkMenu, Object.assign({}, args)),
        });
      }.bind({});
      (LinkMenuComp.args = { href: '/', label: '여기는 어디 일까?' }),
        (LinkMenuComp.parameters = Object.assign(
          { storySource: { source: '(args) => (_jsx(Router, { children: _jsx(LinkMenu, { ...args }) }))' } },
          LinkMenuComp.parameters
        ));
      var __namedExportsOrder = ['LinkMenuComp'];
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
