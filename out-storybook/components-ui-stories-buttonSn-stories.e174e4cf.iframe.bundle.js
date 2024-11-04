'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [4220],
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
        './src/components/ui/stories/buttonSn.stories.ts': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    Destructive: () => Destructive,
                    Ghost: () => Ghost,
                    Link: () => Link,
                    Outline: () => Outline,
                    Secondary: () => Secondary,
                    SizeDefault: () => SizeDefault,
                    SizeIcon: () => SizeIcon,
                    SizeLarge: () => SizeLarge,
                    SizeSmall: () => SizeSmall,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _Default$parameters,
                _Default$parameters2,
                _Secondary$parameters,
                _Secondary$parameters2,
                _Destructive$paramete,
                _Destructive$paramete2,
                _Ghost$parameters,
                _Ghost$parameters2,
                _Link$parameters,
                _Link$parameters2,
                _Outline$parameters,
                _Outline$parameters2,
                _SizeDefault$paramete,
                _SizeDefault$paramete2,
                _SizeIcon$parameters,
                _SizeIcon$parameters2,
                _SizeLarge$parameters,
                _SizeLarge$parameters2,
                _SizeSmall$parameters,
                _SizeSmall$parameters2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    )
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
                              _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
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
                title: 'RealCube/button',
                component: __webpack_require__('./src/components/ui/button.tsx')
                    .z,
                tags: ['autodocs'],
                argTypes: {
                    variant: {
                        control: { type: 'select' },
                        options: [
                            'default',
                            'secondary',
                            'destructive',
                            'ghost',
                            'link',
                            'outline',
                        ],
                    },
                    size: {
                        control: { type: 'select' },
                        options: ['default', 'icon', 'sm', 'lg'],
                    },
                },
                parameters: { layout: 'centered' },
            }
            var Default = {
                    args: { variant: 'default', children: 'ButtonShadcn' },
                },
                Secondary = {
                    args: { variant: 'secondary', children: 'ButtonShadcn' },
                },
                Destructive = {
                    args: { variant: 'destructive', children: 'ButtonShadcn' },
                },
                Ghost = {
                    args: { variant: 'ghost', children: 'ButtonShadcn' },
                },
                Link = { args: { variant: 'link', children: 'ButtonShadcn' } },
                Outline = {
                    args: { variant: 'outline', children: 'ButtonShadcn' },
                },
                SizeDefault = {
                    args: { size: 'default', children: 'ButtonShadcn' },
                },
                SizeIcon = { args: { size: 'icon', children: 'icon' } },
                SizeLarge = { args: { size: 'lg', children: 'ButtonShadcn' } },
                SizeSmall = { args: { size: 'sm', children: 'ButtonShadcn' } }
            ;(Default.parameters = _objectSpread(
                _objectSpread({}, Default.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_Default$parameters = Default.parameters) ||
                                void 0 === _Default$parameters
                                ? void 0
                                : _Default$parameters.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        "{\n  args: {\n    variant: 'default',\n    children: 'ButtonShadcn'\n  }\n}",
                                },
                                null ===
                                    (_Default$parameters2 =
                                        Default.parameters) ||
                                    void 0 === _Default$parameters2 ||
                                    null ===
                                        (_Default$parameters2 =
                                            _Default$parameters2.docs) ||
                                    void 0 === _Default$parameters2
                                    ? void 0
                                    : _Default$parameters2.source,
                            ),
                        },
                    ),
                },
            )),
                (Secondary.parameters = _objectSpread(
                    _objectSpread({}, Secondary.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Secondary$parameters =
                                        Secondary.parameters) ||
                                    void 0 === _Secondary$parameters
                                    ? void 0
                                    : _Secondary$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'secondary',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_Secondary$parameters2 =
                                            Secondary.parameters) ||
                                        void 0 === _Secondary$parameters2 ||
                                        null ===
                                            (_Secondary$parameters2 =
                                                _Secondary$parameters2.docs) ||
                                        void 0 === _Secondary$parameters2
                                        ? void 0
                                        : _Secondary$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                (Destructive.parameters = _objectSpread(
                    _objectSpread({}, Destructive.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Destructive$paramete =
                                        Destructive.parameters) ||
                                    void 0 === _Destructive$paramete
                                    ? void 0
                                    : _Destructive$paramete.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'destructive',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_Destructive$paramete2 =
                                            Destructive.parameters) ||
                                        void 0 === _Destructive$paramete2 ||
                                        null ===
                                            (_Destructive$paramete2 =
                                                _Destructive$paramete2.docs) ||
                                        void 0 === _Destructive$paramete2
                                        ? void 0
                                        : _Destructive$paramete2.source,
                                ),
                            },
                        ),
                    },
                )),
                (Ghost.parameters = _objectSpread(
                    _objectSpread({}, Ghost.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Ghost$parameters = Ghost.parameters) ||
                                    void 0 === _Ghost$parameters
                                    ? void 0
                                    : _Ghost$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'ghost',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_Ghost$parameters2 =
                                            Ghost.parameters) ||
                                        void 0 === _Ghost$parameters2 ||
                                        null ===
                                            (_Ghost$parameters2 =
                                                _Ghost$parameters2.docs) ||
                                        void 0 === _Ghost$parameters2
                                        ? void 0
                                        : _Ghost$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                (Link.parameters = _objectSpread(
                    _objectSpread({}, Link.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null === (_Link$parameters = Link.parameters) ||
                                    void 0 === _Link$parameters
                                    ? void 0
                                    : _Link$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'link',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_Link$parameters2 = Link.parameters) ||
                                        void 0 === _Link$parameters2 ||
                                        null ===
                                            (_Link$parameters2 =
                                                _Link$parameters2.docs) ||
                                        void 0 === _Link$parameters2
                                        ? void 0
                                        : _Link$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                (Outline.parameters = _objectSpread(
                    _objectSpread({}, Outline.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Outline$parameters =
                                        Outline.parameters) ||
                                    void 0 === _Outline$parameters
                                    ? void 0
                                    : _Outline$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'outline',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_Outline$parameters2 =
                                            Outline.parameters) ||
                                        void 0 === _Outline$parameters2 ||
                                        null ===
                                            (_Outline$parameters2 =
                                                _Outline$parameters2.docs) ||
                                        void 0 === _Outline$parameters2
                                        ? void 0
                                        : _Outline$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                (SizeDefault.parameters = _objectSpread(
                    _objectSpread({}, SizeDefault.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_SizeDefault$paramete =
                                        SizeDefault.parameters) ||
                                    void 0 === _SizeDefault$paramete
                                    ? void 0
                                    : _SizeDefault$paramete.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    size: 'default',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_SizeDefault$paramete2 =
                                            SizeDefault.parameters) ||
                                        void 0 === _SizeDefault$paramete2 ||
                                        null ===
                                            (_SizeDefault$paramete2 =
                                                _SizeDefault$paramete2.docs) ||
                                        void 0 === _SizeDefault$paramete2
                                        ? void 0
                                        : _SizeDefault$paramete2.source,
                                ),
                            },
                        ),
                    },
                )),
                (SizeIcon.parameters = _objectSpread(
                    _objectSpread({}, SizeIcon.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_SizeIcon$parameters =
                                        SizeIcon.parameters) ||
                                    void 0 === _SizeIcon$parameters
                                    ? void 0
                                    : _SizeIcon$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    size: 'icon',\n    children: 'icon'\n  }\n}",
                                    },
                                    null ===
                                        (_SizeIcon$parameters2 =
                                            SizeIcon.parameters) ||
                                        void 0 === _SizeIcon$parameters2 ||
                                        null ===
                                            (_SizeIcon$parameters2 =
                                                _SizeIcon$parameters2.docs) ||
                                        void 0 === _SizeIcon$parameters2
                                        ? void 0
                                        : _SizeIcon$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                (SizeLarge.parameters = _objectSpread(
                    _objectSpread({}, SizeLarge.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_SizeLarge$parameters =
                                        SizeLarge.parameters) ||
                                    void 0 === _SizeLarge$parameters
                                    ? void 0
                                    : _SizeLarge$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    size: 'lg',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_SizeLarge$parameters2 =
                                            SizeLarge.parameters) ||
                                        void 0 === _SizeLarge$parameters2 ||
                                        null ===
                                            (_SizeLarge$parameters2 =
                                                _SizeLarge$parameters2.docs) ||
                                        void 0 === _SizeLarge$parameters2
                                        ? void 0
                                        : _SizeLarge$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                (SizeSmall.parameters = _objectSpread(
                    _objectSpread({}, SizeSmall.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_SizeSmall$parameters =
                                        SizeSmall.parameters) ||
                                    void 0 === _SizeSmall$parameters
                                    ? void 0
                                    : _SizeSmall$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    size: 'sm',\n    children: 'ButtonShadcn'\n  }\n}",
                                    },
                                    null ===
                                        (_SizeSmall$parameters2 =
                                            SizeSmall.parameters) ||
                                        void 0 === _SizeSmall$parameters2 ||
                                        null ===
                                            (_SizeSmall$parameters2 =
                                                _SizeSmall$parameters2.docs) ||
                                        void 0 === _SizeSmall$parameters2
                                        ? void 0
                                        : _SizeSmall$parameters2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'Default',
                'Secondary',
                'Destructive',
                'Ghost',
                'Link',
                'Outline',
                'SizeDefault',
                'SizeIcon',
                'SizeLarge',
                'SizeSmall',
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
