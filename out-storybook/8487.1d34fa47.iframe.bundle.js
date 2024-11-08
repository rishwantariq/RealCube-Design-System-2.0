'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [8487],
    {
        './node_modules/@radix-ui/react-popover/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                VY: () => $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2,
                h_: () => $cb5cc270b50c6fcd$export$602eac185826482c,
                fC: () => $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9,
                xz: () => $cb5cc270b50c6fcd$export$41fb9f06171c75f4,
            })
            var esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                dist = __webpack_require__(
                    './node_modules/@radix-ui/primitive/dist/index.mjs',
                ),
                react_compose_refs_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                ),
                react_context_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-context/dist/index.mjs',
                ),
                react_dismissable_layer_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs',
                ),
                react_focus_guards_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-focus-guards/dist/index.mjs',
                ),
                react_focus_scope_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-focus-scope/dist/index.mjs',
                ),
                react_id_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-id/dist/index.mjs',
                ),
                react_popper_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-popper/dist/index.mjs',
                ),
                react_portal_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-portal/dist/index.mjs',
                ),
                react_presence_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-presence/dist/index.mjs',
                ),
                react_primitive_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                )
            const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = (0,
            react.forwardRef)((props, forwardedRef) => {
                const { children, ...slotProps } = props,
                    childrenArray = react.Children.toArray(children),
                    slottable = childrenArray.find(
                        $5e63c961fc1ce211$var$isSlottable,
                    )
                if (slottable) {
                    const newElement = slottable.props.children,
                        newChildren = childrenArray.map((child) =>
                            child === slottable
                                ? react.Children.count(newElement) > 1
                                    ? react.Children.only(null)
                                    : (0, react.isValidElement)(newElement)
                                      ? newElement.props.children
                                      : null
                                : child,
                        )
                    return (0, react.createElement)(
                        $5e63c961fc1ce211$var$SlotClone,
                        (0, esm_extends.Z)({}, slotProps, {
                            ref: forwardedRef,
                        }),
                        (0, react.isValidElement)(newElement)
                            ? (0, react.cloneElement)(
                                  newElement,
                                  void 0,
                                  newChildren,
                              )
                            : null,
                    )
                }
                return (0, react.createElement)(
                    $5e63c961fc1ce211$var$SlotClone,
                    (0, esm_extends.Z)({}, slotProps, { ref: forwardedRef }),
                    children,
                )
            })
            $5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot'
            const $5e63c961fc1ce211$var$SlotClone = (0, react.forwardRef)(
                (props, forwardedRef) => {
                    const { children, ...slotProps } = props
                    return (0, react.isValidElement)(children)
                        ? (0, react.cloneElement)(children, {
                              ...$5e63c961fc1ce211$var$mergeProps(
                                  slotProps,
                                  children.props,
                              ),
                              ref: forwardedRef
                                  ? (0, react_compose_refs_dist.F)(
                                        forwardedRef,
                                        children.ref,
                                    )
                                  : children.ref,
                          })
                        : react.Children.count(children) > 1
                          ? react.Children.only(null)
                          : null
                },
            )
            $5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone'
            const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) =>
                (0, react.createElement)(react.Fragment, null, children)
            function $5e63c961fc1ce211$var$isSlottable(child) {
                return (
                    (0, react.isValidElement)(child) &&
                    child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
                )
            }
            function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
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
            var react_use_controllable_state_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                ),
                es2015 = __webpack_require__(
                    './node_modules/aria-hidden/dist/es2015/index.js',
                ),
                Combination = __webpack_require__(
                    './node_modules/react-remove-scroll/dist/es2015/Combination.js',
                )
            const [
                    $cb5cc270b50c6fcd$var$createPopoverContext,
                    $cb5cc270b50c6fcd$export$c8393c9e73286932,
                ] = (0, react_context_dist.b)('Popover', [
                    react_popper_dist.D7,
                ]),
                $cb5cc270b50c6fcd$var$usePopperScope = (0,
                react_popper_dist.D7)(),
                [
                    $cb5cc270b50c6fcd$var$PopoverProvider,
                    $cb5cc270b50c6fcd$var$usePopoverContext,
                ] = $cb5cc270b50c6fcd$var$createPopoverContext('Popover'),
                $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
                    const {
                            __scopePopover,
                            children,
                            open: openProp,
                            defaultOpen,
                            onOpenChange,
                            modal = !1,
                        } = props,
                        popperScope =
                            $cb5cc270b50c6fcd$var$usePopperScope(
                                __scopePopover,
                            ),
                        triggerRef = (0, react.useRef)(null),
                        [hasCustomAnchor, setHasCustomAnchor] = (0,
                        react.useState)(!1),
                        [open = !1, setOpen] = (0,
                        react_use_controllable_state_dist.T)({
                            prop: openProp,
                            defaultProp: defaultOpen,
                            onChange: onOpenChange,
                        })
                    return (0, react.createElement)(
                        react_popper_dist.fC,
                        popperScope,
                        (0, react.createElement)(
                            $cb5cc270b50c6fcd$var$PopoverProvider,
                            {
                                scope: __scopePopover,
                                contentId: (0, react_id_dist.M)(),
                                triggerRef,
                                open,
                                onOpenChange: setOpen,
                                onOpenToggle: (0, react.useCallback)(
                                    () => setOpen((prevOpen) => !prevOpen),
                                    [setOpen],
                                ),
                                hasCustomAnchor,
                                onCustomAnchorAdd: (0, react.useCallback)(
                                    () => setHasCustomAnchor(!0),
                                    [],
                                ),
                                onCustomAnchorRemove: (0, react.useCallback)(
                                    () => setHasCustomAnchor(!1),
                                    [],
                                ),
                                modal,
                            },
                            children,
                        ),
                    )
                },
                $cb5cc270b50c6fcd$export$7dacb05d26466c3 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopePopover, ...triggerProps } = props,
                        context = $cb5cc270b50c6fcd$var$usePopoverContext(
                            'PopoverTrigger',
                            __scopePopover,
                        ),
                        popperScope =
                            $cb5cc270b50c6fcd$var$usePopperScope(
                                __scopePopover,
                            ),
                        composedTriggerRef = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            context.triggerRef,
                        ),
                        trigger = (0, react.createElement)(
                            react_primitive_dist.WV.button,
                            (0, esm_extends.Z)(
                                {
                                    type: 'button',
                                    'aria-haspopup': 'dialog',
                                    'aria-expanded': context.open,
                                    'aria-controls': context.contentId,
                                    'data-state':
                                        $cb5cc270b50c6fcd$var$getState(
                                            context.open,
                                        ),
                                },
                                triggerProps,
                                {
                                    ref: composedTriggerRef,
                                    onClick: (0, dist.M)(
                                        props.onClick,
                                        context.onOpenToggle,
                                    ),
                                },
                            ),
                        )
                    return context.hasCustomAnchor
                        ? trigger
                        : (0, react.createElement)(
                              react_popper_dist.ee,
                              (0, esm_extends.Z)({ asChild: !0 }, popperScope),
                              trigger,
                          )
                }),
                [
                    $cb5cc270b50c6fcd$var$PortalProvider,
                    $cb5cc270b50c6fcd$var$usePortalContext,
                ] = $cb5cc270b50c6fcd$var$createPopoverContext(
                    'PopoverPortal',
                    { forceMount: void 0 },
                ),
                $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
                    const { __scopePopover, forceMount, children, container } =
                            props,
                        context = $cb5cc270b50c6fcd$var$usePopoverContext(
                            'PopoverPortal',
                            __scopePopover,
                        )
                    return (0, react.createElement)(
                        $cb5cc270b50c6fcd$var$PortalProvider,
                        { scope: __scopePopover, forceMount },
                        (0, react.createElement)(
                            react_presence_dist.z,
                            { present: forceMount || context.open },
                            (0, react.createElement)(
                                react_portal_dist.h,
                                { asChild: !0, container },
                                children,
                            ),
                        ),
                    )
                },
                $cb5cc270b50c6fcd$export$d7e1f420b25549ff = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const portalContext =
                            $cb5cc270b50c6fcd$var$usePortalContext(
                                'PopoverContent',
                                props.__scopePopover,
                            ),
                        {
                            forceMount = portalContext.forceMount,
                            ...contentProps
                        } = props,
                        context = $cb5cc270b50c6fcd$var$usePopoverContext(
                            'PopoverContent',
                            props.__scopePopover,
                        )
                    return (0, react.createElement)(
                        react_presence_dist.z,
                        { present: forceMount || context.open },
                        context.modal
                            ? (0, react.createElement)(
                                  $cb5cc270b50c6fcd$var$PopoverContentModal,
                                  (0, esm_extends.Z)({}, contentProps, {
                                      ref: forwardedRef,
                                  }),
                              )
                            : (0, react.createElement)(
                                  $cb5cc270b50c6fcd$var$PopoverContentNonModal,
                                  (0, esm_extends.Z)({}, contentProps, {
                                      ref: forwardedRef,
                                  }),
                              ),
                    )
                }),
                $cb5cc270b50c6fcd$var$PopoverContentModal = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $cb5cc270b50c6fcd$var$usePopoverContext(
                            'PopoverContent',
                            props.__scopePopover,
                        ),
                        contentRef = (0, react.useRef)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            contentRef,
                        ),
                        isRightClickOutsideRef = (0, react.useRef)(!1)
                    return (
                        (0, react.useEffect)(() => {
                            const content = contentRef.current
                            if (content) return (0, es2015.Ry)(content)
                        }, []),
                        (0, react.createElement)(
                            Combination.Z,
                            {
                                as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
                                allowPinchZoom: !0,
                            },
                            (0, react.createElement)(
                                $cb5cc270b50c6fcd$var$PopoverContentImpl,
                                (0, esm_extends.Z)({}, props, {
                                    ref: composedRefs,
                                    trapFocus: context.open,
                                    disableOutsidePointerEvents: !0,
                                    onCloseAutoFocus: (0, dist.M)(
                                        props.onCloseAutoFocus,
                                        (event) => {
                                            var _context$triggerRef$c
                                            event.preventDefault(),
                                                isRightClickOutsideRef.current ||
                                                    null ===
                                                        (_context$triggerRef$c =
                                                            context.triggerRef
                                                                .current) ||
                                                    void 0 ===
                                                        _context$triggerRef$c ||
                                                    _context$triggerRef$c.focus()
                                        },
                                    ),
                                    onPointerDownOutside: (0, dist.M)(
                                        props.onPointerDownOutside,
                                        (event) => {
                                            const originalEvent =
                                                    event.detail.originalEvent,
                                                ctrlLeftClick =
                                                    0 ===
                                                        originalEvent.button &&
                                                    !0 ===
                                                        originalEvent.ctrlKey,
                                                isRightClick =
                                                    2 ===
                                                        originalEvent.button ||
                                                    ctrlLeftClick
                                            isRightClickOutsideRef.current =
                                                isRightClick
                                        },
                                        { checkForDefaultPrevented: !1 },
                                    ),
                                    onFocusOutside: (0, dist.M)(
                                        props.onFocusOutside,
                                        (event) => event.preventDefault(),
                                        { checkForDefaultPrevented: !1 },
                                    ),
                                }),
                            ),
                        )
                    )
                }),
                $cb5cc270b50c6fcd$var$PopoverContentNonModal = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $cb5cc270b50c6fcd$var$usePopoverContext(
                            'PopoverContent',
                            props.__scopePopover,
                        ),
                        hasInteractedOutsideRef = (0, react.useRef)(!1),
                        hasPointerDownOutsideRef = (0, react.useRef)(!1)
                    return (0, react.createElement)(
                        $cb5cc270b50c6fcd$var$PopoverContentImpl,
                        (0, esm_extends.Z)({}, props, {
                            ref: forwardedRef,
                            trapFocus: !1,
                            disableOutsidePointerEvents: !1,
                            onCloseAutoFocus: (event) => {
                                var _props$onCloseAutoFoc,
                                    _context$triggerRef$c2
                                ;(null ===
                                    (_props$onCloseAutoFoc =
                                        props.onCloseAutoFocus) ||
                                    void 0 === _props$onCloseAutoFoc ||
                                    _props$onCloseAutoFoc.call(props, event),
                                event.defaultPrevented) ||
                                    (hasInteractedOutsideRef.current ||
                                        null ===
                                            (_context$triggerRef$c2 =
                                                context.triggerRef.current) ||
                                        void 0 === _context$triggerRef$c2 ||
                                        _context$triggerRef$c2.focus(),
                                    event.preventDefault())
                                ;(hasInteractedOutsideRef.current = !1),
                                    (hasPointerDownOutsideRef.current = !1)
                            },
                            onInteractOutside: (event) => {
                                var _props$onInteractOuts,
                                    _context$triggerRef$c3
                                null ===
                                    (_props$onInteractOuts =
                                        props.onInteractOutside) ||
                                    void 0 === _props$onInteractOuts ||
                                    _props$onInteractOuts.call(props, event),
                                    event.defaultPrevented ||
                                        ((hasInteractedOutsideRef.current = !0),
                                        'pointerdown' ===
                                            event.detail.originalEvent.type &&
                                            (hasPointerDownOutsideRef.current =
                                                !0))
                                const target = event.target
                                ;(null ===
                                    (_context$triggerRef$c3 =
                                        context.triggerRef.current) ||
                                void 0 === _context$triggerRef$c3
                                    ? void 0
                                    : _context$triggerRef$c3.contains(
                                          target,
                                      )) && event.preventDefault(),
                                    'focusin' ===
                                        event.detail.originalEvent.type &&
                                        hasPointerDownOutsideRef.current &&
                                        event.preventDefault()
                            },
                        }),
                    )
                }),
                $cb5cc270b50c6fcd$var$PopoverContentImpl = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const {
                            __scopePopover,
                            trapFocus,
                            onOpenAutoFocus,
                            onCloseAutoFocus,
                            disableOutsidePointerEvents,
                            onEscapeKeyDown,
                            onPointerDownOutside,
                            onFocusOutside,
                            onInteractOutside,
                            ...contentProps
                        } = props,
                        context = $cb5cc270b50c6fcd$var$usePopoverContext(
                            'PopoverContent',
                            __scopePopover,
                        ),
                        popperScope =
                            $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover)
                    return (
                        (0, react_focus_guards_dist.EW)(),
                        (0, react.createElement)(
                            react_focus_scope_dist.M,
                            {
                                asChild: !0,
                                loop: !0,
                                trapped: trapFocus,
                                onMountAutoFocus: onOpenAutoFocus,
                                onUnmountAutoFocus: onCloseAutoFocus,
                            },
                            (0, react.createElement)(
                                react_dismissable_layer_dist.XB,
                                {
                                    asChild: !0,
                                    disableOutsidePointerEvents,
                                    onInteractOutside,
                                    onEscapeKeyDown,
                                    onPointerDownOutside,
                                    onFocusOutside,
                                    onDismiss: () => context.onOpenChange(!1),
                                },
                                (0, react.createElement)(
                                    react_popper_dist.VY,
                                    (0, esm_extends.Z)(
                                        {
                                            'data-state':
                                                $cb5cc270b50c6fcd$var$getState(
                                                    context.open,
                                                ),
                                            role: 'dialog',
                                            id: context.contentId,
                                        },
                                        popperScope,
                                        contentProps,
                                        {
                                            ref: forwardedRef,
                                            style: {
                                                ...contentProps.style,
                                                '--radix-popover-content-transform-origin':
                                                    'var(--radix-popper-transform-origin)',
                                                '--radix-popover-content-available-width':
                                                    'var(--radix-popper-available-width)',
                                                '--radix-popover-content-available-height':
                                                    'var(--radix-popper-available-height)',
                                                '--radix-popover-trigger-width':
                                                    'var(--radix-popper-anchor-width)',
                                                '--radix-popover-trigger-height':
                                                    'var(--radix-popper-anchor-height)',
                                            },
                                        },
                                    ),
                                ),
                            ),
                        )
                    )
                })
            function $cb5cc270b50c6fcd$var$getState(open) {
                return open ? 'open' : 'closed'
            }
            const $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 =
                    $cb5cc270b50c6fcd$export$5b6b19405a83ff9d,
                $cb5cc270b50c6fcd$export$41fb9f06171c75f4 =
                    $cb5cc270b50c6fcd$export$7dacb05d26466c3,
                $cb5cc270b50c6fcd$export$602eac185826482c =
                    $cb5cc270b50c6fcd$export$dd679ffb4362d2d4,
                $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 =
                    $cb5cc270b50c6fcd$export$d7e1f420b25549ff
        },
    },
])
