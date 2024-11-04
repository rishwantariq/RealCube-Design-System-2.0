;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5249],
    {
        './node_modules/@mdx-js/react/lib/index.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, {
                NF: () => withMDXComponents,
                Zo: () => MDXProvider,
                ah: () => useMDXComponents,
                pC: () => MDXContext,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
                {},
            )
            function withMDXComponents(Component) {
                return function boundMDXComponent(props) {
                    const allComponents = useMDXComponents(props.components)
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        Component,
                        { ...props, allComponents },
                    )
                }
            }
            function useMDXComponents(components) {
                const contextComponents =
                    react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)
                return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                    () =>
                        'function' == typeof components
                            ? components(contextComponents)
                            : { ...contextComponents, ...components },
                    [contextComponents, components],
                )
            }
            const emptyObject = {}
            function MDXProvider({
                components,
                children,
                disableParentContext,
            }) {
                let allComponents
                return (
                    (allComponents = disableParentContext
                        ? 'function' == typeof components
                            ? components({})
                            : components || emptyObject
                        : useMDXComponents(components)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        MDXContext.Provider,
                        { value: allComponents },
                        children,
                    )
                )
            }
        },
        './src/components/typography/stories/font_size.mdx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    SampleText: () => SampleText,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                    typography: () => typography,
                })
            __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/next/dist/compiled/react/jsx-runtime.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@mdx-js/react/lib/index.js',
                    ),
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@storybook/blocks/dist/index.mjs',
                    )
            const typography = {
                    type: {
                        primary:
                            '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    },
                    weight: {
                        regular: '400',
                        bold: '700',
                        extrabold: '800',
                        black: '900',
                    },
                    size: {
                        'text-xs': 12,
                        'text-sm': 14,
                        'text-base': 16,
                        'text-lg': 20,
                        'text-xl': 24,
                        'text-2xl': 28,
                        'text-3xl': 32,
                        'text-4xl': 40,
                        'text-5xl': 48,
                        'text-6xl': 60,
                        'text-7xl': 72,
                        'text-8xl': 96,
                        'text-9xl': 128,
                    },
                },
                SampleText =
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            function _createMdxContent(props) {
                const _components = Object.assign(
                    { h1: 'h1', p: 'p', strong: 'strong' },
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),
                    props.components,
                )
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    {
                        children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,
                                { title: 'Typography/Font_Size' },
                            ),
                            '\n',
                            '\n',
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                _components.h1,
                                { id: 'typography', children: 'Typography' },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _components.p,
                                {
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _components.strong,
                                            { children: 'Font:' },
                                        ),
                                        ' Nunito Sans',
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _components.p,
                                {
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _components.strong,
                                            { children: 'Weights:' },
                                        ),
                                        ' 400(regular), 700(bold), 800(extrabold), 900(black)',
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.GA,
                                {
                                    fontSizes: [
                                        Number(typography.size['text-xs']),
                                        Number(typography.size['text-sm']),
                                        Number(typography.size['text-base']),
                                        Number(typography.size['text-lg']),
                                        Number(typography.size['text-2xl']),
                                        Number(typography.size['text-3xl']),
                                        Number(typography.size['text-4xl']),
                                        Number(typography.size['text-5xl']),
                                        Number(typography.size['text-6xl']),
                                        Number(typography.size['text-7xl']),
                                        Number(typography.size['text-8xl']),
                                        Number(typography.size['text-9xl']),
                                    ],
                                    fontWeight: typography.weight.black,
                                    sampleText: SampleText,
                                    fontFamily: typography.type.primary,
                                },
                            ),
                        ],
                    },
                )
            }
            const __WEBPACK_DEFAULT_EXPORT__ = function MDXContent(props = {}) {
                const { wrapper: MDXLayout } = Object.assign(
                    {},
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),
                    props.components,
                )
                return MDXLayout
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          MDXLayout,
                          Object.assign({}, props, {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                  _createMdxContent,
                                  props,
                              ),
                          }),
                      )
                    : _createMdxContent(props)
            }
        },
        './node_modules/memoizerific sync recursive': (module) => {
            function webpackEmptyContext(req) {
                var e = new Error("Cannot find module '" + req + "'")
                throw ((e.code = 'MODULE_NOT_FOUND'), e)
            }
            ;(webpackEmptyContext.keys = () => []),
                (webpackEmptyContext.resolve = webpackEmptyContext),
                (webpackEmptyContext.id =
                    './node_modules/memoizerific sync recursive'),
                (module.exports = webpackEmptyContext)
        },
        './node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js':
            (__unused_webpack_module, exports, __webpack_require__) => {
                'use strict'
                var f = __webpack_require__(
                        './node_modules/next/dist/compiled/react/index.js',
                    ),
                    k = Symbol.for('react.element'),
                    l = Symbol.for('react.fragment'),
                    m = Object.prototype.hasOwnProperty,
                    n =
                        f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                            .ReactCurrentOwner,
                    p = { key: !0, ref: !0, __self: !0, __source: !0 }
                function q(c, a, g) {
                    var b,
                        d = {},
                        e = null,
                        h = null
                    for (b in (void 0 !== g && (e = '' + g),
                    void 0 !== a.key && (e = '' + a.key),
                    void 0 !== a.ref && (h = a.ref),
                    a))
                        m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b])
                    if (c && c.defaultProps)
                        for (b in (a = c.defaultProps))
                            void 0 === d[b] && (d[b] = a[b])
                    return {
                        $$typeof: k,
                        type: c,
                        key: e,
                        ref: h,
                        props: d,
                        _owner: n.current,
                    }
                }
                ;(exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q)
            },
        './node_modules/next/dist/compiled/react/jsx-runtime.js': (
            module,
            __unused_webpack_exports,
            __webpack_require__,
        ) => {
            'use strict'
            module.exports = __webpack_require__(
                './node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js',
            )
        },
    },
])
