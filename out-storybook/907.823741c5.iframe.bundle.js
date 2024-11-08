'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [907],
    {
        './node_modules/@radix-ui/react-alert-dialog/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                aU: () => $905f4ae918aab1aa$export$e19cd5f9376f8cee,
                $j: () => $905f4ae918aab1aa$export$848c9b7ead0df967,
                VY: () => $905f4ae918aab1aa$export$7c6e2c02157bb7d2,
                dk: () => $905f4ae918aab1aa$export$393edc798c47379d,
                aV: () => $905f4ae918aab1aa$export$c6fdb837b070b4ff,
                h_: () => $905f4ae918aab1aa$export$602eac185826482c,
                fC: () => $905f4ae918aab1aa$export$be92b6f5f03c0fe9,
                Dx: () => $905f4ae918aab1aa$export$f99233281efd08a0,
                xz: () => $905f4ae918aab1aa$export$41fb9f06171c75f4,
            })
            var esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                dist = __webpack_require__(
                    './node_modules/@radix-ui/react-context/dist/index.mjs',
                ),
                react_compose_refs_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                ),
                primitive_dist = __webpack_require__(
                    './node_modules/@radix-ui/primitive/dist/index.mjs',
                ),
                react_id_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-id/dist/index.mjs',
                ),
                react_use_controllable_state_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                ),
                react_dismissable_layer_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs',
                ),
                react_focus_scope_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-focus-scope/dist/index.mjs',
                ),
                react_portal_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-portal/dist/index.mjs',
                ),
                react_presence_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-presence/dist/index.mjs',
                ),
                react_primitive_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                ),
                react_focus_guards_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-focus-guards/dist/index.mjs',
                ),
                Combination = __webpack_require__(
                    './node_modules/react-remove-scroll/dist/es2015/Combination.js',
                ),
                es2015 = __webpack_require__(
                    './node_modules/aria-hidden/dist/es2015/index.js',
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
            __webpack_require__('./node_modules/console-browserify/index.js')
            const [
                    $5d3850c4d0b4e6c7$var$createDialogContext,
                    $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
                ] = (0, dist.b)('Dialog'),
                [
                    $5d3850c4d0b4e6c7$var$DialogProvider,
                    $5d3850c4d0b4e6c7$var$useDialogContext,
                ] = $5d3850c4d0b4e6c7$var$createDialogContext('Dialog'),
                $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
                    const {
                            __scopeDialog,
                            children,
                            open: openProp,
                            defaultOpen,
                            onOpenChange,
                            modal = !0,
                        } = props,
                        triggerRef = (0, react.useRef)(null),
                        contentRef = (0, react.useRef)(null),
                        [open = !1, setOpen] = (0,
                        react_use_controllable_state_dist.T)({
                            prop: openProp,
                            defaultProp: defaultOpen,
                            onChange: onOpenChange,
                        })
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$var$DialogProvider,
                        {
                            scope: __scopeDialog,
                            triggerRef,
                            contentRef,
                            contentId: (0, react_id_dist.M)(),
                            titleId: (0, react_id_dist.M)(),
                            descriptionId: (0, react_id_dist.M)(),
                            open,
                            onOpenChange: setOpen,
                            onOpenToggle: (0, react.useCallback)(
                                () => setOpen((prevOpen) => !prevOpen),
                                [setOpen],
                            ),
                            modal,
                        },
                        children,
                    )
                },
                $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeDialog, ...triggerProps } = props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogTrigger',
                            __scopeDialog,
                        ),
                        composedTriggerRef = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            context.triggerRef,
                        )
                    return (0, react.createElement)(
                        react_primitive_dist.WV.button,
                        (0, esm_extends.Z)(
                            {
                                type: 'button',
                                'aria-haspopup': 'dialog',
                                'aria-expanded': context.open,
                                'aria-controls': context.contentId,
                                'data-state': $5d3850c4d0b4e6c7$var$getState(
                                    context.open,
                                ),
                            },
                            triggerProps,
                            {
                                ref: composedTriggerRef,
                                onClick: (0, primitive_dist.M)(
                                    props.onClick,
                                    context.onOpenToggle,
                                ),
                            },
                        ),
                    )
                }),
                [
                    $5d3850c4d0b4e6c7$var$PortalProvider,
                    $5d3850c4d0b4e6c7$var$usePortalContext,
                ] = $5d3850c4d0b4e6c7$var$createDialogContext('DialogPortal', {
                    forceMount: void 0,
                }),
                $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
                    const { __scopeDialog, forceMount, children, container } =
                            props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogPortal',
                            __scopeDialog,
                        )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$var$PortalProvider,
                        { scope: __scopeDialog, forceMount },
                        react.Children.map(children, (child) =>
                            (0, react.createElement)(
                                react_presence_dist.z,
                                { present: forceMount || context.open },
                                (0, react.createElement)(
                                    react_portal_dist.h,
                                    { asChild: !0, container },
                                    child,
                                ),
                            ),
                        ),
                    )
                },
                $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const portalContext =
                            $5d3850c4d0b4e6c7$var$usePortalContext(
                                'DialogOverlay',
                                props.__scopeDialog,
                            ),
                        {
                            forceMount = portalContext.forceMount,
                            ...overlayProps
                        } = props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogOverlay',
                            props.__scopeDialog,
                        )
                    return context.modal
                        ? (0, react.createElement)(
                              react_presence_dist.z,
                              { present: forceMount || context.open },
                              (0, react.createElement)(
                                  $5d3850c4d0b4e6c7$var$DialogOverlayImpl,
                                  (0, esm_extends.Z)({}, overlayProps, {
                                      ref: forwardedRef,
                                  }),
                              ),
                          )
                        : null
                }),
                $5d3850c4d0b4e6c7$var$DialogOverlayImpl = (0, react.forwardRef)(
                    (props, forwardedRef) => {
                        const { __scopeDialog, ...overlayProps } = props,
                            context = $5d3850c4d0b4e6c7$var$useDialogContext(
                                'DialogOverlay',
                                __scopeDialog,
                            )
                        return (0, react.createElement)(
                            Combination.Z,
                            {
                                as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
                                allowPinchZoom: !0,
                                shards: [context.contentRef],
                            },
                            (0, react.createElement)(
                                react_primitive_dist.WV.div,
                                (0, esm_extends.Z)(
                                    {
                                        'data-state':
                                            $5d3850c4d0b4e6c7$var$getState(
                                                context.open,
                                            ),
                                    },
                                    overlayProps,
                                    {
                                        ref: forwardedRef,
                                        style: {
                                            pointerEvents: 'auto',
                                            ...overlayProps.style,
                                        },
                                    },
                                ),
                            ),
                        )
                    },
                ),
                $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const portalContext =
                            $5d3850c4d0b4e6c7$var$usePortalContext(
                                'DialogContent',
                                props.__scopeDialog,
                            ),
                        {
                            forceMount = portalContext.forceMount,
                            ...contentProps
                        } = props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogContent',
                            props.__scopeDialog,
                        )
                    return (0, react.createElement)(
                        react_presence_dist.z,
                        { present: forceMount || context.open },
                        context.modal
                            ? (0, react.createElement)(
                                  $5d3850c4d0b4e6c7$var$DialogContentModal,
                                  (0, esm_extends.Z)({}, contentProps, {
                                      ref: forwardedRef,
                                  }),
                              )
                            : (0, react.createElement)(
                                  $5d3850c4d0b4e6c7$var$DialogContentNonModal,
                                  (0, esm_extends.Z)({}, contentProps, {
                                      ref: forwardedRef,
                                  }),
                              ),
                    )
                }),
                $5d3850c4d0b4e6c7$var$DialogContentModal = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogContent',
                            props.__scopeDialog,
                        ),
                        contentRef = (0, react.useRef)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            context.contentRef,
                            contentRef,
                        )
                    return (
                        (0, react.useEffect)(() => {
                            const content = contentRef.current
                            if (content) return (0, es2015.Ry)(content)
                        }, []),
                        (0, react.createElement)(
                            $5d3850c4d0b4e6c7$var$DialogContentImpl,
                            (0, esm_extends.Z)({}, props, {
                                ref: composedRefs,
                                trapFocus: context.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: (0, primitive_dist.M)(
                                    props.onCloseAutoFocus,
                                    (event) => {
                                        var _context$triggerRef$c
                                        event.preventDefault(),
                                            null ===
                                                (_context$triggerRef$c =
                                                    context.triggerRef
                                                        .current) ||
                                                void 0 ===
                                                    _context$triggerRef$c ||
                                                _context$triggerRef$c.focus()
                                    },
                                ),
                                onPointerDownOutside: (0, primitive_dist.M)(
                                    props.onPointerDownOutside,
                                    (event) => {
                                        const originalEvent =
                                                event.detail.originalEvent,
                                            ctrlLeftClick =
                                                0 === originalEvent.button &&
                                                !0 === originalEvent.ctrlKey
                                        ;(2 === originalEvent.button ||
                                            ctrlLeftClick) &&
                                            event.preventDefault()
                                    },
                                ),
                                onFocusOutside: (0, primitive_dist.M)(
                                    props.onFocusOutside,
                                    (event) => event.preventDefault(),
                                ),
                            }),
                        )
                    )
                }),
                $5d3850c4d0b4e6c7$var$DialogContentNonModal = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogContent',
                            props.__scopeDialog,
                        ),
                        hasInteractedOutsideRef = (0, react.useRef)(!1),
                        hasPointerDownOutsideRef = (0, react.useRef)(!1)
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$var$DialogContentImpl,
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
                $5d3850c4d0b4e6c7$var$DialogContentImpl = (0, react.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeDialog,
                                trapFocus,
                                onOpenAutoFocus,
                                onCloseAutoFocus,
                                ...contentProps
                            } = props,
                            context = $5d3850c4d0b4e6c7$var$useDialogContext(
                                'DialogContent',
                                __scopeDialog,
                            ),
                            contentRef = (0, react.useRef)(null),
                            composedRefs = (0, react_compose_refs_dist.e)(
                                forwardedRef,
                                contentRef,
                            )
                        return (
                            (0, react_focus_guards_dist.EW)(),
                            (0, react.createElement)(
                                react.Fragment,
                                null,
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
                                        (0, esm_extends.Z)(
                                            {
                                                role: 'dialog',
                                                id: context.contentId,
                                                'aria-describedby':
                                                    context.descriptionId,
                                                'aria-labelledby':
                                                    context.titleId,
                                                'data-state':
                                                    $5d3850c4d0b4e6c7$var$getState(
                                                        context.open,
                                                    ),
                                            },
                                            contentProps,
                                            {
                                                ref: composedRefs,
                                                onDismiss: () =>
                                                    context.onOpenChange(!1),
                                            },
                                        ),
                                    ),
                                ),
                                !1,
                            )
                        )
                    },
                ),
                $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeDialog, ...titleProps } = props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogTitle',
                            __scopeDialog,
                        )
                    return (0, react.createElement)(
                        react_primitive_dist.WV.h2,
                        (0, esm_extends.Z)(
                            { id: context.titleId },
                            titleProps,
                            { ref: forwardedRef },
                        ),
                    )
                }),
                $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeDialog, ...descriptionProps } = props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogDescription',
                            __scopeDialog,
                        )
                    return (0, react.createElement)(
                        react_primitive_dist.WV.p,
                        (0, esm_extends.Z)(
                            { id: context.descriptionId },
                            descriptionProps,
                            { ref: forwardedRef },
                        ),
                    )
                }),
                $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeDialog, ...closeProps } = props,
                        context = $5d3850c4d0b4e6c7$var$useDialogContext(
                            'DialogClose',
                            __scopeDialog,
                        )
                    return (0, react.createElement)(
                        react_primitive_dist.WV.button,
                        (0, esm_extends.Z)({ type: 'button' }, closeProps, {
                            ref: forwardedRef,
                            onClick: (0, primitive_dist.M)(props.onClick, () =>
                                context.onOpenChange(!1),
                            ),
                        }),
                    )
                })
            function $5d3850c4d0b4e6c7$var$getState(open) {
                return open ? 'open' : 'closed'
            }
            const [
                    $5d3850c4d0b4e6c7$export$69b62a49393917d6,
                    $5d3850c4d0b4e6c7$var$useWarningContext,
                ] = (0, dist.k)('DialogTitleWarning', {
                    contentName: 'DialogContent',
                    titleName: 'DialogTitle',
                    docsSlug: 'dialog',
                }),
                $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 =
                    $5d3850c4d0b4e6c7$export$3ddf2d174ce01153,
                $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 =
                    $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88,
                $5d3850c4d0b4e6c7$export$602eac185826482c =
                    $5d3850c4d0b4e6c7$export$dad7c95542bacce0,
                $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff =
                    $5d3850c4d0b4e6c7$export$bd1d06c79be19e17,
                $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 =
                    $5d3850c4d0b4e6c7$export$b6d9565de1e068cf,
                $5d3850c4d0b4e6c7$export$f99233281efd08a0 =
                    $5d3850c4d0b4e6c7$export$16f7638e4a34b909,
                $5d3850c4d0b4e6c7$export$393edc798c47379d =
                    $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5,
                $5d3850c4d0b4e6c7$export$f39c2d165cd861fe =
                    $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac
            __webpack_require__('./node_modules/console-browserify/index.js')
            const [
                    $905f4ae918aab1aa$var$createAlertDialogContext,
                    $905f4ae918aab1aa$export$b8891880751c2c5b,
                ] = (0, dist.b)('AlertDialog', [
                    $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
                ]),
                $905f4ae918aab1aa$var$useDialogScope =
                    $5d3850c4d0b4e6c7$export$cc702773b8ea3e41(),
                $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
                    const { __scopeAlertDialog, ...alertDialogProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
                        (0, esm_extends.Z)({}, dialogScope, alertDialogProps, {
                            modal: !0,
                        }),
                    )
                },
                $905f4ae918aab1aa$export$6edd7a623ef0f40b = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, ...triggerProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
                        (0, esm_extends.Z)({}, dialogScope, triggerProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
                    const { __scopeAlertDialog, ...portalProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$602eac185826482c,
                        (0, esm_extends.Z)({}, dialogScope, portalProps),
                    )
                },
                $905f4ae918aab1aa$export$a707a4895ce23256 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, ...overlayProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
                        (0, esm_extends.Z)({}, dialogScope, overlayProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                [
                    $905f4ae918aab1aa$var$AlertDialogContentProvider,
                    $905f4ae918aab1aa$var$useAlertDialogContentContext,
                ] =
                    $905f4ae918aab1aa$var$createAlertDialogContext(
                        'AlertDialogContent',
                    ),
                $905f4ae918aab1aa$export$94e6af45f0af4efd = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, children, ...contentProps } =
                            props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            ),
                        contentRef = (0, react.useRef)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            contentRef,
                        ),
                        cancelRef = (0, react.useRef)(null)
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$69b62a49393917d6,
                        {
                            contentName: 'AlertDialogContent',
                            titleName: $905f4ae918aab1aa$var$TITLE_NAME,
                            docsSlug: 'alert-dialog',
                        },
                        (0, react.createElement)(
                            $905f4ae918aab1aa$var$AlertDialogContentProvider,
                            { scope: __scopeAlertDialog, cancelRef },
                            (0, react.createElement)(
                                $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
                                (0, esm_extends.Z)(
                                    { role: 'alertdialog' },
                                    dialogScope,
                                    contentProps,
                                    {
                                        ref: composedRefs,
                                        onOpenAutoFocus: (0, primitive_dist.M)(
                                            contentProps.onOpenAutoFocus,
                                            (event) => {
                                                var _cancelRef$current
                                                event.preventDefault(),
                                                    null ===
                                                        (_cancelRef$current =
                                                            cancelRef.current) ||
                                                        void 0 ===
                                                            _cancelRef$current ||
                                                        _cancelRef$current.focus(
                                                            {
                                                                preventScroll:
                                                                    !0,
                                                            },
                                                        )
                                            },
                                        ),
                                        onPointerDownOutside: (event) =>
                                            event.preventDefault(),
                                        onInteractOutside: (event) =>
                                            event.preventDefault(),
                                    },
                                ),
                                (0, react.createElement)(
                                    $5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
                                    null,
                                    children,
                                ),
                                !1,
                            ),
                        ),
                    )
                }),
                $905f4ae918aab1aa$var$TITLE_NAME = 'AlertDialogTitle',
                $905f4ae918aab1aa$export$225e0da62d314b7 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, ...titleProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$f99233281efd08a0,
                        (0, esm_extends.Z)({}, dialogScope, titleProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                $905f4ae918aab1aa$export$a23b55cde55ad9a5 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, ...descriptionProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$393edc798c47379d,
                        (0, esm_extends.Z)({}, dialogScope, descriptionProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                $905f4ae918aab1aa$export$b454f818c58ee85d = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, ...actionProps } = props,
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
                        (0, esm_extends.Z)({}, dialogScope, actionProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                $905f4ae918aab1aa$export$2f67a923571aaea0 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeAlertDialog, ...cancelProps } = props,
                        { cancelRef } =
                            $905f4ae918aab1aa$var$useAlertDialogContentContext(
                                'AlertDialogCancel',
                                __scopeAlertDialog,
                            ),
                        dialogScope =
                            $905f4ae918aab1aa$var$useDialogScope(
                                __scopeAlertDialog,
                            ),
                        ref = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            cancelRef,
                        )
                    return (0, react.createElement)(
                        $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
                        (0, esm_extends.Z)({}, dialogScope, cancelProps, {
                            ref,
                        }),
                    )
                }),
                $905f4ae918aab1aa$export$be92b6f5f03c0fe9 =
                    $905f4ae918aab1aa$export$de466dd8317b0b75,
                $905f4ae918aab1aa$export$41fb9f06171c75f4 =
                    $905f4ae918aab1aa$export$6edd7a623ef0f40b,
                $905f4ae918aab1aa$export$602eac185826482c =
                    $905f4ae918aab1aa$export$660f2bfdb986706c,
                $905f4ae918aab1aa$export$c6fdb837b070b4ff =
                    $905f4ae918aab1aa$export$a707a4895ce23256,
                $905f4ae918aab1aa$export$7c6e2c02157bb7d2 =
                    $905f4ae918aab1aa$export$94e6af45f0af4efd,
                $905f4ae918aab1aa$export$e19cd5f9376f8cee =
                    $905f4ae918aab1aa$export$b454f818c58ee85d,
                $905f4ae918aab1aa$export$848c9b7ead0df967 =
                    $905f4ae918aab1aa$export$2f67a923571aaea0,
                $905f4ae918aab1aa$export$f99233281efd08a0 =
                    $905f4ae918aab1aa$export$225e0da62d314b7,
                $905f4ae918aab1aa$export$393edc798c47379d =
                    $905f4ae918aab1aa$export$a23b55cde55ad9a5
        },
    },
])
