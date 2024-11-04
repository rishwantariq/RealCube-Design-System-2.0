/*! For license information please see 1425.1b3e70b1.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [1425],
    {
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
        './node_modules/@radix-ui/react-icons/dist/react-icons.esm.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                v4q: () => ChevronDownIcon,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {}
                var key,
                    i,
                    target = {},
                    sourceKeys = Object.keys(source)
                for (i = 0; i < sourceKeys.length; i++)
                    (key = sourceKeys[i]),
                        excluded.indexOf(key) >= 0 ||
                            (target[key] = source[key])
                return target
            }
            var _excluded$W = ['color'],
                ChevronDownIcon = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    function (_ref, forwardedRef) {
                        var _ref$color = _ref.color,
                            color =
                                void 0 === _ref$color
                                    ? 'currentColor'
                                    : _ref$color,
                            props = _objectWithoutPropertiesLoose(
                                _ref,
                                _excluded$W,
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            'svg',
                            Object.assign(
                                {
                                    width: '15',
                                    height: '15',
                                    viewBox: '0 0 15 15',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                },
                                props,
                                { ref: forwardedRef },
                            ),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                'path',
                                {
                                    d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
                                    fill: color,
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                },
                            ),
                        )
                    },
                )
        },
        './node_modules/@radix-ui/react-id/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
            __webpack_require__.d(__webpack_exports__, {
                M: () => $1746a345f3d73bb7$export$f680877a34711e37,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs',
                    )
            const $1746a345f3d73bb7$var$useReactId =
                (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
                    (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
                        __webpack_require__.t(
                            react__WEBPACK_IMPORTED_MODULE_0__,
                            2,
                        )))['useId'.toString()] || (() => {})
            let $1746a345f3d73bb7$var$count = 0
            function $1746a345f3d73bb7$export$f680877a34711e37(
                deterministicId,
            ) {
                const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
                    $1746a345f3d73bb7$var$useReactId(),
                )
                return (
                    (0,
                    _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                        deterministicId ||
                            setId((reactId) =>
                                null != reactId
                                    ? reactId
                                    : String($1746a345f3d73bb7$var$count++),
                            )
                    }, [deterministicId]),
                    deterministicId || (id ? `radix-${id}` : '')
                )
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
        './node_modules/@radix-ui/react-use-previous/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                D: () => $010c2913dbd2fe3d$export$5cae361ad82dce8b,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
                const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                    value,
                    previous: value,
                })
                return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                    () => (
                        ref.current.value !== value &&
                            ((ref.current.previous = ref.current.value),
                            (ref.current.value = value)),
                        ref.current.previous
                    ),
                    [value],
                )
            }
        },
        './node_modules/@radix-ui/react-use-size/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                t: () => $db6c3485150b8e66$export$1ab7ae714698c4b8,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs',
                    )
            function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
                const [size, setSize] = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0)
                return (
                    (0,
                    _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                        if (element) {
                            setSize({
                                width: element.offsetWidth,
                                height: element.offsetHeight,
                            })
                            const resizeObserver = new ResizeObserver(
                                (entries) => {
                                    if (!Array.isArray(entries)) return
                                    if (!entries.length) return
                                    const entry = entries[0]
                                    let width, height
                                    if ('borderBoxSize' in entry) {
                                        const borderSizeEntry =
                                                entry.borderBoxSize,
                                            borderSize = Array.isArray(
                                                borderSizeEntry,
                                            )
                                                ? borderSizeEntry[0]
                                                : borderSizeEntry
                                        ;(width = borderSize.inlineSize),
                                            (height = borderSize.blockSize)
                                    } else
                                        (width = element.offsetWidth),
                                            (height = element.offsetHeight)
                                    setSize({ width, height })
                                },
                            )
                            return (
                                resizeObserver.observe(element, {
                                    box: 'border-box',
                                }),
                                () => resizeObserver.unobserve(element)
                            )
                        }
                        setSize(void 0)
                    }, [element]),
                    size
                )
            }
        },
        './node_modules/lucide-react/dist/esm/icons/circle.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Circle })
            const Circle = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Circle', [
                ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
            ])
        },
    },
])
