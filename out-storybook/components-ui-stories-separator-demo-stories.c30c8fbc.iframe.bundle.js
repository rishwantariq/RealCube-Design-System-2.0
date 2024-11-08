'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [2756],
    {
        './node_modules/@radix-ui/react-separator/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { f: () => dist_Root })
            var react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                dist =
                    (__webpack_require__(
                        './node_modules/next/dist/compiled/react-dom/index.js',
                    ),
                    __webpack_require__(
                        './node_modules/@radix-ui/react-slot/dist/index.mjs',
                    )),
                jsx_runtime = __webpack_require__(
                    './node_modules/next/dist/compiled/react/jsx-runtime.js',
                ),
                Primitive = [
                    'a',
                    'button',
                    'div',
                    'form',
                    'h2',
                    'h3',
                    'img',
                    'input',
                    'label',
                    'li',
                    'nav',
                    'ol',
                    'p',
                    'span',
                    'svg',
                    'ul',
                ].reduce((primitive, node) => {
                    const Node = react.forwardRef((props, forwardedRef) => {
                        const { asChild, ...primitiveProps } = props,
                            Comp = asChild ? dist.g7 : node
                        return (
                            'undefined' != typeof window &&
                                (window[Symbol.for('radix-ui')] = !0),
                            (0, jsx_runtime.jsx)(Comp, {
                                ...primitiveProps,
                                ref: forwardedRef,
                            })
                        )
                    })
                    return (
                        (Node.displayName = `Primitive.${node}`),
                        { ...primitive, [node]: Node }
                    )
                }, {})
            var DEFAULT_ORIENTATION = 'horizontal',
                ORIENTATIONS = ['horizontal', 'vertical'],
                Separator = react.forwardRef((props, forwardedRef) => {
                    const {
                            decorative,
                            orientation: orientationProp = DEFAULT_ORIENTATION,
                            ...domProps
                        } = props,
                        orientation = (function isValidOrientation(
                            orientation,
                        ) {
                            return ORIENTATIONS.includes(orientation)
                        })(orientationProp)
                            ? orientationProp
                            : DEFAULT_ORIENTATION,
                        semanticProps = decorative
                            ? { role: 'none' }
                            : {
                                  'aria-orientation':
                                      'vertical' === orientation
                                          ? orientation
                                          : void 0,
                                  role: 'separator',
                              }
                    return (0, jsx_runtime.jsx)(Primitive.div, {
                        'data-orientation': orientation,
                        ...semanticProps,
                        ...domProps,
                        ref: forwardedRef,
                    })
                })
            Separator.displayName = 'Separator'
            var dist_Root = Separator
        },
        './node_modules/@radix-ui/react-slot/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                g7: () => Slot,
                A4: () => Slottable,
            })
            var react = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            function composeRefs(...refs) {
                return (node) =>
                    refs.forEach((ref) =>
                        (function setRef(ref, value) {
                            'function' == typeof ref
                                ? ref(value)
                                : null != ref && (ref.current = value)
                        })(ref, node),
                    )
            }
            var jsx_runtime = __webpack_require__(
                    './node_modules/next/dist/compiled/react/jsx-runtime.js',
                ),
                Slot = react.forwardRef((props, forwardedRef) => {
                    const { children, ...slotProps } = props,
                        childrenArray = react.Children.toArray(children),
                        slottable = childrenArray.find(isSlottable)
                    if (slottable) {
                        const newElement = slottable.props.children,
                            newChildren = childrenArray.map((child) =>
                                child === slottable
                                    ? react.Children.count(newElement) > 1
                                        ? react.Children.only(null)
                                        : react.isValidElement(newElement)
                                          ? newElement.props.children
                                          : null
                                    : child,
                            )
                        return (0, jsx_runtime.jsx)(SlotClone, {
                            ...slotProps,
                            ref: forwardedRef,
                            children: react.isValidElement(newElement)
                                ? react.cloneElement(
                                      newElement,
                                      void 0,
                                      newChildren,
                                  )
                                : null,
                        })
                    }
                    return (0, jsx_runtime.jsx)(SlotClone, {
                        ...slotProps,
                        ref: forwardedRef,
                        children,
                    })
                })
            Slot.displayName = 'Slot'
            var SlotClone = react.forwardRef((props, forwardedRef) => {
                const { children, ...slotProps } = props
                if (react.isValidElement(children)) {
                    const childrenRef = (function getElementRef(element) {
                        let getter = Object.getOwnPropertyDescriptor(
                                element.props,
                                'ref',
                            )?.get,
                            mayWarn =
                                getter &&
                                'isReactWarning' in getter &&
                                getter.isReactWarning
                        if (mayWarn) return element.ref
                        if (
                            ((getter = Object.getOwnPropertyDescriptor(
                                element,
                                'ref',
                            )?.get),
                            (mayWarn =
                                getter &&
                                'isReactWarning' in getter &&
                                getter.isReactWarning),
                            mayWarn)
                        )
                            return element.props.ref
                        return element.props.ref || element.ref
                    })(children)
                    return react.cloneElement(children, {
                        ...mergeProps(slotProps, children.props),
                        ref: forwardedRef
                            ? composeRefs(forwardedRef, childrenRef)
                            : childrenRef,
                    })
                }
                return react.Children.count(children) > 1
                    ? react.Children.only(null)
                    : null
            })
            SlotClone.displayName = 'SlotClone'
            var Slottable = ({ children }) =>
                (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children })
            function isSlottable(child) {
                return react.isValidElement(child) && child.type === Slottable
            }
            function mergeProps(slotProps, childProps) {
                const overrideProps = { ...childProps }
                for (const propName in childProps) {
                    const slotPropValue = slotProps[propName],
                        childPropValue = childProps[propName]
                    ;/^on[A-Z]/.test(propName)
                        ? slotPropValue && childPropValue
                            ? (overrideProps[propName] = (...args) => {
                                  childPropValue(...args),
                                      slotPropValue(...args)
                              })
                            : slotPropValue &&
                              (overrideProps[propName] = slotPropValue)
                        : 'style' === propName
                          ? (overrideProps[propName] = {
                                ...slotPropValue,
                                ...childPropValue,
                            })
                          : 'className' === propName &&
                            (overrideProps[propName] = [
                                slotPropValue,
                                childPropValue,
                            ]
                                .filter(Boolean)
                                .join(' '))
                }
                return { ...slotProps, ...overrideProps }
            }
        },
        './src/components/ui/stories/separator-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    SeparatorDemo: () => SeparatorDemo,
                    SeparatorHorizontal: () => SeparatorHorizontal,
                    SeparatorVertical: () => SeparatorVertical,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _SeparatorDemo$parame,
                _SeparatorDemo$parame2,
                _SeparatorHorizontal$,
                _SeparatorHorizontal$2,
                _SeparatorVertical$pa,
                _SeparatorVertical$pa2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    './src/components/ui/separator.tsx',
                ),
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
            function ownKeys(e, r) {
                var t = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    r &&
                        (o = o.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(e, r)
                                .enumerable
                        })),
                        t.push.apply(t, o)
                }
                return t
            }
            function _objectSpread(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                        ? ownKeys(Object(t), !0).forEach(function (r) {
                              ;(0,
                              _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                  e,
                                  r,
                                  t[r],
                              )
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(t),
                            )
                          : ownKeys(Object(t)).forEach(function (r) {
                                Object.defineProperty(
                                    e,
                                    r,
                                    Object.getOwnPropertyDescriptor(t, r),
                                )
                            })
                }
                return e
            }
            const __WEBPACK_DEFAULT_EXPORT__ = {
                title: 'RealCube/separator',
                component: function component() {
                    return __jsx(
                        'div',
                        null,
                        __jsx(
                            'div',
                            { className: 'space-y-1' },
                            __jsx(
                                'h4',
                                {
                                    className:
                                        'text-sm font-medium leading-none',
                                },
                                'Radix Primitives',
                            ),
                            __jsx(
                                'p',
                                { className: 'text-sm text-muted-foreground' },
                                'An open-source UI component library.',
                            ),
                        ),
                        __jsx(_separator__WEBPACK_IMPORTED_MODULE_2__.Z, {
                            className: 'my-4',
                        }),
                        __jsx(
                            'div',
                            {
                                className:
                                    'flex h-5 items-center space-x-4 text-sm',
                            },
                            __jsx('div', null, 'Blog'),
                            __jsx(_separator__WEBPACK_IMPORTED_MODULE_2__.Z, {
                                orientation: 'vertical',
                            }),
                            __jsx('div', null, 'Docs'),
                            __jsx(_separator__WEBPACK_IMPORTED_MODULE_2__.Z, {
                                orientation: 'vertical',
                            }),
                            __jsx('div', null, 'Source'),
                        ),
                    )
                },
                parameters: { layout: 'centered' },
            }
            var SeparatorDemo = { args: {} },
                SeparatorHorizontal = {
                    args: {},
                    render: function render() {
                        return __jsx(
                            react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                            null,
                            __jsx(
                                'div',
                                { className: 'flex flex-col gap-2' },
                                __jsx('h1', null, 'Shadcn-ui'),
                                __jsx(
                                    _separator__WEBPACK_IMPORTED_MODULE_2__.Z,
                                    { orientation: 'horizontal' },
                                ),
                                __jsx(
                                    'p',
                                    null,
                                    'This is NOT a component library. Its a collection of re-usable components that you can copy and paste into your apps.',
                                ),
                            ),
                        )
                    },
                },
                SeparatorVertical = {
                    args: {},
                    render: function render() {
                        return __jsx(
                            react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                            null,
                            __jsx(
                                'div',
                                { className: 'flex gap-2' },
                                __jsx('span', null, 'Shadcn'),
                                __jsx(
                                    _separator__WEBPACK_IMPORTED_MODULE_2__.Z,
                                    { orientation: 'vertical' },
                                ),
                                __jsx('span', null, 'UI'),
                            ),
                        )
                    },
                }
            ;(SeparatorDemo.parameters = _objectSpread(
                _objectSpread({}, SeparatorDemo.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_SeparatorDemo$parame =
                                    SeparatorDemo.parameters) ||
                                void 0 === _SeparatorDemo$parame
                                ? void 0
                                : _SeparatorDemo$parame.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{\n  args: {}\n}' },
                                null ===
                                    (_SeparatorDemo$parame2 =
                                        SeparatorDemo.parameters) ||
                                    void 0 === _SeparatorDemo$parame2 ||
                                    null ===
                                        (_SeparatorDemo$parame2 =
                                            _SeparatorDemo$parame2.docs) ||
                                    void 0 === _SeparatorDemo$parame2
                                    ? void 0
                                    : _SeparatorDemo$parame2.source,
                            ),
                        },
                    ),
                },
            )),
                (SeparatorHorizontal.parameters = _objectSpread(
                    _objectSpread({}, SeparatorHorizontal.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_SeparatorHorizontal$ =
                                        SeparatorHorizontal.parameters) ||
                                    void 0 === _SeparatorHorizontal$
                                    ? void 0
                                    : _SeparatorHorizontal$.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  args: {},\n  render: () => <>\n            <div className="flex flex-col gap-2">\n                <h1>Shadcn-ui</h1>\n                <Separator orientation="horizontal" />\n                <p>\n                    This is NOT a component library. Its a collection of\n                    re-usable components that you can copy and paste into your\n                    apps.\n                </p>\n            </div>\n        </>\n}',
                                    },
                                    null ===
                                        (_SeparatorHorizontal$2 =
                                            SeparatorHorizontal.parameters) ||
                                        void 0 === _SeparatorHorizontal$2 ||
                                        null ===
                                            (_SeparatorHorizontal$2 =
                                                _SeparatorHorizontal$2.docs) ||
                                        void 0 === _SeparatorHorizontal$2
                                        ? void 0
                                        : _SeparatorHorizontal$2.source,
                                ),
                            },
                        ),
                    },
                )),
                (SeparatorVertical.parameters = _objectSpread(
                    _objectSpread({}, SeparatorVertical.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_SeparatorVertical$pa =
                                        SeparatorVertical.parameters) ||
                                    void 0 === _SeparatorVertical$pa
                                    ? void 0
                                    : _SeparatorVertical$pa.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  args: {},\n  render: () => <>\n            <div className="flex gap-2">\n                <span>Shadcn</span>\n                <Separator orientation="vertical" />\n                <span>UI</span>\n            </div>\n        </>\n}',
                                    },
                                    null ===
                                        (_SeparatorVertical$pa2 =
                                            SeparatorVertical.parameters) ||
                                        void 0 === _SeparatorVertical$pa2 ||
                                        null ===
                                            (_SeparatorVertical$pa2 =
                                                _SeparatorVertical$pa2.docs) ||
                                        void 0 === _SeparatorVertical$pa2
                                        ? void 0
                                        : _SeparatorVertical$pa2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'SeparatorDemo',
                'SeparatorHorizontal',
                'SeparatorVertical',
            ]
        },
        './src/components/ui/separator.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Separator })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-separator/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'orientation', 'decorative'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Separator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            _ref$orientation = _ref.orientation,
                            orientation =
                                void 0 === _ref$orientation
                                    ? 'horizontal'
                                    : _ref$orientation,
                            _ref$decorative = _ref.decorative,
                            decorative =
                                void 0 === _ref$decorative || _ref$decorative,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.f,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    decorative,
                                    orientation,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'shrink-0 bg-border',
                                        'horizontal' === orientation
                                            ? 'h-[1px] w-full'
                                            : 'h-full w-[1px]',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Separator.displayName =
                _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.f.displayName
            try {
                ;(Separator.displayName = 'Separator'),
                    (Separator.__docgenInfo = {
                        description: '',
                        displayName: 'Separator',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/separator.tsx#Separator'
                        ] = {
                            docgenInfo: Separator.__docgenInfo,
                            name: 'Separator',
                            path: 'src/components/ui/separator.tsx#Separator',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js':
            (__unused_webpack_module, exports, __webpack_require__) => {
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
            module.exports = __webpack_require__(
                './node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js',
            )
        },
    },
])
