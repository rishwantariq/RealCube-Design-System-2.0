'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [521],
    {
        './src/components/ui/stories/badge-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    Destructive: () => Destructive,
                    LinkWithStyleBadge: () => LinkWithStyleBadge,
                    Outline: () => Outline,
                    Secondary: () => Secondary,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _Default$parameters,
                _Default$parameters2,
                _Secondary$parameters,
                _Secondary$parameters2,
                _Outline$parameters,
                _Outline$parameters2,
                _Destructive$paramete,
                _Destructive$paramete2,
                _LinkWithStyleBadge$p,
                _LinkWithStyleBadge$p2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    './node_modules/next/link.js',
                ),
                next_link__WEBPACK_IMPORTED_MODULE_2___default =
                    __webpack_require__.n(
                        next_link__WEBPACK_IMPORTED_MODULE_2__,
                    ),
                _badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    './src/components/ui/badge.tsx',
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
                title: 'RealCube/badge',
                render: function render(args) {
                    return __jsx(
                        _badge__WEBPACK_IMPORTED_MODULE_3__.C,
                        args,
                        args.children,
                    )
                },
                tags: ['autodocs'],
                args: { variant: 'default', children: 'badgeCn' },
                argTypes: {
                    variant: {
                        control: { type: 'select' },
                        options: [
                            'default',
                            'secondary',
                            'outline',
                            'destructive',
                        ],
                    },
                },
                parameters: { layout: 'centered' },
            }
            var Default = { args: { variant: 'default' } },
                Secondary = { args: { variant: 'secondary' } },
                Outline = { args: { variant: 'outline' } },
                Destructive = { args: { variant: 'destructive' } },
                LinkWithStyleBadge = {
                    render: function render(_ref) {
                        var variant = _ref.variant,
                            children = _ref.children
                        return __jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                            {
                                href: '#',
                                className: (0,
                                _badge__WEBPACK_IMPORTED_MODULE_3__.t)({
                                    variant,
                                }),
                            },
                            children,
                        )
                    },
                }
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
                                        "{\n  args: {\n    variant: 'default'\n  }\n}",
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
                                            "{\n  args: {\n    variant: 'secondary'\n  }\n}",
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
                                            "{\n  args: {\n    variant: 'outline'\n  }\n}",
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
                                            "{\n  args: {\n    variant: 'destructive'\n  }\n}",
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
                (LinkWithStyleBadge.parameters = _objectSpread(
                    _objectSpread({}, LinkWithStyleBadge.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_LinkWithStyleBadge$p =
                                        LinkWithStyleBadge.parameters) ||
                                    void 0 === _LinkWithStyleBadge$p
                                    ? void 0
                                    : _LinkWithStyleBadge$p.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  render: ({\n    variant,\n    children\n  }) => <Link href="#" className={badgeVariants({\n    variant\n  })}>\n            {children}\n        </Link>\n}',
                                    },
                                    null ===
                                        (_LinkWithStyleBadge$p2 =
                                            LinkWithStyleBadge.parameters) ||
                                        void 0 === _LinkWithStyleBadge$p2 ||
                                        null ===
                                            (_LinkWithStyleBadge$p2 =
                                                _LinkWithStyleBadge$p2.docs) ||
                                        void 0 === _LinkWithStyleBadge$p2
                                        ? void 0
                                        : _LinkWithStyleBadge$p2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'Default',
                'Secondary',
                'Outline',
                'Destructive',
                'LinkWithStyleBadge',
            ]
        },
        './src/components/ui/badge.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                C: () => Badge,
                t: () => badgeVariants,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/class-variance-authority/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'variant'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                badgeVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    {
                        variants: {
                            variant: {
                                default:
                                    'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                                secondary:
                                    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                                destructive:
                                    'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                                outline: 'text-foreground',
                            },
                        },
                        defaultVariants: { variant: 'default' },
                    },
                )
            function Badge(_ref) {
                var className = _ref.className,
                    variant = _ref.variant,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref,
                        _excluded,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                badgeVariants({ variant }),
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            Badge.displayName = 'Badge'
            try {
                ;(Badge.displayName = 'Badge'),
                    (Badge.__docgenInfo = {
                        description: '',
                        displayName: 'Badge',
                        props: {
                            variant: {
                                defaultValue: null,
                                description: '',
                                name: 'variant',
                                required: !1,
                                type: {
                                    name: '"default" | "outline" | "destructive" | "secondary" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/badge.tsx#Badge'
                        ] = {
                            docgenInfo: Badge.__docgenInfo,
                            name: 'Badge',
                            path: 'src/components/ui/badge.tsx#Badge',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
