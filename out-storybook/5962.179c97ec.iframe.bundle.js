/*! For license information please see 5962.179c97ec.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5962],
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
        './node_modules/@radix-ui/react-collapsible/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Fw: () => CollapsibleContent,
                wy: () => CollapsibleTrigger,
                fC: () => dist_Root,
            })
            var react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                react_namespaceObject = __webpack_require__.t(react, 2)
            function composeEventHandlers(
                originalEventHandler,
                ourEventHandler,
                { checkForDefaultPrevented = !0 } = {},
            ) {
                return function handleEvent(event) {
                    if (
                        (originalEventHandler?.(event),
                        !1 === checkForDefaultPrevented ||
                            !event.defaultPrevented)
                    )
                        return ourEventHandler?.(event)
                }
            }
            var jsx_runtime = __webpack_require__(
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
            function useCallbackRef(callback) {
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
            }
            function useControllableState({
                prop,
                defaultProp,
                onChange = () => {},
            }) {
                const [uncontrolledProp, setUncontrolledProp] =
                        (function useUncontrolledState({
                            defaultProp,
                            onChange,
                        }) {
                            const uncontrolledState =
                                    react.useState(defaultProp),
                                [value] = uncontrolledState,
                                prevValueRef = react.useRef(value),
                                handleChange = useCallbackRef(onChange)
                            return (
                                react.useEffect(() => {
                                    prevValueRef.current !== value &&
                                        (handleChange(value),
                                        (prevValueRef.current = value))
                                }, [value, prevValueRef, handleChange]),
                                uncontrolledState
                            )
                        })({ defaultProp, onChange }),
                    isControlled = void 0 !== prop,
                    value = isControlled ? prop : uncontrolledProp,
                    handleChange = useCallbackRef(onChange)
                return [
                    value,
                    react.useCallback(
                        (nextValue) => {
                            if (isControlled) {
                                const value2 =
                                    'function' == typeof nextValue
                                        ? nextValue(prop)
                                        : nextValue
                                value2 !== prop && handleChange(value2)
                            } else setUncontrolledProp(nextValue)
                        },
                        [isControlled, prop, setUncontrolledProp, handleChange],
                    ),
                ]
            }
            var useLayoutEffect2 = Boolean(globalThis?.document)
                ? react.useLayoutEffect
                : () => {}
            function useComposedRefs(...refs) {
                return react.useCallback(
                    (function composeRefs(...refs) {
                        return (node) =>
                            refs.forEach((ref) =>
                                (function setRef(ref, value) {
                                    'function' == typeof ref
                                        ? ref(value)
                                        : null != ref && (ref.current = value)
                                })(ref, node),
                            )
                    })(...refs),
                    refs,
                )
            }
            __webpack_require__(
                './node_modules/next/dist/compiled/react-dom/index.js',
            )
            var dist = __webpack_require__(
                    './node_modules/@radix-ui/react-slot/dist/index.mjs',
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
            var Presence = (props) => {
                const { present, children } = props,
                    presence = (function usePresence(present) {
                        const [node, setNode] = react.useState(),
                            stylesRef = react.useRef({}),
                            prevPresentRef = react.useRef(present),
                            prevAnimationNameRef = react.useRef('none'),
                            initialState = present ? 'mounted' : 'unmounted',
                            [state, send] = (function useStateMachine(
                                initialState,
                                machine,
                            ) {
                                return react.useReducer(
                                    (state, event) =>
                                        machine[state][event] ?? state,
                                    initialState,
                                )
                            })(initialState, {
                                mounted: {
                                    UNMOUNT: 'unmounted',
                                    ANIMATION_OUT: 'unmountSuspended',
                                },
                                unmountSuspended: {
                                    MOUNT: 'mounted',
                                    ANIMATION_END: 'unmounted',
                                },
                                unmounted: { MOUNT: 'mounted' },
                            })
                        return (
                            react.useEffect(() => {
                                const currentAnimationName = getAnimationName(
                                    stylesRef.current,
                                )
                                prevAnimationNameRef.current =
                                    'mounted' === state
                                        ? currentAnimationName
                                        : 'none'
                            }, [state]),
                            useLayoutEffect2(() => {
                                const styles = stylesRef.current,
                                    wasPresent = prevPresentRef.current
                                if (wasPresent !== present) {
                                    const prevAnimationName =
                                            prevAnimationNameRef.current,
                                        currentAnimationName =
                                            getAnimationName(styles)
                                    if (present) send('MOUNT')
                                    else if (
                                        'none' === currentAnimationName ||
                                        'none' === styles?.display
                                    )
                                        send('UNMOUNT')
                                    else {
                                        send(
                                            wasPresent &&
                                                prevAnimationName !==
                                                    currentAnimationName
                                                ? 'ANIMATION_OUT'
                                                : 'UNMOUNT',
                                        )
                                    }
                                    prevPresentRef.current = present
                                }
                            }, [present, send]),
                            useLayoutEffect2(() => {
                                if (node) {
                                    let timeoutId
                                    const ownerWindow =
                                            node.ownerDocument.defaultView ??
                                            window,
                                        handleAnimationEnd = (event) => {
                                            const isCurrentAnimation =
                                                getAnimationName(
                                                    stylesRef.current,
                                                ).includes(event.animationName)
                                            if (
                                                event.target === node &&
                                                isCurrentAnimation &&
                                                (send('ANIMATION_END'),
                                                !prevPresentRef.current)
                                            ) {
                                                const currentFillMode =
                                                    node.style.animationFillMode
                                                ;(node.style.animationFillMode =
                                                    'forwards'),
                                                    (timeoutId =
                                                        ownerWindow.setTimeout(
                                                            () => {
                                                                'forwards' ===
                                                                    node.style
                                                                        .animationFillMode &&
                                                                    (node.style.animationFillMode =
                                                                        currentFillMode)
                                                            },
                                                        ))
                                            }
                                        },
                                        handleAnimationStart = (event) => {
                                            event.target === node &&
                                                (prevAnimationNameRef.current =
                                                    getAnimationName(
                                                        stylesRef.current,
                                                    ))
                                        }
                                    return (
                                        node.addEventListener(
                                            'animationstart',
                                            handleAnimationStart,
                                        ),
                                        node.addEventListener(
                                            'animationcancel',
                                            handleAnimationEnd,
                                        ),
                                        node.addEventListener(
                                            'animationend',
                                            handleAnimationEnd,
                                        ),
                                        () => {
                                            ownerWindow.clearTimeout(timeoutId),
                                                node.removeEventListener(
                                                    'animationstart',
                                                    handleAnimationStart,
                                                ),
                                                node.removeEventListener(
                                                    'animationcancel',
                                                    handleAnimationEnd,
                                                ),
                                                node.removeEventListener(
                                                    'animationend',
                                                    handleAnimationEnd,
                                                )
                                        }
                                    )
                                }
                                send('ANIMATION_END')
                            }, [node, send]),
                            {
                                isPresent: [
                                    'mounted',
                                    'unmountSuspended',
                                ].includes(state),
                                ref: react.useCallback((node2) => {
                                    node2 &&
                                        (stylesRef.current =
                                            getComputedStyle(node2)),
                                        setNode(node2)
                                }, []),
                            }
                        )
                    })(present),
                    child =
                        'function' == typeof children
                            ? children({ present: presence.isPresent })
                            : react.Children.only(children),
                    ref = useComposedRefs(
                        presence.ref,
                        (function getElementRef(element) {
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
                        })(child),
                    )
                return 'function' == typeof children || presence.isPresent
                    ? react.cloneElement(child, { ref })
                    : null
            }
            function getAnimationName(styles) {
                return styles?.animationName || 'none'
            }
            Presence.displayName = 'Presence'
            var useReactId =
                    react_namespaceObject['useId'.toString()] || (() => {}),
                count = 0
            function useId(deterministicId) {
                const [id, setId] = react.useState(useReactId())
                return (
                    useLayoutEffect2(() => {
                        deterministicId ||
                            setId((reactId) => reactId ?? String(count++))
                    }, [deterministicId]),
                    deterministicId || (id ? `radix-${id}` : '')
                )
            }
            var [createCollapsibleContext, createCollapsibleScope] =
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
                    })('Collapsible'),
                [CollapsibleProvider, useCollapsibleContext] =
                    createCollapsibleContext('Collapsible'),
                Collapsible = react.forwardRef((props, forwardedRef) => {
                    const {
                            __scopeCollapsible,
                            open: openProp,
                            defaultOpen,
                            disabled,
                            onOpenChange,
                            ...collapsibleProps
                        } = props,
                        [open = !1, setOpen] = useControllableState({
                            prop: openProp,
                            defaultProp: defaultOpen,
                            onChange: onOpenChange,
                        })
                    return (0, jsx_runtime.jsx)(CollapsibleProvider, {
                        scope: __scopeCollapsible,
                        disabled,
                        contentId: useId(),
                        open,
                        onOpenToggle: react.useCallback(
                            () => setOpen((prevOpen) => !prevOpen),
                            [setOpen],
                        ),
                        children: (0, jsx_runtime.jsx)(Primitive.div, {
                            'data-state': getState(open),
                            'data-disabled': disabled ? '' : void 0,
                            ...collapsibleProps,
                            ref: forwardedRef,
                        }),
                    })
                })
            Collapsible.displayName = 'Collapsible'
            var CollapsibleTrigger = react.forwardRef((props, forwardedRef) => {
                const { __scopeCollapsible, ...triggerProps } = props,
                    context = useCollapsibleContext(
                        'CollapsibleTrigger',
                        __scopeCollapsible,
                    )
                return (0, jsx_runtime.jsx)(Primitive.button, {
                    type: 'button',
                    'aria-controls': context.contentId,
                    'aria-expanded': context.open || !1,
                    'data-state': getState(context.open),
                    'data-disabled': context.disabled ? '' : void 0,
                    disabled: context.disabled,
                    ...triggerProps,
                    ref: forwardedRef,
                    onClick: composeEventHandlers(
                        props.onClick,
                        context.onOpenToggle,
                    ),
                })
            })
            CollapsibleTrigger.displayName = 'CollapsibleTrigger'
            var CollapsibleContent = react.forwardRef((props, forwardedRef) => {
                const { forceMount, ...contentProps } = props,
                    context = useCollapsibleContext(
                        'CollapsibleContent',
                        props.__scopeCollapsible,
                    )
                return (0, jsx_runtime.jsx)(Presence, {
                    present: forceMount || context.open,
                    children: ({ present }) =>
                        (0, jsx_runtime.jsx)(CollapsibleContentImpl, {
                            ...contentProps,
                            ref: forwardedRef,
                            present,
                        }),
                })
            })
            CollapsibleContent.displayName = 'CollapsibleContent'
            var CollapsibleContentImpl = react.forwardRef(
                (props, forwardedRef) => {
                    const {
                            __scopeCollapsible,
                            present,
                            children,
                            ...contentProps
                        } = props,
                        context = useCollapsibleContext(
                            'CollapsibleContent',
                            __scopeCollapsible,
                        ),
                        [isPresent, setIsPresent] = react.useState(present),
                        ref = react.useRef(null),
                        composedRefs = useComposedRefs(forwardedRef, ref),
                        heightRef = react.useRef(0),
                        height = heightRef.current,
                        widthRef = react.useRef(0),
                        width = widthRef.current,
                        isOpen = context.open || isPresent,
                        isMountAnimationPreventedRef = react.useRef(isOpen),
                        originalStylesRef = react.useRef()
                    return (
                        react.useEffect(() => {
                            const rAF = requestAnimationFrame(
                                () =>
                                    (isMountAnimationPreventedRef.current = !1),
                            )
                            return () => cancelAnimationFrame(rAF)
                        }, []),
                        useLayoutEffect2(() => {
                            const node = ref.current
                            if (node) {
                                ;(originalStylesRef.current =
                                    originalStylesRef.current || {
                                        transitionDuration:
                                            node.style.transitionDuration,
                                        animationName: node.style.animationName,
                                    }),
                                    (node.style.transitionDuration = '0s'),
                                    (node.style.animationName = 'none')
                                const rect = node.getBoundingClientRect()
                                ;(heightRef.current = rect.height),
                                    (widthRef.current = rect.width),
                                    isMountAnimationPreventedRef.current ||
                                        ((node.style.transitionDuration =
                                            originalStylesRef.current.transitionDuration),
                                        (node.style.animationName =
                                            originalStylesRef.current.animationName)),
                                    setIsPresent(present)
                            }
                        }, [context.open, present]),
                        (0, jsx_runtime.jsx)(Primitive.div, {
                            'data-state': getState(context.open),
                            'data-disabled': context.disabled ? '' : void 0,
                            id: context.contentId,
                            hidden: !isOpen,
                            ...contentProps,
                            ref: composedRefs,
                            style: {
                                '--radix-collapsible-content-height': height
                                    ? `${height}px`
                                    : void 0,
                                '--radix-collapsible-content-width': width
                                    ? `${width}px`
                                    : void 0,
                                ...props.style,
                            },
                            children: isOpen && children,
                        })
                    )
                },
            )
            function getState(open) {
                return open ? 'open' : 'closed'
            }
            var dist_Root = Collapsible
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
        './node_modules/lucide-react/dist/esm/icons/badge-check.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => BadgeCheck })
            const BadgeCheck = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('BadgeCheck', [
                [
                    'path',
                    {
                        d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
                        key: '3c2336',
                    },
                ],
                ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/bell.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Bell })
            const Bell = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Bell', [
                [
                    'path',
                    {
                        d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9',
                        key: '1qo2s2',
                    },
                ],
                [
                    'path',
                    { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0', key: 'qgo35s' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/book-open.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => BookOpen })
            const BookOpen = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('BookOpen', [
                [
                    'path',
                    {
                        d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z',
                        key: 'vv98re',
                    },
                ],
                [
                    'path',
                    {
                        d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
                        key: '1cyq3y',
                    },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/bot.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Bot })
            const Bot = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Bot', [
                ['path', { d: 'M12 8V4H8', key: 'hb8ula' }],
                [
                    'rect',
                    {
                        width: '16',
                        height: '12',
                        x: '4',
                        y: '8',
                        rx: '2',
                        key: 'enze0r',
                    },
                ],
                ['path', { d: 'M2 14h2', key: 'vft8re' }],
                ['path', { d: 'M20 14h2', key: '4cs60a' }],
                ['path', { d: 'M15 13v2', key: '1xurst' }],
                ['path', { d: 'M9 13v2', key: 'rq6x2g' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/check.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Check })
            const Check = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
        },
        './node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => ChevronsUpDown,
            })
            const ChevronsUpDown = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('ChevronsUpDown', [
                ['path', { d: 'm7 15 5 5 5-5', key: '1hf1tw' }],
                ['path', { d: 'm7 9 5-5 5 5', key: 'sgt6xg' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/command.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Command })
            const Command = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Command', [
                [
                    'path',
                    {
                        d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
                        key: '11bfej',
                    },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/credit-card.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => CreditCard })
            const CreditCard = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('CreditCard', [
                [
                    'rect',
                    {
                        width: '20',
                        height: '14',
                        x: '2',
                        y: '5',
                        rx: '2',
                        key: 'ynyp8z',
                    },
                ],
                [
                    'line',
                    { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/folder.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Folder })
            const Folder = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Folder', [
                [
                    'path',
                    {
                        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
                        key: '1kt360',
                    },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/frame.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Frame })
            const Frame = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Frame', [
                [
                    'line',
                    { x1: '22', x2: '2', y1: '6', y2: '6', key: '15w7dq' },
                ],
                [
                    'line',
                    { x1: '22', x2: '2', y1: '18', y2: '18', key: '1ip48p' },
                ],
                [
                    'line',
                    { x1: '6', x2: '6', y1: '2', y2: '22', key: 'a2lnyx' },
                ],
                [
                    'line',
                    { x1: '18', x2: '18', y1: '2', y2: '22', key: '8vb6jd' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/life-buoy.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => LifeBuoy })
            const LifeBuoy = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('LifeBuoy', [
                ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
                ['path', { d: 'm4.93 4.93 4.24 4.24', key: '1ymg45' }],
                ['path', { d: 'm14.83 9.17 4.24-4.24', key: '1cb5xl' }],
                ['path', { d: 'm14.83 14.83 4.24 4.24', key: 'q42g0n' }],
                ['path', { d: 'm9.17 14.83-4.24 4.24', key: 'bqpfvv' }],
                ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/log-out.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => LogOut })
            const LogOut = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('LogOut', [
                [
                    'path',
                    {
                        d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4',
                        key: '1uf3rs',
                    },
                ],
                ['polyline', { points: '16 17 21 12 16 7', key: '1gabdz' }],
                [
                    'line',
                    { x1: '21', x2: '9', y1: '12', y2: '12', key: '1uyos4' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/map.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Map })
            const Map = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Map', [
                [
                    'polygon',
                    {
                        points: '3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21',
                        key: 'ok2ie8',
                    },
                ],
                [
                    'line',
                    { x1: '9', x2: '9', y1: '3', y2: '18', key: 'w34qz5' },
                ],
                [
                    'line',
                    { x1: '15', x2: '15', y1: '6', y2: '21', key: 'volv9a' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/more-horizontal.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => MoreHorizontal,
            })
            const MoreHorizontal = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('MoreHorizontal', [
                ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
                ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
                ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/panel-left.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => PanelLeft })
            const PanelLeft = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('PanelLeft', [
                [
                    'rect',
                    {
                        width: '18',
                        height: '18',
                        x: '3',
                        y: '3',
                        rx: '2',
                        ry: '2',
                        key: '1m3agn',
                    },
                ],
                [
                    'line',
                    { x1: '9', x2: '9', y1: '3', y2: '21', key: '13tij5' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/pie-chart.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => PieChart })
            const PieChart = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('PieChart', [
                [
                    'path',
                    { d: 'M21.21 15.89A10 10 0 1 1 8 2.83', key: 'k2fpak' },
                ],
                ['path', { d: 'M22 12A10 10 0 0 0 12 2v10z', key: '1rfc4y' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/send.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Send })
            const Send = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Send', [
                ['path', { d: 'm22 2-7 20-4-9-9-4Z', key: '1q3vgg' }],
                ['path', { d: 'M22 2 11 13', key: 'nzbqef' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/settings-2.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Settings2 })
            const Settings2 = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Settings2', [
                ['path', { d: 'M20 7h-9', key: '3s1dr2' }],
                ['path', { d: 'M14 17H5', key: 'gfn3mx' }],
                ['circle', { cx: '17', cy: '17', r: '3', key: '18b49y' }],
                ['circle', { cx: '7', cy: '7', r: '3', key: 'dfmy0x' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/share.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Share })
            const Share = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Share', [
                [
                    'path',
                    {
                        d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8',
                        key: '1b2hhj',
                    },
                ],
                ['polyline', { points: '16 6 12 2 8 6', key: 'm901s6' }],
                [
                    'line',
                    { x1: '12', x2: '12', y1: '2', y2: '15', key: '1p0rca' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/sparkles.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Sparkles })
            const Sparkles = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Sparkles', [
                [
                    'path',
                    {
                        d: 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z',
                        key: '17u4zn',
                    },
                ],
                ['path', { d: 'M5 3v4', key: 'bklmnn' }],
                ['path', { d: 'M19 17v4', key: 'iiml17' }],
                ['path', { d: 'M3 5h4', key: 'nem4j1' }],
                ['path', { d: 'M17 19h4', key: 'lbex7p' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/terminal.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Terminal })
            const Terminal = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Terminal', [
                ['polyline', { points: '4 17 10 11 4 5', key: 'akl6gq' }],
                [
                    'line',
                    { x1: '12', x2: '20', y1: '19', y2: '19', key: 'q2wloq' },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/trash-2.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Trash2 })
            const Trash2 = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Trash2', [
                ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
                [
                    'path',
                    {
                        d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6',
                        key: '4alrt4',
                    },
                ],
                [
                    'path',
                    { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' },
                ],
                [
                    'line',
                    { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' },
                ],
                [
                    'line',
                    { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' },
                ],
            ])
        },
    },
])
