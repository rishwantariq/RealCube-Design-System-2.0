'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [3519],
    {
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
        './src/components/ui/stories/toast-data-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Toast: () => Toast,
                    ToastNotDescription: () => ToastNotDescription,
                    ToastNotTitle: () => ToastNotTitle,
                    ToastStyleDestructive: () => ToastStyleDestructive,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => toast_data_demo_stories,
                })
            var _Toast$parameters,
                _Toast$parameters2,
                _ToastStyleDestructiv,
                _ToastStyleDestructiv2,
                _ToastNotDescription$,
                _ToastNotDescription$2,
                _ToastNotTitle$parame,
                _ToastNotTitle$parame2,
                defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                ui_button = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                use_toast = __webpack_require__(
                    './src/components/ui/use-toast.ts',
                ),
                __jsx = react.createElement
            function ToastDemo(_ref) {
                var description = _ref.description,
                    title = _ref.title,
                    _ref$variant = _ref.variant,
                    variant =
                        void 0 === _ref$variant ? 'default' : _ref$variant,
                    toast = (0, use_toast.pm)().toast
                return __jsx(
                    ui_button.z,
                    {
                        variant: 'outline',
                        onClick: function onClick() {
                            toast({ title, description, variant })
                        },
                    },
                    'shadcn',
                )
            }
            ToastDemo.displayName = 'ToastDemo'
            try {
                ;(ToastDemo.displayName = 'ToastDemo'),
                    (ToastDemo.__docgenInfo = {
                        description: '',
                        displayName: 'ToastDemo',
                        props: {
                            title: {
                                defaultValue: null,
                                description: '',
                                name: 'title',
                                required: !1,
                                type: { name: 'string' },
                            },
                            description: {
                                defaultValue: null,
                                description: '',
                                name: 'description',
                                required: !1,
                                type: { name: 'string' },
                            },
                            variant: {
                                defaultValue: { value: 'default' },
                                description: '',
                                name: 'variant',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"default"' },
                                        { value: '"destructive"' },
                                    ],
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/demo/toast-data-demo.tsx#ToastDemo'
                        ] = {
                            docgenInfo: ToastDemo.__docgenInfo,
                            name: 'ToastDemo',
                            path: 'src/components/ui/demo/toast-data-demo.tsx#ToastDemo',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
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
                              ;(0, defineProperty.Z)(e, r, t[r])
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
            const toast_data_demo_stories = {
                title: 'RealCube/toast',
                component: ToastDemo,
                tags: ['autodocs'],
                argTypes: {
                    variant: {
                        control: 'select',
                        options: ['default', 'destructive'],
                    },
                },
                parameters: {},
            }
            var Toast = {
                    args: { title: 'Shadcn-ui', description: 'like shadcn-ui' },
                },
                ToastStyleDestructive = {
                    args: {
                        title: 'Shadcn-ui',
                        description: 'not like shadcn-ui',
                        variant: 'destructive',
                    },
                },
                ToastNotDescription = { args: { title: 'Shadcn-ui' } },
                ToastNotTitle = { args: { description: 'like shadcn-ui' } }
            ;(Toast.parameters = _objectSpread(
                _objectSpread({}, Toast.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null === (_Toast$parameters = Toast.parameters) ||
                                void 0 === _Toast$parameters
                                ? void 0
                                : _Toast$parameters.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        "{\n  args: {\n    title: 'Shadcn-ui',\n    description: 'like shadcn-ui'\n  }\n}",
                                },
                                null ===
                                    (_Toast$parameters2 = Toast.parameters) ||
                                    void 0 === _Toast$parameters2 ||
                                    null ===
                                        (_Toast$parameters2 =
                                            _Toast$parameters2.docs) ||
                                    void 0 === _Toast$parameters2
                                    ? void 0
                                    : _Toast$parameters2.source,
                            ),
                        },
                    ),
                },
            )),
                (ToastStyleDestructive.parameters = _objectSpread(
                    _objectSpread({}, ToastStyleDestructive.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToastStyleDestructiv =
                                        ToastStyleDestructive.parameters) ||
                                    void 0 === _ToastStyleDestructiv
                                    ? void 0
                                    : _ToastStyleDestructiv.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    title: 'Shadcn-ui',\n    description: 'not like shadcn-ui',\n    variant: 'destructive'\n  }\n}",
                                    },
                                    null ===
                                        (_ToastStyleDestructiv2 =
                                            ToastStyleDestructive.parameters) ||
                                        void 0 === _ToastStyleDestructiv2 ||
                                        null ===
                                            (_ToastStyleDestructiv2 =
                                                _ToastStyleDestructiv2.docs) ||
                                        void 0 === _ToastStyleDestructiv2
                                        ? void 0
                                        : _ToastStyleDestructiv2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToastNotDescription.parameters = _objectSpread(
                    _objectSpread({}, ToastNotDescription.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToastNotDescription$ =
                                        ToastNotDescription.parameters) ||
                                    void 0 === _ToastNotDescription$
                                    ? void 0
                                    : _ToastNotDescription$.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    title: 'Shadcn-ui'\n  }\n}",
                                    },
                                    null ===
                                        (_ToastNotDescription$2 =
                                            ToastNotDescription.parameters) ||
                                        void 0 === _ToastNotDescription$2 ||
                                        null ===
                                            (_ToastNotDescription$2 =
                                                _ToastNotDescription$2.docs) ||
                                        void 0 === _ToastNotDescription$2
                                        ? void 0
                                        : _ToastNotDescription$2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToastNotTitle.parameters = _objectSpread(
                    _objectSpread({}, ToastNotTitle.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToastNotTitle$parame =
                                        ToastNotTitle.parameters) ||
                                    void 0 === _ToastNotTitle$parame
                                    ? void 0
                                    : _ToastNotTitle$parame.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    description: 'like shadcn-ui'\n  }\n}",
                                    },
                                    null ===
                                        (_ToastNotTitle$parame2 =
                                            ToastNotTitle.parameters) ||
                                        void 0 === _ToastNotTitle$parame2 ||
                                        null ===
                                            (_ToastNotTitle$parame2 =
                                                _ToastNotTitle$parame2.docs) ||
                                        void 0 === _ToastNotTitle$parame2
                                        ? void 0
                                        : _ToastNotTitle$parame2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'Toast',
                'ToastStyleDestructive',
                'ToastNotDescription',
                'ToastNotTitle',
            ]
        },
        './src/components/ui/button.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                d: () => buttonVariants,
                z: () => Button,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-slot/dist/index.mjs',
                    ),
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/class-variance-authority/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'variant', 'size', 'asChild'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                buttonVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    {
                        variants: {
                            variant: {
                                default:
                                    'bg-primary text-primary-foreground hover:bg-primary/90',
                                destructive:
                                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                                outline:
                                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                                secondary:
                                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                                ghost: 'hover:bg-accent hover:text-accent-foreground',
                                link: 'text-primary underline-offset-4 hover:underline',
                            },
                            size: {
                                default: 'h-10 px-4 py-2',
                                sm: 'h-9 rounded-md px-3',
                                lg: 'h-11 rounded-md px-8',
                                icon: 'h-10 w-10',
                            },
                        },
                        defaultVariants: {
                            variant: 'default',
                            size: 'default',
                        },
                    },
                ),
                Button = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            variant = _ref.variant,
                            size = _ref.size,
                            _ref$asChild = _ref.asChild,
                            asChild = void 0 !== _ref$asChild && _ref$asChild,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            ),
                            Comp = asChild
                                ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7
                                : 'button'
                        return __jsx(
                            Comp,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        buttonVariants({
                                            variant,
                                            size,
                                            className,
                                        }),
                                    ),
                                    ref,
                                },
                                props,
                            ),
                        )
                    },
                )
            Button.displayName = 'Button'
            try {
                ;(Button.displayName = 'Button'),
                    (Button.__docgenInfo = {
                        description: '',
                        displayName: 'Button',
                        props: {
                            asChild: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            variant: {
                                defaultValue: null,
                                description: '',
                                name: 'variant',
                                required: !1,
                                type: {
                                    name: '"link" | "default" | "outline" | "destructive" | "secondary" | "ghost" | null',
                                },
                            },
                            size: {
                                defaultValue: null,
                                description: '',
                                name: 'size',
                                required: !1,
                                type: {
                                    name: '"default" | "sm" | "lg" | "icon" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/button.tsx#Button'
                        ] = {
                            docgenInfo: Button.__docgenInfo,
                            name: 'Button',
                            path: 'src/components/ui/button.tsx#Button',
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
