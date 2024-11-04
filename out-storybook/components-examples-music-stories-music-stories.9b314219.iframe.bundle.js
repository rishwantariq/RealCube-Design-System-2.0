/*! For license information please see components-examples-music-stories-music-stories.9b314219.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5686],
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
        './src/components/examples/music/stories/music.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Music: () => Music,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => music_stories,
                })
            var defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                plus_circle = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/plus-circle.js',
                ),
                ui_button = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                scroll_area = __webpack_require__(
                    './src/components/ui/scroll-area.tsx',
                ),
                separator = __webpack_require__(
                    './src/components/ui/separator.tsx',
                ),
                tabs = __webpack_require__('./src/components/ui/tabs.tsx'),
                esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                objectWithoutProperties = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                ),
                next_image = __webpack_require__(
                    './node_modules/@storybook/nextjs/dist/images/next-image.mjs',
                ),
                utils = __webpack_require__('./src/lib/utils.ts'),
                context_menu = __webpack_require__(
                    './src/components/ui/context-menu.tsx',
                ),
                playlists = [
                    'Recently Added',
                    'Recently Played',
                    'Top Songs',
                    'Top Albums',
                    'Top Artists',
                    'Logic Discography',
                    'Bedtime Beats',
                    'Feeling Happy',
                    'I miss Y2K Pop',
                    'Runtober',
                    'Mellow Days',
                    'Eminem Essentials',
                ],
                _excluded = [
                    'album',
                    'aspectRatio',
                    'width',
                    'height',
                    'className',
                ],
                __jsx = react.createElement
            function AlbumArtwork(_ref) {
                var album = _ref.album,
                    _ref$aspectRatio = _ref.aspectRatio,
                    aspectRatio =
                        void 0 === _ref$aspectRatio
                            ? 'portrait'
                            : _ref$aspectRatio,
                    width = _ref.width,
                    height = _ref.height,
                    className = _ref.className,
                    props = (0, objectWithoutProperties.Z)(_ref, _excluded)
                return __jsx(
                    'div',
                    (0, esm_extends.Z)(
                        { className: (0, utils.cn)('space-y-3', className) },
                        props,
                    ),
                    __jsx(
                        context_menu.xV,
                        null,
                        __jsx(
                            context_menu.W4,
                            null,
                            __jsx(
                                'div',
                                { className: 'overflow-hidden rounded-md' },
                                __jsx(next_image.Z, {
                                    src: album.cover,
                                    alt: album.name,
                                    width,
                                    height,
                                    className: (0, utils.cn)(
                                        'h-auto w-auto object-cover transition-all hover:scale-105',
                                        'portrait' === aspectRatio
                                            ? 'aspect-[3/4]'
                                            : 'aspect-square',
                                    ),
                                }),
                            ),
                        ),
                        __jsx(
                            context_menu.h_,
                            { className: 'w-40' },
                            __jsx(context_menu.Zo, null, 'Add to Library'),
                            __jsx(
                                context_menu.qu,
                                null,
                                __jsx(context_menu.xx, null, 'Add to Playlist'),
                                __jsx(
                                    context_menu.dp,
                                    { className: 'w-48' },
                                    __jsx(
                                        context_menu.Zo,
                                        null,
                                        __jsx(plus_circle.Z, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        'New Playlist',
                                    ),
                                    __jsx(context_menu.uP, null),
                                    playlists.map(function (playlist) {
                                        return __jsx(
                                            context_menu.Zo,
                                            { key: playlist },
                                            __jsx(
                                                'svg',
                                                {
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    fill: 'none',
                                                    stroke: 'currentColor',
                                                    strokeLinecap: 'round',
                                                    strokeLinejoin: 'round',
                                                    strokeWidth: '2',
                                                    className: 'mr-2 h-4 w-4',
                                                    viewBox: '0 0 24 24',
                                                },
                                                __jsx('path', {
                                                    d: 'M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3',
                                                }),
                                            ),
                                            playlist,
                                        )
                                    }),
                                ),
                            ),
                            __jsx(context_menu.uP, null),
                            __jsx(context_menu.Zo, null, 'Play Next'),
                            __jsx(context_menu.Zo, null, 'Play Later'),
                            __jsx(context_menu.Zo, null, 'Create Station'),
                            __jsx(context_menu.uP, null),
                            __jsx(context_menu.Zo, null, 'Like'),
                            __jsx(context_menu.Zo, null, 'Share'),
                        ),
                    ),
                    __jsx(
                        'div',
                        { className: 'space-y-1 text-sm' },
                        __jsx(
                            'h3',
                            { className: 'font-medium leading-none' },
                            album.name,
                        ),
                        __jsx(
                            'p',
                            { className: 'text-xs text-muted-foreground' },
                            album.artist,
                        ),
                    ),
                )
            }
            AlbumArtwork.displayName = 'AlbumArtwork'
            try {
                ;(AlbumArtwork.displayName = 'AlbumArtwork'),
                    (AlbumArtwork.__docgenInfo = {
                        description: '',
                        displayName: 'AlbumArtwork',
                        props: {
                            album: {
                                defaultValue: null,
                                description: '',
                                name: 'album',
                                required: !0,
                                type: { name: 'Album' },
                            },
                            aspectRatio: {
                                defaultValue: { value: 'portrait' },
                                description: '',
                                name: 'aspectRatio',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"portrait"' },
                                        { value: '"square"' },
                                    ],
                                },
                            },
                            width: {
                                defaultValue: null,
                                description: '',
                                name: 'width',
                                required: !1,
                                type: { name: 'number' },
                            },
                            height: {
                                defaultValue: null,
                                description: '',
                                name: 'height',
                                required: !1,
                                type: { name: 'number' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/music/components/album-artwork.tsx#AlbumArtwork'
                        ] = {
                            docgenInfo: AlbumArtwork.__docgenInfo,
                            name: 'AlbumArtwork',
                            path: 'src/components/examples/music/components/album-artwork.tsx#AlbumArtwork',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var menubar = __webpack_require__(
                    './src/components/ui/menubar.tsx',
                ),
                menu_jsx = react.createElement
            function Menu() {
                return menu_jsx(
                    menubar.nm,
                    {
                        className:
                            'rounded-none border-b border-none px-2 lg:px-4',
                    },
                    menu_jsx(
                        menubar.QP,
                        null,
                        menu_jsx(
                            menubar.rQ,
                            { className: 'font-bold' },
                            'Music',
                        ),
                        menu_jsx(
                            menubar.uE,
                            null,
                            menu_jsx(menubar.N, null, 'About Music'),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Preferences... ',
                                menu_jsx(menubar.U7, null, '⌘,'),
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Hide Music... ',
                                menu_jsx(menubar.U7, null, '⌘H'),
                            ),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Hide Others... ',
                                menu_jsx(menubar.U7, null, '⇧⌘H'),
                            ),
                            menu_jsx(menubar.U7, null),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Quit Music ',
                                menu_jsx(menubar.U7, null, '⌘Q'),
                            ),
                        ),
                    ),
                    menu_jsx(
                        menubar.QP,
                        null,
                        menu_jsx(menubar.rQ, { className: 'relative' }, 'File'),
                        menu_jsx(
                            menubar.uE,
                            null,
                            menu_jsx(
                                menubar.tP,
                                null,
                                menu_jsx(menubar.hL, null, 'New'),
                                menu_jsx(
                                    menubar.lS,
                                    { className: 'w-[230px]' },
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Playlist ',
                                        menu_jsx(menubar.U7, null, '⌘N'),
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        { disabled: !0 },
                                        'Playlist from Selection',
                                        ' ',
                                        menu_jsx(menubar.U7, null, '⇧⌘N'),
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Smart Playlist...',
                                        ' ',
                                        menu_jsx(menubar.U7, null, '⌥⌘N'),
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Playlist Folder',
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        { disabled: !0 },
                                        'Genius Playlist',
                                    ),
                                ),
                            ),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Open Stream URL... ',
                                menu_jsx(menubar.U7, null, '⌘U'),
                            ),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Close Window ',
                                menu_jsx(menubar.U7, null, '⌘W'),
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.tP,
                                null,
                                menu_jsx(menubar.hL, null, 'Library'),
                                menu_jsx(
                                    menubar.lS,
                                    null,
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Update Cloud Library',
                                    ),
                                    menu_jsx(menubar.N, null, 'Update Genius'),
                                    menu_jsx(menubar.yE, null),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Organize Library...',
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Export Library...',
                                    ),
                                    menu_jsx(menubar.yE, null),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Import Playlist...',
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        { disabled: !0 },
                                        'Export Playlist...',
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Show Duplicate Items',
                                    ),
                                    menu_jsx(menubar.yE, null),
                                    menu_jsx(
                                        menubar.N,
                                        null,
                                        'Get Album Artwork',
                                    ),
                                    menu_jsx(
                                        menubar.N,
                                        { disabled: !0 },
                                        'Get Track Names',
                                    ),
                                ),
                            ),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Import... ',
                                menu_jsx(menubar.U7, null, '⌘O'),
                            ),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Burn Playlist to Disc...',
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Show in Finder ',
                                menu_jsx(menubar.U7, null, '⇧⌘R'),
                                ' ',
                            ),
                            menu_jsx(menubar.N, null, 'Convert'),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(menubar.N, null, 'Page Setup...'),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Print... ',
                                menu_jsx(menubar.U7, null, '⌘P'),
                            ),
                        ),
                    ),
                    menu_jsx(
                        menubar.QP,
                        null,
                        menu_jsx(menubar.rQ, null, 'Edit'),
                        menu_jsx(
                            menubar.uE,
                            null,
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Undo ',
                                menu_jsx(menubar.U7, null, '⌘Z'),
                            ),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Redo ',
                                menu_jsx(menubar.U7, null, '⇧⌘Z'),
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Cut ',
                                menu_jsx(menubar.U7, null, '⌘X'),
                            ),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Copy ',
                                menu_jsx(menubar.U7, null, '⌘C'),
                            ),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Paste ',
                                menu_jsx(menubar.U7, null, '⌘V'),
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Select All ',
                                menu_jsx(menubar.U7, null, '⌘A'),
                            ),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0 },
                                'Deselect All ',
                                menu_jsx(menubar.U7, null, '⇧⌘A'),
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Smart Dictation...',
                                ' ',
                                menu_jsx(
                                    menubar.U7,
                                    null,
                                    menu_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2',
                                            className: 'h-4 w-4',
                                            viewBox: '0 0 24 24',
                                        },
                                        menu_jsx('path', {
                                            d: 'm12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12',
                                        }),
                                        menu_jsx('circle', {
                                            cx: '17',
                                            cy: '7',
                                            r: '5',
                                        }),
                                    ),
                                ),
                            ),
                            menu_jsx(
                                menubar.N,
                                null,
                                'Emoji & Symbols',
                                ' ',
                                menu_jsx(
                                    menubar.U7,
                                    null,
                                    menu_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2',
                                            className: 'h-4 w-4',
                                            viewBox: '0 0 24 24',
                                        },
                                        menu_jsx('circle', {
                                            cx: '12',
                                            cy: '12',
                                            r: '10',
                                        }),
                                        menu_jsx('path', {
                                            d: 'M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    menu_jsx(
                        menubar.QP,
                        null,
                        menu_jsx(menubar.rQ, null, 'View'),
                        menu_jsx(
                            menubar.uE,
                            null,
                            menu_jsx(menubar.g6, null, 'Show Playing Next'),
                            menu_jsx(
                                menubar.g6,
                                { checked: !0 },
                                'Show Lyrics',
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                { inset: !0, disabled: !0 },
                                'Show Status Bar',
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(menubar.N, { inset: !0 }, 'Hide Sidebar'),
                            menu_jsx(
                                menubar.N,
                                { disabled: !0, inset: !0 },
                                'Enter Full Screen',
                            ),
                        ),
                    ),
                    menu_jsx(
                        menubar.QP,
                        null,
                        menu_jsx(
                            menubar.rQ,
                            { className: 'hidden md:block' },
                            'Account',
                        ),
                        menu_jsx(
                            menubar.uE,
                            { forceMount: !0 },
                            menu_jsx(
                                menubar.Og,
                                { inset: !0 },
                                'Switch Account',
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.B,
                                { value: 'benoit' },
                                menu_jsx(menubar.Gm, { value: 'andy' }, 'Andy'),
                                menu_jsx(
                                    menubar.Gm,
                                    { value: 'benoit' },
                                    'Benoit',
                                ),
                                menu_jsx(menubar.Gm, { value: 'Luis' }, 'Luis'),
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                { inset: !0 },
                                'Manage Family...',
                            ),
                            menu_jsx(menubar.yE, null),
                            menu_jsx(
                                menubar.N,
                                { inset: !0 },
                                'Add Account...',
                            ),
                        ),
                    ),
                )
            }
            Menu.displayName = 'Menu'
            var dialog = __webpack_require__('./src/components/ui/dialog.tsx'),
                input = __webpack_require__('./src/components/ui/input.tsx'),
                label = __webpack_require__('./src/components/ui/label.tsx'),
                podcast_empty_placeholder_jsx = react.createElement
            function PodcastEmptyPlaceholder() {
                return podcast_empty_placeholder_jsx(
                    'div',
                    {
                        className:
                            'flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed',
                    },
                    podcast_empty_placeholder_jsx(
                        'div',
                        {
                            className:
                                'mx-auto flex max-w-[420px] flex-col items-center justify-center text-center',
                        },
                        podcast_empty_placeholder_jsx(
                            'svg',
                            {
                                xmlns: 'http://www.w3.org/2000/svg',
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: '2',
                                className: 'h-10 w-10 text-muted-foreground',
                                viewBox: '0 0 24 24',
                            },
                            podcast_empty_placeholder_jsx('circle', {
                                cx: '12',
                                cy: '11',
                                r: '1',
                            }),
                            podcast_empty_placeholder_jsx('path', {
                                d: 'M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0',
                            }),
                            podcast_empty_placeholder_jsx('path', {
                                d: 'M17 18.5a9 9 0 1 0-10 0',
                            }),
                        ),
                        podcast_empty_placeholder_jsx(
                            'h3',
                            { className: 'mt-4 text-lg font-semibold' },
                            'No episodes added',
                        ),
                        podcast_empty_placeholder_jsx(
                            'p',
                            {
                                className:
                                    'mb-4 mt-2 text-sm text-muted-foreground',
                            },
                            'You have not added any podcasts. Add one below.',
                        ),
                        podcast_empty_placeholder_jsx(
                            dialog.Vq,
                            null,
                            podcast_empty_placeholder_jsx(
                                dialog.hg,
                                { asChild: !0 },
                                podcast_empty_placeholder_jsx(
                                    ui_button.z,
                                    { size: 'sm', className: 'relative' },
                                    'Add Podcast',
                                ),
                            ),
                            podcast_empty_placeholder_jsx(
                                dialog.cZ,
                                null,
                                podcast_empty_placeholder_jsx(
                                    dialog.fK,
                                    null,
                                    podcast_empty_placeholder_jsx(
                                        dialog.$N,
                                        null,
                                        'Add Podcast',
                                    ),
                                    podcast_empty_placeholder_jsx(
                                        dialog.Be,
                                        null,
                                        'Copy and paste the podcast feed URL to import.',
                                    ),
                                ),
                                podcast_empty_placeholder_jsx(
                                    'div',
                                    { className: 'grid gap-4 py-4' },
                                    podcast_empty_placeholder_jsx(
                                        'div',
                                        { className: 'grid gap-2' },
                                        podcast_empty_placeholder_jsx(
                                            label._,
                                            { htmlFor: 'url' },
                                            'Podcast URL',
                                        ),
                                        podcast_empty_placeholder_jsx(input.I, {
                                            id: 'url',
                                            placeholder:
                                                'https://example.com/feed.xml',
                                        }),
                                    ),
                                ),
                                podcast_empty_placeholder_jsx(
                                    dialog.cN,
                                    null,
                                    podcast_empty_placeholder_jsx(
                                        ui_button.z,
                                        null,
                                        'Import Podcast',
                                    ),
                                ),
                            ),
                        ),
                    ),
                )
            }
            PodcastEmptyPlaceholder.displayName = 'PodcastEmptyPlaceholder'
            var sidebar_jsx = react.createElement
            function Sidebar(_ref) {
                var className = _ref.className,
                    playlists = _ref.playlists
                return sidebar_jsx(
                    'div',
                    { className: (0, utils.cn)('pb-12', className) },
                    sidebar_jsx(
                        'div',
                        { className: 'space-y-4 py-4' },
                        sidebar_jsx(
                            'div',
                            { className: 'px-3 py-2' },
                            sidebar_jsx(
                                'h2',
                                {
                                    className:
                                        'mb-2 px-4 text-lg font-semibold tracking-tight',
                                },
                                'Discover',
                            ),
                            sidebar_jsx(
                                'div',
                                { className: 'space-y-1' },
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'secondary',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('circle', {
                                            cx: '12',
                                            cy: '12',
                                            r: '10',
                                        }),
                                        sidebar_jsx('polygon', {
                                            points: '10 8 16 12 10 16 10 8',
                                        }),
                                    ),
                                    'Listen Now',
                                ),
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('rect', {
                                            width: '7',
                                            height: '7',
                                            x: '3',
                                            y: '3',
                                            rx: '1',
                                        }),
                                        sidebar_jsx('rect', {
                                            width: '7',
                                            height: '7',
                                            x: '14',
                                            y: '3',
                                            rx: '1',
                                        }),
                                        sidebar_jsx('rect', {
                                            width: '7',
                                            height: '7',
                                            x: '14',
                                            y: '14',
                                            rx: '1',
                                        }),
                                        sidebar_jsx('rect', {
                                            width: '7',
                                            height: '7',
                                            x: '3',
                                            y: '14',
                                            rx: '1',
                                        }),
                                    ),
                                    'Browse',
                                ),
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('path', {
                                            d: 'M4.9 19.1C1 15.2 1 8.8 4.9 4.9',
                                        }),
                                        sidebar_jsx('path', {
                                            d: 'M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5',
                                        }),
                                        sidebar_jsx('circle', {
                                            cx: '12',
                                            cy: '12',
                                            r: '2',
                                        }),
                                        sidebar_jsx('path', {
                                            d: 'M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5',
                                        }),
                                        sidebar_jsx('path', {
                                            d: 'M19.1 4.9C23 8.8 23 15.1 19.1 19',
                                        }),
                                    ),
                                    'Radio',
                                ),
                            ),
                        ),
                        sidebar_jsx(
                            'div',
                            { className: 'px-3 py-2' },
                            sidebar_jsx(
                                'h2',
                                {
                                    className:
                                        'mb-2 px-4 text-lg font-semibold tracking-tight',
                                },
                                'Library',
                            ),
                            sidebar_jsx(
                                'div',
                                { className: 'space-y-1' },
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('path', { d: 'M21 15V6' }),
                                        sidebar_jsx('path', {
                                            d: 'M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
                                        }),
                                        sidebar_jsx('path', { d: 'M12 12H3' }),
                                        sidebar_jsx('path', { d: 'M16 6H3' }),
                                        sidebar_jsx('path', { d: 'M12 18H3' }),
                                    ),
                                    'Playlists',
                                ),
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('circle', {
                                            cx: '8',
                                            cy: '18',
                                            r: '4',
                                        }),
                                        sidebar_jsx('path', {
                                            d: 'M12 18V2l7 4',
                                        }),
                                    ),
                                    'Songs',
                                ),
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('path', {
                                            d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
                                        }),
                                        sidebar_jsx('circle', {
                                            cx: '12',
                                            cy: '7',
                                            r: '4',
                                        }),
                                    ),
                                    'Made for You',
                                ),
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('path', {
                                            d: 'm12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12',
                                        }),
                                        sidebar_jsx('circle', {
                                            cx: '17',
                                            cy: '7',
                                            r: '5',
                                        }),
                                    ),
                                    'Artists',
                                ),
                                sidebar_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'ghost',
                                        className: 'w-full justify-start',
                                    },
                                    sidebar_jsx(
                                        'svg',
                                        {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                        },
                                        sidebar_jsx('path', {
                                            d: 'm16 6 4 14',
                                        }),
                                        sidebar_jsx('path', { d: 'M12 6v14' }),
                                        sidebar_jsx('path', { d: 'M8 8v12' }),
                                        sidebar_jsx('path', { d: 'M4 4v16' }),
                                    ),
                                    'Albums',
                                ),
                            ),
                        ),
                        sidebar_jsx(
                            'div',
                            { className: 'py-2' },
                            sidebar_jsx(
                                'h2',
                                {
                                    className:
                                        'relative px-7 text-lg font-semibold tracking-tight',
                                },
                                'Playlists',
                            ),
                            sidebar_jsx(
                                scroll_area.x,
                                { className: 'h-[300px] px-1' },
                                sidebar_jsx(
                                    'div',
                                    { className: 'space-y-1 p-2' },
                                    null == playlists
                                        ? void 0
                                        : playlists.map(function (playlist, i) {
                                              return sidebar_jsx(
                                                  ui_button.z,
                                                  {
                                                      key: ''
                                                          .concat(playlist, '-')
                                                          .concat(i),
                                                      variant: 'ghost',
                                                      className:
                                                          'w-full justify-start font-normal',
                                                  },
                                                  sidebar_jsx(
                                                      'svg',
                                                      {
                                                          xmlns: 'http://www.w3.org/2000/svg',
                                                          viewBox: '0 0 24 24',
                                                          fill: 'none',
                                                          stroke: 'currentColor',
                                                          strokeWidth: '2',
                                                          strokeLinecap:
                                                              'round',
                                                          strokeLinejoin:
                                                              'round',
                                                          className:
                                                              'mr-2 h-4 w-4',
                                                      },
                                                      sidebar_jsx('path', {
                                                          d: 'M21 15V6',
                                                      }),
                                                      sidebar_jsx('path', {
                                                          d: 'M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
                                                      }),
                                                      sidebar_jsx('path', {
                                                          d: 'M12 12H3',
                                                      }),
                                                      sidebar_jsx('path', {
                                                          d: 'M16 6H3',
                                                      }),
                                                      sidebar_jsx('path', {
                                                          d: 'M12 18H3',
                                                      }),
                                                  ),
                                                  playlist,
                                              )
                                          }),
                                ),
                            ),
                        ),
                    ),
                )
            }
            Sidebar.displayName = 'Sidebar'
            try {
                ;(Sidebar.displayName = 'Sidebar'),
                    (Sidebar.__docgenInfo = {
                        description: '',
                        displayName: 'Sidebar',
                        props: {
                            playlists: {
                                defaultValue: null,
                                description: '',
                                name: 'playlists',
                                required: !0,
                                type: { name: 'string[]' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/music/components/sidebar.tsx#Sidebar'
                        ] = {
                            docgenInfo: Sidebar.__docgenInfo,
                            name: 'Sidebar',
                            path: 'src/components/examples/music/components/sidebar.tsx#Sidebar',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var listenNowAlbums = [
                    {
                        name: 'React Rendezvous',
                        artist: 'Ethan Byte',
                        cover: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'Async Awakenings',
                        artist: 'Nina Netcode',
                        cover: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'The Art of Reusability',
                        artist: 'Lena Logic',
                        cover: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'Stateful Symphony',
                        artist: 'Beth Binary',
                        cover: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
                    },
                ],
                madeForYouAlbums = [
                    {
                        name: 'Thinking Components',
                        artist: 'Lena Logic',
                        cover: 'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'Functional Fury',
                        artist: 'Beth Binary',
                        cover: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'React Rendezvous',
                        artist: 'Ethan Byte',
                        cover: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'Stateful Symphony',
                        artist: 'Beth Binary',
                        cover: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'Async Awakenings',
                        artist: 'Nina Netcode',
                        cover: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
                    },
                    {
                        name: 'The Art of Reusability',
                        artist: 'Lena Logic',
                        cover: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
                    },
                ]
            const music_light = {
                    src: 'static/media/music-light.c8d568c1.png',
                    height: 1014,
                    width: 1280,
                    blurDataURL: 'static/media/music-light.c8d568c1.png',
                },
                music_dark = {
                    src: 'static/media/music-dark.96c2ec01.png',
                    height: 1014,
                    width: 1280,
                    blurDataURL: 'static/media/music-dark.96c2ec01.png',
                }
            var _Music$parameters,
                _Music$parameters2,
                music_stories_jsx = react.createElement
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
            const music_stories = {
                title: 'Examples/music',
                component: function component(args) {
                    return music_stories_jsx(
                        react.Fragment,
                        null,
                        music_stories_jsx(
                            'div',
                            { className: 'md:hidden' },
                            music_stories_jsx(next_image.Z, {
                                src: music_light,
                                width: 1280,
                                height: 1114,
                                alt: 'Music',
                                className: 'block dark:hidden',
                            }),
                            music_stories_jsx(next_image.Z, {
                                src: music_dark,
                                width: 1280,
                                height: 1114,
                                alt: 'Music',
                                className: 'hidden dark:block',
                            }),
                        ),
                        music_stories_jsx(
                            'div',
                            { className: 'hidden md:block' },
                            music_stories_jsx(Menu, null),
                            music_stories_jsx(
                                'div',
                                { className: 'border-t' },
                                music_stories_jsx(
                                    'div',
                                    { className: 'bg-background' },
                                    music_stories_jsx(
                                        'div',
                                        { className: 'grid lg:grid-cols-5' },
                                        music_stories_jsx(Sidebar, {
                                            playlists,
                                            className: 'hidden lg:block',
                                        }),
                                        music_stories_jsx(
                                            'div',
                                            {
                                                className:
                                                    'col-span-3 lg:col-span-4 lg:border-l',
                                            },
                                            music_stories_jsx(
                                                'div',
                                                {
                                                    className:
                                                        'h-full px-4 py-6 lg:px-8',
                                                },
                                                music_stories_jsx(
                                                    tabs.mQ,
                                                    {
                                                        defaultValue: 'music',
                                                        className:
                                                            'h-full space-y-6',
                                                    },
                                                    music_stories_jsx(
                                                        'div',
                                                        {
                                                            className:
                                                                'space-between flex items-center',
                                                        },
                                                        music_stories_jsx(
                                                            tabs.dr,
                                                            null,
                                                            music_stories_jsx(
                                                                tabs.SP,
                                                                {
                                                                    value: 'music',
                                                                    className:
                                                                        'relative',
                                                                },
                                                                'Music',
                                                            ),
                                                            music_stories_jsx(
                                                                tabs.SP,
                                                                {
                                                                    value: 'podcasts',
                                                                },
                                                                'Podcasts',
                                                            ),
                                                            music_stories_jsx(
                                                                tabs.SP,
                                                                {
                                                                    value: 'live',
                                                                    disabled:
                                                                        !0,
                                                                },
                                                                'Live',
                                                            ),
                                                        ),
                                                        music_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'ml-auto mr-4',
                                                            },
                                                            music_stories_jsx(
                                                                ui_button.z,
                                                                null,
                                                                music_stories_jsx(
                                                                    plus_circle.Z,
                                                                    {
                                                                        className:
                                                                            'mr-2 h-4 w-4',
                                                                    },
                                                                ),
                                                                'Add music',
                                                            ),
                                                        ),
                                                    ),
                                                    music_stories_jsx(
                                                        tabs.nU,
                                                        {
                                                            value: 'music',
                                                            className:
                                                                'border-none p-0 outline-none',
                                                        },
                                                        music_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'flex items-center justify-between',
                                                            },
                                                            music_stories_jsx(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'space-y-1',
                                                                },
                                                                music_stories_jsx(
                                                                    'h2',
                                                                    {
                                                                        className:
                                                                            'text-2xl font-semibold tracking-tight',
                                                                    },
                                                                    'Listen Now',
                                                                ),
                                                                music_stories_jsx(
                                                                    'p',
                                                                    {
                                                                        className:
                                                                            'text-sm text-muted-foreground',
                                                                    },
                                                                    'Top picks for you. Updated daily.',
                                                                ),
                                                            ),
                                                        ),
                                                        music_stories_jsx(
                                                            separator.Z,
                                                            {
                                                                className:
                                                                    'my-4',
                                                            },
                                                        ),
                                                        music_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'relative',
                                                            },
                                                            music_stories_jsx(
                                                                scroll_area.x,
                                                                null,
                                                                music_stories_jsx(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'flex space-x-4 pb-4',
                                                                    },
                                                                    listenNowAlbums.map(
                                                                        function (
                                                                            album,
                                                                        ) {
                                                                            return music_stories_jsx(
                                                                                AlbumArtwork,
                                                                                {
                                                                                    key: album.name,
                                                                                    album,
                                                                                    className:
                                                                                        'w-[250px]',
                                                                                    aspectRatio:
                                                                                        'portrait',
                                                                                    width: 250,
                                                                                    height: 330,
                                                                                },
                                                                            )
                                                                        },
                                                                    ),
                                                                ),
                                                                music_stories_jsx(
                                                                    scroll_area.B,
                                                                    {
                                                                        orientation:
                                                                            'horizontal',
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                        music_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'mt-6 space-y-1',
                                                            },
                                                            music_stories_jsx(
                                                                'h2',
                                                                {
                                                                    className:
                                                                        'text-2xl font-semibold tracking-tight',
                                                                },
                                                                'Made for You',
                                                            ),
                                                            music_stories_jsx(
                                                                'p',
                                                                {
                                                                    className:
                                                                        'text-sm text-muted-foreground',
                                                                },
                                                                'Your personal playlists. Updated daily.',
                                                            ),
                                                        ),
                                                        music_stories_jsx(
                                                            separator.Z,
                                                            {
                                                                className:
                                                                    'my-4',
                                                            },
                                                        ),
                                                        music_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'relative',
                                                            },
                                                            music_stories_jsx(
                                                                scroll_area.x,
                                                                null,
                                                                music_stories_jsx(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'flex space-x-4 pb-4',
                                                                    },
                                                                    madeForYouAlbums.map(
                                                                        function (
                                                                            album,
                                                                        ) {
                                                                            return music_stories_jsx(
                                                                                AlbumArtwork,
                                                                                {
                                                                                    key: album.name,
                                                                                    album,
                                                                                    className:
                                                                                        'w-[150px]',
                                                                                    aspectRatio:
                                                                                        'square',
                                                                                    width: 150,
                                                                                    height: 150,
                                                                                },
                                                                            )
                                                                        },
                                                                    ),
                                                                ),
                                                                music_stories_jsx(
                                                                    scroll_area.B,
                                                                    {
                                                                        orientation:
                                                                            'horizontal',
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                    ),
                                                    music_stories_jsx(
                                                        tabs.nU,
                                                        {
                                                            value: 'podcasts',
                                                            className:
                                                                'h-full flex-col border-none p-0 data-[state=active]:flex',
                                                        },
                                                        music_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'flex items-center justify-between',
                                                            },
                                                            music_stories_jsx(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'space-y-1',
                                                                },
                                                                music_stories_jsx(
                                                                    'h2',
                                                                    {
                                                                        className:
                                                                            'text-2xl font-semibold tracking-tight',
                                                                    },
                                                                    'New Episodes',
                                                                ),
                                                                music_stories_jsx(
                                                                    'p',
                                                                    {
                                                                        className:
                                                                            'text-sm text-muted-foreground',
                                                                    },
                                                                    'Your favorite podcasts. Updated daily.',
                                                                ),
                                                            ),
                                                        ),
                                                        music_stories_jsx(
                                                            separator.Z,
                                                            {
                                                                className:
                                                                    'my-4',
                                                            },
                                                        ),
                                                        music_stories_jsx(
                                                            PodcastEmptyPlaceholder,
                                                            null,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    )
                },
            }
            var Music = {}
            Music.parameters = _objectSpread(
                _objectSpread({}, Music.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null === (_Music$parameters = Music.parameters) ||
                                void 0 === _Music$parameters
                                ? void 0
                                : _Music$parameters.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{}' },
                                null ===
                                    (_Music$parameters2 = Music.parameters) ||
                                    void 0 === _Music$parameters2 ||
                                    null ===
                                        (_Music$parameters2 =
                                            _Music$parameters2.docs) ||
                                    void 0 === _Music$parameters2
                                    ? void 0
                                    : _Music$parameters2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['Music']
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
        './src/components/ui/context-menu.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $c: () => ContextMenuCheckboxItem,
                Lc: () => ContextMenuRadioGroup,
                OS: () => ContextMenuLabel,
                W4: () => ContextMenuTrigger,
                Zo: () => ContextMenuItem,
                cX: () => ContextMenuShortcut,
                dp: () => ContextMenuSubContent,
                h_: () => ContextMenuContent,
                qu: () => ContextMenuSub,
                uP: () => ContextMenuSeparator,
                xV: () => ContextMenu,
                xx: () => ContextMenuSubTrigger,
                zP: () => ContextMenuRadioItem,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-context-menu/dist/index.mjs',
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
                _excluded3 = ['className'],
                _excluded4 = ['className', 'inset'],
                _excluded5 = ['className', 'children', 'checked'],
                _excluded6 = ['className', 'children'],
                _excluded7 = ['className', 'inset'],
                _excluded8 = ['className'],
                _excluded9 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                ContextMenu =
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.fC,
                ContextMenuTrigger =
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.xz,
                ContextMenuSub =
                    (_radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.ZA,
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Tr),
                ContextMenuRadioGroup =
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Ee,
                ContextMenuSubTrigger =
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
                                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.fF,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
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
            ContextMenuSubTrigger.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.fF.displayName
            var ContextMenuSubContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref2, ref) {
                        var className = _ref2.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref2,
                                _excluded2,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.tu,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            ContextMenuSubContent.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.tu.displayName
            var ContextMenuContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref3, ref) {
                        var className = _ref3.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref3,
                                _excluded3,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                            null,
                            __jsx(
                                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            ContextMenuContent.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var ContextMenuItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref4, ref) {
                    var className = _ref4.className,
                        inset = _ref4.inset,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref4,
                            _excluded4,
                        )
                    return __jsx(
                        _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.ck,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                    inset && 'pl-8',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            ContextMenuItem.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName
            var ContextMenuCheckboxItem =
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
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.oC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
                                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
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
            ContextMenuCheckboxItem.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.oC.displayName
            var ContextMenuRadioItem =
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
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Rk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
                                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
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
            ContextMenuRadioItem.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Rk.displayName
            var ContextMenuLabel =
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
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.__,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'px-2 py-1.5 text-sm font-semibold text-foreground',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            ContextMenuLabel.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.__.displayName
            var ContextMenuSeparator =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref8, ref) {
                        var className = _ref8.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref8,
                                _excluded8,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Z0,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        '-mx-1 my-1 h-px bg-border',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            ContextMenuSeparator.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Z0.displayName
            var ContextMenuShortcut = function ContextMenuShortcut(_ref9) {
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
                                'ml-auto text-xs tracking-widest text-muted-foreground',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(ContextMenuShortcut.displayName = 'ContextMenuShortcut'),
                (ContextMenuShortcut.displayName = 'ContextMenuShortcut')
            try {
                ;(ContextMenuShortcut.displayName = 'ContextMenuShortcut'),
                    (ContextMenuShortcut.__docgenInfo = {
                        description: '',
                        displayName: 'ContextMenuShortcut',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/context-menu.tsx#ContextMenuShortcut'
                        ] = {
                            docgenInfo: ContextMenuShortcut.__docgenInfo,
                            name: 'ContextMenuShortcut',
                            path: 'src/components/ui/context-menu.tsx#ContextMenuShortcut',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/dialog.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $N: () => DialogTitle,
                Be: () => DialogDescription,
                GG: () => DialogClose,
                Vq: () => Dialog,
                cN: () => DialogFooter,
                cZ: () => DialogContent,
                fK: () => DialogHeader,
                hg: () => DialogTrigger,
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
                lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/x.js',
                ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                _excluded2 = ['className', 'children'],
                _excluded3 = ['className'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.fC,
                DialogTrigger =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.xz,
                DialogPortal =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_,
                DialogClose =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,
                DialogOverlay = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
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
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DialogOverlay.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV.displayName
            var DialogContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        children = _ref2.children,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        DialogPortal,
                        null,
                        __jsx(DialogOverlay, null),
                        __jsx(
                            _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
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
                                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                                },
                                __jsx(
                                    lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,
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
            DialogContent.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var DialogHeader = function DialogHeader(_ref3) {
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
                                'flex flex-col space-y-1.5 text-center sm:text-left',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(DialogHeader.displayName = 'DialogHeader'),
                (DialogHeader.displayName = 'DialogHeader')
            var DialogFooter = function DialogFooter(_ref4) {
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
            ;(DialogFooter.displayName = 'DialogFooter'),
                (DialogFooter.displayName = 'DialogFooter')
            var DialogTitle = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
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
                                    'text-lg font-semibold leading-none tracking-tight',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            DialogTitle.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx.displayName
            var DialogDescription =
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
            DialogDescription.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk.displayName
            try {
                ;(DialogHeader.displayName = 'DialogHeader'),
                    (DialogHeader.__docgenInfo = {
                        description: '',
                        displayName: 'DialogHeader',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/dialog.tsx#DialogHeader'
                        ] = {
                            docgenInfo: DialogHeader.__docgenInfo,
                            name: 'DialogHeader',
                            path: 'src/components/ui/dialog.tsx#DialogHeader',
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
        './src/components/ui/label.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { _: () => Label })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-label/dist/index.mjs',
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
                _excluded = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                labelVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                ),
                Label = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        labelVariants(),
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Label.displayName =
                _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f.displayName
            try {
                ;(Label.displayName = 'Label'),
                    (Label.__docgenInfo = {
                        description: '',
                        displayName: 'Label',
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
                            'src/components/ui/label.tsx#Label'
                        ] = {
                            docgenInfo: Label.__docgenInfo,
                            name: 'Label',
                            path: 'src/components/ui/label.tsx#Label',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/menubar.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                B: () => MenubarRadioGroup,
                Gm: () => MenubarRadioItem,
                N: () => MenubarItem,
                Og: () => MenubarLabel,
                QP: () => MenubarMenu,
                U7: () => MenubarShortcut,
                g6: () => MenubarCheckboxItem,
                hL: () => MenubarSubTrigger,
                lS: () => MenubarSubContent,
                nm: () => Menubar,
                rQ: () => MenubarTrigger,
                tP: () => MenubarSub,
                uE: () => MenubarContent,
                yE: () => MenubarSeparator,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-menubar/dist/index.mjs',
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
                _excluded = ['className'],
                _excluded2 = ['className'],
                _excluded3 = ['className', 'inset', 'children'],
                _excluded4 = ['className'],
                _excluded5 = [
                    'className',
                    'align',
                    'alignOffset',
                    'sideOffset',
                ],
                _excluded6 = ['className', 'inset'],
                _excluded7 = ['className', 'children', 'checked'],
                _excluded8 = ['className', 'children'],
                _excluded9 = ['className', 'inset'],
                _excluded10 = ['className'],
                _excluded11 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                MenubarMenu =
                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.v2,
                MenubarGroup =
                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.ZA,
                MenubarPortal =
                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.h_,
                MenubarSub =
                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.Tr,
                MenubarRadioGroup =
                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.Ee,
                Menubar = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.fC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Menubar.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.fC.displayName
            var MenubarTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.xz,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            MenubarTrigger.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.xz.displayName
            var MenubarSubTrigger =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref3, ref) {
                        var className = _ref3.className,
                            inset = _ref3.inset,
                            children = _ref3.children,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref3,
                                _excluded3,
                            )
                        return __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.fF,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                            children,
                            __jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z, {
                                className: 'ml-auto h-4 w-4',
                            }),
                        )
                    },
                )
            MenubarSubTrigger.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.fF.displayName
            var MenubarSubContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref4, ref) {
                        var className = _ref4.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref4,
                                _excluded4,
                            )
                        return __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.tu,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            MenubarSubContent.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.tu.displayName
            var MenubarContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref5, ref) {
                    var className = _ref5.className,
                        _ref5$align = _ref5.align,
                        align = void 0 === _ref5$align ? 'start' : _ref5$align,
                        _ref5$alignOffset = _ref5.alignOffset,
                        alignOffset =
                            void 0 === _ref5$alignOffset
                                ? -4
                                : _ref5$alignOffset,
                        _ref5$sideOffset = _ref5.sideOffset,
                        sideOffset =
                            void 0 === _ref5$sideOffset ? 8 : _ref5$sideOffset,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref5,
                            _excluded5,
                        )
                    return __jsx(
                        _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.h_,
                        null,
                        __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.VY,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    align,
                                    alignOffset,
                                    sideOffset,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        ),
                    )
                },
            )
            MenubarContent.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var MenubarItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref6, ref) {
                    var className = _ref6.className,
                        inset = _ref6.inset,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref6,
                            _excluded6,
                        )
                    return __jsx(
                        _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.ck,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                    inset && 'pl-8',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            MenubarItem.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.ck.displayName
            var MenubarCheckboxItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref7, ref) {
                        var className = _ref7.className,
                            children = _ref7.children,
                            checked = _ref7.checked,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref7,
                                _excluded7,
                            )
                        return __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.oC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
                                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.wU,
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
            MenubarCheckboxItem.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.oC.displayName
            var MenubarRadioItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref8, ref) {
                        var className = _ref8.className,
                            children = _ref8.children,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref8,
                                _excluded8,
                            )
                        return __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.Rk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
                                    _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.wU,
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
            MenubarRadioItem.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.Rk.displayName
            var MenubarLabel = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref9, ref) {
                    var className = _ref9.className,
                        inset = _ref9.inset,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref9,
                            _excluded9,
                        )
                    return __jsx(
                        _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.__,
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
            MenubarLabel.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.__.displayName
            var MenubarSeparator =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref10, ref) {
                        var className = _ref10.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref10,
                                _excluded10,
                            )
                        return __jsx(
                            _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.Z0,
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
            MenubarSeparator.displayName =
                _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_1__.Z0.displayName
            var MenubarShortcut = function MenubarShortcut(_ref11) {
                var className = _ref11.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref11,
                        _excluded11,
                    )
                return __jsx(
                    'span',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'ml-auto text-xs tracking-widest text-muted-foreground',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(MenubarShortcut.displayName = 'MenubarShortcut'),
                (MenubarShortcut.displayname = 'MenubarShortcut')
            try {
                ;(Menubar.displayName = 'Menubar'),
                    (Menubar.__docgenInfo = {
                        description: '',
                        displayName: 'Menubar',
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
                            'src/components/ui/menubar.tsx#Menubar'
                        ] = {
                            docgenInfo: Menubar.__docgenInfo,
                            name: 'Menubar',
                            path: 'src/components/ui/menubar.tsx#Menubar',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarCheckboxItem.displayName = 'MenubarCheckboxItem'),
                    (MenubarCheckboxItem.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarCheckboxItem',
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
                            'src/components/ui/menubar.tsx#MenubarCheckboxItem'
                        ] = {
                            docgenInfo: MenubarCheckboxItem.__docgenInfo,
                            name: 'MenubarCheckboxItem',
                            path: 'src/components/ui/menubar.tsx#MenubarCheckboxItem',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarContent.displayName = 'MenubarContent'),
                    (MenubarContent.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarContent',
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
                            'src/components/ui/menubar.tsx#MenubarContent'
                        ] = {
                            docgenInfo: MenubarContent.__docgenInfo,
                            name: 'MenubarContent',
                            path: 'src/components/ui/menubar.tsx#MenubarContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarGroup.displayName = 'MenubarGroup'),
                    (MenubarGroup.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarGroup',
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
                            'src/components/ui/menubar.tsx#MenubarGroup'
                        ] = {
                            docgenInfo: MenubarGroup.__docgenInfo,
                            name: 'MenubarGroup',
                            path: 'src/components/ui/menubar.tsx#MenubarGroup',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarItem.displayName = 'MenubarItem'),
                    (MenubarItem.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarItem',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            inset: {
                                defaultValue: null,
                                description: '',
                                name: 'inset',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/menubar.tsx#MenubarItem'
                        ] = {
                            docgenInfo: MenubarItem.__docgenInfo,
                            name: 'MenubarItem',
                            path: 'src/components/ui/menubar.tsx#MenubarItem',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarLabel.displayName = 'MenubarLabel'),
                    (MenubarLabel.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarLabel',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            inset: {
                                defaultValue: null,
                                description: '',
                                name: 'inset',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/menubar.tsx#MenubarLabel'
                        ] = {
                            docgenInfo: MenubarLabel.__docgenInfo,
                            name: 'MenubarLabel',
                            path: 'src/components/ui/menubar.tsx#MenubarLabel',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarPortal.displayName = 'MenubarPortal'),
                    (MenubarPortal.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarPortal',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/menubar.tsx#MenubarPortal'
                        ] = {
                            docgenInfo: MenubarPortal.__docgenInfo,
                            name: 'MenubarPortal',
                            path: 'src/components/ui/menubar.tsx#MenubarPortal',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarRadioGroup.displayName = 'MenubarRadioGroup'),
                    (MenubarRadioGroup.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarRadioGroup',
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
                            'src/components/ui/menubar.tsx#MenubarRadioGroup'
                        ] = {
                            docgenInfo: MenubarRadioGroup.__docgenInfo,
                            name: 'MenubarRadioGroup',
                            path: 'src/components/ui/menubar.tsx#MenubarRadioGroup',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarRadioItem.displayName = 'MenubarRadioItem'),
                    (MenubarRadioItem.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarRadioItem',
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
                            'src/components/ui/menubar.tsx#MenubarRadioItem'
                        ] = {
                            docgenInfo: MenubarRadioItem.__docgenInfo,
                            name: 'MenubarRadioItem',
                            path: 'src/components/ui/menubar.tsx#MenubarRadioItem',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarSeparator.displayName = 'MenubarSeparator'),
                    (MenubarSeparator.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarSeparator',
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
                            'src/components/ui/menubar.tsx#MenubarSeparator'
                        ] = {
                            docgenInfo: MenubarSeparator.__docgenInfo,
                            name: 'MenubarSeparator',
                            path: 'src/components/ui/menubar.tsx#MenubarSeparator',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarShortcut.displayName = 'MenubarShortcut'),
                    (MenubarShortcut.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarShortcut',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/menubar.tsx#MenubarShortcut'
                        ] = {
                            docgenInfo: MenubarShortcut.__docgenInfo,
                            name: 'MenubarShortcut',
                            path: 'src/components/ui/menubar.tsx#MenubarShortcut',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarSub.displayName = 'MenubarSub'),
                    (MenubarSub.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarSub',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/menubar.tsx#MenubarSub'
                        ] = {
                            docgenInfo: MenubarSub.__docgenInfo,
                            name: 'MenubarSub',
                            path: 'src/components/ui/menubar.tsx#MenubarSub',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarSubContent.displayName = 'MenubarSubContent'),
                    (MenubarSubContent.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarSubContent',
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
                            'src/components/ui/menubar.tsx#MenubarSubContent'
                        ] = {
                            docgenInfo: MenubarSubContent.__docgenInfo,
                            name: 'MenubarSubContent',
                            path: 'src/components/ui/menubar.tsx#MenubarSubContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarSubTrigger.displayName = 'MenubarSubTrigger'),
                    (MenubarSubTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarSubTrigger',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            inset: {
                                defaultValue: null,
                                description: '',
                                name: 'inset',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/menubar.tsx#MenubarSubTrigger'
                        ] = {
                            docgenInfo: MenubarSubTrigger.__docgenInfo,
                            name: 'MenubarSubTrigger',
                            path: 'src/components/ui/menubar.tsx#MenubarSubTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(MenubarTrigger.displayName = 'MenubarTrigger'),
                    (MenubarTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'MenubarTrigger',
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
                            'src/components/ui/menubar.tsx#MenubarTrigger'
                        ] = {
                            docgenInfo: MenubarTrigger.__docgenInfo,
                            name: 'MenubarTrigger',
                            path: 'src/components/ui/menubar.tsx#MenubarTrigger',
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
        './src/components/ui/tabs.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                SP: () => TabsTrigger,
                dr: () => TabsList,
                mQ: () => Tabs,
                nU: () => TabsContent,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-tabs/dist/index.mjs',
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
                Tabs = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.fC,
                TabsList = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.aV,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            TabsList.displayName =
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.aV.displayName
            var TabsTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.xz,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TabsTrigger.displayName =
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.xz.displayName
            var TabsContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref3, ref) {
                    var className = _ref3.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref3,
                            _excluded3,
                        )
                    return __jsx(
                        _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.VY,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TabsContent.displayName =
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            try {
                ;(Tabs.displayName = 'Tabs'),
                    (Tabs.__docgenInfo = {
                        description: '',
                        displayName: 'Tabs',
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
                            'src/components/ui/tabs.tsx#Tabs'
                        ] = {
                            docgenInfo: Tabs.__docgenInfo,
                            name: 'Tabs',
                            path: 'src/components/ui/tabs.tsx#Tabs',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TabsContent.displayName = 'TabsContent'),
                    (TabsContent.__docgenInfo = {
                        description: '',
                        displayName: 'TabsContent',
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
                            'src/components/ui/tabs.tsx#TabsContent'
                        ] = {
                            docgenInfo: TabsContent.__docgenInfo,
                            name: 'TabsContent',
                            path: 'src/components/ui/tabs.tsx#TabsContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TabsList.displayName = 'TabsList'),
                    (TabsList.__docgenInfo = {
                        description: '',
                        displayName: 'TabsList',
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
                            'src/components/ui/tabs.tsx#TabsList'
                        ] = {
                            docgenInfo: TabsList.__docgenInfo,
                            name: 'TabsList',
                            path: 'src/components/ui/tabs.tsx#TabsList',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TabsTrigger.displayName = 'TabsTrigger'),
                    (TabsTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'TabsTrigger',
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
                            'src/components/ui/tabs.tsx#TabsTrigger'
                        ] = {
                            docgenInfo: TabsTrigger.__docgenInfo,
                            name: 'TabsTrigger',
                            path: 'src/components/ui/tabs.tsx#TabsTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './node_modules/lucide-react/dist/esm/icons/plus-circle.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => PlusCircle })
            const PlusCircle = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('PlusCircle', [
                ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
                ['path', { d: 'M8 12h8', key: '1wcyev' }],
                ['path', { d: 'M12 8v8', key: 'napkw2' }],
            ])
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
