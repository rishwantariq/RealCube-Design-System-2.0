/*! For license information please see 563.26e41556.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [563],
    {
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
        './node_modules/@radix-ui/react-switch/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                bU: () => $6be4966fd9bbc698$export$6521433ed15a34db,
                fC: () => $6be4966fd9bbc698$export$be92b6f5f03c0fe9,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ =
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
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                    ),
                _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-context/dist/index.mjs',
                    ),
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                    ),
                _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-previous/dist/index.mjs',
                    ),
                _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-size/dist/index.mjs',
                    ),
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    )
            const [
                    $6be4966fd9bbc698$var$createSwitchContext,
                    $6be4966fd9bbc698$export$cf7f5f17f69cbd43,
                ] = (0, _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(
                    'Switch',
                ),
                [
                    $6be4966fd9bbc698$var$SwitchProvider,
                    $6be4966fd9bbc698$var$useSwitchContext,
                ] = $6be4966fd9bbc698$var$createSwitchContext('Switch'),
                $6be4966fd9bbc698$export$b5d5cf8927ab7262 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeSwitch,
                                name,
                                checked: checkedProp,
                                defaultChecked,
                                required,
                                disabled,
                                value = 'on',
                                onCheckedChange,
                                ...switchProps
                            } = props,
                            [button, setButton] = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                            composedRefs = (0,
                            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(
                                forwardedRef,
                                (node) => setButton(node),
                            ),
                            hasConsumerStoppedPropagationRef = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
                            isFormControl =
                                !button || Boolean(button.closest('form')),
                            [checked = !1, setChecked] = (0,
                            _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)(
                                {
                                    prop: checkedProp,
                                    defaultProp: defaultChecked,
                                    onChange: onCheckedChange,
                                },
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            $6be4966fd9bbc698$var$SwitchProvider,
                            { scope: __scopeSwitch, checked, disabled },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__
                                    .WV.button,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                    {
                                        type: 'button',
                                        role: 'switch',
                                        'aria-checked': checked,
                                        'aria-required': required,
                                        'data-state':
                                            $6be4966fd9bbc698$var$getState(
                                                checked,
                                            ),
                                        'data-disabled': disabled ? '' : void 0,
                                        disabled,
                                        value,
                                    },
                                    switchProps,
                                    {
                                        ref: composedRefs,
                                        onClick: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                            props.onClick,
                                            (event) => {
                                                setChecked(
                                                    (prevChecked) =>
                                                        !prevChecked,
                                                ),
                                                    isFormControl &&
                                                        ((hasConsumerStoppedPropagationRef.current =
                                                            event.isPropagationStopped()),
                                                        hasConsumerStoppedPropagationRef.current ||
                                                            event.stopPropagation())
                                            },
                                        ),
                                    },
                                ),
                            ),
                            isFormControl &&
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    $6be4966fd9bbc698$var$BubbleInput,
                                    {
                                        control: button,
                                        bubbles:
                                            !hasConsumerStoppedPropagationRef.current,
                                        name,
                                        value,
                                        checked,
                                        required,
                                        disabled,
                                        style: {
                                            transform: 'translateX(-100%)',
                                        },
                                    },
                                ),
                        )
                    },
                ),
                $6be4966fd9bbc698$export$4d07bf653ea69106 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const { __scopeSwitch, ...thumbProps } = props,
                            context = $6be4966fd9bbc698$var$useSwitchContext(
                                'SwitchThumb',
                                __scopeSwitch,
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__
                                .WV.span,
                            (0,
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                {
                                    'data-state':
                                        $6be4966fd9bbc698$var$getState(
                                            context.checked,
                                        ),
                                    'data-disabled': context.disabled
                                        ? ''
                                        : void 0,
                                },
                                thumbProps,
                                { ref: forwardedRef },
                            ),
                        )
                    },
                ),
                $6be4966fd9bbc698$var$BubbleInput = (props) => {
                    const {
                            control,
                            checked,
                            bubbles = !0,
                            ...inputProps
                        } = props,
                        ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
                            null,
                        ),
                        prevChecked = (0,
                        _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.D)(
                            checked,
                        ),
                        controlSize = (0,
                        _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.t)(
                            control,
                        )
                    return (
                        (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                            const input = ref.current,
                                inputProto = window.HTMLInputElement.prototype,
                                setChecked = Object.getOwnPropertyDescriptor(
                                    inputProto,
                                    'checked',
                                ).set
                            if (prevChecked !== checked && setChecked) {
                                const event = new Event('click', { bubbles })
                                setChecked.call(input, checked),
                                    input.dispatchEvent(event)
                            }
                        }, [prevChecked, checked, bubbles]),
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            'input',
                            (0,
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                {
                                    type: 'checkbox',
                                    'aria-hidden': !0,
                                    defaultChecked: checked,
                                },
                                inputProps,
                                {
                                    tabIndex: -1,
                                    ref,
                                    style: {
                                        ...props.style,
                                        ...controlSize,
                                        position: 'absolute',
                                        pointerEvents: 'none',
                                        opacity: 0,
                                        margin: 0,
                                    },
                                },
                            ),
                        )
                    )
                }
            function $6be4966fd9bbc698$var$getState(checked) {
                return checked ? 'checked' : 'unchecked'
            }
            const $6be4966fd9bbc698$export$be92b6f5f03c0fe9 =
                    $6be4966fd9bbc698$export$b5d5cf8927ab7262,
                $6be4966fd9bbc698$export$6521433ed15a34db =
                    $6be4966fd9bbc698$export$4d07bf653ea69106
        },
        './node_modules/lucide-react/dist/esm/icons/arrow-up-narrow-wide.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => ArrowUpNarrowWide,
            })
            const ArrowUpNarrowWide = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('ArrowUpNarrowWide', [
                ['path', { d: 'm3 8 4-4 4 4', key: '11wl7u' }],
                ['path', { d: 'M7 4v16', key: '1glfcx' }],
                ['path', { d: 'M11 12h4', key: 'q8tih4' }],
                ['path', { d: 'M11 16h7', key: 'uosisv' }],
                ['path', { d: 'M11 20h10', key: 'jvxblo' }],
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
        './node_modules/lucide-react/dist/esm/icons/clock.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Clock })
            const Clock = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Clock', [
                ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
                ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/copy.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Copy })
            const Copy = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Copy', [
                [
                    'rect',
                    {
                        width: '14',
                        height: '14',
                        x: '8',
                        y: '8',
                        rx: '2',
                        ry: '2',
                        key: '17jyea',
                    },
                ],
                [
                    'path',
                    {
                        d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
                        key: 'zix9uf',
                    },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/dot.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Dot })
            const Dot = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Dot', [
                ['circle', { cx: '12.1', cy: '12.1', r: '1', key: '18d7e5' }],
            ])
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
