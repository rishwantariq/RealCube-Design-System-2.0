/*! For license information please see components-ui-stories-hover-card-demo-stories.cb9cc27c.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5250],
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
        './node_modules/@radix-ui/react-hover-card/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                VY: () => $cef8881cdc69808e$export$7c6e2c02157bb7d2,
                fC: () => $cef8881cdc69808e$export$be92b6f5f03c0fe9,
                xz: () => $cef8881cdc69808e$export$41fb9f06171c75f4,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/primitive/dist/index.mjs',
                    ),
                _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-context/dist/index.mjs',
                    ),
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                    ),
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                    ),
                _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-popper/dist/index.mjs',
                    ),
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__ =
                    (__webpack_require__(
                        './node_modules/@radix-ui/react-portal/dist/index.mjs',
                    ),
                    __webpack_require__(
                        './node_modules/@radix-ui/react-presence/dist/index.mjs',
                    )),
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    ),
                _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_10__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs',
                    )
            let $cef8881cdc69808e$var$originalBodyUserSelect
            const [
                    $cef8881cdc69808e$var$createHoverCardContext,
                    $cef8881cdc69808e$export$47b6998a836b7260,
                ] = (0, _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(
                    'HoverCard',
                    [_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.D7],
                ),
                $cef8881cdc69808e$var$usePopperScope = (0,
                _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.D7)(),
                [
                    $cef8881cdc69808e$var$HoverCardProvider,
                    $cef8881cdc69808e$var$useHoverCardContext,
                ] = $cef8881cdc69808e$var$createHoverCardContext('HoverCard'),
                $cef8881cdc69808e$export$57a077cc9fbe653e = (props) => {
                    const {
                            __scopeHoverCard,
                            children,
                            open: openProp,
                            defaultOpen,
                            onOpenChange,
                            openDelay = 700,
                            closeDelay = 300,
                        } = props,
                        popperScope =
                            $cef8881cdc69808e$var$usePopperScope(
                                __scopeHoverCard,
                            ),
                        openTimerRef = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),
                        closeTimerRef = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),
                        hasSelectionRef = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
                        isPointerDownOnContentRef = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
                        [open = !1, setOpen] = (0,
                        _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)(
                            {
                                prop: openProp,
                                defaultProp: defaultOpen,
                                onChange: onOpenChange,
                            },
                        ),
                        handleOpen = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                            clearTimeout(closeTimerRef.current),
                                (openTimerRef.current = window.setTimeout(
                                    () => setOpen(!0),
                                    openDelay,
                                ))
                        }, [openDelay, setOpen]),
                        handleClose = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                            clearTimeout(openTimerRef.current),
                                hasSelectionRef.current ||
                                    isPointerDownOnContentRef.current ||
                                    (closeTimerRef.current = window.setTimeout(
                                        () => setOpen(!1),
                                        closeDelay,
                                    ))
                        }, [closeDelay, setOpen]),
                        handleDismiss = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                            () => setOpen(!1),
                            [setOpen],
                        )
                    return (
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
                            () => () => {
                                clearTimeout(openTimerRef.current),
                                    clearTimeout(closeTimerRef.current)
                            },
                            [],
                        ),
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            $cef8881cdc69808e$var$HoverCardProvider,
                            {
                                scope: __scopeHoverCard,
                                open,
                                onOpenChange: setOpen,
                                onOpen: handleOpen,
                                onClose: handleClose,
                                onDismiss: handleDismiss,
                                hasSelectionRef,
                                isPointerDownOnContentRef,
                            },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.fC,
                                popperScope,
                                children,
                            ),
                        )
                    )
                },
                $cef8881cdc69808e$export$ef9f7fd8e4ba882f = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const { __scopeHoverCard, ...triggerProps } = props,
                            context = $cef8881cdc69808e$var$useHoverCardContext(
                                'HoverCardTrigger',
                                __scopeHoverCard,
                            ),
                            popperScope =
                                $cef8881cdc69808e$var$usePopperScope(
                                    __scopeHoverCard,
                                )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.ee,
                            (0,
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                { asChild: !0 },
                                popperScope,
                            ),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__
                                    .WV.a,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    {
                                        'data-state': context.open
                                            ? 'open'
                                            : 'closed',
                                    },
                                    triggerProps,
                                    {
                                        ref: forwardedRef,
                                        onPointerEnter: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onPointerEnter,
                                            $cef8881cdc69808e$var$excludeTouch(
                                                context.onOpen,
                                            ),
                                        ),
                                        onPointerLeave: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onPointerLeave,
                                            $cef8881cdc69808e$var$excludeTouch(
                                                context.onClose,
                                            ),
                                        ),
                                        onFocus: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onFocus,
                                            context.onOpen,
                                        ),
                                        onBlur: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onBlur,
                                            context.onClose,
                                        ),
                                        onTouchStart: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onTouchStart,
                                            (event) => event.preventDefault(),
                                        ),
                                    },
                                ),
                            ),
                        )
                    },
                ),
                [
                    $cef8881cdc69808e$var$PortalProvider,
                    $cef8881cdc69808e$var$usePortalContext,
                ] = $cef8881cdc69808e$var$createHoverCardContext(
                    'HoverCardPortal',
                    { forceMount: void 0 },
                ),
                $cef8881cdc69808e$export$aa4724a5938c586 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const portalContext =
                                $cef8881cdc69808e$var$usePortalContext(
                                    'HoverCardContent',
                                    props.__scopeHoverCard,
                                ),
                            {
                                forceMount = portalContext.forceMount,
                                ...contentProps
                            } = props,
                            context = $cef8881cdc69808e$var$useHoverCardContext(
                                'HoverCardContent',
                                props.__scopeHoverCard,
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.z,
                            { present: forceMount || context.open },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                $cef8881cdc69808e$var$HoverCardContentImpl,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    {
                                        'data-state': context.open
                                            ? 'open'
                                            : 'closed',
                                    },
                                    contentProps,
                                    {
                                        onPointerEnter: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onPointerEnter,
                                            $cef8881cdc69808e$var$excludeTouch(
                                                context.onOpen,
                                            ),
                                        ),
                                        onPointerLeave: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onPointerLeave,
                                            $cef8881cdc69808e$var$excludeTouch(
                                                context.onClose,
                                            ),
                                        ),
                                        ref: forwardedRef,
                                    },
                                ),
                            ),
                        )
                    },
                ),
                $cef8881cdc69808e$var$HoverCardContentImpl = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeHoverCard,
                                onEscapeKeyDown,
                                onPointerDownOutside,
                                onFocusOutside,
                                onInteractOutside,
                                ...contentProps
                            } = props,
                            context = $cef8881cdc69808e$var$useHoverCardContext(
                                'HoverCardContent',
                                __scopeHoverCard,
                            ),
                            popperScope =
                                $cef8881cdc69808e$var$usePopperScope(
                                    __scopeHoverCard,
                                ),
                            ref = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
                            composedRefs = (0,
                            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__.e)(
                                forwardedRef,
                                ref,
                            ),
                            [containSelection, setContainSelection] = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1)
                        return (
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                if (containSelection) {
                                    const body = document.body
                                    return (
                                        ($cef8881cdc69808e$var$originalBodyUserSelect =
                                            body.style.userSelect ||
                                            body.style.webkitUserSelect),
                                        (body.style.userSelect = 'none'),
                                        (body.style.webkitUserSelect = 'none'),
                                        () => {
                                            ;(body.style.userSelect =
                                                $cef8881cdc69808e$var$originalBodyUserSelect),
                                                (body.style.webkitUserSelect =
                                                    $cef8881cdc69808e$var$originalBodyUserSelect)
                                        }
                                    )
                                }
                            }, [containSelection]),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                if (ref.current) {
                                    const handlePointerUp = () => {
                                        setContainSelection(!1),
                                            (context.isPointerDownOnContentRef.current =
                                                !1),
                                            setTimeout(() => {
                                                var _document$getSelectio
                                                '' !==
                                                    (null ===
                                                        (_document$getSelectio =
                                                            document.getSelection()) ||
                                                    void 0 ===
                                                        _document$getSelectio
                                                        ? void 0
                                                        : _document$getSelectio.toString()) &&
                                                    (context.hasSelectionRef.current =
                                                        !0)
                                            })
                                    }
                                    return (
                                        document.addEventListener(
                                            'pointerup',
                                            handlePointerUp,
                                        ),
                                        () => {
                                            document.removeEventListener(
                                                'pointerup',
                                                handlePointerUp,
                                            ),
                                                (context.hasSelectionRef.current =
                                                    !1),
                                                (context.isPointerDownOnContentRef.current =
                                                    !1)
                                        }
                                    )
                                }
                            }, [
                                context.isPointerDownOnContentRef,
                                context.hasSelectionRef,
                            ]),
                            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
                                () => {
                                    if (ref.current) {
                                        ;(function $cef8881cdc69808e$var$getTabbableNodes(
                                            container,
                                        ) {
                                            const nodes = [],
                                                walker =
                                                    document.createTreeWalker(
                                                        container,
                                                        NodeFilter.SHOW_ELEMENT,
                                                        {
                                                            acceptNode: (
                                                                node,
                                                            ) =>
                                                                node.tabIndex >=
                                                                0
                                                                    ? NodeFilter.FILTER_ACCEPT
                                                                    : NodeFilter.FILTER_SKIP,
                                                        },
                                                    )
                                            for (; walker.nextNode(); )
                                                nodes.push(walker.currentNode)
                                            return nodes
                                        })(ref.current).forEach((tabbable) =>
                                            tabbable.setAttribute(
                                                'tabindex',
                                                '-1',
                                            ),
                                        )
                                    }
                                },
                            ),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_10__.XB,
                                {
                                    asChild: !0,
                                    disableOutsidePointerEvents: !1,
                                    onInteractOutside,
                                    onEscapeKeyDown,
                                    onPointerDownOutside,
                                    onFocusOutside: (0,
                                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                        onFocusOutside,
                                        (event) => {
                                            event.preventDefault()
                                        },
                                    ),
                                    onDismiss: context.onDismiss,
                                },
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.VY,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                        {},
                                        popperScope,
                                        contentProps,
                                        {
                                            onPointerDown: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                                contentProps.onPointerDown,
                                                (event) => {
                                                    event.currentTarget.contains(
                                                        event.target,
                                                    ) &&
                                                        setContainSelection(!0),
                                                        (context.hasSelectionRef.current =
                                                            !1),
                                                        (context.isPointerDownOnContentRef.current =
                                                            !0)
                                                },
                                            ),
                                            ref: composedRefs,
                                            style: {
                                                ...contentProps.style,
                                                userSelect: containSelection
                                                    ? 'text'
                                                    : void 0,
                                                WebkitUserSelect:
                                                    containSelection
                                                        ? 'text'
                                                        : void 0,
                                                '--radix-hover-card-content-transform-origin':
                                                    'var(--radix-popper-transform-origin)',
                                                '--radix-hover-card-content-available-width':
                                                    'var(--radix-popper-available-width)',
                                                '--radix-hover-card-content-available-height':
                                                    'var(--radix-popper-available-height)',
                                                '--radix-hover-card-trigger-width':
                                                    'var(--radix-popper-anchor-width)',
                                                '--radix-hover-card-trigger-height':
                                                    'var(--radix-popper-anchor-height)',
                                            },
                                        },
                                    ),
                                ),
                            )
                        )
                    },
                )
            function $cef8881cdc69808e$var$excludeTouch(eventHandler) {
                return (event) =>
                    'touch' === event.pointerType ? void 0 : eventHandler()
            }
            const $cef8881cdc69808e$export$be92b6f5f03c0fe9 =
                    $cef8881cdc69808e$export$57a077cc9fbe653e,
                $cef8881cdc69808e$export$41fb9f06171c75f4 =
                    $cef8881cdc69808e$export$ef9f7fd8e4ba882f,
                $cef8881cdc69808e$export$7c6e2c02157bb7d2 =
                    $cef8881cdc69808e$export$aa4724a5938c586
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
        './src/components/ui/stories/hover-card-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    HoverCardDemo: () => HoverCardDemo,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => hover_card_demo_stories,
                })
            var defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                )
            const CalendarDays = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('CalendarDays', [
                [
                    'rect',
                    {
                        width: '18',
                        height: '18',
                        x: '3',
                        y: '4',
                        rx: '2',
                        ry: '2',
                        key: 'eu3xkr',
                    },
                ],
                [
                    'line',
                    { x1: '16', x2: '16', y1: '2', y2: '6', key: 'm3sa8f' },
                ],
                ['line', { x1: '8', x2: '8', y1: '2', y2: '6', key: '18kwsl' }],
                [
                    'line',
                    { x1: '3', x2: '21', y1: '10', y2: '10', key: 'xt86sb' },
                ],
                ['path', { d: 'M8 14h.01', key: '6423bh' }],
                ['path', { d: 'M12 14h.01', key: '1etili' }],
                ['path', { d: 'M16 14h.01', key: '1gbofw' }],
                ['path', { d: 'M8 18h.01', key: 'lrp35t' }],
                ['path', { d: 'M12 18h.01', key: 'mhygvu' }],
                ['path', { d: 'M16 18h.01', key: 'kzsmim' }],
            ])
            var _HoverCardDemo$parame,
                _HoverCardDemo$parame2,
                avatar = __webpack_require__('./src/components/ui/avatar.tsx'),
                ui_button = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                hover_card = __webpack_require__(
                    './src/components/ui/hover-card.tsx',
                ),
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
            const hover_card_demo_stories = {
                title: 'RealCube/hover-card',
                component: function component() {
                    return __jsx(
                        hover_card.zs,
                        null,
                        __jsx(
                            hover_card.Yi,
                            { asChild: !0 },
                            __jsx(ui_button.z, { variant: 'link' }, '@nextjs'),
                        ),
                        __jsx(
                            hover_card.bZ,
                            { className: 'w-80' },
                            __jsx(
                                'div',
                                { className: 'flex justify-between space-x-4' },
                                __jsx(
                                    avatar.qE,
                                    null,
                                    __jsx(avatar.F$, {
                                        src: 'https://github.com/vercel.png',
                                    }),
                                    __jsx(avatar.Q5, null, 'VC'),
                                ),
                                __jsx(
                                    'div',
                                    { className: 'space-y-1' },
                                    __jsx(
                                        'h4',
                                        { className: 'text-sm font-semibold' },
                                        '@nextjs',
                                    ),
                                    __jsx(
                                        'p',
                                        { className: 'text-sm' },
                                        'The React Framework – created and maintained by @vercel.',
                                    ),
                                    __jsx(
                                        'div',
                                        { className: 'flex items-center pt-2' },
                                        __jsx(CalendarDays, {
                                            className:
                                                'mr-2 h-4 w-4 opacity-70',
                                        }),
                                        ' ',
                                        __jsx(
                                            'span',
                                            {
                                                className:
                                                    'text-xs text-muted-foreground',
                                            },
                                            'Joined December 2021',
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    )
                },
                parameters: { layout: 'centered' },
            }
            var HoverCardDemo = { args: {} }
            HoverCardDemo.parameters = _objectSpread(
                _objectSpread({}, HoverCardDemo.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_HoverCardDemo$parame =
                                    HoverCardDemo.parameters) ||
                                void 0 === _HoverCardDemo$parame
                                ? void 0
                                : _HoverCardDemo$parame.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{\n  args: {}\n}' },
                                null ===
                                    (_HoverCardDemo$parame2 =
                                        HoverCardDemo.parameters) ||
                                    void 0 === _HoverCardDemo$parame2 ||
                                    null ===
                                        (_HoverCardDemo$parame2 =
                                            _HoverCardDemo$parame2.docs) ||
                                    void 0 === _HoverCardDemo$parame2
                                    ? void 0
                                    : _HoverCardDemo$parame2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['HoverCardDemo']
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
        './src/components/ui/hover-card.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Yi: () => HoverCardTrigger,
                bZ: () => HoverCardContent,
                zs: () => HoverCard,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-hover-card/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'align', 'sideOffset'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                HoverCard =
                    _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.fC,
                HoverCardTrigger =
                    _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.xz,
                HoverCardContent =
                    react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                        function (_ref, ref) {
                            var className = _ref.className,
                                _ref$align = _ref.align,
                                align =
                                    void 0 === _ref$align
                                        ? 'center'
                                        : _ref$align,
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
                                _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        align,
                                        sideOffset,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            )
                        },
                    )
            HoverCardContent.displayName =
                _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            try {
                ;(HoverCard.displayName = 'HoverCard'),
                    (HoverCard.__docgenInfo = {
                        description: '',
                        displayName: 'HoverCard',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/hover-card.tsx#HoverCard'
                        ] = {
                            docgenInfo: HoverCard.__docgenInfo,
                            name: 'HoverCard',
                            path: 'src/components/ui/hover-card.tsx#HoverCard',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(HoverCardContent.displayName = 'HoverCardContent'),
                    (HoverCardContent.__docgenInfo = {
                        description: '',
                        displayName: 'HoverCardContent',
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
                            'src/components/ui/hover-card.tsx#HoverCardContent'
                        ] = {
                            docgenInfo: HoverCardContent.__docgenInfo,
                            name: 'HoverCardContent',
                            path: 'src/components/ui/hover-card.tsx#HoverCardContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(HoverCardTrigger.displayName = 'HoverCardTrigger'),
                    (HoverCardTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'HoverCardTrigger',
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
                            'src/components/ui/hover-card.tsx#HoverCardTrigger'
                        ] = {
                            docgenInfo: HoverCardTrigger.__docgenInfo,
                            name: 'HoverCardTrigger',
                            path: 'src/components/ui/hover-card.tsx#HoverCardTrigger',
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
