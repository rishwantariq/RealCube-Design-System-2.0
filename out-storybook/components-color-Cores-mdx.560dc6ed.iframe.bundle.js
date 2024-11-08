;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [1196],
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
        './src/components/color/Cores.mdx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/next/dist/compiled/react/jsx-runtime.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@mdx-js/react/lib/index.js',
                    ),
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@storybook/blocks/dist/index.mjs',
                    )
            function _createMdxContent(props) {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    {
                        children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,
                                { title: 'Colors/Theme Colors' },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,
                                {
                                    title: 'Background and Foreground',
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Background',
                                                subtitle:
                                                    "className='bg-background'",
                                                colors: {
                                                    background:
                                                        'hsl(var(--background))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Foreground',
                                                subtitle:
                                                    "className='text-foreground'",
                                                colors: {
                                                    foreground:
                                                        'hsl(var(--foreground))',
                                                },
                                            },
                                        ),
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,
                                {
                                    title: 'Primary and Secondary',
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Primary',
                                                subtitle:
                                                    "className='text-primary bg-primary'",
                                                colors: {
                                                    primary:
                                                        'hsl(var(--primary))',
                                                    'primary-foreground':
                                                        'hsl(var(--primary-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Secondary',
                                                subtitle:
                                                    "className='text-secondary bg-secondary'",
                                                colors: {
                                                    secondary:
                                                        'hsl(var(--secondary))',
                                                    'secondary-foreground':
                                                        'hsl(var(--secondary-foreground))',
                                                },
                                            },
                                        ),
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,
                                {
                                    title: 'Muted and Destructive',
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Muted',
                                                subtitle:
                                                    "className='text-muted-foreground bg-muted'",
                                                colors: {
                                                    muted: 'hsl(var(--muted))',
                                                    'muted-foreground':
                                                        'hsl(var(--muted-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Destructive',
                                                subtitle:
                                                    "className='text-destructive-foreground bg-destructive'",
                                                colors: {
                                                    destructive:
                                                        'hsl(var(--destructive))',
                                                    'destructive-foreground':
                                                        'hsl(var(--destructive-foreground))',
                                                },
                                            },
                                        ),
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,
                                {
                                    title: 'Utility Colors',
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Border',
                                                subtitle:
                                                    "className='border-border'",
                                                colors: {
                                                    border: 'hsl(var(--border))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Input',
                                                subtitle:
                                                    "className='bg-input'",
                                                colors: {
                                                    input: 'hsl(var(--input))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Ring',
                                                subtitle:
                                                    "className='ring-offset-background'",
                                                colors: {
                                                    ring: 'hsl(var(--ring))',
                                                },
                                            },
                                        ),
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,
                                {
                                    title: 'Alert Colors',
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Success',
                                                subtitle:
                                                    "className='text-success-foreground bg-success'",
                                                colors: {
                                                    success:
                                                        'hsl(var(--success))',
                                                    'success-foreground':
                                                        'hsl(var(--success-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Failure',
                                                subtitle:
                                                    "className='text-failure-foreground bg-failure'",
                                                colors: {
                                                    failure:
                                                        'hsl(var(--failure))',
                                                    'failure-foreground':
                                                        'hsl(var(--failure-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Warning',
                                                subtitle:
                                                    "className='text-warning-foreground bg-warning'",
                                                colors: {
                                                    warning:
                                                        'hsl(var(--warning))',
                                                    'warning-foreground':
                                                        'hsl(var(--warning-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Info',
                                                subtitle:
                                                    "className='text-info-foreground bg-info'",
                                                colors: {
                                                    info: 'hsl(var(--info))',
                                                    'info-foreground':
                                                        'hsl(var(--info-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Result',
                                                subtitle:
                                                    "className='text-result-foreground bg-result'",
                                                colors: {
                                                    result: 'hsl(var(--result))',
                                                    'result-foreground':
                                                        'hsl(var(--result-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Action',
                                                subtitle:
                                                    "className='text-action-foreground bg-action'",
                                                colors: {
                                                    action: 'hsl(var(--action))',
                                                    'action-foreground':
                                                        'hsl(var(--action-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Tertiary',
                                                subtitle:
                                                    "className='text-tertiary-foreground bg-tertiary'",
                                                colors: {
                                                    tertiary:
                                                        'hsl(var(--tertiary))',
                                                    'tertiary-foreground':
                                                        'hsl(var(--tertiary-foreground))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Status',
                                                subtitle:
                                                    "className='text-status-foreground bg-status'",
                                                colors: {
                                                    status: 'hsl(var(--status))',
                                                    'status-foreground':
                                                        'hsl(var(--status-foreground))',
                                                },
                                            },
                                        ),
                                    ],
                                },
                            ),
                            '\n',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,
                                {
                                    title: 'Chart Colors',
                                    children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Chart 1',
                                                colors: {
                                                    'chart-1':
                                                        'hsl(var(--chart-1))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Chart 2',
                                                colors: {
                                                    'chart-2':
                                                        'hsl(var(--chart-2))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Chart 3',
                                                colors: {
                                                    'chart-3':
                                                        'hsl(var(--chart-3))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Chart 4',
                                                colors: {
                                                    'chart-4':
                                                        'hsl(var(--chart-4))',
                                                },
                                            },
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                            _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,
                                            {
                                                title: 'Chart 5',
                                                colors: {
                                                    'chart-5':
                                                        'hsl(var(--chart-5))',
                                                },
                                            },
                                        ),
                                    ],
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
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),
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
                    : _createMdxContent()
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
