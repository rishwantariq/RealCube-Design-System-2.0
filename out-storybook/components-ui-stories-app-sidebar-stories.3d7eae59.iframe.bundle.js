'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5448],
    {
        './src/components/ui/stories/app-sidebar.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => app_sidebar_stories,
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
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                command = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/command.js',
                ),
                chevron_right = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/chevron-right.js',
                ),
                collapsible = __webpack_require__(
                    './src/components/ui/collapsible.tsx',
                ),
                objectDestructuringEmpty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js',
                ),
                slicedToArray = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
                ),
                dist = __webpack_require__(
                    './node_modules/@radix-ui/react-slot/dist/index.mjs',
                ),
                class_variance_authority_dist = __webpack_require__(
                    './node_modules/class-variance-authority/dist/index.mjs',
                ),
                panel_left = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/panel-left.js',
                )
            var utils = __webpack_require__('./src/lib/utils.ts'),
                ui_button = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                input = __webpack_require__('./src/components/ui/input.tsx'),
                separator = __webpack_require__(
                    './src/components/ui/separator.tsx',
                ),
                sheet = __webpack_require__('./src/components/ui/sheet.tsx'),
                skeleton = __webpack_require__(
                    './src/components/ui/skeleton.tsx',
                ),
                ui_tooltip = __webpack_require__(
                    './src/components/ui/tooltip.tsx',
                ),
                _excluded = [
                    'defaultOpen',
                    'open',
                    'onOpenChange',
                    'className',
                    'style',
                    'children',
                ],
                _excluded2 = [
                    'side',
                    'variant',
                    'collapsible',
                    'className',
                    'children',
                ],
                _excluded3 = ['className', 'onClick'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                _excluded7 = ['className'],
                _excluded8 = ['className'],
                _excluded9 = ['className'],
                _excluded10 = ['className'],
                _excluded11 = ['className'],
                _excluded12 = ['className', 'asChild'],
                _excluded13 = ['className', 'asChild'],
                _excluded14 = ['className'],
                _excluded15 = ['className'],
                _excluded16 = ['className'],
                _excluded17 = [
                    'asChild',
                    'isActive',
                    'variant',
                    'size',
                    'tooltip',
                    'className',
                ],
                _excluded18 = ['className', 'asChild', 'showOnHover'],
                _excluded19 = ['className'],
                _excluded20 = ['className', 'showIcon'],
                _excluded21 = ['className'],
                _excluded22 = ['asChild', 'size', 'isActive', 'className'],
                __jsx = react.createElement
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
            var SidebarContext = react.createContext(null)
            function useSidebar() {
                var context = react.useContext(SidebarContext)
                if (!context)
                    throw new Error(
                        'useSidebar must be used within a SidebarProvider.',
                    )
                return context
            }
            var SidebarProvider = react.forwardRef(function (_ref, ref) {
                var _ref$defaultOpen = _ref.defaultOpen,
                    defaultOpen =
                        void 0 === _ref$defaultOpen || _ref$defaultOpen,
                    openProp = _ref.open,
                    setOpenProp = _ref.onOpenChange,
                    className = _ref.className,
                    style = _ref.style,
                    children = _ref.children,
                    props = (0, objectWithoutProperties.Z)(_ref, _excluded),
                    isMobile = (function useIsMobile() {
                        var _React$useState = react.useState(void 0),
                            _React$useState2 = (0, slicedToArray.Z)(
                                _React$useState,
                                2,
                            ),
                            isMobile = _React$useState2[0],
                            setIsMobile = _React$useState2[1]
                        return (
                            react.useEffect(function () {
                                var mql = window.matchMedia(
                                        '(max-width: '.concat(767, 'px)'),
                                    ),
                                    onChange = function onChange() {
                                        setIsMobile(window.innerWidth < 768)
                                    }
                                return (
                                    mql.addEventListener('change', onChange),
                                    setIsMobile(window.innerWidth < 768),
                                    function () {
                                        return mql.removeEventListener(
                                            'change',
                                            onChange,
                                        )
                                    }
                                )
                            }, []),
                            !!isMobile
                        )
                    })(),
                    _React$useState = react.useState(!1),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    openMobile = _React$useState2[0],
                    setOpenMobile = _React$useState2[1],
                    _React$useState3 = react.useState(defaultOpen),
                    _React$useState4 = (0, slicedToArray.Z)(
                        _React$useState3,
                        2,
                    ),
                    _open = _React$useState4[0],
                    _setOpen = _React$useState4[1],
                    open = null != openProp ? openProp : _open,
                    setOpen = react.useCallback(
                        function (value) {
                            var openState =
                                'function' == typeof value ? value(open) : value
                            setOpenProp
                                ? setOpenProp(openState)
                                : _setOpen(openState),
                                (document.cookie = ''
                                    .concat('sidebar:state', '=')
                                    .concat(openState, '; path=/; max-age=')
                                    .concat(604800))
                        },
                        [setOpenProp, open],
                    ),
                    toggleSidebar = react.useCallback(
                        function () {
                            return isMobile
                                ? setOpenMobile(function (open) {
                                      return !open
                                  })
                                : setOpen(function (open) {
                                      return !open
                                  })
                        },
                        [isMobile, setOpen, setOpenMobile],
                    )
                react.useEffect(
                    function () {
                        var handleKeyDown = function handleKeyDown(event) {
                            'b' === event.key &&
                                (event.metaKey || event.ctrlKey) &&
                                (event.preventDefault(), toggleSidebar())
                        }
                        return (
                            window.addEventListener('keydown', handleKeyDown),
                            function () {
                                return window.removeEventListener(
                                    'keydown',
                                    handleKeyDown,
                                )
                            }
                        )
                    },
                    [toggleSidebar],
                )
                var state = open ? 'expanded' : 'collapsed',
                    contextValue = react.useMemo(
                        function () {
                            return {
                                state,
                                open,
                                setOpen,
                                isMobile,
                                openMobile,
                                setOpenMobile,
                                toggleSidebar,
                            }
                        },
                        [
                            state,
                            open,
                            setOpen,
                            isMobile,
                            openMobile,
                            setOpenMobile,
                            toggleSidebar,
                        ],
                    )
                return __jsx(
                    SidebarContext.Provider,
                    { value: contextValue },
                    __jsx(
                        ui_tooltip.pn,
                        { delayDuration: 0 },
                        __jsx(
                            'div',
                            (0, esm_extends.Z)(
                                {
                                    style: _objectSpread(
                                        {
                                            '--sidebar-width': '16rem',
                                            '--sidebar-width-icon': '3rem',
                                        },
                                        style,
                                    ),
                                    className: (0, utils.cn)(
                                        'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
                                        className,
                                    ),
                                    ref,
                                },
                                props,
                            ),
                            children,
                        ),
                    ),
                )
            })
            SidebarProvider.displayName = 'SidebarProvider'
            var Sidebar = react.forwardRef(function (_ref2, ref) {
                var _ref2$side = _ref2.side,
                    side = void 0 === _ref2$side ? 'left' : _ref2$side,
                    _ref2$variant = _ref2.variant,
                    variant =
                        void 0 === _ref2$variant ? 'sidebar' : _ref2$variant,
                    _ref2$collapsible = _ref2.collapsible,
                    collapsible =
                        void 0 === _ref2$collapsible
                            ? 'offcanvas'
                            : _ref2$collapsible,
                    className = _ref2.className,
                    children = _ref2.children,
                    props = (0, objectWithoutProperties.Z)(_ref2, _excluded2),
                    _useSidebar = useSidebar(),
                    isMobile = _useSidebar.isMobile,
                    state = _useSidebar.state,
                    openMobile = _useSidebar.openMobile,
                    setOpenMobile = _useSidebar.setOpenMobile
                return 'none' === collapsible
                    ? __jsx(
                          'div',
                          (0, esm_extends.Z)(
                              {
                                  className: (0, utils.cn)(
                                      'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
                                      className,
                                  ),
                                  ref,
                              },
                              props,
                          ),
                          children,
                      )
                    : isMobile
                      ? __jsx(
                            sheet.yo,
                            (0, esm_extends.Z)(
                                {
                                    open: openMobile,
                                    onOpenChange: setOpenMobile,
                                },
                                props,
                            ),
                            __jsx(
                                sheet.ue,
                                {
                                    'data-sidebar': 'sidebar',
                                    'data-mobile': 'true',
                                    className:
                                        'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
                                    style: { '--sidebar-width': '18rem' },
                                    side,
                                },
                                __jsx(
                                    'div',
                                    {
                                        className:
                                            'flex h-full w-full flex-col',
                                    },
                                    children,
                                ),
                            ),
                        )
                      : __jsx(
                            'div',
                            {
                                ref,
                                className:
                                    'group peer hidden md:block text-sidebar-foreground',
                                'data-state': state,
                                'data-collapsible':
                                    'collapsed' === state ? collapsible : '',
                                'data-variant': variant,
                                'data-side': side,
                            },
                            __jsx('div', {
                                className: (0, utils.cn)(
                                    'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
                                    'group-data-[collapsible=offcanvas]:w-0',
                                    'group-data-[side=right]:rotate-180',
                                    'floating' === variant ||
                                        'inset' === variant
                                        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
                                        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
                                ),
                            }),
                            __jsx(
                                'div',
                                (0, esm_extends.Z)(
                                    {
                                        className: (0, utils.cn)(
                                            'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
                                            'left' === side
                                                ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                                                : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                                            'floating' === variant ||
                                                'inset' === variant
                                                ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
                                                : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                                __jsx(
                                    'div',
                                    {
                                        'data-sidebar': 'sidebar',
                                        className:
                                            'flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow',
                                    },
                                    children,
                                ),
                            ),
                        )
            })
            ;(Sidebar.displayName = 'Sidebar'),
                (react.forwardRef(function (_ref3, ref) {
                    var className = _ref3.className,
                        _onClick = _ref3.onClick,
                        props = (0, objectWithoutProperties.Z)(
                            _ref3,
                            _excluded3,
                        ),
                        toggleSidebar = useSidebar().toggleSidebar
                    return __jsx(
                        ui_button.z,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'trigger',
                                variant: 'ghost',
                                size: 'icon',
                                className: (0, utils.cn)('h-7 w-7', className),
                                onClick: function onClick(event) {
                                    null == _onClick || _onClick(event),
                                        toggleSidebar()
                                },
                            },
                            props,
                        ),
                        __jsx(panel_left.Z, null),
                        __jsx(
                            'span',
                            { className: 'sr-only' },
                            'Toggle Sidebar',
                        ),
                    )
                }).displayName = 'SidebarTrigger'),
                (react.forwardRef(function (_ref4, ref) {
                    var className = _ref4.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref4,
                            _excluded4,
                        ),
                        toggleSidebar = useSidebar().toggleSidebar
                    return __jsx(
                        'button',
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'rail',
                                'aria-label': 'Toggle Sidebar',
                                tabIndex: -1,
                                onClick: toggleSidebar,
                                title: 'Toggle Sidebar',
                                className: (0, utils.cn)(
                                    'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
                                    '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
                                    '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
                                    'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
                                    '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
                                    '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                }).displayName = 'SidebarRail'),
                (react.forwardRef(function (_ref5, ref) {
                    var className = _ref5.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref5,
                            _excluded5,
                        )
                    return __jsx(
                        'main',
                        (0, esm_extends.Z)(
                            {
                                ref,
                                className: (0, utils.cn)(
                                    'relative flex min-h-svh flex-1 flex-col bg-background',
                                    'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                }).displayName = 'SidebarInset'),
                (react.forwardRef(function (_ref6, ref) {
                    var className = _ref6.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref6,
                            _excluded6,
                        )
                    return __jsx(
                        input.I,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'input',
                                className: (0, utils.cn)(
                                    'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                }).displayName = 'SidebarInput')
            var SidebarHeader = react.forwardRef(function (_ref7, ref) {
                var className = _ref7.className,
                    props = (0, objectWithoutProperties.Z)(_ref7, _excluded7)
                return __jsx(
                    'div',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'header',
                            className: (0, utils.cn)(
                                'flex flex-col gap-2 p-2',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarHeader.displayName = 'SidebarHeader'
            var SidebarFooter = react.forwardRef(function (_ref8, ref) {
                var className = _ref8.className,
                    props = (0, objectWithoutProperties.Z)(_ref8, _excluded8)
                return __jsx(
                    'div',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'footer',
                            className: (0, utils.cn)(
                                'flex flex-col gap-2 p-2',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            ;(SidebarFooter.displayName = 'SidebarFooter'),
                (react.forwardRef(function (_ref9, ref) {
                    var className = _ref9.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref9,
                            _excluded9,
                        )
                    return __jsx(
                        separator.Z,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'separator',
                                className: (0, utils.cn)(
                                    'mx-2 w-auto bg-sidebar-border',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                }).displayName = 'SidebarSeparator')
            var SidebarContent = react.forwardRef(function (_ref10, ref) {
                var className = _ref10.className,
                    props = (0, objectWithoutProperties.Z)(_ref10, _excluded10)
                return __jsx(
                    'div',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'content',
                            className: (0, utils.cn)(
                                'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarContent.displayName = 'SidebarContent'
            var SidebarGroup = react.forwardRef(function (_ref11, ref) {
                var className = _ref11.className,
                    props = (0, objectWithoutProperties.Z)(_ref11, _excluded11)
                return __jsx(
                    'div',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'group',
                            className: (0, utils.cn)(
                                'relative flex w-full min-w-0 flex-col p-2',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarGroup.displayName = 'SidebarGroup'
            var SidebarGroupLabel = react.forwardRef(function (_ref12, ref) {
                var className = _ref12.className,
                    _ref12$asChild = _ref12.asChild,
                    asChild = void 0 !== _ref12$asChild && _ref12$asChild,
                    props = (0, objectWithoutProperties.Z)(_ref12, _excluded12),
                    Comp = asChild ? dist.g7 : 'div'
                return __jsx(
                    Comp,
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'group-label',
                            className: (0, utils.cn)(
                                'duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                                'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            ;(SidebarGroupLabel.displayName = 'SidebarGroupLabel'),
                (react.forwardRef(function (_ref13, ref) {
                    var className = _ref13.className,
                        _ref13$asChild = _ref13.asChild,
                        asChild = void 0 !== _ref13$asChild && _ref13$asChild,
                        props = (0, objectWithoutProperties.Z)(
                            _ref13,
                            _excluded13,
                        ),
                        Comp = asChild ? dist.g7 : 'button'
                    return __jsx(
                        Comp,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'group-action',
                                className: (0, utils.cn)(
                                    'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                                    'after:absolute after:-inset-2 after:md:hidden',
                                    'group-data-[collapsible=icon]:hidden',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                }).displayName = 'SidebarGroupAction')
            var SidebarGroupContent = react.forwardRef(function (_ref14, ref) {
                var className = _ref14.className,
                    props = (0, objectWithoutProperties.Z)(_ref14, _excluded14)
                return __jsx(
                    'div',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'group-content',
                            className: (0, utils.cn)(
                                'w-full text-sm',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarGroupContent.displayName = 'SidebarGroupContent'
            var SidebarMenu = react.forwardRef(function (_ref15, ref) {
                var className = _ref15.className,
                    props = (0, objectWithoutProperties.Z)(_ref15, _excluded15)
                return __jsx(
                    'ul',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'menu',
                            className: (0, utils.cn)(
                                'flex w-full min-w-0 flex-col gap-1',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarMenu.displayName = 'SidebarMenu'
            var SidebarMenuItem = react.forwardRef(function (_ref16, ref) {
                var className = _ref16.className,
                    props = (0, objectWithoutProperties.Z)(_ref16, _excluded16)
                return __jsx(
                    'li',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'menu-item',
                            className: (0, utils.cn)(
                                'group/menu-item relative',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarMenuItem.displayName = 'SidebarMenuItem'
            var sidebarMenuButtonVariants = (0,
                class_variance_authority_dist.j)(
                    'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
                    {
                        variants: {
                            variant: {
                                default:
                                    'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                                outline:
                                    'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
                            },
                            size: {
                                default: 'h-8 text-sm',
                                sm: 'h-7 text-xs',
                                lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
                            },
                        },
                        defaultVariants: {
                            variant: 'default',
                            size: 'default',
                        },
                    },
                ),
                SidebarMenuButton = react.forwardRef(function (_ref17, ref) {
                    var _ref17$asChild = _ref17.asChild,
                        asChild = void 0 !== _ref17$asChild && _ref17$asChild,
                        _ref17$isActive = _ref17.isActive,
                        isActive =
                            void 0 !== _ref17$isActive && _ref17$isActive,
                        _ref17$variant = _ref17.variant,
                        variant =
                            void 0 === _ref17$variant
                                ? 'default'
                                : _ref17$variant,
                        _ref17$size = _ref17.size,
                        size = void 0 === _ref17$size ? 'default' : _ref17$size,
                        tooltip = _ref17.tooltip,
                        className = _ref17.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref17,
                            _excluded17,
                        ),
                        Comp = asChild ? dist.g7 : 'button',
                        _useSidebar4 = useSidebar(),
                        isMobile = _useSidebar4.isMobile,
                        state = _useSidebar4.state,
                        button = __jsx(
                            Comp,
                            (0, esm_extends.Z)(
                                {
                                    ref,
                                    'data-sidebar': 'menu-button',
                                    'data-size': size,
                                    'data-active': isActive,
                                    className: (0, utils.cn)(
                                        sidebarMenuButtonVariants({
                                            variant,
                                            size,
                                        }),
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    return tooltip
                        ? ('string' == typeof tooltip &&
                              (tooltip = { children: tooltip }),
                          __jsx(
                              ui_tooltip.u,
                              null,
                              __jsx(ui_tooltip.aJ, { asChild: !0 }, button),
                              __jsx(
                                  ui_tooltip._v,
                                  (0, esm_extends.Z)(
                                      {
                                          side: 'right',
                                          align: 'center',
                                          hidden:
                                              'collapsed' !== state || isMobile,
                                      },
                                      tooltip,
                                  ),
                              ),
                          ))
                        : button
                })
            SidebarMenuButton.displayName = 'SidebarMenuButton'
            var SidebarMenuAction = react.forwardRef(function (_ref18, ref) {
                var className = _ref18.className,
                    _ref18$asChild = _ref18.asChild,
                    asChild = void 0 !== _ref18$asChild && _ref18$asChild,
                    _ref18$showOnHover = _ref18.showOnHover,
                    showOnHover =
                        void 0 !== _ref18$showOnHover && _ref18$showOnHover,
                    props = (0, objectWithoutProperties.Z)(_ref18, _excluded18),
                    Comp = asChild ? dist.g7 : 'button'
                return __jsx(
                    Comp,
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'menu-action',
                            className: (0, utils.cn)(
                                'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
                                'after:absolute after:-inset-2 after:md:hidden',
                                'peer-data-[size=sm]/menu-button:top-1',
                                'peer-data-[size=default]/menu-button:top-1.5',
                                'peer-data-[size=lg]/menu-button:top-2.5',
                                'group-data-[collapsible=icon]:hidden',
                                showOnHover &&
                                    'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            ;(SidebarMenuAction.displayName = 'SidebarMenuAction'),
                (react.forwardRef(function (_ref19, ref) {
                    var className = _ref19.className,
                        props = (0, objectWithoutProperties.Z)(
                            _ref19,
                            _excluded19,
                        )
                    return __jsx(
                        'div',
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'menu-badge',
                                className: (0, utils.cn)(
                                    'absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none',
                                    'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
                                    'peer-data-[size=sm]/menu-button:top-1',
                                    'peer-data-[size=default]/menu-button:top-1.5',
                                    'peer-data-[size=lg]/menu-button:top-2.5',
                                    'group-data-[collapsible=icon]:hidden',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                }).displayName = 'SidebarMenuBadge'),
                (react.forwardRef(function (_ref20, ref) {
                    var className = _ref20.className,
                        _ref20$showIcon = _ref20.showIcon,
                        showIcon =
                            void 0 !== _ref20$showIcon && _ref20$showIcon,
                        props = (0, objectWithoutProperties.Z)(
                            _ref20,
                            _excluded20,
                        ),
                        width = react.useMemo(function () {
                            return ''.concat(
                                Math.floor(40 * Math.random()) + 50,
                                '%',
                            )
                        }, [])
                    return __jsx(
                        'div',
                        (0, esm_extends.Z)(
                            {
                                ref,
                                'data-sidebar': 'menu-skeleton',
                                className: (0, utils.cn)(
                                    'rounded-md h-8 flex gap-2 px-2 items-center',
                                    className,
                                ),
                            },
                            props,
                        ),
                        showIcon &&
                            __jsx(skeleton.O, {
                                className: 'size-4 rounded-md',
                                'data-sidebar': 'menu-skeleton-icon',
                            }),
                        __jsx(skeleton.O, {
                            className: 'h-4 flex-1 max-w-[--skeleton-width]',
                            'data-sidebar': 'menu-skeleton-text',
                            style: { '--skeleton-width': width },
                        }),
                    )
                }).displayName = 'SidebarMenuSkeleton')
            var SidebarMenuSub = react.forwardRef(function (_ref21, ref) {
                var className = _ref21.className,
                    props = (0, objectWithoutProperties.Z)(_ref21, _excluded21)
                return __jsx(
                    'ul',
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'menu-sub',
                            className: (0, utils.cn)(
                                'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
                                'group-data-[collapsible=icon]:hidden',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarMenuSub.displayName = 'SidebarMenuSub'
            var SidebarMenuSubItem = react.forwardRef(function (_ref22, ref) {
                var props = (0, esm_extends.Z)(
                    {},
                    ((0, objectDestructuringEmpty.Z)(_ref22), _ref22),
                )
                return __jsx('li', (0, esm_extends.Z)({ ref }, props))
            })
            SidebarMenuSubItem.displayName = 'SidebarMenuSubItem'
            var SidebarMenuSubButton = react.forwardRef(function (_ref23, ref) {
                var _ref23$asChild = _ref23.asChild,
                    asChild = void 0 !== _ref23$asChild && _ref23$asChild,
                    _ref23$size = _ref23.size,
                    size = void 0 === _ref23$size ? 'md' : _ref23$size,
                    isActive = _ref23.isActive,
                    className = _ref23.className,
                    props = (0, objectWithoutProperties.Z)(_ref23, _excluded22),
                    Comp = asChild ? dist.g7 : 'a'
                return __jsx(
                    Comp,
                    (0, esm_extends.Z)(
                        {
                            ref,
                            'data-sidebar': 'menu-sub-button',
                            'data-size': size,
                            'data-active': isActive,
                            className: (0, utils.cn)(
                                'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
                                'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
                                'sm' === size && 'text-xs',
                                'md' === size && 'text-sm',
                                'group-data-[collapsible=icon]:hidden',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            })
            SidebarMenuSubButton.displayName = 'SidebarMenuSubButton'
            try {
                ;(SidebarProvider.displayName = 'SidebarProvider'),
                    (SidebarProvider.__docgenInfo = {
                        description: '',
                        displayName: 'SidebarProvider',
                        props: {
                            variant: {
                                defaultValue: { value: 'default' },
                                description: '',
                                name: 'variant',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"sidebar"' },
                                        { value: '"floating"' },
                                        { value: '"inset"' },
                                    ],
                                },
                            },
                            side: {
                                defaultValue: { value: 'left' },
                                description: '',
                                name: 'side',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"left"' },
                                        { value: '"right"' },
                                    ],
                                },
                            },
                            collapsible: {
                                defaultValue: { value: 'offcanvas' },
                                description: '',
                                name: 'collapsible',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"none"' },
                                        { value: '"offcanvas"' },
                                        { value: '"icon"' },
                                    ],
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/sidebar.tsx#SidebarProvider'
                        ] = {
                            docgenInfo: SidebarProvider.__docgenInfo,
                            name: 'SidebarProvider',
                            path: 'src/components/ui/sidebar.tsx#SidebarProvider',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var nav_main_jsx = react.createElement
            function NavMain(_ref) {
                var items = _ref.items
                return nav_main_jsx(
                    SidebarGroup,
                    null,
                    nav_main_jsx(SidebarGroupLabel, null, 'Platform'),
                    nav_main_jsx(
                        SidebarMenu,
                        null,
                        items.map(function (item) {
                            var _item$items, _item$items2
                            return nav_main_jsx(
                                collapsible.zF,
                                {
                                    key: item.title,
                                    asChild: !0,
                                    defaultOpen: item.isActive,
                                },
                                nav_main_jsx(
                                    SidebarMenuItem,
                                    null,
                                    nav_main_jsx(
                                        SidebarMenuButton,
                                        { asChild: !0, tooltip: item.title },
                                        nav_main_jsx(
                                            'a',
                                            { href: item.url },
                                            nav_main_jsx(item.icon, null),
                                            nav_main_jsx(
                                                'span',
                                                null,
                                                item.title,
                                            ),
                                        ),
                                    ),
                                    null !== (_item$items = item.items) &&
                                        void 0 !== _item$items &&
                                        _item$items.length
                                        ? nav_main_jsx(
                                              react.Fragment,
                                              null,
                                              nav_main_jsx(
                                                  collapsible.wy,
                                                  { asChild: !0 },
                                                  nav_main_jsx(
                                                      SidebarMenuAction,
                                                      {
                                                          className:
                                                              'data-[state=open]:rotate-90',
                                                      },
                                                      nav_main_jsx(
                                                          chevron_right.Z,
                                                          null,
                                                      ),
                                                      nav_main_jsx(
                                                          'span',
                                                          {
                                                              className:
                                                                  'sr-only',
                                                          },
                                                          'Toggle',
                                                      ),
                                                  ),
                                              ),
                                              nav_main_jsx(
                                                  collapsible.Fw,
                                                  null,
                                                  nav_main_jsx(
                                                      SidebarMenuSub,
                                                      null,
                                                      null ===
                                                          (_item$items2 =
                                                              item.items) ||
                                                          void 0 ===
                                                              _item$items2
                                                          ? void 0
                                                          : _item$items2.map(
                                                                function (
                                                                    subItem,
                                                                ) {
                                                                    return nav_main_jsx(
                                                                        SidebarMenuSubItem,
                                                                        {
                                                                            key: subItem.title,
                                                                        },
                                                                        nav_main_jsx(
                                                                            SidebarMenuSubButton,
                                                                            {
                                                                                asChild:
                                                                                    !0,
                                                                            },
                                                                            nav_main_jsx(
                                                                                'a',
                                                                                {
                                                                                    href: subItem.url,
                                                                                },
                                                                                nav_main_jsx(
                                                                                    'span',
                                                                                    null,
                                                                                    subItem.title,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    )
                                                                },
                                                            ),
                                                  ),
                                              ),
                                          )
                                        : null,
                                ),
                            )
                        }),
                    ),
                )
            }
            NavMain.displayName = 'NavMain'
            try {
                ;(NavMain.displayName = 'NavMain'),
                    (NavMain.__docgenInfo = {
                        description: '',
                        displayName: 'NavMain',
                        props: {
                            items: {
                                defaultValue: null,
                                description: '',
                                name: 'items',
                                required: !0,
                                type: {
                                    name: '{ title: string; url: string; icon: LucideIcon; isActive?: boolean | undefined; items?: { title: string; url: string; }[] | undefined; }[]',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/sidebar/nav-main.tsx#NavMain'
                        ] = {
                            docgenInfo: NavMain.__docgenInfo,
                            name: 'NavMain',
                            path: 'src/components/sidebar/nav-main.tsx#NavMain',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var more_horizontal = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/more-horizontal.js',
                ),
                folder = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/folder.js',
                ),
                share = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/share.js',
                ),
                trash_2 = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/trash-2.js',
                ),
                dropdown_menu = __webpack_require__(
                    './src/components/ui/dropdown-menu.tsx',
                ),
                nav_projects_jsx = react.createElement
            function NavProjects(_ref) {
                var projects = _ref.projects,
                    isMobile = useSidebar().isMobile
                return nav_projects_jsx(
                    SidebarGroup,
                    { className: 'group-data-[collapsible=icon]:hidden' },
                    nav_projects_jsx(SidebarGroupLabel, null, 'Projects'),
                    nav_projects_jsx(
                        SidebarMenu,
                        null,
                        projects.map(function (item) {
                            return nav_projects_jsx(
                                SidebarMenuItem,
                                { key: item.name },
                                nav_projects_jsx(
                                    SidebarMenuButton,
                                    { asChild: !0 },
                                    nav_projects_jsx(
                                        'a',
                                        { href: item.url },
                                        nav_projects_jsx(item.icon, null),
                                        nav_projects_jsx(
                                            'span',
                                            null,
                                            item.name,
                                        ),
                                    ),
                                ),
                                nav_projects_jsx(
                                    dropdown_menu.h_,
                                    null,
                                    nav_projects_jsx(
                                        dropdown_menu.$F,
                                        { asChild: !0 },
                                        nav_projects_jsx(
                                            SidebarMenuAction,
                                            { showOnHover: !0 },
                                            nav_projects_jsx(
                                                more_horizontal.Z,
                                                null,
                                            ),
                                            nav_projects_jsx(
                                                'span',
                                                { className: 'sr-only' },
                                                'More',
                                            ),
                                        ),
                                    ),
                                    nav_projects_jsx(
                                        dropdown_menu.AW,
                                        {
                                            className: 'w-48',
                                            side: isMobile ? 'bottom' : 'right',
                                            align: isMobile ? 'end' : 'start',
                                        },
                                        nav_projects_jsx(
                                            dropdown_menu.Xi,
                                            null,
                                            nav_projects_jsx(folder.Z, {
                                                className:
                                                    'text-muted-foreground',
                                            }),
                                            nav_projects_jsx(
                                                'span',
                                                null,
                                                'View Project',
                                            ),
                                        ),
                                        nav_projects_jsx(
                                            dropdown_menu.Xi,
                                            null,
                                            nav_projects_jsx(share.Z, {
                                                className:
                                                    'text-muted-foreground',
                                            }),
                                            nav_projects_jsx(
                                                'span',
                                                null,
                                                'Share Project',
                                            ),
                                        ),
                                        nav_projects_jsx(
                                            dropdown_menu.VD,
                                            null,
                                        ),
                                        nav_projects_jsx(
                                            dropdown_menu.Xi,
                                            null,
                                            nav_projects_jsx(trash_2.Z, {
                                                className:
                                                    'text-muted-foreground',
                                            }),
                                            nav_projects_jsx(
                                                'span',
                                                null,
                                                'Delete Project',
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        }),
                        nav_projects_jsx(
                            SidebarMenuItem,
                            null,
                            nav_projects_jsx(
                                SidebarMenuButton,
                                null,
                                nav_projects_jsx(more_horizontal.Z, null),
                                nav_projects_jsx('span', null, 'More'),
                            ),
                        ),
                    ),
                )
            }
            NavProjects.displayName = 'NavProjects'
            try {
                ;(NavProjects.displayName = 'NavProjects'),
                    (NavProjects.__docgenInfo = {
                        description: '',
                        displayName: 'NavProjects',
                        props: {
                            projects: {
                                defaultValue: null,
                                description: '',
                                name: 'projects',
                                required: !0,
                                type: {
                                    name: '{ name: string; url: string; icon: LucideIcon; }[]',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/sidebar/nav-projects.tsx#NavProjects'
                        ] = {
                            docgenInfo: NavProjects.__docgenInfo,
                            name: 'NavProjects',
                            path: 'src/components/sidebar/nav-projects.tsx#NavProjects',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var nav_secondary_excluded = ['items'],
                nav_secondary_jsx = react.createElement
            function NavSecondary(_ref) {
                var items = _ref.items,
                    props = (0, objectWithoutProperties.Z)(
                        _ref,
                        nav_secondary_excluded,
                    )
                return nav_secondary_jsx(
                    SidebarGroup,
                    props,
                    nav_secondary_jsx(
                        SidebarGroupContent,
                        null,
                        nav_secondary_jsx(
                            SidebarMenu,
                            null,
                            items.map(function (item) {
                                return nav_secondary_jsx(
                                    SidebarMenuItem,
                                    { key: item.title },
                                    nav_secondary_jsx(
                                        SidebarMenuButton,
                                        { asChild: !0, size: 'sm' },
                                        nav_secondary_jsx(
                                            'a',
                                            { href: item.url },
                                            nav_secondary_jsx(item.icon, null),
                                            nav_secondary_jsx(
                                                'span',
                                                null,
                                                item.title,
                                            ),
                                        ),
                                    ),
                                )
                            }),
                        ),
                    ),
                )
            }
            NavSecondary.displayName = 'NavSecondary'
            try {
                ;(NavSecondary.displayName = 'NavSecondary'),
                    (NavSecondary.__docgenInfo = {
                        description: '',
                        displayName: 'NavSecondary',
                        props: {
                            items: {
                                defaultValue: null,
                                description: '',
                                name: 'items',
                                required: !0,
                                type: {
                                    name: '{ title: string; url: string; icon: LucideIcon; }[]',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/sidebar/nav-secondary.tsx#NavSecondary'
                        ] = {
                            docgenInfo: NavSecondary.__docgenInfo,
                            name: 'NavSecondary',
                            path: 'src/components/sidebar/nav-secondary.tsx#NavSecondary',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var chevrons_up_down = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js',
                ),
                sparkles = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/sparkles.js',
                ),
                badge_check = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/badge-check.js',
                ),
                credit_card = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/credit-card.js',
                ),
                bell = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/bell.js',
                ),
                log_out = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/log-out.js',
                ),
                avatar = __webpack_require__('./src/components/ui/avatar.tsx'),
                nav_user_jsx = react.createElement
            function NavUser(_ref) {
                var user = _ref.user,
                    isMobile = useSidebar().isMobile
                return nav_user_jsx(
                    SidebarMenu,
                    null,
                    nav_user_jsx(
                        SidebarMenuItem,
                        null,
                        nav_user_jsx(
                            dropdown_menu.h_,
                            null,
                            nav_user_jsx(
                                dropdown_menu.$F,
                                { asChild: !0 },
                                nav_user_jsx(
                                    SidebarMenuButton,
                                    {
                                        size: 'lg',
                                        className:
                                            'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
                                    },
                                    nav_user_jsx(
                                        avatar.qE,
                                        { className: 'h-8 w-8 rounded-lg' },
                                        nav_user_jsx(avatar.F$, {
                                            src: user.avatar,
                                            alt: user.name,
                                        }),
                                        nav_user_jsx(
                                            avatar.Q5,
                                            { className: 'rounded-lg' },
                                            'CN',
                                        ),
                                    ),
                                    nav_user_jsx(
                                        'div',
                                        {
                                            className:
                                                'grid flex-1 text-left text-sm leading-tight',
                                        },
                                        nav_user_jsx(
                                            'span',
                                            {
                                                className:
                                                    'truncate font-semibold',
                                            },
                                            user.name,
                                        ),
                                        nav_user_jsx(
                                            'span',
                                            { className: 'truncate text-xs' },
                                            user.email,
                                        ),
                                    ),
                                    nav_user_jsx(chevrons_up_down.Z, {
                                        className: 'ml-auto size-4',
                                    }),
                                ),
                            ),
                            nav_user_jsx(
                                dropdown_menu.AW,
                                {
                                    className:
                                        'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                                    side: isMobile ? 'bottom' : 'right',
                                    align: 'end',
                                    sideOffset: 4,
                                },
                                nav_user_jsx(
                                    dropdown_menu.Ju,
                                    { className: 'p-0 font-normal' },
                                    nav_user_jsx(
                                        'div',
                                        {
                                            className:
                                                'flex items-center gap-2 px-1 py-1.5 text-left text-sm',
                                        },
                                        nav_user_jsx(
                                            avatar.qE,
                                            { className: 'h-8 w-8 rounded-lg' },
                                            nav_user_jsx(avatar.F$, {
                                                src: user.avatar,
                                                alt: user.name,
                                            }),
                                            nav_user_jsx(
                                                avatar.Q5,
                                                { className: 'rounded-lg' },
                                                'CN',
                                            ),
                                        ),
                                        nav_user_jsx(
                                            'div',
                                            {
                                                className:
                                                    'grid flex-1 text-left text-sm leading-tight',
                                            },
                                            nav_user_jsx(
                                                'span',
                                                {
                                                    className:
                                                        'truncate font-semibold',
                                                },
                                                user.name,
                                            ),
                                            nav_user_jsx(
                                                'span',
                                                {
                                                    className:
                                                        'truncate text-xs',
                                                },
                                                user.email,
                                            ),
                                        ),
                                    ),
                                ),
                                nav_user_jsx(dropdown_menu.VD, null),
                                nav_user_jsx(
                                    dropdown_menu.Qk,
                                    null,
                                    nav_user_jsx(
                                        dropdown_menu.Xi,
                                        null,
                                        nav_user_jsx(sparkles.Z, null),
                                        'Upgrade to Pro',
                                    ),
                                ),
                                nav_user_jsx(dropdown_menu.VD, null),
                                nav_user_jsx(
                                    dropdown_menu.Qk,
                                    null,
                                    nav_user_jsx(
                                        dropdown_menu.Xi,
                                        null,
                                        nav_user_jsx(badge_check.Z, null),
                                        'Account',
                                    ),
                                    nav_user_jsx(
                                        dropdown_menu.Xi,
                                        null,
                                        nav_user_jsx(credit_card.Z, null),
                                        'Billing',
                                    ),
                                    nav_user_jsx(
                                        dropdown_menu.Xi,
                                        null,
                                        nav_user_jsx(bell.Z, null),
                                        'Notifications',
                                    ),
                                ),
                                nav_user_jsx(dropdown_menu.VD, null),
                                nav_user_jsx(
                                    dropdown_menu.Xi,
                                    null,
                                    nav_user_jsx(log_out.Z, null),
                                    'Log out',
                                ),
                            ),
                        ),
                    ),
                )
            }
            NavUser.displayName = 'NavUser'
            try {
                ;(NavUser.displayName = 'NavUser'),
                    (NavUser.__docgenInfo = {
                        description: '',
                        displayName: 'NavUser',
                        props: {
                            user: {
                                defaultValue: null,
                                description: '',
                                name: 'user',
                                required: !0,
                                type: {
                                    name: '{ name: string; email: string; avatar: string; }',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/sidebar/nav-user.tsx#NavUser'
                        ] = {
                            docgenInfo: NavUser.__docgenInfo,
                            name: 'NavUser',
                            path: 'src/components/sidebar/nav-user.tsx#NavUser',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var app_sidebar_excluded = [
                    'user',
                    'navMain',
                    'navSecondary',
                    'projects',
                    'hideUserSection',
                    'hideNavMain',
                    'hideProjects',
                    'hideNavSecondary',
                ],
                app_sidebar_jsx = react.createElement
            function AppSidebar(_ref) {
                var user = _ref.user,
                    navMain = _ref.navMain,
                    navSecondary = _ref.navSecondary,
                    projects = _ref.projects,
                    _ref$hideUserSection = _ref.hideUserSection,
                    hideUserSection =
                        void 0 !== _ref$hideUserSection && _ref$hideUserSection,
                    _ref$hideNavMain = _ref.hideNavMain,
                    hideNavMain =
                        void 0 !== _ref$hideNavMain && _ref$hideNavMain,
                    _ref$hideProjects = _ref.hideProjects,
                    hideProjects =
                        void 0 !== _ref$hideProjects && _ref$hideProjects,
                    _ref$hideNavSecondary = _ref.hideNavSecondary,
                    hideNavSecondary =
                        void 0 !== _ref$hideNavSecondary &&
                        _ref$hideNavSecondary,
                    props = (0, objectWithoutProperties.Z)(
                        _ref,
                        app_sidebar_excluded,
                    )
                return app_sidebar_jsx(
                    SidebarProvider,
                    null,
                    app_sidebar_jsx(
                        Sidebar,
                        (0, esm_extends.Z)({ variant: 'inset' }, props),
                        app_sidebar_jsx(
                            SidebarHeader,
                            null,
                            app_sidebar_jsx(
                                SidebarMenu,
                                null,
                                app_sidebar_jsx(
                                    SidebarMenuItem,
                                    null,
                                    app_sidebar_jsx(
                                        SidebarMenuButton,
                                        { size: 'lg', asChild: !0 },
                                        app_sidebar_jsx(
                                            'a',
                                            { href: '#' },
                                            app_sidebar_jsx(
                                                'div',
                                                {
                                                    className:
                                                        'flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground',
                                                },
                                                app_sidebar_jsx(command.Z, {
                                                    className: 'size-4',
                                                }),
                                            ),
                                            app_sidebar_jsx(
                                                'div',
                                                {
                                                    className:
                                                        'grid flex-1 text-left text-sm leading-tight',
                                                },
                                                app_sidebar_jsx(
                                                    'span',
                                                    {
                                                        className:
                                                            'truncate font-semibold',
                                                    },
                                                    'RealCube',
                                                ),
                                                app_sidebar_jsx(
                                                    'span',
                                                    {
                                                        className:
                                                            'truncate text-xs',
                                                    },
                                                    'Estate',
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        app_sidebar_jsx(
                            SidebarContent,
                            null,
                            !hideNavMain &&
                                navMain &&
                                app_sidebar_jsx(NavMain, { items: navMain }),
                            !hideProjects &&
                                projects &&
                                app_sidebar_jsx(NavProjects, { projects }),
                            !hideNavSecondary &&
                                navSecondary &&
                                app_sidebar_jsx(NavSecondary, {
                                    items: navSecondary,
                                    className: 'mt-auto',
                                }),
                        ),
                        !hideUserSection &&
                            user &&
                            app_sidebar_jsx(
                                SidebarFooter,
                                null,
                                app_sidebar_jsx(NavUser, { user }),
                            ),
                    ),
                )
            }
            AppSidebar.displayName = 'AppSidebar'
            try {
                ;(AppSidebar.displayName = 'AppSidebar'),
                    (AppSidebar.__docgenInfo = {
                        description: '',
                        displayName: 'AppSidebar',
                        props: {
                            user: {
                                defaultValue: null,
                                description: '',
                                name: 'user',
                                required: !1,
                                type: { name: 'User' },
                            },
                            navMain: {
                                defaultValue: null,
                                description: '',
                                name: 'navMain',
                                required: !1,
                                type: { name: 'NavItem[]' },
                            },
                            navSecondary: {
                                defaultValue: null,
                                description: '',
                                name: 'navSecondary',
                                required: !1,
                                type: { name: 'NavItem[]' },
                            },
                            projects: {
                                defaultValue: null,
                                description: '',
                                name: 'projects',
                                required: !1,
                                type: { name: 'ProjectItem[]' },
                            },
                            hideUserSection: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'hideUserSection',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            hideNavMain: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'hideNavMain',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            hideProjects: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'hideProjects',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            hideNavSecondary: {
                                defaultValue: { value: 'false' },
                                description: '',
                                name: 'hideNavSecondary',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            variant: {
                                defaultValue: null,
                                description: '',
                                name: 'variant',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"sidebar"' },
                                        { value: '"floating"' },
                                        { value: '"inset"' },
                                    ],
                                },
                            },
                            side: {
                                defaultValue: null,
                                description: '',
                                name: 'side',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"left"' },
                                        { value: '"right"' },
                                    ],
                                },
                            },
                            collapsible: {
                                defaultValue: null,
                                description: '',
                                name: 'collapsible',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"none"' },
                                        { value: '"offcanvas"' },
                                        { value: '"icon"' },
                                    ],
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/sidebar/app-sidebar.tsx#AppSidebar'
                        ] = {
                            docgenInfo: AppSidebar.__docgenInfo,
                            name: 'AppSidebar',
                            path: 'src/components/sidebar/app-sidebar.tsx#AppSidebar',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var _Default$parameters,
                _Default$parameters2,
                terminal = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/terminal.js',
                ),
                bot = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/bot.js',
                ),
                book_open = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/book-open.js',
                ),
                settings_2 = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/settings-2.js',
                ),
                life_buoy = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/life-buoy.js',
                ),
                send = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/send.js',
                ),
                icons_frame = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/frame.js',
                ),
                pie_chart = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/pie-chart.js',
                ),
                map = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/map.js',
                )
            function app_sidebar_stories_ownKeys(e, r) {
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
            function app_sidebar_stories_objectSpread(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                        ? app_sidebar_stories_ownKeys(Object(t), !0).forEach(
                              function (r) {
                                  ;(0, defineProperty.Z)(e, r, t[r])
                              },
                          )
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(t),
                            )
                          : app_sidebar_stories_ownKeys(Object(t)).forEach(
                                function (r) {
                                    Object.defineProperty(
                                        e,
                                        r,
                                        Object.getOwnPropertyDescriptor(t, r),
                                    )
                                },
                            )
                }
                return e
            }
            var data = {
                user: {
                    name: 'Rishwan Tariq',
                    email: 'rishwan.tariq@exalogic.co',
                    avatar: '/avatars/shadcn.jpg',
                },
                navMain: [
                    {
                        title: 'Playground',
                        url: '#',
                        icon: terminal.Z,
                        isActive: !0,
                        items: [
                            { title: 'History', url: '#' },
                            { title: 'Starred', url: '#' },
                            { title: 'Settings', url: '#' },
                        ],
                    },
                    {
                        title: 'Models',
                        url: '#',
                        icon: bot.Z,
                        items: [
                            { title: 'Genesis', url: '#' },
                            { title: 'Explorer', url: '#' },
                            { title: 'Quantum', url: '#' },
                        ],
                    },
                    {
                        title: 'Documentation',
                        url: '#',
                        icon: book_open.Z,
                        items: [
                            { title: 'Introduction', url: '#' },
                            { title: 'Get Started', url: '#' },
                            { title: 'Tutorials', url: '#' },
                            { title: 'Changelog', url: '#' },
                        ],
                    },
                    {
                        title: 'Settings',
                        url: '#',
                        icon: settings_2.Z,
                        items: [
                            { title: 'General', url: '#' },
                            { title: 'Team', url: '#' },
                            { title: 'Billing', url: '#' },
                            { title: 'Limits', url: '#' },
                        ],
                    },
                ],
                navSecondary: [
                    { title: 'Support', url: '#', icon: life_buoy.Z },
                    { title: 'Feedback', url: '#', icon: send.Z },
                ],
                projects: [
                    {
                        name: 'Design Engineering',
                        url: '#',
                        icon: icons_frame.Z,
                    },
                    { name: 'Sales & Marketing', url: '#', icon: pie_chart.Z },
                    { name: 'Travel', url: '#', icon: map.Z },
                ],
            }
            const app_sidebar_stories = {
                title: 'RealCube/app-sidebar',
                component: AppSidebar,
                parameters: {
                    layout: 'centered',
                    docs: {
                        description: {
                            component:
                                '\n          ### AppSidebar Component\n          The **AppSidebar** component provides a customizable sidebar with sections for navigation, projects, and user information.\n\n          - **User**: Displays user information like name, email, and avatar.\n          - **Main Navigation**: Primary navigation links with optional sub-items and icons.\n          - **Projects**: List of projects with associated icons.\n          - **Secondary Navigation**: Additional options for support or feedback.\n          \n          You can control the visibility of each section with the `hide*` props.\n        ',
                        },
                    },
                },
                argTypes: {
                    user: {
                        control: 'object',
                        description:
                            'User information with name, email, and avatar URL.',
                        defaultValue: data.user,
                    },
                    navMain: {
                        control: 'object',
                        description:
                            'Primary navigation items with title, URL, icon, and optional sub-items.',
                        defaultValue: data.navMain,
                    },
                    navSecondary: {
                        control: 'object',
                        description:
                            'Secondary navigation items for additional actions such as support.',
                        defaultValue: data.navSecondary,
                    },
                    projects: {
                        control: 'object',
                        description:
                            'List of projects with names, URLs, and icons.',
                        defaultValue: data.projects,
                    },
                    hideUserSection: {
                        control: 'boolean',
                        description: 'Hides the user section when true.',
                        defaultValue: !1,
                    },
                    hideNavMain: {
                        control: 'boolean',
                        description:
                            'Hides the main navigation section when true.',
                        defaultValue: !1,
                    },
                    hideProjects: {
                        control: 'boolean',
                        description: 'Hides the projects section when true.',
                        defaultValue: !1,
                    },
                    hideNavSecondary: {
                        control: 'boolean',
                        description:
                            'Hides the secondary navigation section when true.',
                        defaultValue: !1,
                    },
                },
            }
            var Default = {
                args: {
                    user: data.user,
                    navMain: data.navMain,
                    navSecondary: data.navSecondary,
                    projects: data.projects,
                    hideUserSection: !1,
                    hideNavMain: !1,
                    hideProjects: !1,
                    hideNavSecondary: !1,
                },
            }
            Default.parameters = app_sidebar_stories_objectSpread(
                app_sidebar_stories_objectSpread({}, Default.parameters),
                {},
                {
                    docs: app_sidebar_stories_objectSpread(
                        app_sidebar_stories_objectSpread(
                            {},
                            null ===
                                (_Default$parameters = Default.parameters) ||
                                void 0 === _Default$parameters
                                ? void 0
                                : _Default$parameters.docs,
                        ),
                        {},
                        {
                            source: app_sidebar_stories_objectSpread(
                                {
                                    originalSource:
                                        '{\n  args: {\n    user: data.user,\n    navMain: data.navMain,\n    navSecondary: data.navSecondary,\n    projects: data.projects,\n    hideUserSection: false,\n    hideNavMain: false,\n    hideProjects: false,\n    hideNavSecondary: false\n  }\n}',
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
            )
            const __namedExportsOrder = ['Default']
        },
        './src/components/ui/avatar.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                F$: () => AvatarImage,
                Q5: () => AvatarFallback,
                qE: () => Avatar,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-avatar/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                _excluded2 = ['className'],
                _excluded3 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Avatar = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.fC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Avatar.displayName =
                _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.fC.displayName
            var AvatarImage = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.Ee,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'aspect-square h-full w-full',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            AvatarImage.displayName =
                _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.Ee.displayName
            var AvatarFallback = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref3, ref) {
                    var className = _ref3.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref3,
                            _excluded3,
                        )
                    return __jsx(
                        _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.NY,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'flex h-full w-full items-center justify-center rounded-full bg-muted',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            AvatarFallback.displayName =
                _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.NY.displayName
            try {
                ;(Avatar.displayName = 'Avatar'),
                    (Avatar.__docgenInfo = {
                        description: '',
                        displayName: 'Avatar',
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
                            'src/components/ui/avatar.tsx#Avatar'
                        ] = {
                            docgenInfo: Avatar.__docgenInfo,
                            name: 'Avatar',
                            path: 'src/components/ui/avatar.tsx#Avatar',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(AvatarFallback.displayName = 'AvatarFallback'),
                    (AvatarFallback.__docgenInfo = {
                        description: '',
                        displayName: 'AvatarFallback',
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
                            'src/components/ui/avatar.tsx#AvatarFallback'
                        ] = {
                            docgenInfo: AvatarFallback.__docgenInfo,
                            name: 'AvatarFallback',
                            path: 'src/components/ui/avatar.tsx#AvatarFallback',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(AvatarImage.displayName = 'AvatarImage'),
                    (AvatarImage.__docgenInfo = {
                        description: '',
                        displayName: 'AvatarImage',
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
                            'src/components/ui/avatar.tsx#AvatarImage'
                        ] = {
                            docgenInfo: AvatarImage.__docgenInfo,
                            name: 'AvatarImage',
                            path: 'src/components/ui/avatar.tsx#AvatarImage',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
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
        './src/components/ui/collapsible.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Fw: () => CollapsibleContent,
                wy: () => CollapsibleTrigger,
                zF: () => Collapsible,
            })
            var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-collapsible/dist/index.mjs',
                    ),
                Collapsible =
                    _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.fC,
                CollapsibleTrigger =
                    _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.wy,
                CollapsibleContent =
                    _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.Fw
            try {
                ;(Collapsible.displayName = 'Collapsible'),
                    (Collapsible.__docgenInfo = {
                        description: '',
                        displayName: 'Collapsible',
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
                            'src/components/ui/collapsible.tsx#Collapsible'
                        ] = {
                            docgenInfo: Collapsible.__docgenInfo,
                            name: 'Collapsible',
                            path: 'src/components/ui/collapsible.tsx#Collapsible',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(CollapsibleContent.displayName = 'CollapsibleContent'),
                    (CollapsibleContent.__docgenInfo = {
                        description: '',
                        displayName: 'CollapsibleContent',
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
                            'src/components/ui/collapsible.tsx#CollapsibleContent'
                        ] = {
                            docgenInfo: CollapsibleContent.__docgenInfo,
                            name: 'CollapsibleContent',
                            path: 'src/components/ui/collapsible.tsx#CollapsibleContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(CollapsibleTrigger.displayName = 'CollapsibleTrigger'),
                    (CollapsibleTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'CollapsibleTrigger',
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
                            'src/components/ui/collapsible.tsx#CollapsibleTrigger'
                        ] = {
                            docgenInfo: CollapsibleTrigger.__docgenInfo,
                            name: 'CollapsibleTrigger',
                            path: 'src/components/ui/collapsible.tsx#CollapsibleTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/dropdown-menu.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $F: () => DropdownMenuTrigger,
                AW: () => DropdownMenuContent,
                Ju: () => DropdownMenuLabel,
                KM: () => DropdownMenuShortcut,
                Ph: () => DropdownMenuSub,
                Qk: () => DropdownMenuGroup,
                TG: () => DropdownMenuSubContent,
                VD: () => DropdownMenuSeparator,
                Xi: () => DropdownMenuItem,
                _x: () => DropdownMenuRadioGroup,
                bO: () => DropdownMenuCheckboxItem,
                cq: () => DropdownMenuPortal,
                h_: () => DropdownMenu,
                kt: () => DropdownMenuSubTrigger,
                qB: () => DropdownMenuRadioItem,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs',
                    ),
                lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/chevron-right.js',
                ),
                lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/check.js',
                ),
                lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/circle.js',
                ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'inset', 'children'],
                _excluded2 = ['className'],
                _excluded3 = ['className', 'sideOffset'],
                _excluded4 = ['className', 'inset'],
                _excluded5 = ['className', 'children', 'checked'],
                _excluded6 = ['className', 'children'],
                _excluded7 = ['className', 'inset'],
                _excluded8 = ['className'],
                _excluded9 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                DropdownMenu =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fC,
                DropdownMenuTrigger =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.xz,
                DropdownMenuGroup =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ZA,
                DropdownMenuPortal =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                DropdownMenuSub =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Tr,
                DropdownMenuRadioGroup =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Ee,
                DropdownMenuSubTrigger =
                    react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                        function (_ref, ref) {
                            var className = _ref.className,
                                inset = _ref.inset,
                                children = _ref.children,
                                props = (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                    _ref,
                                    _excluded,
                                )
                            return __jsx(
                                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fF,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
                                            inset && 'pl-8',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                                children,
                                __jsx(
                                    lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,
                                    { className: 'ml-auto h-4 w-4' },
                                ),
                            )
                        },
                    )
            DropdownMenuSubTrigger.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fF.displayName
            var DropdownMenuSubContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref2, ref) {
                        var className = _ref2.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref2,
                                _excluded2,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.tu,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuSubContent.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.tu.displayName
            var DropdownMenuContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref3, ref) {
                        var className = _ref3.className,
                            _ref3$sideOffset = _ref3.sideOffset,
                            sideOffset =
                                void 0 === _ref3$sideOffset
                                    ? 4
                                    : _ref3$sideOffset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref3,
                                _excluded3,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                            null,
                            __jsx(
                                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        sideOffset,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            DropdownMenuContent.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var DropdownMenuItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref4, ref) {
                        var className = _ref4.className,
                            inset = _ref4.inset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref4,
                                _excluded4,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuItem.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName
            var DropdownMenuCheckboxItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref5, ref) {
                        var className = _ref5.className,
                            children = _ref5.children,
                            checked = _ref5.checked,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref5,
                                _excluded5,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.oC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        className,
                                    ),
                                    checked,
                                },
                                props,
                            ),
                            __jsx(
                                'span',
                                {
                                    className:
                                        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                                },
                                __jsx(
                                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
                                    null,
                                    __jsx(
                                        lucide_react__WEBPACK_IMPORTED_MODULE_6__.Z,
                                        { className: 'h-4 w-4' },
                                    ),
                                ),
                            ),
                            children,
                        )
                    },
                )
            DropdownMenuCheckboxItem.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.oC.displayName
            var DropdownMenuRadioItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref6, ref) {
                        var className = _ref6.className,
                            children = _ref6.children,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref6,
                                _excluded6,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Rk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        className,
                                    ),
                                },
                                props,
                            ),
                            __jsx(
                                'span',
                                {
                                    className:
                                        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                                },
                                __jsx(
                                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
                                    null,
                                    __jsx(
                                        lucide_react__WEBPACK_IMPORTED_MODULE_7__.Z,
                                        { className: 'h-2 w-2 fill-current' },
                                    ),
                                ),
                            ),
                            children,
                        )
                    },
                )
            DropdownMenuRadioItem.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Rk.displayName
            var DropdownMenuLabel =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref7, ref) {
                        var className = _ref7.className,
                            inset = _ref7.inset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref7,
                                _excluded7,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.__,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'px-2 py-1.5 text-sm font-semibold',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuLabel.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.__.displayName
            var DropdownMenuSeparator =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref8, ref) {
                        var className = _ref8.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref8,
                                _excluded8,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z0,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        '-mx-1 my-1 h-px bg-muted',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuSeparator.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z0.displayName
            var DropdownMenuShortcut = function DropdownMenuShortcut(_ref9) {
                var className = _ref9.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref9,
                        _excluded9,
                    )
                return __jsx(
                    'span',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'ml-auto text-xs tracking-widest opacity-60',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'),
                (DropdownMenuShortcut.displayName = 'DropdownMenuShortcut')
            try {
                ;(DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'),
                    (DropdownMenuShortcut.__docgenInfo = {
                        description: '',
                        displayName: 'DropdownMenuShortcut',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/dropdown-menu.tsx#DropdownMenuShortcut'
                        ] = {
                            docgenInfo: DropdownMenuShortcut.__docgenInfo,
                            name: 'DropdownMenuShortcut',
                            path: 'src/components/ui/dropdown-menu.tsx#DropdownMenuShortcut',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/input.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { I: () => Input })
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
                _excluded = ['className', 'type'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Input = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            type = _ref.type,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            'input',
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                {
                                    type,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                                        className,
                                    ),
                                    ref,
                                },
                                props,
                            ),
                        )
                    },
                )
            Input.displayName = 'Input'
            try {
                ;(Input.displayName = 'Input'),
                    (Input.__docgenInfo = {
                        description: '',
                        displayName: 'Input',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/input.tsx#Input'
                        ] = {
                            docgenInfo: Input.__docgenInfo,
                            name: 'Input',
                            path: 'src/components/ui/input.tsx#Input',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
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
        './src/components/ui/sheet.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Ei: () => SheetDescription,
                FF: () => SheetFooter,
                Tu: () => SheetHeader,
                aM: () => SheetTrigger,
                bC: () => SheetTitle,
                sw: () => SheetClose,
                ue: () => SheetContent,
                yo: () => Sheet,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-dialog/dist/index.mjs',
                    ),
                class_variance_authority__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        './node_modules/class-variance-authority/dist/index.mjs',
                    ),
                lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/x.js',
                ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                _excluded2 = ['side', 'className', 'children'],
                _excluded3 = ['className'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Sheet = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.fC,
                SheetTrigger =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.xz,
                SheetClose =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,
                SheetPortal =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_,
                SheetOverlay = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                        className,
                                    ),
                                },
                                props,
                                { ref },
                            ),
                        )
                    },
                )
            SheetOverlay.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV.displayName
            var sheetVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_5__.j)(
                    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
                    {
                        variants: {
                            side: {
                                top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
                                bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                                left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
                                right: 'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
                            },
                        },
                        defaultVariants: { side: 'right' },
                    },
                ),
                SheetContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref2, ref) {
                        var _ref2$side = _ref2.side,
                            side = void 0 === _ref2$side ? 'right' : _ref2$side,
                            className = _ref2.className,
                            children = _ref2.children,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref2,
                                _excluded2,
                            )
                        return __jsx(
                            SheetPortal,
                            null,
                            __jsx(SheetOverlay, null),
                            __jsx(
                                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            sheetVariants({ side }),
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                                children,
                                __jsx(
                                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,
                                    {
                                        className:
                                            'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                                    },
                                    __jsx(
                                        lucide_react__WEBPACK_IMPORTED_MODULE_6__.Z,
                                        { className: 'h-4 w-4' },
                                    ),
                                    __jsx(
                                        'span',
                                        { className: 'sr-only' },
                                        'Close',
                                    ),
                                ),
                            ),
                        )
                    },
                )
            SheetContent.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var SheetHeader = function SheetHeader(_ref3) {
                var className = _ref3.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref3,
                        _excluded3,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'flex flex-col space-y-2 text-center sm:text-left',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(SheetHeader.displayName = 'SheetHeader'),
                (SheetHeader.displayName = 'SheetHeader')
            var SheetFooter = function SheetFooter(_ref4) {
                var className = _ref4.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref4,
                        _excluded4,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(SheetFooter.displayName = 'SheetFooter'),
                (SheetFooter.displayName = 'SheetFooter')
            var SheetTitle = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref5, ref) {
                    var className = _ref5.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref5,
                            _excluded5,
                        )
                    return __jsx(
                        _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'text-lg font-semibold text-foreground',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            SheetTitle.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx.displayName
            var SheetDescription =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref6, ref) {
                        var className = _ref6.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref6,
                                _excluded6,
                            )
                        return __jsx(
                            _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'text-sm text-muted-foreground',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            SheetDescription.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk.displayName
            try {
                ;(SheetHeader.displayName = 'SheetHeader'),
                    (SheetHeader.__docgenInfo = {
                        description: '',
                        displayName: 'SheetHeader',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/sheet.tsx#SheetHeader'
                        ] = {
                            docgenInfo: SheetHeader.__docgenInfo,
                            name: 'SheetHeader',
                            path: 'src/components/ui/sheet.tsx#SheetHeader',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/skeleton.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { O: () => Skeleton })
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
                _excluded = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
            function Skeleton(_ref) {
                var className = _ref.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        _ref,
                        _excluded,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                'animate-pulse rounded-md bg-muted',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            Skeleton.displayName = 'Skeleton'
            try {
                ;(Skeleton.displayName = 'Skeleton'),
                    (Skeleton.__docgenInfo = {
                        description: '',
                        displayName: 'Skeleton',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/skeleton.tsx#Skeleton'
                        ] = {
                            docgenInfo: Skeleton.__docgenInfo,
                            name: 'Skeleton',
                            path: 'src/components/ui/skeleton.tsx#Skeleton',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/tooltip.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                _v: () => TooltipContent,
                aJ: () => TooltipTrigger,
                pn: () => TooltipProvider,
                u: () => Tooltip,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-tooltip/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'sideOffset'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                TooltipProvider =
                    _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.zt,
                Tooltip =
                    _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.fC,
                TooltipTrigger =
                    _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.xz,
                TooltipContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            _ref$sideOffset = _ref.sideOffset,
                            sideOffset =
                                void 0 === _ref$sideOffset
                                    ? 4
                                    : _ref$sideOffset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.VY,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    sideOffset,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            TooltipContent.displayName =
                _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            try {
                ;(Tooltip.displayName = 'Tooltip'),
                    (Tooltip.__docgenInfo = {
                        description: '',
                        displayName: 'Tooltip',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/tooltip.tsx#Tooltip'
                        ] = {
                            docgenInfo: Tooltip.__docgenInfo,
                            name: 'Tooltip',
                            path: 'src/components/ui/tooltip.tsx#Tooltip',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TooltipContent.displayName = 'TooltipContent'),
                    (TooltipContent.__docgenInfo = {
                        description: '',
                        displayName: 'TooltipContent',
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
                            'src/components/ui/tooltip.tsx#TooltipContent'
                        ] = {
                            docgenInfo: TooltipContent.__docgenInfo,
                            name: 'TooltipContent',
                            path: 'src/components/ui/tooltip.tsx#TooltipContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TooltipProvider.displayName = 'TooltipProvider'),
                    (TooltipProvider.__docgenInfo = {
                        description: '',
                        displayName: 'TooltipProvider',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/tooltip.tsx#TooltipProvider'
                        ] = {
                            docgenInfo: TooltipProvider.__docgenInfo,
                            name: 'TooltipProvider',
                            path: 'src/components/ui/tooltip.tsx#TooltipProvider',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TooltipTrigger.displayName = 'TooltipTrigger'),
                    (TooltipTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'TooltipTrigger',
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
                            'src/components/ui/tooltip.tsx#TooltipTrigger'
                        ] = {
                            docgenInfo: TooltipTrigger.__docgenInfo,
                            name: 'TooltipTrigger',
                            path: 'src/components/ui/tooltip.tsx#TooltipTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
