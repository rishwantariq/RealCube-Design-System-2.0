'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [2924],
    {
        './node_modules/@radix-ui/react-tooltip/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                VY: () => Content2,
                zt: () => Provider,
                fC: () => Root3,
                xz: () => Trigger,
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
            var react_dom = __webpack_require__(
                    './node_modules/next/dist/compiled/react-dom/index.js',
                ),
                dist = __webpack_require__(
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
            var originalBodyPointerEvents,
                DismissableLayerContext = react.createContext({
                    layers: new Set(),
                    layersWithOutsidePointerEventsDisabled: new Set(),
                    branches: new Set(),
                }),
                DismissableLayer = react.forwardRef((props, forwardedRef) => {
                    const {
                            disableOutsidePointerEvents = !1,
                            onEscapeKeyDown,
                            onPointerDownOutside,
                            onFocusOutside,
                            onInteractOutside,
                            onDismiss,
                            ...layerProps
                        } = props,
                        context = react.useContext(DismissableLayerContext),
                        [node, setNode] = react.useState(null),
                        ownerDocument =
                            node?.ownerDocument ?? globalThis?.document,
                        [, force] = react.useState({}),
                        composedRefs = useComposedRefs(forwardedRef, (node2) =>
                            setNode(node2),
                        ),
                        layers = Array.from(context.layers),
                        [highestLayerWithOutsidePointerEventsDisabled] = [
                            ...context.layersWithOutsidePointerEventsDisabled,
                        ].slice(-1),
                        highestLayerWithOutsidePointerEventsDisabledIndex =
                            layers.indexOf(
                                highestLayerWithOutsidePointerEventsDisabled,
                            ),
                        index = node ? layers.indexOf(node) : -1,
                        isBodyPointerEventsDisabled =
                            context.layersWithOutsidePointerEventsDisabled
                                .size > 0,
                        isPointerEventsEnabled =
                            index >=
                            highestLayerWithOutsidePointerEventsDisabledIndex,
                        pointerDownOutside = (function usePointerDownOutside(
                            onPointerDownOutside,
                            ownerDocument = globalThis?.document,
                        ) {
                            const handlePointerDownOutside =
                                    useCallbackRef(onPointerDownOutside),
                                isPointerInsideReactTreeRef = react.useRef(!1),
                                handleClickRef = react.useRef(() => {})
                            return (
                                react.useEffect(() => {
                                    const handlePointerDown = (event) => {
                                            if (
                                                event.target &&
                                                !isPointerInsideReactTreeRef.current
                                            ) {
                                                let handleAndDispatchPointerDownOutsideEvent2 =
                                                    function () {
                                                        handleAndDispatchCustomEvent(
                                                            'dismissableLayer.pointerDownOutside',
                                                            handlePointerDownOutside,
                                                            eventDetail,
                                                            { discrete: !0 },
                                                        )
                                                    }
                                                const eventDetail = {
                                                    originalEvent: event,
                                                }
                                                'touch' === event.pointerType
                                                    ? (ownerDocument.removeEventListener(
                                                          'click',
                                                          handleClickRef.current,
                                                      ),
                                                      (handleClickRef.current =
                                                          handleAndDispatchPointerDownOutsideEvent2),
                                                      ownerDocument.addEventListener(
                                                          'click',
                                                          handleClickRef.current,
                                                          { once: !0 },
                                                      ))
                                                    : handleAndDispatchPointerDownOutsideEvent2()
                                            } else
                                                ownerDocument.removeEventListener(
                                                    'click',
                                                    handleClickRef.current,
                                                )
                                            isPointerInsideReactTreeRef.current =
                                                !1
                                        },
                                        timerId = window.setTimeout(() => {
                                            ownerDocument.addEventListener(
                                                'pointerdown',
                                                handlePointerDown,
                                            )
                                        }, 0)
                                    return () => {
                                        window.clearTimeout(timerId),
                                            ownerDocument.removeEventListener(
                                                'pointerdown',
                                                handlePointerDown,
                                            ),
                                            ownerDocument.removeEventListener(
                                                'click',
                                                handleClickRef.current,
                                            )
                                    }
                                }, [ownerDocument, handlePointerDownOutside]),
                                {
                                    onPointerDownCapture: () =>
                                        (isPointerInsideReactTreeRef.current =
                                            !0),
                                }
                            )
                        })((event) => {
                            const target = event.target,
                                isPointerDownOnBranch = [
                                    ...context.branches,
                                ].some((branch) => branch.contains(target))
                            isPointerEventsEnabled &&
                                !isPointerDownOnBranch &&
                                (onPointerDownOutside?.(event),
                                onInteractOutside?.(event),
                                event.defaultPrevented || onDismiss?.())
                        }, ownerDocument),
                        focusOutside = (function useFocusOutside(
                            onFocusOutside,
                            ownerDocument = globalThis?.document,
                        ) {
                            const handleFocusOutside =
                                    useCallbackRef(onFocusOutside),
                                isFocusInsideReactTreeRef = react.useRef(!1)
                            return (
                                react.useEffect(() => {
                                    const handleFocus = (event) => {
                                        if (
                                            event.target &&
                                            !isFocusInsideReactTreeRef.current
                                        ) {
                                            handleAndDispatchCustomEvent(
                                                'dismissableLayer.focusOutside',
                                                handleFocusOutside,
                                                { originalEvent: event },
                                                { discrete: !1 },
                                            )
                                        }
                                    }
                                    return (
                                        ownerDocument.addEventListener(
                                            'focusin',
                                            handleFocus,
                                        ),
                                        () =>
                                            ownerDocument.removeEventListener(
                                                'focusin',
                                                handleFocus,
                                            )
                                    )
                                }, [ownerDocument, handleFocusOutside]),
                                {
                                    onFocusCapture: () =>
                                        (isFocusInsideReactTreeRef.current =
                                            !0),
                                    onBlurCapture: () =>
                                        (isFocusInsideReactTreeRef.current =
                                            !1),
                                }
                            )
                        })((event) => {
                            const target = event.target
                            ;[...context.branches].some((branch) =>
                                branch.contains(target),
                            ) ||
                                (onFocusOutside?.(event),
                                onInteractOutside?.(event),
                                event.defaultPrevented || onDismiss?.())
                        }, ownerDocument)
                    return (
                        (function useEscapeKeydown(
                            onEscapeKeyDownProp,
                            ownerDocument = globalThis?.document,
                        ) {
                            const onEscapeKeyDown =
                                useCallbackRef(onEscapeKeyDownProp)
                            react.useEffect(() => {
                                const handleKeyDown = (event) => {
                                    'Escape' === event.key &&
                                        onEscapeKeyDown(event)
                                }
                                return (
                                    ownerDocument.addEventListener(
                                        'keydown',
                                        handleKeyDown,
                                        { capture: !0 },
                                    ),
                                    () =>
                                        ownerDocument.removeEventListener(
                                            'keydown',
                                            handleKeyDown,
                                            { capture: !0 },
                                        )
                                )
                            }, [onEscapeKeyDown, ownerDocument])
                        })((event) => {
                            index === context.layers.size - 1 &&
                                (onEscapeKeyDown?.(event),
                                !event.defaultPrevented &&
                                    onDismiss &&
                                    (event.preventDefault(), onDismiss()))
                        }, ownerDocument),
                        react.useEffect(() => {
                            if (node)
                                return (
                                    disableOutsidePointerEvents &&
                                        (0 ===
                                            context
                                                .layersWithOutsidePointerEventsDisabled
                                                .size &&
                                            ((originalBodyPointerEvents =
                                                ownerDocument.body.style
                                                    .pointerEvents),
                                            (ownerDocument.body.style.pointerEvents =
                                                'none')),
                                        context.layersWithOutsidePointerEventsDisabled.add(
                                            node,
                                        )),
                                    context.layers.add(node),
                                    dispatchUpdate(),
                                    () => {
                                        disableOutsidePointerEvents &&
                                            1 ===
                                                context
                                                    .layersWithOutsidePointerEventsDisabled
                                                    .size &&
                                            (ownerDocument.body.style.pointerEvents =
                                                originalBodyPointerEvents)
                                    }
                                )
                        }, [
                            node,
                            ownerDocument,
                            disableOutsidePointerEvents,
                            context,
                        ]),
                        react.useEffect(
                            () => () => {
                                node &&
                                    (context.layers.delete(node),
                                    context.layersWithOutsidePointerEventsDisabled.delete(
                                        node,
                                    ),
                                    dispatchUpdate())
                            },
                            [node, context],
                        ),
                        react.useEffect(() => {
                            const handleUpdate = () => force({})
                            return (
                                document.addEventListener(
                                    'dismissableLayer.update',
                                    handleUpdate,
                                ),
                                () =>
                                    document.removeEventListener(
                                        'dismissableLayer.update',
                                        handleUpdate,
                                    )
                            )
                        }, []),
                        (0, jsx_runtime.jsx)(Primitive.div, {
                            ...layerProps,
                            ref: composedRefs,
                            style: {
                                pointerEvents: isBodyPointerEventsDisabled
                                    ? isPointerEventsEnabled
                                        ? 'auto'
                                        : 'none'
                                    : void 0,
                                ...props.style,
                            },
                            onFocusCapture: composeEventHandlers(
                                props.onFocusCapture,
                                focusOutside.onFocusCapture,
                            ),
                            onBlurCapture: composeEventHandlers(
                                props.onBlurCapture,
                                focusOutside.onBlurCapture,
                            ),
                            onPointerDownCapture: composeEventHandlers(
                                props.onPointerDownCapture,
                                pointerDownOutside.onPointerDownCapture,
                            ),
                        })
                    )
                })
            DismissableLayer.displayName = 'DismissableLayer'
            var DismissableLayerBranch = react.forwardRef(
                (props, forwardedRef) => {
                    const context = react.useContext(DismissableLayerContext),
                        ref = react.useRef(null),
                        composedRefs = useComposedRefs(forwardedRef, ref)
                    return (
                        react.useEffect(() => {
                            const node = ref.current
                            if (node)
                                return (
                                    context.branches.add(node),
                                    () => {
                                        context.branches.delete(node)
                                    }
                                )
                        }, [context.branches]),
                        (0, jsx_runtime.jsx)(Primitive.div, {
                            ...props,
                            ref: composedRefs,
                        })
                    )
                },
            )
            function dispatchUpdate() {
                const event = new CustomEvent('dismissableLayer.update')
                document.dispatchEvent(event)
            }
            function handleAndDispatchCustomEvent(
                name,
                handler,
                detail,
                { discrete },
            ) {
                const target = detail.originalEvent.target,
                    event = new CustomEvent(name, {
                        bubbles: !1,
                        cancelable: !0,
                        detail,
                    })
                handler && target.addEventListener(name, handler, { once: !0 }),
                    discrete
                        ? (function dispatchDiscreteCustomEvent(target, event) {
                              target &&
                                  react_dom.flushSync(() =>
                                      target.dispatchEvent(event),
                                  )
                          })(target, event)
                        : target.dispatchEvent(event)
            }
            DismissableLayerBranch.displayName = 'DismissableLayerBranch'
            var useLayoutEffect2 = Boolean(globalThis?.document)
                    ? react.useLayoutEffect
                    : () => {},
                useReactId =
                    react_namespaceObject['useId'.toString()] || (() => {}),
                count = 0
            var floating_ui_react_dom = __webpack_require__(
                    './node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs',
                ),
                floating_ui_dom = __webpack_require__(
                    './node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs',
                ),
                floating_ui_core = __webpack_require__(
                    './node_modules/@floating-ui/core/dist/floating-ui.core.mjs',
                ),
                Arrow = react.forwardRef((props, forwardedRef) => {
                    const {
                        children,
                        width = 10,
                        height = 5,
                        ...arrowProps
                    } = props
                    return (0, jsx_runtime.jsx)(Primitive.svg, {
                        ...arrowProps,
                        ref: forwardedRef,
                        width,
                        height,
                        viewBox: '0 0 30 10',
                        preserveAspectRatio: 'none',
                        children: props.asChild
                            ? children
                            : (0, jsx_runtime.jsx)('polygon', {
                                  points: '0,0 30,0 15,10',
                              }),
                    })
                })
            Arrow.displayName = 'Arrow'
            var react_arrow_dist_Root = Arrow
            function dist_composeContextScopes(...scopes) {
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
            var [createPopperContext, createPopperScope] =
                    (function dist_createContextScope(
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
                                    function Provider(props) {
                                        const { scope, children, ...context } =
                                                props,
                                            Context =
                                                scope?.[scopeName][index] ||
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
                                        (defaultContexts = [
                                            ...defaultContexts,
                                            defaultContext,
                                        ]),
                                        (Provider.displayName =
                                            rootComponentName + 'Provider'),
                                        [
                                            Provider,
                                            function useContext2(
                                                consumerName,
                                                scope,
                                            ) {
                                                const Context =
                                                        scope?.[scopeName][
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
                                dist_composeContextScopes(
                                    createScope,
                                    ...createContextScopeDeps,
                                ),
                            ]
                        )
                    })('Popper'),
                [PopperProvider, usePopperContext] =
                    createPopperContext('Popper'),
                Popper = (props) => {
                    const { __scopePopper, children } = props,
                        [anchor, setAnchor] = react.useState(null)
                    return (0, jsx_runtime.jsx)(PopperProvider, {
                        scope: __scopePopper,
                        anchor,
                        onAnchorChange: setAnchor,
                        children,
                    })
                }
            Popper.displayName = 'Popper'
            var PopperAnchor = react.forwardRef((props, forwardedRef) => {
                const { __scopePopper, virtualRef, ...anchorProps } = props,
                    context = usePopperContext('PopperAnchor', __scopePopper),
                    ref = react.useRef(null),
                    composedRefs = useComposedRefs(forwardedRef, ref)
                return (
                    react.useEffect(() => {
                        context.onAnchorChange(
                            virtualRef?.current || ref.current,
                        )
                    }),
                    virtualRef
                        ? null
                        : (0, jsx_runtime.jsx)(Primitive.div, {
                              ...anchorProps,
                              ref: composedRefs,
                          })
                )
            })
            PopperAnchor.displayName = 'PopperAnchor'
            var [PopperContentProvider, useContentContext] =
                    createPopperContext('PopperContent'),
                PopperContent = react.forwardRef((props, forwardedRef) => {
                    const {
                            __scopePopper,
                            side = 'bottom',
                            sideOffset = 0,
                            align = 'center',
                            alignOffset = 0,
                            arrowPadding = 0,
                            avoidCollisions = !0,
                            collisionBoundary = [],
                            collisionPadding: collisionPaddingProp = 0,
                            sticky = 'partial',
                            hideWhenDetached = !1,
                            updatePositionStrategy = 'optimized',
                            onPlaced,
                            ...contentProps
                        } = props,
                        context = usePopperContext(
                            'PopperContent',
                            __scopePopper,
                        ),
                        [content, setContent] = react.useState(null),
                        composedRefs = useComposedRefs(forwardedRef, (node) =>
                            setContent(node),
                        ),
                        [arrow, setArrow] = react.useState(null),
                        arrowSize = (function useSize(element) {
                            const [size, setSize] = react.useState(void 0)
                            return (
                                useLayoutEffect2(() => {
                                    if (element) {
                                        setSize({
                                            width: element.offsetWidth,
                                            height: element.offsetHeight,
                                        })
                                        const resizeObserver =
                                            new ResizeObserver((entries) => {
                                                if (!Array.isArray(entries))
                                                    return
                                                if (!entries.length) return
                                                const entry = entries[0]
                                                let width, height
                                                if ('borderBoxSize' in entry) {
                                                    const borderSizeEntry =
                                                            entry.borderBoxSize,
                                                        borderSize =
                                                            Array.isArray(
                                                                borderSizeEntry,
                                                            )
                                                                ? borderSizeEntry[0]
                                                                : borderSizeEntry
                                                    ;(width =
                                                        borderSize.inlineSize),
                                                        (height =
                                                            borderSize.blockSize)
                                                } else
                                                    (width =
                                                        element.offsetWidth),
                                                        (height =
                                                            element.offsetHeight)
                                                setSize({ width, height })
                                            })
                                        return (
                                            resizeObserver.observe(element, {
                                                box: 'border-box',
                                            }),
                                            () =>
                                                resizeObserver.unobserve(
                                                    element,
                                                )
                                        )
                                    }
                                    setSize(void 0)
                                }, [element]),
                                size
                            )
                        })(arrow),
                        arrowWidth = arrowSize?.width ?? 0,
                        arrowHeight = arrowSize?.height ?? 0,
                        desiredPlacement =
                            side + ('center' !== align ? '-' + align : ''),
                        collisionPadding =
                            'number' == typeof collisionPaddingProp
                                ? collisionPaddingProp
                                : {
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      left: 0,
                                      ...collisionPaddingProp,
                                  },
                        boundary = Array.isArray(collisionBoundary)
                            ? collisionBoundary
                            : [collisionBoundary],
                        hasExplicitBoundaries = boundary.length > 0,
                        detectOverflowOptions = {
                            padding: collisionPadding,
                            boundary: boundary.filter(isNotNull),
                            altBoundary: hasExplicitBoundaries,
                        },
                        {
                            refs,
                            floatingStyles,
                            placement,
                            isPositioned,
                            middlewareData,
                        } = (0, floating_ui_react_dom.YF)({
                            strategy: 'fixed',
                            placement: desiredPlacement,
                            whileElementsMounted: (...args) =>
                                (0, floating_ui_dom.Me)(...args, {
                                    animationFrame:
                                        'always' === updatePositionStrategy,
                                }),
                            elements: { reference: context.anchor },
                            middleware: [
                                (0, floating_ui_core.cv)({
                                    mainAxis: sideOffset + arrowHeight,
                                    alignmentAxis: alignOffset,
                                }),
                                avoidCollisions &&
                                    (0, floating_ui_core.uY)({
                                        mainAxis: !0,
                                        crossAxis: !1,
                                        limiter:
                                            'partial' === sticky
                                                ? (0, floating_ui_core.dr)()
                                                : void 0,
                                        ...detectOverflowOptions,
                                    }),
                                avoidCollisions &&
                                    (0, floating_ui_core.RR)({
                                        ...detectOverflowOptions,
                                    }),
                                (0, floating_ui_core.dp)({
                                    ...detectOverflowOptions,
                                    apply: ({
                                        elements,
                                        rects,
                                        availableWidth,
                                        availableHeight,
                                    }) => {
                                        const {
                                                width: anchorWidth,
                                                height: anchorHeight,
                                            } = rects.reference,
                                            contentStyle =
                                                elements.floating.style
                                        contentStyle.setProperty(
                                            '--radix-popper-available-width',
                                            `${availableWidth}px`,
                                        ),
                                            contentStyle.setProperty(
                                                '--radix-popper-available-height',
                                                `${availableHeight}px`,
                                            ),
                                            contentStyle.setProperty(
                                                '--radix-popper-anchor-width',
                                                `${anchorWidth}px`,
                                            ),
                                            contentStyle.setProperty(
                                                '--radix-popper-anchor-height',
                                                `${anchorHeight}px`,
                                            )
                                    },
                                }),
                                arrow &&
                                    (0, floating_ui_react_dom.x7)({
                                        element: arrow,
                                        padding: arrowPadding,
                                    }),
                                transformOrigin({ arrowWidth, arrowHeight }),
                                hideWhenDetached &&
                                    (0, floating_ui_core.Cp)({
                                        strategy: 'referenceHidden',
                                        ...detectOverflowOptions,
                                    }),
                            ],
                        }),
                        [placedSide, placedAlign] =
                            getSideAndAlignFromPlacement(placement),
                        handlePlaced = useCallbackRef(onPlaced)
                    useLayoutEffect2(() => {
                        isPositioned && handlePlaced?.()
                    }, [isPositioned, handlePlaced])
                    const arrowX = middlewareData.arrow?.x,
                        arrowY = middlewareData.arrow?.y,
                        cannotCenterArrow =
                            0 !== middlewareData.arrow?.centerOffset,
                        [contentZIndex, setContentZIndex] = react.useState()
                    return (
                        useLayoutEffect2(() => {
                            content &&
                                setContentZIndex(
                                    window.getComputedStyle(content).zIndex,
                                )
                        }, [content]),
                        (0, jsx_runtime.jsx)('div', {
                            ref: refs.setFloating,
                            'data-radix-popper-content-wrapper': '',
                            style: {
                                ...floatingStyles,
                                transform: isPositioned
                                    ? floatingStyles.transform
                                    : 'translate(0, -200%)',
                                minWidth: 'max-content',
                                zIndex: contentZIndex,
                                '--radix-popper-transform-origin': [
                                    middlewareData.transformOrigin?.x,
                                    middlewareData.transformOrigin?.y,
                                ].join(' '),
                                ...(middlewareData.hide?.referenceHidden && {
                                    visibility: 'hidden',
                                    pointerEvents: 'none',
                                }),
                            },
                            dir: props.dir,
                            children: (0, jsx_runtime.jsx)(
                                PopperContentProvider,
                                {
                                    scope: __scopePopper,
                                    placedSide,
                                    onArrowChange: setArrow,
                                    arrowX,
                                    arrowY,
                                    shouldHideArrow: cannotCenterArrow,
                                    children: (0, jsx_runtime.jsx)(
                                        Primitive.div,
                                        {
                                            'data-side': placedSide,
                                            'data-align': placedAlign,
                                            ...contentProps,
                                            ref: composedRefs,
                                            style: {
                                                ...contentProps.style,
                                                animation: isPositioned
                                                    ? void 0
                                                    : 'none',
                                            },
                                        },
                                    ),
                                },
                            ),
                        })
                    )
                })
            PopperContent.displayName = 'PopperContent'
            var OPPOSITE_SIDE = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                },
                PopperArrow = react.forwardRef(
                    function PopperArrow2(props, forwardedRef) {
                        const { __scopePopper, ...arrowProps } = props,
                            contentContext = useContentContext(
                                'PopperArrow',
                                __scopePopper,
                            ),
                            baseSide = OPPOSITE_SIDE[contentContext.placedSide]
                        return (0, jsx_runtime.jsx)('span', {
                            ref: contentContext.onArrowChange,
                            style: {
                                position: 'absolute',
                                left: contentContext.arrowX,
                                top: contentContext.arrowY,
                                [baseSide]: 0,
                                transformOrigin: {
                                    top: '',
                                    right: '0 0',
                                    bottom: 'center 0',
                                    left: '100% 0',
                                }[contentContext.placedSide],
                                transform: {
                                    top: 'translateY(100%)',
                                    right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                                    bottom: 'rotate(180deg)',
                                    left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                                }[contentContext.placedSide],
                                visibility: contentContext.shouldHideArrow
                                    ? 'hidden'
                                    : void 0,
                            },
                            children: (0, jsx_runtime.jsx)(
                                react_arrow_dist_Root,
                                {
                                    ...arrowProps,
                                    ref: forwardedRef,
                                    style: {
                                        ...arrowProps.style,
                                        display: 'block',
                                    },
                                },
                            ),
                        })
                    },
                )
            function isNotNull(value) {
                return null !== value
            }
            PopperArrow.displayName = 'PopperArrow'
            var transformOrigin = (options) => ({
                name: 'transformOrigin',
                options,
                fn(data) {
                    const { placement, rects, middlewareData } = data,
                        isArrowHidden =
                            0 !== middlewareData.arrow?.centerOffset,
                        arrowWidth = isArrowHidden ? 0 : options.arrowWidth,
                        arrowHeight = isArrowHidden ? 0 : options.arrowHeight,
                        [placedSide, placedAlign] =
                            getSideAndAlignFromPlacement(placement),
                        noArrowAlign = {
                            start: '0%',
                            center: '50%',
                            end: '100%',
                        }[placedAlign],
                        arrowXCenter =
                            (middlewareData.arrow?.x ?? 0) + arrowWidth / 2,
                        arrowYCenter =
                            (middlewareData.arrow?.y ?? 0) + arrowHeight / 2
                    let x = '',
                        y = ''
                    return (
                        'bottom' === placedSide
                            ? ((x = isArrowHidden
                                  ? noArrowAlign
                                  : `${arrowXCenter}px`),
                              (y = -arrowHeight + 'px'))
                            : 'top' === placedSide
                              ? ((x = isArrowHidden
                                    ? noArrowAlign
                                    : `${arrowXCenter}px`),
                                (y = `${
                                    rects.floating.height + arrowHeight
                                }px`))
                              : 'right' === placedSide
                                ? ((x = -arrowHeight + 'px'),
                                  (y = isArrowHidden
                                      ? noArrowAlign
                                      : `${arrowYCenter}px`))
                                : 'left' === placedSide &&
                                  ((x = `${
                                      rects.floating.width + arrowHeight
                                  }px`),
                                  (y = isArrowHidden
                                      ? noArrowAlign
                                      : `${arrowYCenter}px`)),
                        { data: { x, y } }
                    )
                },
            })
            function getSideAndAlignFromPlacement(placement) {
                const [side, align = 'center'] = placement.split('-')
                return [side, align]
            }
            var Root2 = Popper,
                Anchor = PopperAnchor,
                Content = PopperContent,
                dist_Arrow = PopperArrow,
                Portal = react.forwardRef((props, forwardedRef) => {
                    const { container: containerProp, ...portalProps } = props,
                        [mounted, setMounted] = react.useState(!1)
                    useLayoutEffect2(() => setMounted(!0), [])
                    const container =
                        containerProp || (mounted && globalThis?.document?.body)
                    return container
                        ? react_dom.createPortal(
                              (0, jsx_runtime.jsx)(Primitive.div, {
                                  ...portalProps,
                                  ref: forwardedRef,
                              }),
                              container,
                          )
                        : null
                })
            Portal.displayName = 'Portal'
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
            Presence.displayName = 'Presence'
            var VisuallyHidden = react.forwardRef((props, forwardedRef) =>
                (0, jsx_runtime.jsx)(Primitive.span, {
                    ...props,
                    ref: forwardedRef,
                    style: {
                        position: 'absolute',
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: 'hidden',
                        clip: 'rect(0, 0, 0, 0)',
                        whiteSpace: 'nowrap',
                        wordWrap: 'normal',
                        ...props.style,
                    },
                }),
            )
            VisuallyHidden.displayName = 'VisuallyHidden'
            var react_visually_hidden_dist_Root = VisuallyHidden,
                [createTooltipContext, createTooltipScope] =
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
                    })('Tooltip', [createPopperScope]),
                usePopperScope = createPopperScope(),
                DEFAULT_DELAY_DURATION = 700,
                [TooltipProviderContextProvider, useTooltipProviderContext] =
                    createTooltipContext('TooltipProvider'),
                TooltipProvider = (props) => {
                    const {
                            __scopeTooltip,
                            delayDuration = DEFAULT_DELAY_DURATION,
                            skipDelayDuration = 300,
                            disableHoverableContent = !1,
                            children,
                        } = props,
                        [isOpenDelayed, setIsOpenDelayed] = react.useState(!0),
                        isPointerInTransitRef = react.useRef(!1),
                        skipDelayTimerRef = react.useRef(0)
                    return (
                        react.useEffect(() => {
                            const skipDelayTimer = skipDelayTimerRef.current
                            return () => window.clearTimeout(skipDelayTimer)
                        }, []),
                        (0, jsx_runtime.jsx)(TooltipProviderContextProvider, {
                            scope: __scopeTooltip,
                            isOpenDelayed,
                            delayDuration,
                            onOpen: react.useCallback(() => {
                                window.clearTimeout(skipDelayTimerRef.current),
                                    setIsOpenDelayed(!1)
                            }, []),
                            onClose: react.useCallback(() => {
                                window.clearTimeout(skipDelayTimerRef.current),
                                    (skipDelayTimerRef.current =
                                        window.setTimeout(
                                            () => setIsOpenDelayed(!0),
                                            skipDelayDuration,
                                        ))
                            }, [skipDelayDuration]),
                            isPointerInTransitRef,
                            onPointerInTransitChange: react.useCallback(
                                (inTransit) => {
                                    isPointerInTransitRef.current = inTransit
                                },
                                [],
                            ),
                            disableHoverableContent,
                            children,
                        })
                    )
                }
            TooltipProvider.displayName = 'TooltipProvider'
            var [TooltipContextProvider, useTooltipContext] =
                    createTooltipContext('Tooltip'),
                Tooltip = (props) => {
                    const {
                            __scopeTooltip,
                            children,
                            open: openProp,
                            defaultOpen = !1,
                            onOpenChange,
                            disableHoverableContent:
                                disableHoverableContentProp,
                            delayDuration: delayDurationProp,
                        } = props,
                        providerContext = useTooltipProviderContext(
                            'Tooltip',
                            props.__scopeTooltip,
                        ),
                        popperScope = usePopperScope(__scopeTooltip),
                        [trigger, setTrigger] = react.useState(null),
                        contentId = (function useId(deterministicId) {
                            const [id, setId] = react.useState(useReactId())
                            return (
                                useLayoutEffect2(() => {
                                    deterministicId ||
                                        setId(
                                            (reactId) =>
                                                reactId ?? String(count++),
                                        )
                                }, [deterministicId]),
                                deterministicId || (id ? `radix-${id}` : '')
                            )
                        })(),
                        openTimerRef = react.useRef(0),
                        disableHoverableContent =
                            disableHoverableContentProp ??
                            providerContext.disableHoverableContent,
                        delayDuration =
                            delayDurationProp ?? providerContext.delayDuration,
                        wasOpenDelayedRef = react.useRef(!1),
                        [open = !1, setOpen] = useControllableState({
                            prop: openProp,
                            defaultProp: defaultOpen,
                            onChange: (open2) => {
                                open2
                                    ? (providerContext.onOpen(),
                                      document.dispatchEvent(
                                          new CustomEvent('tooltip.open'),
                                      ))
                                    : providerContext.onClose(),
                                    onOpenChange?.(open2)
                            },
                        }),
                        stateAttribute = react.useMemo(
                            () =>
                                open
                                    ? wasOpenDelayedRef.current
                                        ? 'delayed-open'
                                        : 'instant-open'
                                    : 'closed',
                            [open],
                        ),
                        handleOpen = react.useCallback(() => {
                            window.clearTimeout(openTimerRef.current),
                                (wasOpenDelayedRef.current = !1),
                                setOpen(!0)
                        }, [setOpen]),
                        handleClose = react.useCallback(() => {
                            window.clearTimeout(openTimerRef.current),
                                setOpen(!1)
                        }, [setOpen]),
                        handleDelayedOpen = react.useCallback(() => {
                            window.clearTimeout(openTimerRef.current),
                                (openTimerRef.current = window.setTimeout(
                                    () => {
                                        ;(wasOpenDelayedRef.current = !0),
                                            setOpen(!0)
                                    },
                                    delayDuration,
                                ))
                        }, [delayDuration, setOpen])
                    return (
                        react.useEffect(
                            () => () =>
                                window.clearTimeout(openTimerRef.current),
                            [],
                        ),
                        (0, jsx_runtime.jsx)(Root2, {
                            ...popperScope,
                            children: (0, jsx_runtime.jsx)(
                                TooltipContextProvider,
                                {
                                    scope: __scopeTooltip,
                                    contentId,
                                    open,
                                    stateAttribute,
                                    trigger,
                                    onTriggerChange: setTrigger,
                                    onTriggerEnter: react.useCallback(() => {
                                        providerContext.isOpenDelayed
                                            ? handleDelayedOpen()
                                            : handleOpen()
                                    }, [
                                        providerContext.isOpenDelayed,
                                        handleDelayedOpen,
                                        handleOpen,
                                    ]),
                                    onTriggerLeave: react.useCallback(() => {
                                        disableHoverableContent
                                            ? handleClose()
                                            : window.clearTimeout(
                                                  openTimerRef.current,
                                              )
                                    }, [handleClose, disableHoverableContent]),
                                    onOpen: handleOpen,
                                    onClose: handleClose,
                                    disableHoverableContent,
                                    children,
                                },
                            ),
                        })
                    )
                }
            Tooltip.displayName = 'Tooltip'
            var TooltipTrigger = react.forwardRef((props, forwardedRef) => {
                const { __scopeTooltip, ...triggerProps } = props,
                    context = useTooltipContext(
                        'TooltipTrigger',
                        __scopeTooltip,
                    ),
                    providerContext = useTooltipProviderContext(
                        'TooltipTrigger',
                        __scopeTooltip,
                    ),
                    popperScope = usePopperScope(__scopeTooltip),
                    composedRefs = useComposedRefs(
                        forwardedRef,
                        react.useRef(null),
                        context.onTriggerChange,
                    ),
                    isPointerDownRef = react.useRef(!1),
                    hasPointerMoveOpenedRef = react.useRef(!1),
                    handlePointerUp = react.useCallback(
                        () => (isPointerDownRef.current = !1),
                        [],
                    )
                return (
                    react.useEffect(
                        () => () =>
                            document.removeEventListener(
                                'pointerup',
                                handlePointerUp,
                            ),
                        [handlePointerUp],
                    ),
                    (0, jsx_runtime.jsx)(Anchor, {
                        asChild: !0,
                        ...popperScope,
                        children: (0, jsx_runtime.jsx)(Primitive.button, {
                            'aria-describedby': context.open
                                ? context.contentId
                                : void 0,
                            'data-state': context.stateAttribute,
                            ...triggerProps,
                            ref: composedRefs,
                            onPointerMove: composeEventHandlers(
                                props.onPointerMove,
                                (event) => {
                                    'touch' !== event.pointerType &&
                                        (hasPointerMoveOpenedRef.current ||
                                            providerContext
                                                .isPointerInTransitRef
                                                .current ||
                                            (context.onTriggerEnter(),
                                            (hasPointerMoveOpenedRef.current =
                                                !0)))
                                },
                            ),
                            onPointerLeave: composeEventHandlers(
                                props.onPointerLeave,
                                () => {
                                    context.onTriggerLeave(),
                                        (hasPointerMoveOpenedRef.current = !1)
                                },
                            ),
                            onPointerDown: composeEventHandlers(
                                props.onPointerDown,
                                () => {
                                    ;(isPointerDownRef.current = !0),
                                        document.addEventListener(
                                            'pointerup',
                                            handlePointerUp,
                                            { once: !0 },
                                        )
                                },
                            ),
                            onFocus: composeEventHandlers(props.onFocus, () => {
                                isPointerDownRef.current || context.onOpen()
                            }),
                            onBlur: composeEventHandlers(
                                props.onBlur,
                                context.onClose,
                            ),
                            onClick: composeEventHandlers(
                                props.onClick,
                                context.onClose,
                            ),
                        }),
                    })
                )
            })
            TooltipTrigger.displayName = 'TooltipTrigger'
            var [PortalProvider, usePortalContext] = createTooltipContext(
                    'TooltipPortal',
                    { forceMount: void 0 },
                ),
                TooltipPortal = (props) => {
                    const { __scopeTooltip, forceMount, children, container } =
                            props,
                        context = useTooltipContext(
                            'TooltipPortal',
                            __scopeTooltip,
                        )
                    return (0, jsx_runtime.jsx)(PortalProvider, {
                        scope: __scopeTooltip,
                        forceMount,
                        children: (0, jsx_runtime.jsx)(Presence, {
                            present: forceMount || context.open,
                            children: (0, jsx_runtime.jsx)(Portal, {
                                asChild: !0,
                                container,
                                children,
                            }),
                        }),
                    })
                }
            TooltipPortal.displayName = 'TooltipPortal'
            var TooltipContent = react.forwardRef((props, forwardedRef) => {
                    const portalContext = usePortalContext(
                            'TooltipContent',
                            props.__scopeTooltip,
                        ),
                        {
                            forceMount = portalContext.forceMount,
                            side = 'top',
                            ...contentProps
                        } = props,
                        context = useTooltipContext(
                            'TooltipContent',
                            props.__scopeTooltip,
                        )
                    return (0, jsx_runtime.jsx)(Presence, {
                        present: forceMount || context.open,
                        children: context.disableHoverableContent
                            ? (0, jsx_runtime.jsx)(TooltipContentImpl, {
                                  side,
                                  ...contentProps,
                                  ref: forwardedRef,
                              })
                            : (0, jsx_runtime.jsx)(TooltipContentHoverable, {
                                  side,
                                  ...contentProps,
                                  ref: forwardedRef,
                              }),
                    })
                }),
                TooltipContentHoverable = react.forwardRef(
                    (props, forwardedRef) => {
                        const context = useTooltipContext(
                                'TooltipContent',
                                props.__scopeTooltip,
                            ),
                            providerContext = useTooltipProviderContext(
                                'TooltipContent',
                                props.__scopeTooltip,
                            ),
                            ref = react.useRef(null),
                            composedRefs = useComposedRefs(forwardedRef, ref),
                            [pointerGraceArea, setPointerGraceArea] =
                                react.useState(null),
                            { trigger, onClose } = context,
                            content = ref.current,
                            { onPointerInTransitChange } = providerContext,
                            handleRemoveGraceArea = react.useCallback(() => {
                                setPointerGraceArea(null),
                                    onPointerInTransitChange(!1)
                            }, [onPointerInTransitChange]),
                            handleCreateGraceArea = react.useCallback(
                                (event, hoverTarget) => {
                                    const currentTarget = event.currentTarget,
                                        exitPoint = {
                                            x: event.clientX,
                                            y: event.clientY,
                                        },
                                        paddedExitPoints =
                                            (function getPaddedExitPoints(
                                                exitPoint,
                                                exitSide,
                                                padding = 5,
                                            ) {
                                                const paddedExitPoints = []
                                                switch (exitSide) {
                                                    case 'top':
                                                        paddedExitPoints.push(
                                                            {
                                                                x:
                                                                    exitPoint.x -
                                                                    padding,
                                                                y:
                                                                    exitPoint.y +
                                                                    padding,
                                                            },
                                                            {
                                                                x:
                                                                    exitPoint.x +
                                                                    padding,
                                                                y:
                                                                    exitPoint.y +
                                                                    padding,
                                                            },
                                                        )
                                                        break
                                                    case 'bottom':
                                                        paddedExitPoints.push(
                                                            {
                                                                x:
                                                                    exitPoint.x -
                                                                    padding,
                                                                y:
                                                                    exitPoint.y -
                                                                    padding,
                                                            },
                                                            {
                                                                x:
                                                                    exitPoint.x +
                                                                    padding,
                                                                y:
                                                                    exitPoint.y -
                                                                    padding,
                                                            },
                                                        )
                                                        break
                                                    case 'left':
                                                        paddedExitPoints.push(
                                                            {
                                                                x:
                                                                    exitPoint.x +
                                                                    padding,
                                                                y:
                                                                    exitPoint.y -
                                                                    padding,
                                                            },
                                                            {
                                                                x:
                                                                    exitPoint.x +
                                                                    padding,
                                                                y:
                                                                    exitPoint.y +
                                                                    padding,
                                                            },
                                                        )
                                                        break
                                                    case 'right':
                                                        paddedExitPoints.push(
                                                            {
                                                                x:
                                                                    exitPoint.x -
                                                                    padding,
                                                                y:
                                                                    exitPoint.y -
                                                                    padding,
                                                            },
                                                            {
                                                                x:
                                                                    exitPoint.x -
                                                                    padding,
                                                                y:
                                                                    exitPoint.y +
                                                                    padding,
                                                            },
                                                        )
                                                }
                                                return paddedExitPoints
                                            })(
                                                exitPoint,
                                                (function getExitSideFromRect(
                                                    point,
                                                    rect,
                                                ) {
                                                    const top = Math.abs(
                                                            rect.top - point.y,
                                                        ),
                                                        bottom = Math.abs(
                                                            rect.bottom -
                                                                point.y,
                                                        ),
                                                        right = Math.abs(
                                                            rect.right -
                                                                point.x,
                                                        ),
                                                        left = Math.abs(
                                                            rect.left - point.x,
                                                        )
                                                    switch (
                                                        Math.min(
                                                            top,
                                                            bottom,
                                                            right,
                                                            left,
                                                        )
                                                    ) {
                                                        case left:
                                                            return 'left'
                                                        case right:
                                                            return 'right'
                                                        case top:
                                                            return 'top'
                                                        case bottom:
                                                            return 'bottom'
                                                        default:
                                                            throw new Error(
                                                                'unreachable',
                                                            )
                                                    }
                                                })(
                                                    exitPoint,
                                                    currentTarget.getBoundingClientRect(),
                                                ),
                                            ),
                                        graceArea = (function getHull(points) {
                                            const newPoints = points.slice()
                                            return (
                                                newPoints.sort((a, b) =>
                                                    a.x < b.x
                                                        ? -1
                                                        : a.x > b.x
                                                          ? 1
                                                          : a.y < b.y
                                                            ? -1
                                                            : a.y > b.y
                                                              ? 1
                                                              : 0,
                                                ),
                                                (function getHullPresorted(
                                                    points,
                                                ) {
                                                    if (points.length <= 1)
                                                        return points.slice()
                                                    const upperHull = []
                                                    for (
                                                        let i = 0;
                                                        i < points.length;
                                                        i++
                                                    ) {
                                                        const p = points[i]
                                                        for (
                                                            ;
                                                            upperHull.length >=
                                                            2;

                                                        ) {
                                                            const q =
                                                                    upperHull[
                                                                        upperHull.length -
                                                                            1
                                                                    ],
                                                                r =
                                                                    upperHull[
                                                                        upperHull.length -
                                                                            2
                                                                    ]
                                                            if (
                                                                !(
                                                                    (q.x -
                                                                        r.x) *
                                                                        (p.y -
                                                                            r.y) >=
                                                                    (q.y -
                                                                        r.y) *
                                                                        (p.x -
                                                                            r.x)
                                                                )
                                                            )
                                                                break
                                                            upperHull.pop()
                                                        }
                                                        upperHull.push(p)
                                                    }
                                                    upperHull.pop()
                                                    const lowerHull = []
                                                    for (
                                                        let i =
                                                            points.length - 1;
                                                        i >= 0;
                                                        i--
                                                    ) {
                                                        const p = points[i]
                                                        for (
                                                            ;
                                                            lowerHull.length >=
                                                            2;

                                                        ) {
                                                            const q =
                                                                    lowerHull[
                                                                        lowerHull.length -
                                                                            1
                                                                    ],
                                                                r =
                                                                    lowerHull[
                                                                        lowerHull.length -
                                                                            2
                                                                    ]
                                                            if (
                                                                !(
                                                                    (q.x -
                                                                        r.x) *
                                                                        (p.y -
                                                                            r.y) >=
                                                                    (q.y -
                                                                        r.y) *
                                                                        (p.x -
                                                                            r.x)
                                                                )
                                                            )
                                                                break
                                                            lowerHull.pop()
                                                        }
                                                        lowerHull.push(p)
                                                    }
                                                    return (
                                                        lowerHull.pop(),
                                                        1 ===
                                                            upperHull.length &&
                                                        1 ===
                                                            lowerHull.length &&
                                                        upperHull[0].x ===
                                                            lowerHull[0].x &&
                                                        upperHull[0].y ===
                                                            lowerHull[0].y
                                                            ? upperHull
                                                            : upperHull.concat(
                                                                  lowerHull,
                                                              )
                                                    )
                                                })(newPoints)
                                            )
                                        })([
                                            ...paddedExitPoints,
                                            ...(function getPointsFromRect(
                                                rect,
                                            ) {
                                                const {
                                                    top,
                                                    right,
                                                    bottom,
                                                    left,
                                                } = rect
                                                return [
                                                    { x: left, y: top },
                                                    { x: right, y: top },
                                                    { x: right, y: bottom },
                                                    { x: left, y: bottom },
                                                ]
                                            })(
                                                hoverTarget.getBoundingClientRect(),
                                            ),
                                        ])
                                    setPointerGraceArea(graceArea),
                                        onPointerInTransitChange(!0)
                                },
                                [onPointerInTransitChange],
                            )
                        return (
                            react.useEffect(
                                () => () => handleRemoveGraceArea(),
                                [handleRemoveGraceArea],
                            ),
                            react.useEffect(() => {
                                if (trigger && content) {
                                    const handleTriggerLeave = (event) =>
                                            handleCreateGraceArea(
                                                event,
                                                content,
                                            ),
                                        handleContentLeave = (event) =>
                                            handleCreateGraceArea(
                                                event,
                                                trigger,
                                            )
                                    return (
                                        trigger.addEventListener(
                                            'pointerleave',
                                            handleTriggerLeave,
                                        ),
                                        content.addEventListener(
                                            'pointerleave',
                                            handleContentLeave,
                                        ),
                                        () => {
                                            trigger.removeEventListener(
                                                'pointerleave',
                                                handleTriggerLeave,
                                            ),
                                                content.removeEventListener(
                                                    'pointerleave',
                                                    handleContentLeave,
                                                )
                                        }
                                    )
                                }
                            }, [
                                trigger,
                                content,
                                handleCreateGraceArea,
                                handleRemoveGraceArea,
                            ]),
                            react.useEffect(() => {
                                if (pointerGraceArea) {
                                    const handleTrackPointerGrace = (event) => {
                                        const target = event.target,
                                            pointerPosition = {
                                                x: event.clientX,
                                                y: event.clientY,
                                            },
                                            hasEnteredTarget =
                                                trigger?.contains(target) ||
                                                content?.contains(target),
                                            isPointerOutsideGraceArea =
                                                !(function isPointInPolygon(
                                                    point,
                                                    polygon,
                                                ) {
                                                    const { x, y } = point
                                                    let inside = !1
                                                    for (
                                                        let i = 0,
                                                            j =
                                                                polygon.length -
                                                                1;
                                                        i < polygon.length;
                                                        j = i++
                                                    ) {
                                                        const xi = polygon[i].x,
                                                            yi = polygon[i].y,
                                                            xj = polygon[j].x,
                                                            yj = polygon[j].y
                                                        yi > y != yj > y &&
                                                            x <
                                                                ((xj - xi) *
                                                                    (y - yi)) /
                                                                    (yj - yi) +
                                                                    xi &&
                                                            (inside = !inside)
                                                    }
                                                    return inside
                                                })(
                                                    pointerPosition,
                                                    pointerGraceArea,
                                                )
                                        hasEnteredTarget
                                            ? handleRemoveGraceArea()
                                            : isPointerOutsideGraceArea &&
                                              (handleRemoveGraceArea(),
                                              onClose())
                                    }
                                    return (
                                        document.addEventListener(
                                            'pointermove',
                                            handleTrackPointerGrace,
                                        ),
                                        () =>
                                            document.removeEventListener(
                                                'pointermove',
                                                handleTrackPointerGrace,
                                            )
                                    )
                                }
                            }, [
                                trigger,
                                content,
                                pointerGraceArea,
                                onClose,
                                handleRemoveGraceArea,
                            ]),
                            (0, jsx_runtime.jsx)(TooltipContentImpl, {
                                ...props,
                                ref: composedRefs,
                            })
                        )
                    },
                ),
                [
                    VisuallyHiddenContentContextProvider,
                    useVisuallyHiddenContentContext,
                ] = createTooltipContext('Tooltip', { isInside: !1 }),
                TooltipContentImpl = react.forwardRef((props, forwardedRef) => {
                    const {
                            __scopeTooltip,
                            children,
                            'aria-label': ariaLabel,
                            onEscapeKeyDown,
                            onPointerDownOutside,
                            ...contentProps
                        } = props,
                        context = useTooltipContext(
                            'TooltipContent',
                            __scopeTooltip,
                        ),
                        popperScope = usePopperScope(__scopeTooltip),
                        { onClose } = context
                    return (
                        react.useEffect(
                            () => (
                                document.addEventListener(
                                    'tooltip.open',
                                    onClose,
                                ),
                                () =>
                                    document.removeEventListener(
                                        'tooltip.open',
                                        onClose,
                                    )
                            ),
                            [onClose],
                        ),
                        react.useEffect(() => {
                            if (context.trigger) {
                                const handleScroll = (event) => {
                                    const target = event.target
                                    target?.contains(context.trigger) &&
                                        onClose()
                                }
                                return (
                                    window.addEventListener(
                                        'scroll',
                                        handleScroll,
                                        { capture: !0 },
                                    ),
                                    () =>
                                        window.removeEventListener(
                                            'scroll',
                                            handleScroll,
                                            { capture: !0 },
                                        )
                                )
                            }
                        }, [context.trigger, onClose]),
                        (0, jsx_runtime.jsx)(DismissableLayer, {
                            asChild: !0,
                            disableOutsidePointerEvents: !1,
                            onEscapeKeyDown,
                            onPointerDownOutside,
                            onFocusOutside: (event) => event.preventDefault(),
                            onDismiss: onClose,
                            children: (0, jsx_runtime.jsxs)(Content, {
                                'data-state': context.stateAttribute,
                                ...popperScope,
                                ...contentProps,
                                ref: forwardedRef,
                                style: {
                                    ...contentProps.style,
                                    '--radix-tooltip-content-transform-origin':
                                        'var(--radix-popper-transform-origin)',
                                    '--radix-tooltip-content-available-width':
                                        'var(--radix-popper-available-width)',
                                    '--radix-tooltip-content-available-height':
                                        'var(--radix-popper-available-height)',
                                    '--radix-tooltip-trigger-width':
                                        'var(--radix-popper-anchor-width)',
                                    '--radix-tooltip-trigger-height':
                                        'var(--radix-popper-anchor-height)',
                                },
                                children: [
                                    (0, jsx_runtime.jsx)(dist.A4, { children }),
                                    (0, jsx_runtime.jsx)(
                                        VisuallyHiddenContentContextProvider,
                                        {
                                            scope: __scopeTooltip,
                                            isInside: !0,
                                            children: (0, jsx_runtime.jsx)(
                                                react_visually_hidden_dist_Root,
                                                {
                                                    id: context.contentId,
                                                    role: 'tooltip',
                                                    children:
                                                        ariaLabel || children,
                                                },
                                            ),
                                        },
                                    ),
                                ],
                            }),
                        })
                    )
                })
            TooltipContent.displayName = 'TooltipContent'
            var TooltipArrow = react.forwardRef((props, forwardedRef) => {
                const { __scopeTooltip, ...arrowProps } = props,
                    popperScope = usePopperScope(__scopeTooltip)
                return useVisuallyHiddenContentContext(
                    'TooltipArrow',
                    __scopeTooltip,
                ).isInside
                    ? null
                    : (0, jsx_runtime.jsx)(dist_Arrow, {
                          ...popperScope,
                          ...arrowProps,
                          ref: forwardedRef,
                      })
            })
            TooltipArrow.displayName = 'TooltipArrow'
            var Provider = TooltipProvider,
                Root3 = Tooltip,
                Trigger = TooltipTrigger,
                Content2 = TooltipContent
        },
    },
])
