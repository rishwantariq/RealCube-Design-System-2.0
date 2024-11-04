'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [8811],
    {
        './node_modules/@radix-ui/number/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(
                value,
                [min, max],
            ) {
                return Math.min(max, Math.max(min, value))
            }
            __webpack_require__.d(__webpack_exports__, {
                u: () => $ae6933e535247d3d$export$7d15b64cf5a3a4c4,
            })
        },
        './node_modules/@radix-ui/react-direction/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                gm: () => $f631663db3294ace$export$b39126d51d94e6f3,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            const $f631663db3294ace$var$DirectionContext = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0)
            function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
                const globalDir = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                    $f631663db3294ace$var$DirectionContext,
                )
                return localDir || globalDir || 'ltr'
            }
        },
        './src/components/ui/stories/page-container.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _Default$parameters,
                _Default$parameters2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _page_container__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './src/components/ui/page-container.tsx',
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
                title: 'RealCube/page-container',
                component: _page_container__WEBPACK_IMPORTED_MODULE_2__.Z,
                parameters: { layout: 'fullscreen' },
                argTypes: {
                    scrollable: { control: 'boolean', defaultValue: !1 },
                    footerSections: {
                        control: 'object',
                        description:
                            'Footer sections array for footer links and content.',
                    },
                    logoSrc: {
                        control: 'text',
                        description: 'URL for footer logo.',
                    },
                    companyName: {
                        control: 'text',
                        description: 'Name of the company for the footer.',
                    },
                    hideInfo: {
                        control: 'boolean',
                        description:
                            'Option to hide additional footer information.',
                        defaultValue: !1,
                    },
                },
            }
            var Template = function Template(args) {
                return __jsx(
                    _page_container__WEBPACK_IMPORTED_MODULE_2__.Z,
                    args,
                    __jsx(
                        'div',
                        { className: 'p-8 space-y-4 bg-background' },
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.S5,
                            null,
                            'PageContainer Component',
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                            null,
                            'The ',
                            __jsx('code', null, 'PageContainer'),
                            ' component serves as a reusable layout wrapper, maintaining consistent padding, alignment, and layout across all pages of the application. It enhances accessibility by adhering to WCAG guidelines and ensures that content is displayed uniformly on every page.',
                            __jsx('br', null),
                            __jsx('br', null),
                            'This page is wrapped in a page container.',
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                            null,
                            'Purpose',
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                            null,
                            'Using ',
                            __jsx('code', null, 'PageContainer'),
                            ' on all pages helps to create a unified user experience by standardizing margins, paddings, and content alignment. It also supports optional scrolling for pages with extensive content, keeping the layout visually stable and easy to navigate.',
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                            null,
                            'Props',
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
                                    __jsx('strong', null, 'children'),
                                    ' (ReactNode): The main content to be displayed within the container.',
                                ),
                            ),
                            __jsx(
                                'li',
                                null,
                                __jsx(
                                    _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                    null,
                                    __jsx('strong', null, 'scrollable'),
                                    ' (boolean): When set to true, enables a scrollable area for the main content, allowing for better navigation of long content sections.',
                                ),
                            ),
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                            null,
                            'Example Usage',
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                            null,
                            'Below is an example of how to use ',
                            __jsx('code', null, 'PageContainer'),
                            ' to wrap main content on a page:',
                        ),
                        __jsx(
                            'pre',
                            { className: 'bg-card p-4 rounded-md text-sm' },
                            __jsx(
                                'code',
                                null,
                                'import PageContainer from \'@/components/PageContainer\';\n            function MyPage() {\n            return (\n                <PageContainer scrollable={true}>\n                <div className="text-center text-lg p-6">Main Content Here</div>\n                </PageContainer>\n            );\n            }',
                            ),
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.d,
                            null,
                            'Accessibility Considerations',
                        ),
                        __jsx(
                            _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                            null,
                            'The ',
                            __jsx('code', null, 'PageContainer'),
                            ' component is designed with WCAG accessibility guidelines in mind, ensuring readable text alignment, consistent spacing, and proper structure. Using this component on every page promotes an accessible and cohesive layout for all users.',
                        ),
                    ),
                )
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            ;(Default.args = {
                scrollable: !0,
                footerSections: [
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
            }),
                (Default.parameters = _objectSpread(
                    _objectSpread({}, Default.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Default$parameters =
                                        Default.parameters) ||
                                    void 0 === _Default$parameters
                                    ? void 0
                                    : _Default$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            'args => <PageContainer {...args}>\n        <div className="p-8 space-y-4 bg-background">\n            <TypographyH1>PageContainer Component</TypographyH1>\n            <TypographyP>\n                The <code>PageContainer</code> component serves as a reusable\n                layout wrapper, maintaining consistent padding, alignment, and\n                layout across all pages of the application. It enhances\n                accessibility by adhering to WCAG guidelines and ensures that\n                content is displayed uniformly on every page.\n                <br></br>\n                <br></br>This page is wrapped in a page container.\n            </TypographyP>\n\n            <TypographyH2>Purpose</TypographyH2>\n            <TypographyP>\n                Using <code>PageContainer</code> on all pages helps to create a\n                unified user experience by standardizing margins, paddings, and\n                content alignment. It also supports optional scrolling for pages\n                with extensive content, keeping the layout visually stable and\n                easy to navigate.\n            </TypographyP>\n\n            <TypographyH2>Props</TypographyH2>\n            <ul className="list-disc ml-6 space-y-2">\n                <li>\n                    <TypographyP>\n                        <strong>children</strong> (ReactNode): The main content\n                        to be displayed within the container.\n                    </TypographyP>\n                </li>\n                <li>\n                    <TypographyP>\n                        <strong>scrollable</strong> (boolean): When set to true,\n                        enables a scrollable area for the main content, allowing\n                        for better navigation of long content sections.\n                    </TypographyP>\n                </li>\n            </ul>\n\n            <TypographyH2>Example Usage</TypographyH2>\n            <TypographyP>\n                Below is an example of how to use <code>PageContainer</code> to\n                wrap main content on a page:\n            </TypographyP>\n            <pre className="bg-card p-4 rounded-md text-sm">\n                <code>\n                    {`import PageContainer from \'@/components/PageContainer\';\n            function MyPage() {\n            return (\n                <PageContainer scrollable={true}>\n                <div className="text-center text-lg p-6">Main Content Here</div>\n                </PageContainer>\n            );\n            }`}\n                </code>\n            </pre>\n            <TypographyH2>Accessibility Considerations</TypographyH2>\n            <TypographyP>\n                The <code>PageContainer</code> component is designed with WCAG\n                accessibility guidelines in mind, ensuring readable text\n                alignment, consistent spacing, and proper structure. Using this\n                component on every page promotes an accessible and cohesive\n                layout for all users.\n            </TypographyP>\n        </div>\n    </PageContainer>',
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
                ))
            const __namedExportsOrder = ['Default']
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
        './src/components/ui/page-container.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => PageContainer,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _ui_scroll_area__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__('./src/components/ui/scroll-area.tsx'),
                _ui_site_footer__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__('./src/components/ui/site-footer.tsx'),
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
            function PageContainer(_ref) {
                var children = _ref.children,
                    _ref$scrollable = _ref.scrollable,
                    scrollable = void 0 !== _ref$scrollable && _ref$scrollable,
                    _ref$footerSections = _ref.footerSections,
                    footerSections =
                        void 0 === _ref$footerSections
                            ? []
                            : _ref$footerSections,
                    _ref$logoSrc = _ref.logoSrc,
                    logoSrc = void 0 === _ref$logoSrc ? '' : _ref$logoSrc,
                    _ref$companyName = _ref.companyName,
                    companyName =
                        void 0 === _ref$companyName ? '' : _ref$companyName,
                    _ref$hideInfo = _ref.hideInfo,
                    hideInfo = void 0 !== _ref$hideInfo && _ref$hideInfo
                return __jsx(
                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                    null,
                    scrollable
                        ? __jsx(
                              _ui_scroll_area__WEBPACK_IMPORTED_MODULE_1__.x,
                              { className: 'h-[calc(100dvh-52px)]' },
                              __jsx(
                                  'div',
                                  {
                                      className:
                                          'h-full px-[20px] py-4 mx-auto',
                                  },
                                  children,
                              ),
                              __jsx(
                                  'div',
                                  { className: 'mt-[80px]' },
                                  __jsx(
                                      _ui_site_footer__WEBPACK_IMPORTED_MODULE_2__.n,
                                      {
                                          sections: footerSections,
                                          logoSrc,
                                          companyName,
                                          hideInfo,
                                      },
                                  ),
                              ),
                          )
                        : __jsx(
                              'div',
                              { className: 'h-full p-4 px-[20px]' },
                              children,
                          ),
                )
            }
            try {
                ;(pagecontainer.displayName = 'pagecontainer'),
                    (pagecontainer.__docgenInfo = {
                        description: '',
                        displayName: 'pagecontainer',
                        props: {
                            scrollable: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'scrollable',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            footerSections: {
                                defaultValue: { value: '[]' },
                                description: '',
                                name: 'footerSections',
                                required: !1,
                                type: { name: 'any[]' },
                            },
                            logoSrc: {
                                defaultValue: { value: '' },
                                description: '',
                                name: 'logoSrc',
                                required: !1,
                                type: { name: 'string' },
                            },
                            companyName: {
                                defaultValue: { value: '' },
                                description: '',
                                name: 'companyName',
                                required: !1,
                                type: { name: 'string' },
                            },
                            hideInfo: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'hideInfo',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/page-container.tsx#pagecontainer'
                        ] = {
                            docgenInfo: pagecontainer.__docgenInfo,
                            name: 'pagecontainer',
                            path: 'src/components/ui/page-container.tsx#pagecontainer',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/scroll-area.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                B: () => ScrollBar,
                x: () => ScrollArea,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-scroll-area/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'children'],
                _excluded2 = ['className', 'orientation'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                ScrollArea = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            children = _ref.children,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative overflow-hidden',
                                        className,
                                    ),
                                },
                                props,
                            ),
                            __jsx(
                                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_,
                                {
                                    className:
                                        'h-full w-full rounded-[inherit]',
                                },
                                children,
                            ),
                            __jsx(ScrollBar, null),
                            __jsx(
                                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.Ns,
                                null,
                            ),
                        )
                    },
                )
            ScrollArea.displayName =
                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC.displayName
            var ScrollBar = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        _ref2$orientation = _ref2.orientation,
                        orientation =
                            void 0 === _ref2$orientation
                                ? 'vertical'
                                : _ref2$orientation,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.gb,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                orientation,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'flex touch-none select-none transition-colors',
                                    'vertical' === orientation &&
                                        'h-full w-2.5 border-l border-l-transparent p-[1px]',
                                    'horizontal' === orientation &&
                                        'h-2.5 flex-col border-t border-t-transparent p-[1px]',
                                    className,
                                ),
                            },
                            props,
                        ),
                        __jsx(
                            _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.q4,
                            {
                                className:
                                    'relative flex-1 rounded-full bg-border',
                            },
                        ),
                    )
                },
            )
            ScrollBar.displayName =
                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.gb.displayName
            try {
                ;(ScrollArea.displayName = 'ScrollArea'),
                    (ScrollArea.__docgenInfo = {
                        description: '',
                        displayName: 'ScrollArea',
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
                            'src/components/ui/scroll-area.tsx#ScrollArea'
                        ] = {
                            docgenInfo: ScrollArea.__docgenInfo,
                            name: 'ScrollArea',
                            path: 'src/components/ui/scroll-area.tsx#ScrollArea',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(ScrollBar.displayName = 'ScrollBar'),
                    (ScrollBar.__docgenInfo = {
                        description: '',
                        displayName: 'ScrollBar',
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
                            'src/components/ui/scroll-area.tsx#ScrollBar'
                        ] = {
                            docgenInfo: ScrollBar.__docgenInfo,
                            name: 'ScrollBar',
                            path: 'src/components/ui/scroll-area.tsx#ScrollBar',
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
