'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [459],
    {
        './node_modules/@radix-ui/react-avatar/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                NY: () => Fallback,
                Ee: () => Image,
                fC: () => dist_Root,
            })
            var react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/next/dist/compiled/react/jsx-runtime.js',
                )
            function composeContextScopes(...scopes) {
                const baseScope = scopes[0]
                if (1 === scopes.length) return baseScope
                const createScope = () => {
                    const scopeHooks = scopes.map((createScope2) => ({
                        useScope: createScope2(),
                        scopeName: createScope2.scopeName,
                    }))
                    return function useComposedScopes(overrideScopes) {
                        const nextScopes = scopeHooks.reduce(
                            (nextScopes2, { useScope, scopeName }) => ({
                                ...nextScopes2,
                                ...useScope(overrideScopes)[
                                    `__scope${scopeName}`
                                ],
                            }),
                            {},
                        )
                        return react.useMemo(
                            () => ({
                                [`__scope${baseScope.scopeName}`]: nextScopes,
                            }),
                            [nextScopes],
                        )
                    }
                }
                return (
                    (createScope.scopeName = baseScope.scopeName), createScope
                )
            }
            var useLayoutEffect2 = Boolean(globalThis?.document)
                    ? react.useLayoutEffect
                    : () => {},
                dist =
                    (__webpack_require__(
                        './node_modules/next/dist/compiled/react-dom/index.js',
                    ),
                    __webpack_require__(
                        './node_modules/@radix-ui/react-slot/dist/index.mjs',
                    )),
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
            var [createAvatarContext, createAvatarScope] =
                    (function createContextScope(
                        scopeName,
                        createContextScopeDeps = [],
                    ) {
                        let defaultContexts = []
                        const createScope = () => {
                            const scopeContexts = defaultContexts.map(
                                (defaultContext) =>
                                    react.createContext(defaultContext),
                            )
                            return function useScope(scope) {
                                const contexts =
                                    scope?.[scopeName] || scopeContexts
                                return react.useMemo(
                                    () => ({
                                        [`__scope${scopeName}`]: {
                                            ...scope,
                                            [scopeName]: contexts,
                                        },
                                    }),
                                    [scope, contexts],
                                )
                            }
                        }
                        return (
                            (createScope.scopeName = scopeName),
                            [
                                function createContext3(
                                    rootComponentName,
                                    defaultContext,
                                ) {
                                    const BaseContext =
                                            react.createContext(defaultContext),
                                        index = defaultContexts.length
                                    defaultContexts = [
                                        ...defaultContexts,
                                        defaultContext,
                                    ]
                                    const Provider = (props) => {
                                        const { scope, children, ...context } =
                                                props,
                                            Context =
                                                scope?.[scopeName]?.[index] ||
                                                BaseContext,
                                            value = react.useMemo(
                                                () => context,
                                                Object.values(context),
                                            )
                                        return (0, jsx_runtime.jsx)(
                                            Context.Provider,
                                            { value, children },
                                        )
                                    }
                                    return (
                                        (Provider.displayName =
                                            rootComponentName + 'Provider'),
                                        [
                                            Provider,
                                            function useContext2(
                                                consumerName,
                                                scope,
                                            ) {
                                                const Context =
                                                        scope?.[scopeName]?.[
                                                            index
                                                        ] || BaseContext,
                                                    context =
                                                        react.useContext(
                                                            Context,
                                                        )
                                                if (context) return context
                                                if (void 0 !== defaultContext)
                                                    return defaultContext
                                                throw new Error(
                                                    `\`${consumerName}\` must be used within \`${rootComponentName}\``,
                                                )
                                            },
                                        ]
                                    )
                                },
                                composeContextScopes(
                                    createScope,
                                    ...createContextScopeDeps,
                                ),
                            ]
                        )
                    })('Avatar'),
                [AvatarProvider, useAvatarContext] =
                    createAvatarContext('Avatar'),
                Avatar = react.forwardRef((props, forwardedRef) => {
                    const { __scopeAvatar, ...avatarProps } = props,
                        [imageLoadingStatus, setImageLoadingStatus] =
                            react.useState('idle')
                    return (0, jsx_runtime.jsx)(AvatarProvider, {
                        scope: __scopeAvatar,
                        imageLoadingStatus,
                        onImageLoadingStatusChange: setImageLoadingStatus,
                        children: (0, jsx_runtime.jsx)(Primitive.span, {
                            ...avatarProps,
                            ref: forwardedRef,
                        }),
                    })
                })
            Avatar.displayName = 'Avatar'
            var AvatarImage = react.forwardRef((props, forwardedRef) => {
                const {
                        __scopeAvatar,
                        src,
                        onLoadingStatusChange = () => {},
                        ...imageProps
                    } = props,
                    context = useAvatarContext('AvatarImage', __scopeAvatar),
                    imageLoadingStatus = (function useImageLoadingStatus(
                        src,
                        referrerPolicy,
                    ) {
                        const [loadingStatus, setLoadingStatus] =
                            react.useState('idle')
                        return (
                            useLayoutEffect2(() => {
                                if (!src) return void setLoadingStatus('error')
                                let isMounted = !0
                                const image = new window.Image(),
                                    updateStatus = (status) => () => {
                                        isMounted && setLoadingStatus(status)
                                    }
                                return (
                                    setLoadingStatus('loading'),
                                    (image.onload = updateStatus('loaded')),
                                    (image.onerror = updateStatus('error')),
                                    (image.src = src),
                                    referrerPolicy &&
                                        (image.referrerPolicy = referrerPolicy),
                                    () => {
                                        isMounted = !1
                                    }
                                )
                            }, [src, referrerPolicy]),
                            loadingStatus
                        )
                    })(src, imageProps.referrerPolicy),
                    handleLoadingStatusChange = (function useCallbackRef(
                        callback,
                    ) {
                        const callbackRef = react.useRef(callback)
                        return (
                            react.useEffect(() => {
                                callbackRef.current = callback
                            }),
                            react.useMemo(
                                () =>
                                    (...args) =>
                                        callbackRef.current?.(...args),
                                [],
                            )
                        )
                    })((status) => {
                        onLoadingStatusChange(status),
                            context.onImageLoadingStatusChange(status)
                    })
                return (
                    useLayoutEffect2(() => {
                        'idle' !== imageLoadingStatus &&
                            handleLoadingStatusChange(imageLoadingStatus)
                    }, [imageLoadingStatus, handleLoadingStatusChange]),
                    'loaded' === imageLoadingStatus
                        ? (0, jsx_runtime.jsx)(Primitive.img, {
                              ...imageProps,
                              ref: forwardedRef,
                              src,
                          })
                        : null
                )
            })
            AvatarImage.displayName = 'AvatarImage'
            var AvatarFallback = react.forwardRef((props, forwardedRef) => {
                const { __scopeAvatar, delayMs, ...fallbackProps } = props,
                    context = useAvatarContext('AvatarFallback', __scopeAvatar),
                    [canRender, setCanRender] = react.useState(
                        void 0 === delayMs,
                    )
                return (
                    react.useEffect(() => {
                        if (void 0 !== delayMs) {
                            const timerId = window.setTimeout(
                                () => setCanRender(!0),
                                delayMs,
                            )
                            return () => window.clearTimeout(timerId)
                        }
                    }, [delayMs]),
                    canRender && 'loaded' !== context.imageLoadingStatus
                        ? (0, jsx_runtime.jsx)(Primitive.span, {
                              ...fallbackProps,
                              ref: forwardedRef,
                          })
                        : null
                )
            })
            AvatarFallback.displayName = 'AvatarFallback'
            var dist_Root = Avatar,
                Image = AvatarImage,
                Fallback = AvatarFallback
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
        './src/components/ui/stories/avatar-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    AvatarWithFallback: () => AvatarWithFallback,
                    AvatarWithImage: () => AvatarWithImage,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _AvatarWithImage$para,
                _AvatarWithImage$para2,
                _AvatarWithFallback$p,
                _AvatarWithFallback$p2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    './src/components/ui/avatar.tsx',
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
                title: 'RealCube/avatar',
                render: function render(args) {
                    return __jsx(
                        _avatar__WEBPACK_IMPORTED_MODULE_2__.qE,
                        null,
                        __jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.F$, {
                            src: 'https://github.com/shadcn.png',
                            alt: '@shadcn',
                        }),
                        __jsx(
                            _avatar__WEBPACK_IMPORTED_MODULE_2__.Q5,
                            null,
                            'Shadcn',
                        ),
                    )
                },
                tags: ['autodocs'],
                parameters: { layout: 'centered' },
            }
            var AvatarWithImage = {
                    args: {},
                    render: function render(args) {
                        return __jsx(
                            _avatar__WEBPACK_IMPORTED_MODULE_2__.qE,
                            null,
                            __jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.F$, {
                                src: 'https://github.com/shadcn.png',
                                alt: '@shadcn',
                            }),
                            __jsx(
                                _avatar__WEBPACK_IMPORTED_MODULE_2__.Q5,
                                null,
                                'Shadcn',
                            ),
                        )
                    },
                },
                AvatarWithFallback = {
                    args: {},
                    render: function render(args) {
                        return __jsx(
                            _avatar__WEBPACK_IMPORTED_MODULE_2__.qE,
                            null,
                            __jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.F$, {
                                src: '',
                                alt: '@shadcn',
                            }),
                            __jsx(
                                _avatar__WEBPACK_IMPORTED_MODULE_2__.Q5,
                                null,
                                'CN',
                            ),
                        )
                    },
                }
            ;(AvatarWithImage.parameters = _objectSpread(
                _objectSpread({}, AvatarWithImage.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_AvatarWithImage$para =
                                    AvatarWithImage.parameters) ||
                                void 0 === _AvatarWithImage$para
                                ? void 0
                                : _AvatarWithImage$para.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        '{\n  args: {},\n  render: args => <Avatar>\n            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n            <AvatarFallback>Shadcn</AvatarFallback>\n        </Avatar>\n}',
                                },
                                null ===
                                    (_AvatarWithImage$para2 =
                                        AvatarWithImage.parameters) ||
                                    void 0 === _AvatarWithImage$para2 ||
                                    null ===
                                        (_AvatarWithImage$para2 =
                                            _AvatarWithImage$para2.docs) ||
                                    void 0 === _AvatarWithImage$para2
                                    ? void 0
                                    : _AvatarWithImage$para2.source,
                            ),
                        },
                    ),
                },
            )),
                (AvatarWithFallback.parameters = _objectSpread(
                    _objectSpread({}, AvatarWithFallback.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_AvatarWithFallback$p =
                                        AvatarWithFallback.parameters) ||
                                    void 0 === _AvatarWithFallback$p
                                    ? void 0
                                    : _AvatarWithFallback$p.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  args: {},\n  render: args => <Avatar>\n            <AvatarImage src="" alt="@shadcn" />\n            <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n}',
                                    },
                                    null ===
                                        (_AvatarWithFallback$p2 =
                                            AvatarWithFallback.parameters) ||
                                        void 0 === _AvatarWithFallback$p2 ||
                                        null ===
                                            (_AvatarWithFallback$p2 =
                                                _AvatarWithFallback$p2.docs) ||
                                        void 0 === _AvatarWithFallback$p2
                                        ? void 0
                                        : _AvatarWithFallback$p2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'AvatarWithImage',
                'AvatarWithFallback',
            ]
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
