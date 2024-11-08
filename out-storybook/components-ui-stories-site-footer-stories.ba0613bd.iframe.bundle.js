'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [6657],
    {
        './src/components/ui/stories/site-footer.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    Docs: () => Docs,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _Default$parameters,
                _Default$parameters2,
                _Docs$parameters,
                _Docs$parameters2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _site_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    './src/components/ui/site-footer.tsx',
                ),
                _typography_typography__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './src/components/typography/typography.tsx',
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
                title: 'Realcube/site-footer',
                component: _site_footer__WEBPACK_IMPORTED_MODULE_2__.n,
                argTypes: {
                    sections: {
                        control: 'object',
                        description:
                            'Array of sections for the footer, each containing a title and links.',
                    },
                    logoSrc: {
                        control: 'text',
                        description: 'URL for the footer logo image.',
                    },
                    companyName: {
                        control: 'text',
                        description:
                            'Name of the company displayed in the footer.',
                    },
                    hideInfo: {
                        control: 'boolean',
                        description:
                            'Toggle to hide or show additional footer information.',
                    },
                },
            }
            var Default = {
                    args: {
                        sections: [
                            {
                                title: 'Company',
                                links: [
                                    { title: 'About Us', href: '/about' },
                                    { title: 'Careers', href: '/careers' },
                                ],
                            },
                            {
                                title: 'Resources',
                                links: [
                                    { title: 'Blog', href: '/blog' },
                                    { title: 'Help Center', href: '/help' },
                                ],
                            },
                            {
                                title: 'Contact',
                                links: [
                                    { title: 'Contact Us', href: '/contact' },
                                    { title: 'Support', href: '/support' },
                                ],
                            },
                        ],
                        logoSrc:
                            'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',
                        companyName: 'RealCube 2.0',
                        hideInfo: !1,
                    },
                },
                Docs = {
                    render: function render() {
                        return __jsx(
                            'div',
                            { className: 'p-6 space-y-4' },
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.S5,
                                null,
                                'SiteFooter Component',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                null,
                                'The ',
                                __jsx('code', null, 'SiteFooter'),
                                ' component is a flexible and reusable footer component that can be customized with sections, links, a logo, and company information. It’s ideal for use at the bottom of your application or website, providing navigational links and company branding.',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                                null,
                                'Props',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                null,
                                'Below are the props available for customizing the',
                                ' ',
                                __jsx('code', null, 'SiteFooter'),
                                ' component:',
                            ),
                            __jsx(
                                'ul',
                                { className: 'list-disc ml-6 space-y-2' },
                                __jsx(
                                    'li',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        __jsx('strong', null, 'sections'),
                                        ' (Array) - An array of objects, each containing a ',
                                        __jsx('code', null, 'title'),
                                        ' and',
                                        ' ',
                                        __jsx('code', null, 'links'),
                                        ' array. Each link object includes',
                                        ' ',
                                        __jsx('code', null, 'title'),
                                        ' and ',
                                        __jsx('code', null, 'href'),
                                        '.',
                                    ),
                                ),
                                __jsx(
                                    'li',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        __jsx('strong', null, 'logoSrc'),
                                        ' (string) - The URL for the footer logo image. This is displayed in the footer and typically contains a link to your brand or homepage.',
                                    ),
                                ),
                                __jsx(
                                    'li',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        __jsx('strong', null, 'companyName'),
                                        ' (string) - The name of the company displayed in the footer, used for copyright text.',
                                    ),
                                ),
                                __jsx(
                                    'li',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        __jsx('strong', null, 'hideInfo'),
                                        ' (boolean) - If set to',
                                        ' ',
                                        __jsx('code', null, 'true'),
                                        ', additional footer sections are hidden, showing only the copyright information.',
                                    ),
                                ),
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                                null,
                                'Usage Example',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                null,
                                'Here is an example of how to use the ',
                                __jsx('code', null, 'SiteFooter'),
                                ' ',
                                'component in your project. The component can be imported and configured as shown below:',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                { className: 'bg-card p-4 rounded-md' },
                                __jsx(
                                    'pre',
                                    {
                                        className:
                                            'bg-transparent text-sm text-foreground font-mono whitespace-pre-wrap',
                                    },
                                    __jsx(
                                        'code',
                                        null,
                                        "import { SiteFooter } from '@/components/site-footer';\n        function AppFooter() {\n        return (\n            <SiteFooter\n            sections={[\n                {\n                title: 'Company',\n                links: [{ title: 'About Us', href: '/about' }, { title: 'Careers', href: '/careers' }],\n                },\n                {\n                title: 'Resources',\n                links: [{ title: 'Blog', href: '/blog' }, { title: 'Help Center', href: '/help' }],\n                },\n            ]}\n            logoSrc=\"https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg\"\n            companyName=\"RealCube 2.0\"\n            hideInfo={false}\n            />\n        );\n        }",
                                    ),
                                ),
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                                null,
                                'Interactive Example',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                null,
                                'Use the ',
                                __jsx('strong', null, 'Default'),
                                ' story in Storybook to interact with the ',
                                __jsx('code', null, 'SiteFooter'),
                                ' component. You can adjust the props, such as ',
                                __jsx('strong', null, 'sections'),
                                ',',
                                ' ',
                                __jsx('strong', null, 'logoSrc'),
                                ', and ',
                                __jsx('strong', null, 'companyName'),
                                ', to see how the component responds to different configurations.',
                            ),
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
                                        "{\n  args: {\n    sections: [{\n      title: 'Company',\n      links: [{\n        title: 'About Us',\n        href: '/about'\n      }, {\n        title: 'Careers',\n        href: '/careers'\n      }]\n    }, {\n      title: 'Resources',\n      links: [{\n        title: 'Blog',\n        href: '/blog'\n      }, {\n        title: 'Help Center',\n        href: '/help'\n      }]\n    }, {\n      title: 'Contact',\n      links: [{\n        title: 'Contact Us',\n        href: '/contact'\n      }, {\n        title: 'Support',\n        href: '/support'\n      }]\n    }],\n    logoSrc: 'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',\n    companyName: 'RealCube 2.0',\n    hideInfo: false\n  }\n}",
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
                (Docs.parameters = _objectSpread(
                    _objectSpread({}, Docs.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null === (_Docs$parameters = Docs.parameters) ||
                                    void 0 === _Docs$parameters
                                    ? void 0
                                    : _Docs$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  render: () => <div className=\"p-6 space-y-4\">\n            <TypographyH1>SiteFooter Component</TypographyH1>\n            <TypographyP>\n                The <code>SiteFooter</code> component is a flexible and reusable\n                footer component that can be customized with sections, links, a\n                logo, and company information. It’s ideal for use at the bottom\n                of your application or website, providing navigational links and\n                company branding.\n            </TypographyP>\n\n            <TypographyH2>Props</TypographyH2>\n            <TypographyP>\n                Below are the props available for customizing the{' '}\n                <code>SiteFooter</code> component:\n            </TypographyP>\n\n            <ul className=\"list-disc ml-6 space-y-2\">\n                <li>\n                    <TypographyP>\n                        <strong>sections</strong> (Array) - An array of objects,\n                        each containing a <code>title</code> and{' '}\n                        <code>links</code> array. Each link object includes{' '}\n                        <code>title</code> and <code>href</code>.\n                    </TypographyP>\n                </li>\n                <li>\n                    <TypographyP>\n                        <strong>logoSrc</strong> (string) - The URL for the\n                        footer logo image. This is displayed in the footer and\n                        typically contains a link to your brand or homepage.\n                    </TypographyP>\n                </li>\n                <li>\n                    <TypographyP>\n                        <strong>companyName</strong> (string) - The name of the\n                        company displayed in the footer, used for copyright\n                        text.\n                    </TypographyP>\n                </li>\n                <li>\n                    <TypographyP>\n                        <strong>hideInfo</strong> (boolean) - If set to{' '}\n                        <code>true</code>, additional footer sections are\n                        hidden, showing only the copyright information.\n                    </TypographyP>\n                </li>\n            </ul>\n\n            <TypographyH2>Usage Example</TypographyH2>\n            <TypographyP>\n                Here is an example of how to use the <code>SiteFooter</code>{' '}\n                component in your project. The component can be imported and\n                configured as shown below:\n            </TypographyP>\n            <TypographyP className=\"bg-card p-4 rounded-md\">\n                <pre className=\"bg-transparent text-sm text-foreground font-mono whitespace-pre-wrap\">\n                    <code>\n                        {`import { SiteFooter } from '@/components/site-footer';\n        function AppFooter() {\n        return (\n            <SiteFooter\n            sections={[\n                {\n                title: 'Company',\n                links: [{ title: 'About Us', href: '/about' }, { title: 'Careers', href: '/careers' }],\n                },\n                {\n                title: 'Resources',\n                links: [{ title: 'Blog', href: '/blog' }, { title: 'Help Center', href: '/help' }],\n                },\n            ]}\n            logoSrc=\"https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg\"\n            companyName=\"RealCube 2.0\"\n            hideInfo={false}\n            />\n        );\n        }`}\n                    </code>\n                </pre>\n            </TypographyP>\n\n            <TypographyH2>Interactive Example</TypographyH2>\n            <TypographyP>\n                Use the <strong>Default</strong> story in Storybook to interact\n                with the <code>SiteFooter</code> component. You can adjust the\n                props, such as <strong>sections</strong>,{' '}\n                <strong>logoSrc</strong>, and <strong>companyName</strong>, to\n                see how the component responds to different configurations.\n            </TypographyP>\n        </div>\n}",
                                    },
                                    null ===
                                        (_Docs$parameters2 = Docs.parameters) ||
                                        void 0 === _Docs$parameters2 ||
                                        null ===
                                            (_Docs$parameters2 =
                                                _Docs$parameters2.docs) ||
                                        void 0 === _Docs$parameters2
                                        ? void 0
                                        : _Docs$parameters2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = ['Default', 'Docs']
        },
        './src/components/typography/typography.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $v: () => TypographyTable,
                C0: () => TypographyP,
                GN: () => TypographyListItem,
                OP: () => TypographyLarge,
                Ol: () => TypographyMuted,
                QI: () => TypographyH3,
                S5: () => TypographyH1,
                ZZ: () => TypographySmall,
                d: () => TypographyH2,
                fk: () => TypographyInlineCode,
                gd: () => TypographyBlockquote,
                ip: () => TypographyH4,
                lY: () => TypographyList,
                n8: () => TypographyLead,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'children'],
                _excluded2 = ['className', 'children'],
                _excluded3 = ['className', 'children'],
                _excluded4 = ['className', 'children'],
                _excluded5 = ['className', 'children'],
                _excluded6 = ['className', 'children'],
                _excluded7 = ['className', 'children'],
                _excluded8 = ['className', 'children'],
                _excluded9 = ['className', 'children'],
                _excluded10 = ['className', 'children'],
                _excluded11 = ['className', 'children'],
                _excluded12 = ['className', 'children'],
                _excluded13 = ['className', 'children'],
                _excluded14 = ['className', 'children'],
                _excluded15 = ['className', 'children'],
                _excluded16 = ['className', 'children'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
            function TypographyH1(_ref) {
                var className = _ref.className,
                    children = _ref.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref,
                        _excluded,
                    )
                return __jsx(
                    'h1',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyH2(_ref2) {
                var className = _ref2.className,
                    children = _ref2.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref2,
                        _excluded2,
                    )
                return __jsx(
                    'h2',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'scroll-m-20 border-b pb-8 text-3xl font-semibold tracking-tight first:mt-0',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyH3(_ref3) {
                var className = _ref3.className,
                    children = _ref3.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref3,
                        _excluded3,
                    )
                return __jsx(
                    'h3',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'scroll-m-20 text-2xl font-semibold tracking-tight',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyH4(_ref4) {
                var className = _ref4.className,
                    children = _ref4.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref4,
                        _excluded4,
                    )
                return __jsx(
                    'h4',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'scroll-m-20 text-xl font-semibold tracking-tight',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyP(_ref5) {
                var className = _ref5.className,
                    children = _ref5.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref5,
                        _excluded5,
                    )
                return __jsx(
                    'p',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'leading-7 [&:not(:first-child)]:mt-6',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyBlockquote(_ref6) {
                var className = _ref6.className,
                    children = _ref6.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref6,
                        _excluded6,
                    )
                return __jsx(
                    'blockquote',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'mt-6 border-l-2 pl-6 italic',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            ;(TypographyH1.displayName = 'TypographyH1'),
                (TypographyH2.displayName = 'TypographyH2'),
                (TypographyH3.displayName = 'TypographyH3'),
                (TypographyH4.displayName = 'TypographyH4'),
                (TypographyP.displayName = 'TypographyP'),
                (TypographyBlockquote.displayName = 'TypographyBlockquote')
            var Tr = function Tr(_ref7) {
                var className = _ref7.className,
                    children = _ref7.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref7,
                        _excluded7,
                    )
                return __jsx(
                    'tr',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'm-0 border-t p-0 even:bg-muted',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            Tr.displayName = 'Tr'
            var Th = function Th(_ref8) {
                var className = _ref8.className,
                    children = _ref8.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref8,
                        _excluded8,
                    )
                return __jsx(
                    'th',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            Th.displayName = 'Th'
            var Td = function Td(_ref9) {
                var className = _ref9.className,
                    children = _ref9.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref9,
                        _excluded9,
                    )
                return __jsx(
                    'td',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyTable(props) {
                return __jsx(
                    'div',
                    { className: 'my-6 w-full overflow-y-auto' },
                    __jsx(
                        'table',
                        { className: 'w-full' },
                        __jsx(
                            'thead',
                            null,
                            __jsx(
                                Tr,
                                null,
                                __jsx(
                                    Th,
                                    {
                                        className:
                                            'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'King"s Treasury',
                                ),
                                __jsx(
                                    Th,
                                    {
                                        className:
                                            'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'People"s happiness',
                                ),
                            ),
                        ),
                        __jsx(
                            'tbody',
                            null,
                            __jsx(
                                Tr,
                                null,
                                __jsx(
                                    Td,
                                    {
                                        className:
                                            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'Empty',
                                ),
                                __jsx(
                                    Td,
                                    {
                                        className:
                                            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'Overflowing',
                                ),
                            ),
                            __jsx(
                                Tr,
                                null,
                                __jsx(
                                    Td,
                                    {
                                        className:
                                            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'Modest',
                                ),
                                __jsx(
                                    Td,
                                    {
                                        className:
                                            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'Satisfied',
                                ),
                            ),
                            __jsx(
                                Tr,
                                null,
                                __jsx(
                                    Td,
                                    {
                                        className:
                                            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'Full',
                                ),
                                __jsx(
                                    Td,
                                    {
                                        className:
                                            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    },
                                    'Ecstatic',
                                ),
                            ),
                        ),
                    ),
                )
            }
            ;(Td.displayName = 'Td'),
                (TypographyTable.displayName = 'TypographyTable')
            var TypographyListItem = function TypographyListItem(_ref10) {
                var className = _ref10.className,
                    children = _ref10.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref10,
                        _excluded10,
                    )
                return __jsx(
                    'li',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                '',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyList(_ref11) {
                var className = _ref11.className,
                    children = _ref11.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref11,
                        _excluded11,
                    )
                return __jsx(
                    'ul',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'my-6 ml-6 list-disc [&>li]:mt-2',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyInlineCode(_ref12) {
                var className = _ref12.className,
                    children = _ref12.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref12,
                        _excluded12,
                    )
                return __jsx(
                    'code',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyLead(_ref13) {
                var className = _ref13.className,
                    children = _ref13.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref13,
                        _excluded13,
                    )
                return __jsx(
                    'p',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'text-xl text-muted-foreground',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyLarge(_ref14) {
                var className = _ref14.className,
                    children = _ref14.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref14,
                        _excluded14,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'text-lg font-semibold',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographySmall(_ref15) {
                var className = _ref15.className,
                    children = _ref15.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref15,
                        _excluded15,
                    )
                return __jsx(
                    'small',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'text-sm font-medium leading-none',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            function TypographyMuted(_ref16) {
                var className = _ref16.className,
                    children = _ref16.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref16,
                        _excluded16,
                    )
                return __jsx(
                    'p',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'text-sm text-muted-foreground',
                                className,
                            ),
                        },
                        props,
                    ),
                    children,
                )
            }
            ;(TypographyListItem.displayName = 'TypographyListItem'),
                (TypographyList.displayName = 'TypographyList'),
                (TypographyInlineCode.displayName = 'TypographyInlineCode'),
                (TypographyLead.displayName = 'TypographyLead'),
                (TypographyLarge.displayName = 'TypographyLarge'),
                (TypographySmall.displayName = 'TypographySmall'),
                (TypographyMuted.displayName = 'TypographyMuted')
            try {
                ;(TypographyH1.displayName = 'TypographyH1'),
                    (TypographyH1.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyH1',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyH1'
                        ] = {
                            docgenInfo: TypographyH1.__docgenInfo,
                            name: 'TypographyH1',
                            path: 'src/components/typography/typography.tsx#TypographyH1',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyH2.displayName = 'TypographyH2'),
                    (TypographyH2.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyH2',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyH2'
                        ] = {
                            docgenInfo: TypographyH2.__docgenInfo,
                            name: 'TypographyH2',
                            path: 'src/components/typography/typography.tsx#TypographyH2',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyH3.displayName = 'TypographyH3'),
                    (TypographyH3.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyH3',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyH3'
                        ] = {
                            docgenInfo: TypographyH3.__docgenInfo,
                            name: 'TypographyH3',
                            path: 'src/components/typography/typography.tsx#TypographyH3',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyH4.displayName = 'TypographyH4'),
                    (TypographyH4.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyH4',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyH4'
                        ] = {
                            docgenInfo: TypographyH4.__docgenInfo,
                            name: 'TypographyH4',
                            path: 'src/components/typography/typography.tsx#TypographyH4',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyP.displayName = 'TypographyP'),
                    (TypographyP.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyP',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyP'
                        ] = {
                            docgenInfo: TypographyP.__docgenInfo,
                            name: 'TypographyP',
                            path: 'src/components/typography/typography.tsx#TypographyP',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyBlockquote.displayName = 'TypographyBlockquote'),
                    (TypographyBlockquote.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyBlockquote',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyBlockquote'
                        ] = {
                            docgenInfo: TypographyBlockquote.__docgenInfo,
                            name: 'TypographyBlockquote',
                            path: 'src/components/typography/typography.tsx#TypographyBlockquote',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyTable.displayName = 'TypographyTable'),
                    (TypographyTable.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyTable',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyTable'
                        ] = {
                            docgenInfo: TypographyTable.__docgenInfo,
                            name: 'TypographyTable',
                            path: 'src/components/typography/typography.tsx#TypographyTable',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyList.displayName = 'TypographyList'),
                    (TypographyList.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyList',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyList'
                        ] = {
                            docgenInfo: TypographyList.__docgenInfo,
                            name: 'TypographyList',
                            path: 'src/components/typography/typography.tsx#TypographyList',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyInlineCode.displayName = 'TypographyInlineCode'),
                    (TypographyInlineCode.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyInlineCode',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyInlineCode'
                        ] = {
                            docgenInfo: TypographyInlineCode.__docgenInfo,
                            name: 'TypographyInlineCode',
                            path: 'src/components/typography/typography.tsx#TypographyInlineCode',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyLead.displayName = 'TypographyLead'),
                    (TypographyLead.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyLead',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyLead'
                        ] = {
                            docgenInfo: TypographyLead.__docgenInfo,
                            name: 'TypographyLead',
                            path: 'src/components/typography/typography.tsx#TypographyLead',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyLarge.displayName = 'TypographyLarge'),
                    (TypographyLarge.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyLarge',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyLarge'
                        ] = {
                            docgenInfo: TypographyLarge.__docgenInfo,
                            name: 'TypographyLarge',
                            path: 'src/components/typography/typography.tsx#TypographyLarge',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographySmall.displayName = 'TypographySmall'),
                    (TypographySmall.__docgenInfo = {
                        description: '',
                        displayName: 'TypographySmall',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographySmall'
                        ] = {
                            docgenInfo: TypographySmall.__docgenInfo,
                            name: 'TypographySmall',
                            path: 'src/components/typography/typography.tsx#TypographySmall',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyMuted.displayName = 'TypographyMuted'),
                    (TypographyMuted.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyMuted',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyMuted'
                        ] = {
                            docgenInfo: TypographyMuted.__docgenInfo,
                            name: 'TypographyMuted',
                            path: 'src/components/typography/typography.tsx#TypographyMuted',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(Tr.displayName = 'Tr'),
                    (Tr.__docgenInfo = {
                        description: '',
                        displayName: 'Tr',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#Tr'
                        ] = {
                            docgenInfo: Tr.__docgenInfo,
                            name: 'Tr',
                            path: 'src/components/typography/typography.tsx#Tr',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(Th.displayName = 'Th'),
                    (Th.__docgenInfo = {
                        description: '',
                        displayName: 'Th',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#Th'
                        ] = {
                            docgenInfo: Th.__docgenInfo,
                            name: 'Th',
                            path: 'src/components/typography/typography.tsx#Th',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(Td.displayName = 'Td'),
                    (Td.__docgenInfo = {
                        description: '',
                        displayName: 'Td',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#Td'
                        ] = {
                            docgenInfo: Td.__docgenInfo,
                            name: 'Td',
                            path: 'src/components/typography/typography.tsx#Td',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TypographyListItem.displayName = 'TypographyListItem'),
                    (TypographyListItem.__docgenInfo = {
                        description: '',
                        displayName: 'TypographyListItem',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/typography/typography.tsx#TypographyListItem'
                        ] = {
                            docgenInfo: TypographyListItem.__docgenInfo,
                            name: 'TypographyListItem',
                            path: 'src/components/typography/typography.tsx#TypographyListItem',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/site-footer.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { n: () => SiteFooter })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './node_modules/next/link.js',
                ),
                next_link__WEBPACK_IMPORTED_MODULE_1___default =
                    __webpack_require__.n(
                        next_link__WEBPACK_IMPORTED_MODULE_1__,
                    ),
                next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    './node_modules/@storybook/nextjs/dist/images/next-image.mjs',
                ),
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
            function SiteFooter(_ref) {
                var _ref$sections = _ref.sections,
                    sections = void 0 === _ref$sections ? [] : _ref$sections,
                    logoSrc = (_ref.newsletterForm, _ref.logoSrc),
                    companyName = _ref.companyName,
                    _ref$hideInfo = _ref.hideInfo,
                    hideInfo = void 0 === _ref$hideInfo || _ref$hideInfo,
                    _useState = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
                    mounted = _useState[0],
                    setMounted = _useState[1]
                return (
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
                        function () {
                            setMounted(!0)
                        },
                        [],
                    ),
                    mounted
                        ? __jsx(
                              'footer',
                              { className: 'border-t py-6' },
                              !hideInfo &&
                                  sections.length > 0 &&
                                  __jsx(
                                      'div',
                                      {
                                          className:
                                              'container max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 py-8',
                                      },
                                      sections.map(function (section) {
                                          return __jsx(
                                              'div',
                                              { key: section.title },
                                              __jsx(
                                                  'span',
                                                  {
                                                      className:
                                                          'text-sm font-medium text-foreground',
                                                  },
                                                  section.title,
                                              ),
                                              __jsx(
                                                  'ul',
                                                  {
                                                      className:
                                                          'mt-4 space-y-3',
                                                  },
                                                  section.links.map(
                                                      function (link) {
                                                          return __jsx(
                                                              'li',
                                                              {
                                                                  key: link.title,
                                                              },
                                                              __jsx(
                                                                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                                                  {
                                                                      href: link.href,
                                                                      className:
                                                                          'text-sm text-muted-foreground hover:text-primary',
                                                                  },
                                                                  link.title,
                                                              ),
                                                          )
                                                      },
                                                  ),
                                              ),
                                          )
                                      }),
                                      __jsx(
                                          'div',
                                          {
                                              className:
                                                  'mx-auto flex items-center justify-center',
                                          },
                                          __jsx(
                                              next_image__WEBPACK_IMPORTED_MODULE_2__.Z,
                                              {
                                                  src: logoSrc,
                                                  alt: ''.concat(
                                                      companyName,
                                                      ' logo',
                                                  ),
                                                  width: 200,
                                                  height: 200,
                                              },
                                          ),
                                      ),
                                  ),
                              __jsx(
                                  'div',
                                  {
                                      className:
                                          'container max-w-6xl flex items-center justify-between mt-4',
                                  },
                                  __jsx(
                                      'p',
                                      {
                                          className:
                                              'text-sm text-muted-foreground',
                                      },
                                      __jsx(
                                          next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                          {
                                              href: '/',
                                              target: '_blank',
                                              rel: 'noreferrer',
                                              className:
                                                  'font-regular underline underline-offset-4',
                                          },
                                          '© ',
                                          companyName,
                                          '. All rights reserved.',
                                      ),
                                  ),
                              ),
                          )
                        : null
                )
            }
            SiteFooter.displayName = 'SiteFooter'
            try {
                ;(SiteFooter.displayName = 'SiteFooter'),
                    (SiteFooter.__docgenInfo = {
                        description: '',
                        displayName: 'SiteFooter',
                        props: {
                            sections: {
                                defaultValue: { value: '[]' },
                                description: '',
                                name: 'sections',
                                required: !1,
                                type: {
                                    name: '{ title: string; links: FooterLink[]; }[]',
                                },
                            },
                            newsletterForm: {
                                defaultValue: null,
                                description: '',
                                name: 'newsletterForm',
                                required: !1,
                                type: { name: 'ReactNode' },
                            },
                            logoSrc: {
                                defaultValue: null,
                                description: '',
                                name: 'logoSrc',
                                required: !0,
                                type: { name: 'string' },
                            },
                            companyName: {
                                defaultValue: null,
                                description: '',
                                name: 'companyName',
                                required: !0,
                                type: { name: 'string' },
                            },
                            hideInfo: {
                                defaultValue: { value: 'true' },
                                description: '',
                                name: 'hideInfo',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/site-footer.tsx#SiteFooter'
                        ] = {
                            docgenInfo: SiteFooter.__docgenInfo,
                            name: 'SiteFooter',
                            path: 'src/components/ui/site-footer.tsx#SiteFooter',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
