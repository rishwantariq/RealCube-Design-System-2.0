/*! For license information please see components-ui-stories-collapsible-demo-stories.9a00f3ad.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [5054],
    {
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
        './src/components/ui/stories/collapsible-demo.stories.ts': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Collapsible: () => Collapsible,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => collapsible_demo_stories,
                })
            var _Collapsible$paramete,
                _Collapsible$paramete2,
                defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                slicedToArray = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
                ),
                chevrons_up_down = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                ui_button = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                collapsible = __webpack_require__(
                    './src/components/ui/collapsible.tsx',
                ),
                __jsx = react.createElement
            function CollapsibleDemo() {
                var _React$useState = react.useState(!1),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    isOpen = _React$useState2[0],
                    setIsOpen = _React$useState2[1]
                return __jsx(
                    collapsible.zF,
                    {
                        open: isOpen,
                        onOpenChange: setIsOpen,
                        className: 'w-[350px] space-y-2',
                    },
                    __jsx(
                        'div',
                        {
                            className:
                                'flex items-center justify-between space-x-4 px-4',
                        },
                        __jsx(
                            'h4',
                            { className: 'text-sm font-semibold' },
                            '@peduarte starred 3 repositories',
                        ),
                        __jsx(
                            collapsible.wy,
                            { asChild: !0 },
                            __jsx(
                                ui_button.z,
                                {
                                    variant: 'ghost',
                                    size: 'sm',
                                    className: 'w-9 p-0',
                                },
                                __jsx(chevrons_up_down.Z, {
                                    className: 'h-4 w-4',
                                }),
                                __jsx(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle',
                                ),
                            ),
                        ),
                    ),
                    __jsx(
                        'div',
                        {
                            className:
                                'rounded-md border px-4 py-3 font-mono text-sm',
                        },
                        '@radix-ui/primitives',
                    ),
                    __jsx(
                        collapsible.Fw,
                        { className: 'space-y-2' },
                        __jsx(
                            'div',
                            {
                                className:
                                    'rounded-md border px-4 py-3 font-mono text-sm',
                            },
                            '@radix-ui/colors',
                        ),
                        __jsx(
                            'div',
                            {
                                className:
                                    'rounded-md border px-4 py-3 font-mono text-sm',
                            },
                            '@stitches/react',
                        ),
                    ),
                )
            }
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
            CollapsibleDemo.displayName = 'CollapsibleDemo'
            const collapsible_demo_stories = {
                title: 'RealCube/collapsible',
                component: CollapsibleDemo,
                parameters: { layout: 'centered' },
            }
            var Collapsible = { args: {} }
            Collapsible.parameters = _objectSpread(
                _objectSpread({}, Collapsible.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_Collapsible$paramete =
                                    Collapsible.parameters) ||
                                void 0 === _Collapsible$paramete
                                ? void 0
                                : _Collapsible$paramete.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{\n  args: {}\n}' },
                                null ===
                                    (_Collapsible$paramete2 =
                                        Collapsible.parameters) ||
                                    void 0 === _Collapsible$paramete2 ||
                                    null ===
                                        (_Collapsible$paramete2 =
                                            _Collapsible$paramete2.docs) ||
                                    void 0 === _Collapsible$paramete2
                                    ? void 0
                                    : _Collapsible$paramete2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['Collapsible']
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
