'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [7624],
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
        './src/components/ui/stories/scroll-area-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    ScrollAreaHorizontal: () => ScrollAreaHorizontal,
                    ScrollAreaVertical: () => ScrollAreaVertical,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => scroll_area_demo_stories,
                })
            var _ScrollAreaVertical$p,
                _ScrollAreaVertical$p2,
                _ScrollAreaHorizontal,
                _ScrollAreaHorizontal2,
                defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                next_image = __webpack_require__(
                    './node_modules/@storybook/nextjs/dist/images/next-image.mjs',
                ),
                scroll_area = __webpack_require__(
                    './src/components/ui/scroll-area.tsx',
                ),
                separator = __webpack_require__(
                    './src/components/ui/separator.tsx',
                ),
                __jsx = react.createElement,
                tags = Array.from({ length: 50 }).map(function (_, i, a) {
                    return 'v1.2.0-beta.'.concat(a.length - i)
                })
            function ScrollAreaDemo() {
                return __jsx(
                    scroll_area.x,
                    { className: 'h-72 w-48 rounded-md border' },
                    __jsx(
                        'div',
                        { className: 'p-4' },
                        __jsx(
                            'h4',
                            {
                                className:
                                    'mb-4 text-sm font-medium leading-none',
                            },
                            'Tags',
                        ),
                        tags.map(function (tag) {
                            return __jsx(
                                react.Fragment,
                                null,
                                __jsx(
                                    'div',
                                    { key: tag, className: 'text-sm' },
                                    tag,
                                ),
                                __jsx(separator.Z, { className: 'my-2' }),
                            )
                        }),
                    ),
                )
            }
            ScrollAreaDemo.displayName = 'ScrollAreaDemo'
            var scroll_area_demo_stories_jsx = react.createElement
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
            var works = [
                {
                    artist: 'Ornella Binni',
                    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
                },
                {
                    artist: 'Tom Byrom',
                    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
                },
                {
                    artist: 'Vladimir Malyavko',
                    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
                },
            ]
            const scroll_area_demo_stories = {
                title: 'RealCube/scroll-area',
                component: ScrollAreaDemo,
                parameters: { layout: 'centered' },
            }
            var ScrollAreaVertical = { args: {} },
                ScrollAreaHorizontal = {
                    args: {},
                    render: function render() {
                        return scroll_area_demo_stories_jsx(
                            react.Fragment,
                            null,
                            scroll_area_demo_stories_jsx(
                                scroll_area.x,
                                {
                                    className:
                                        'w-96 whitespace-nowrap rounded-md border',
                                },
                                scroll_area_demo_stories_jsx(
                                    'div',
                                    { className: 'flex w-max space-x-4 p-4' },
                                    works.map(function (artwork) {
                                        return scroll_area_demo_stories_jsx(
                                            'figure',
                                            {
                                                key: artwork.artist,
                                                className: 'shrink-0',
                                            },
                                            scroll_area_demo_stories_jsx(
                                                'div',
                                                {
                                                    className:
                                                        'overflow-hidden rounded-md',
                                                },
                                                scroll_area_demo_stories_jsx(
                                                    next_image.Z,
                                                    {
                                                        src: artwork.art,
                                                        alt: 'Photo by '.concat(
                                                            artwork.artist,
                                                        ),
                                                        className:
                                                            'aspect-[3/4] h-fit w-fit object-cover',
                                                        width: 300,
                                                        height: 400,
                                                    },
                                                ),
                                            ),
                                            scroll_area_demo_stories_jsx(
                                                'figcaption',
                                                {
                                                    className:
                                                        'pt-2 text-xs text-muted-foreground',
                                                },
                                                'Photo by',
                                                ' ',
                                                scroll_area_demo_stories_jsx(
                                                    'span',
                                                    {
                                                        className:
                                                            'font-semibold text-foreground',
                                                    },
                                                    artwork.artist,
                                                ),
                                            ),
                                        )
                                    }),
                                ),
                                scroll_area_demo_stories_jsx(scroll_area.B, {
                                    orientation: 'horizontal',
                                }),
                            ),
                        )
                    },
                }
            ;(ScrollAreaVertical.parameters = _objectSpread(
                _objectSpread({}, ScrollAreaVertical.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_ScrollAreaVertical$p =
                                    ScrollAreaVertical.parameters) ||
                                void 0 === _ScrollAreaVertical$p
                                ? void 0
                                : _ScrollAreaVertical$p.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{\n  args: {}\n}' },
                                null ===
                                    (_ScrollAreaVertical$p2 =
                                        ScrollAreaVertical.parameters) ||
                                    void 0 === _ScrollAreaVertical$p2 ||
                                    null ===
                                        (_ScrollAreaVertical$p2 =
                                            _ScrollAreaVertical$p2.docs) ||
                                    void 0 === _ScrollAreaVertical$p2
                                    ? void 0
                                    : _ScrollAreaVertical$p2.source,
                            ),
                        },
                    ),
                },
            )),
                (ScrollAreaHorizontal.parameters = _objectSpread(
                    _objectSpread({}, ScrollAreaHorizontal.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ScrollAreaHorizontal =
                                        ScrollAreaHorizontal.parameters) ||
                                    void 0 === _ScrollAreaHorizontal
                                    ? void 0
                                    : _ScrollAreaHorizontal.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  args: {},\n  render: () => {\n    return <>\n                <ScrollArea className="w-96 whitespace-nowrap rounded-md border">\n                    <div className="flex w-max space-x-4 p-4">\n                        {works.map(artwork => <figure key={artwork.artist} className="shrink-0">\n                                <div className="overflow-hidden rounded-md">\n                                    <Image src={artwork.art} alt={`Photo by ${artwork.artist}`} className="aspect-[3/4] h-fit w-fit object-cover" width={300} height={400} />\n                                </div>\n                                <figcaption className="pt-2 text-xs text-muted-foreground">\n                                    Photo by{\' \'}\n                                    <span className="font-semibold text-foreground">\n                                        {artwork.artist}\n                                    </span>\n                                </figcaption>\n                            </figure>)}\n                    </div>\n                    <ScrollBar orientation="horizontal" />\n                </ScrollArea>\n            </>;\n  }\n}',
                                    },
                                    null ===
                                        (_ScrollAreaHorizontal2 =
                                            ScrollAreaHorizontal.parameters) ||
                                        void 0 === _ScrollAreaHorizontal2 ||
                                        null ===
                                            (_ScrollAreaHorizontal2 =
                                                _ScrollAreaHorizontal2.docs) ||
                                        void 0 === _ScrollAreaHorizontal2
                                        ? void 0
                                        : _ScrollAreaHorizontal2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'ScrollAreaVertical',
                'ScrollAreaHorizontal',
            ]
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
        './node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs': (
            __unused_webpack_module,
            exports,
        ) => {
            function _getRequireWildcardCache(nodeInterop) {
                if ('function' != typeof WeakMap) return null
                var cacheBabelInterop = new WeakMap(),
                    cacheNodeInterop = new WeakMap()
                return (_getRequireWildcardCache = function (nodeInterop) {
                    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
                })(nodeInterop)
            }
            exports._ = exports._interop_require_wildcard =
                function _interop_require_wildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj
                    if (
                        null === obj ||
                        ('object' != typeof obj && 'function' != typeof obj)
                    )
                        return { default: obj }
                    var cache = _getRequireWildcardCache(nodeInterop)
                    if (cache && cache.has(obj)) return cache.get(obj)
                    var newObj = {},
                        hasPropertyDescriptor =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor
                    for (var key in obj)
                        if (
                            'default' !== key &&
                            Object.prototype.hasOwnProperty.call(obj, key)
                        ) {
                            var desc = hasPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(obj, key)
                                : null
                            desc && (desc.get || desc.set)
                                ? Object.defineProperty(newObj, key, desc)
                                : (newObj[key] = obj[key])
                        }
                    ;(newObj.default = obj), cache && cache.set(obj, newObj)
                    return newObj
                }
        },
    },
])
