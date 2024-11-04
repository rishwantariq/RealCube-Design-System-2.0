'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5228],
    {
        './src/components/ui/stories/navigation-menu-demo.stories.ts': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    NavigationMenu: () =>
                        navigation_menu_demo_stories_NavigationMenu,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => navigation_menu_demo_stories,
                })
            var defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                objectWithoutProperties = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                ),
                next_link = __webpack_require__('./node_modules/next/link.js'),
                link_default = __webpack_require__.n(next_link),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                utils = __webpack_require__('./src/lib/utils.ts'),
                dist = __webpack_require__(
                    './node_modules/@radix-ui/react-navigation-menu/dist/index.mjs',
                ),
                class_variance_authority_dist = __webpack_require__(
                    './node_modules/class-variance-authority/dist/index.mjs',
                ),
                chevron_down = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/chevron-down.js',
                ),
                _excluded = ['className', 'children'],
                _excluded2 = ['className'],
                _excluded3 = ['className', 'children'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                __jsx = react.createElement,
                NavigationMenu = react.forwardRef(function (_ref, ref) {
                    var className = _ref.className,
                        children = _ref.children,
                        props = (0, objectWithoutProperties.Z)(_ref, _excluded)
                    return __jsx(
                        dist.fC,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                className: (0, utils.cn)(
                                    'relative z-10 flex max-w-max flex-1 items-center justify-center',
                                    className,
                                ),
                            },
                            props,
                        ),
                        children,
                        __jsx(NavigationMenuViewport, null),
                    )
                })
            NavigationMenu.displayName = dist.fC.displayName
            var NavigationMenuList = react.forwardRef(function (_ref2, ref) {
                var className = _ref2.className,
                    props = (0, objectWithoutProperties.Z)(_ref2, _excluded2)
                return __jsx(
                    dist.aV,
                    (0, esm_extends.Z)(
                        {
                            ref,
                            className: (0, utils.cn)(
                                'group flex flex-1 list-none items-center justify-center space-x-1',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            NavigationMenuList.displayName = dist.aV.displayName
            var NavigationMenuItem = dist.ck,
                navigationMenuTriggerStyle = (0,
                class_variance_authority_dist.j)(
                    'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
                ),
                NavigationMenuTrigger = react.forwardRef(function (_ref3, ref) {
                    var className = _ref3.className,
                        children = _ref3.children,
                        props = (0, objectWithoutProperties.Z)(
                            _ref3,
                            _excluded3,
                        )
                    return __jsx(
                        dist.xz,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                className: (0, utils.cn)(
                                    navigationMenuTriggerStyle(),
                                    'group',
                                    className,
                                ),
                            },
                            props,
                        ),
                        children,
                        ' ',
                        __jsx(chevron_down.Z, {
                            className:
                                'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
                            'aria-hidden': 'true',
                        }),
                    )
                })
            NavigationMenuTrigger.displayName = dist.xz.displayName
            var NavigationMenuContent = react.forwardRef(function (_ref4, ref) {
                var className = _ref4.className,
                    props = (0, objectWithoutProperties.Z)(_ref4, _excluded4)
                return __jsx(
                    dist.VY,
                    (0, esm_extends.Z)(
                        {
                            ref,
                            className: (0, utils.cn)(
                                'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            NavigationMenuContent.displayName = dist.VY.displayName
            var NavigationMenuLink = dist.rU,
                NavigationMenuViewport = react.forwardRef(
                    function (_ref5, ref) {
                        var className = _ref5.className,
                            props = (0, objectWithoutProperties.Z)(
                                _ref5,
                                _excluded5,
                            )
                        return __jsx(
                            'div',
                            {
                                className: (0, utils.cn)(
                                    'absolute left-0 top-full flex justify-center',
                                ),
                            },
                            __jsx(
                                dist.l_,
                                (0, esm_extends.Z)(
                                    {
                                        className: (0, utils.cn)(
                                            'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                                            className,
                                        ),
                                        ref,
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            NavigationMenuViewport.displayName = dist.l_.displayName
            var NavigationMenuIndicator = react.forwardRef(
                function (_ref6, ref) {
                    var className = _ref6.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref6,
                            _excluded6,
                        )
                    return __jsx(
                        dist.z$,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                className: (0, utils.cn)(
                                    'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
                                    className,
                                ),
                            },
                            props,
                        ),
                        __jsx('div', {
                            className:
                                'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
                        }),
                    )
                },
            )
            NavigationMenuIndicator.displayName = dist.z$.displayName
            try {
                ;(NavigationMenu.displayName = 'NavigationMenu'),
                    (NavigationMenu.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenu',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenu'
                        ] = {
                            docgenInfo: NavigationMenu.__docgenInfo,
                            name: 'NavigationMenu',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenu',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuContent.displayName = 'NavigationMenuContent'),
                    (NavigationMenuContent.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuContent',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuContent'
                        ] = {
                            docgenInfo: NavigationMenuContent.__docgenInfo,
                            name: 'NavigationMenuContent',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuIndicator.displayName =
                    'NavigationMenuIndicator'),
                    (NavigationMenuIndicator.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuIndicator',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuIndicator'
                        ] = {
                            docgenInfo: NavigationMenuIndicator.__docgenInfo,
                            name: 'NavigationMenuIndicator',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuIndicator',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuItem.displayName = 'NavigationMenuItem'),
                    (NavigationMenuItem.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuItem',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuItem'
                        ] = {
                            docgenInfo: NavigationMenuItem.__docgenInfo,
                            name: 'NavigationMenuItem',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuItem',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuLink.displayName = 'NavigationMenuLink'),
                    (NavigationMenuLink.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuLink',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuLink'
                        ] = {
                            docgenInfo: NavigationMenuLink.__docgenInfo,
                            name: 'NavigationMenuLink',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuLink',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuList.displayName = 'NavigationMenuList'),
                    (NavigationMenuList.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuList',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuList'
                        ] = {
                            docgenInfo: NavigationMenuList.__docgenInfo,
                            name: 'NavigationMenuList',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuList',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'),
                    (NavigationMenuTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuTrigger',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuTrigger'
                        ] = {
                            docgenInfo: NavigationMenuTrigger.__docgenInfo,
                            name: 'NavigationMenuTrigger',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(NavigationMenuViewport.displayName =
                    'NavigationMenuViewport'),
                    (NavigationMenuViewport.__docgenInfo = {
                        description: '',
                        displayName: 'NavigationMenuViewport',
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
                            'src/components/ui/navigation-menu.tsx#NavigationMenuViewport'
                        ] = {
                            docgenInfo: NavigationMenuViewport.__docgenInfo,
                            name: 'NavigationMenuViewport',
                            path: 'src/components/ui/navigation-menu.tsx#NavigationMenuViewport',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var navigation_menu_demo_excluded = [
                    'className',
                    'title',
                    'children',
                ],
                navigation_menu_demo_jsx = react.createElement,
                components = [
                    {
                        title: 'Alert Dialog',
                        href: '/docs/primitives/alert-dialog',
                        description:
                            'A modal dialog that interrupts the user with important content and expects a response.',
                    },
                    {
                        title: 'Hover Card',
                        href: '/docs/primitives/hover-card',
                        description:
                            'For sighted users to preview content available behind a link.',
                    },
                    {
                        title: 'Progress',
                        href: '/docs/primitives/progress',
                        description:
                            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
                    },
                    {
                        title: 'Scroll-area',
                        href: '/docs/primitives/scroll-area',
                        description:
                            'Visually or semantically separates content.',
                    },
                    {
                        title: 'Tabs',
                        href: '/docs/primitives/tabs',
                        description:
                            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
                    },
                    {
                        title: 'Tooltip',
                        href: '/docs/primitives/tooltip',
                        description:
                            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
                    },
                ]
            function NavigationMenuDemo() {
                return navigation_menu_demo_jsx(
                    NavigationMenu,
                    null,
                    navigation_menu_demo_jsx(
                        NavigationMenuList,
                        null,
                        navigation_menu_demo_jsx(
                            NavigationMenuItem,
                            null,
                            navigation_menu_demo_jsx(
                                NavigationMenuTrigger,
                                null,
                                'Getting started',
                            ),
                            navigation_menu_demo_jsx(
                                NavigationMenuContent,
                                null,
                                navigation_menu_demo_jsx(
                                    'ul',
                                    {
                                        className:
                                            'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
                                    },
                                    navigation_menu_demo_jsx(
                                        'li',
                                        { className: 'row-span-3' },
                                        navigation_menu_demo_jsx(
                                            NavigationMenuLink,
                                            { asChild: !0 },
                                            navigation_menu_demo_jsx(
                                                link_default(),
                                                {
                                                    className:
                                                        'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md',
                                                    href: '/',
                                                },
                                                navigation_menu_demo_jsx(
                                                    'div',
                                                    {
                                                        className:
                                                            'mb-2 mt-4 text-lg font-medium',
                                                    },
                                                    'shadcn/ui',
                                                ),
                                                navigation_menu_demo_jsx(
                                                    'p',
                                                    {
                                                        className:
                                                            'text-sm leading-tight text-muted-foreground',
                                                    },
                                                    'Beautifully designed components built with Radix UI and Tailwind CSS.',
                                                ),
                                            ),
                                        ),
                                    ),
                                    navigation_menu_demo_jsx(
                                        ListItem,
                                        {
                                            href: '/docs',
                                            title: 'Introduction',
                                        },
                                        'Re-usable components built using Radix UI and Tailwind CSS.',
                                    ),
                                    navigation_menu_demo_jsx(
                                        ListItem,
                                        {
                                            href: '/docs/installation',
                                            title: 'Installation',
                                        },
                                        'How to install dependencies and structure your app.',
                                    ),
                                    navigation_menu_demo_jsx(
                                        ListItem,
                                        {
                                            href: '/docs/primitives/typography',
                                            title: 'Typography',
                                        },
                                        'Styles for headings, paragraphs, lists...etc',
                                    ),
                                ),
                            ),
                        ),
                        navigation_menu_demo_jsx(
                            NavigationMenuItem,
                            null,
                            navigation_menu_demo_jsx(
                                NavigationMenuTrigger,
                                null,
                                'Components',
                            ),
                            navigation_menu_demo_jsx(
                                NavigationMenuContent,
                                null,
                                navigation_menu_demo_jsx(
                                    'ul',
                                    {
                                        className:
                                            'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ',
                                    },
                                    components.map(function (component) {
                                        return navigation_menu_demo_jsx(
                                            ListItem,
                                            {
                                                key: component.title,
                                                title: component.title,
                                                href: component.href,
                                            },
                                            component.description,
                                        )
                                    }),
                                ),
                            ),
                        ),
                        navigation_menu_demo_jsx(
                            NavigationMenuItem,
                            null,
                            navigation_menu_demo_jsx(
                                link_default(),
                                {
                                    href: '/docs',
                                    legacyBehavior: !0,
                                    passHref: !0,
                                },
                                navigation_menu_demo_jsx(
                                    NavigationMenuLink,
                                    { className: navigationMenuTriggerStyle() },
                                    'Documentation',
                                ),
                            ),
                        ),
                    ),
                )
            }
            NavigationMenuDemo.displayName = 'NavigationMenuDemo'
            var _NavigationMenu$param,
                _NavigationMenu$param2,
                ListItem = react.forwardRef(function (_ref, ref) {
                    var className = _ref.className,
                        title = _ref.title,
                        children = _ref.children,
                        props = (0, objectWithoutProperties.Z)(
                            _ref,
                            navigation_menu_demo_excluded,
                        )
                    return navigation_menu_demo_jsx(
                        'li',
                        null,
                        navigation_menu_demo_jsx(
                            NavigationMenuLink,
                            { asChild: !0 },
                            navigation_menu_demo_jsx(
                                'a',
                                (0, esm_extends.Z)(
                                    {
                                        ref,
                                        className: (0, utils.cn)(
                                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                                navigation_menu_demo_jsx(
                                    'div',
                                    {
                                        className:
                                            'text-sm font-medium leading-none',
                                    },
                                    title,
                                ),
                                navigation_menu_demo_jsx(
                                    'p',
                                    {
                                        className:
                                            'line-clamp-2 text-sm leading-snug text-muted-foreground',
                                    },
                                    children,
                                ),
                            ),
                        ),
                    )
                })
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
            ListItem.displayName = 'ListItem'
            const navigation_menu_demo_stories = {
                title: 'RealCube/navigation-menu',
                component: NavigationMenuDemo,
                parameters: { layout: 'centered' },
            }
            var navigation_menu_demo_stories_NavigationMenu = { args: {} }
            navigation_menu_demo_stories_NavigationMenu.parameters =
                _objectSpread(
                    _objectSpread(
                        {},
                        navigation_menu_demo_stories_NavigationMenu.parameters,
                    ),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_NavigationMenu$param =
                                        navigation_menu_demo_stories_NavigationMenu.parameters) ||
                                    void 0 === _NavigationMenu$param
                                    ? void 0
                                    : _NavigationMenu$param.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    { originalSource: '{\n  args: {}\n}' },
                                    null ===
                                        (_NavigationMenu$param2 =
                                            navigation_menu_demo_stories_NavigationMenu.parameters) ||
                                        void 0 === _NavigationMenu$param2 ||
                                        null ===
                                            (_NavigationMenu$param2 =
                                                _NavigationMenu$param2.docs) ||
                                        void 0 === _NavigationMenu$param2
                                        ? void 0
                                        : _NavigationMenu$param2.source,
                                ),
                            },
                        ),
                    },
                )
            const __namedExportsOrder = ['NavigationMenu']
        },
    },
])
