/*! For license information please see 3278.c086c3c9.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [3278],
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
        './node_modules/@radix-ui/react-menu/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                ee: () => $6cc32821e9371a1c$export$b688253958b8dfe7,
                Eh: () => $6cc32821e9371a1c$export$21b07c8f274aebd5,
                oC: () => $6cc32821e9371a1c$export$16ce288f89fa631c,
                VY: () => $6cc32821e9371a1c$export$7c6e2c02157bb7d2,
                ZA: () => $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4,
                ck: () => $6cc32821e9371a1c$export$6d08773d2e66f8f2,
                wU: () => $6cc32821e9371a1c$export$c3468e2714d175fa,
                __: () => $6cc32821e9371a1c$export$b04be29aa201d4f5,
                h_: () => $6cc32821e9371a1c$export$602eac185826482c,
                Ee: () => $6cc32821e9371a1c$export$a98f0dcb43a68a25,
                Rk: () => $6cc32821e9371a1c$export$371ab307eab489c0,
                fC: () => $6cc32821e9371a1c$export$be92b6f5f03c0fe9,
                Z0: () => $6cc32821e9371a1c$export$1ff3c3f08ae963c0,
                Tr: () => $6cc32821e9371a1c$export$d7a01e11500dfb6f,
                tu: () => $6cc32821e9371a1c$export$6d4de93b380beddf,
                fF: () => $6cc32821e9371a1c$export$2ea8a7a591ac5eac,
                Wf: () => $6cc32821e9371a1c$export$4027731b685e72eb,
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
                react_collection_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-collection/dist/index.mjs',
                ),
                react_compose_refs_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                ),
                react_context_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-context/dist/index.mjs',
                ),
                react_direction_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-direction/dist/index.mjs',
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
                ),
                react_roving_focus_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-roving-focus/dist/index.mjs',
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
            var react_use_callback_ref_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs',
                ),
                es2015 = __webpack_require__(
                    './node_modules/aria-hidden/dist/es2015/index.js',
                ),
                Combination = __webpack_require__(
                    './node_modules/react-remove-scroll/dist/es2015/Combination.js',
                )
            const $6cc32821e9371a1c$var$SELECTION_KEYS = ['Enter', ' '],
                $6cc32821e9371a1c$var$LAST_KEYS = [
                    'ArrowUp',
                    'PageDown',
                    'End',
                ],
                $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
                    'ArrowDown',
                    'PageUp',
                    'Home',
                    ...$6cc32821e9371a1c$var$LAST_KEYS,
                ],
                $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
                    ltr: [
                        ...$6cc32821e9371a1c$var$SELECTION_KEYS,
                        'ArrowRight',
                    ],
                    rtl: [...$6cc32821e9371a1c$var$SELECTION_KEYS, 'ArrowLeft'],
                },
                $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
                    ltr: ['ArrowLeft'],
                    rtl: ['ArrowRight'],
                },
                [
                    $6cc32821e9371a1c$var$Collection,
                    $6cc32821e9371a1c$var$useCollection,
                    $6cc32821e9371a1c$var$createCollectionScope,
                ] = (0, react_collection_dist.B)('Menu'),
                [
                    $6cc32821e9371a1c$var$createMenuContext,
                    $6cc32821e9371a1c$export$4027731b685e72eb,
                ] = (0, react_context_dist.b)('Menu', [
                    $6cc32821e9371a1c$var$createCollectionScope,
                    react_popper_dist.D7,
                    react_roving_focus_dist.Pc,
                ]),
                $6cc32821e9371a1c$var$usePopperScope = (0,
                react_popper_dist.D7)(),
                $6cc32821e9371a1c$var$useRovingFocusGroupScope = (0,
                react_roving_focus_dist.Pc)(),
                [
                    $6cc32821e9371a1c$var$MenuProvider,
                    $6cc32821e9371a1c$var$useMenuContext,
                ] = $6cc32821e9371a1c$var$createMenuContext('Menu'),
                [
                    $6cc32821e9371a1c$var$MenuRootProvider,
                    $6cc32821e9371a1c$var$useMenuRootContext,
                ] = $6cc32821e9371a1c$var$createMenuContext('Menu'),
                $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
                    const {
                            __scopeMenu,
                            open = !1,
                            children,
                            dir,
                            onOpenChange,
                            modal = !0,
                        } = props,
                        popperScope =
                            $6cc32821e9371a1c$var$usePopperScope(__scopeMenu),
                        [content, setContent] = (0, react.useState)(null),
                        isUsingKeyboardRef = (0, react.useRef)(!1),
                        handleOpenChange = (0, react_use_callback_ref_dist.W)(
                            onOpenChange,
                        ),
                        direction = (0, react_direction_dist.gm)(dir)
                    return (
                        (0, react.useEffect)(() => {
                            const handleKeyDown = () => {
                                    ;(isUsingKeyboardRef.current = !0),
                                        document.addEventListener(
                                            'pointerdown',
                                            handlePointer,
                                            { capture: !0, once: !0 },
                                        ),
                                        document.addEventListener(
                                            'pointermove',
                                            handlePointer,
                                            { capture: !0, once: !0 },
                                        )
                                },
                                handlePointer = () =>
                                    (isUsingKeyboardRef.current = !1)
                            return (
                                document.addEventListener(
                                    'keydown',
                                    handleKeyDown,
                                    { capture: !0 },
                                ),
                                () => {
                                    document.removeEventListener(
                                        'keydown',
                                        handleKeyDown,
                                        { capture: !0 },
                                    ),
                                        document.removeEventListener(
                                            'pointerdown',
                                            handlePointer,
                                            { capture: !0 },
                                        ),
                                        document.removeEventListener(
                                            'pointermove',
                                            handlePointer,
                                            { capture: !0 },
                                        )
                                }
                            )
                        }, []),
                        (0, react.createElement)(
                            react_popper_dist.fC,
                            popperScope,
                            (0, react.createElement)(
                                $6cc32821e9371a1c$var$MenuProvider,
                                {
                                    scope: __scopeMenu,
                                    open,
                                    onOpenChange: handleOpenChange,
                                    content,
                                    onContentChange: setContent,
                                },
                                (0, react.createElement)(
                                    $6cc32821e9371a1c$var$MenuRootProvider,
                                    {
                                        scope: __scopeMenu,
                                        onClose: (0, react.useCallback)(
                                            () => handleOpenChange(!1),
                                            [handleOpenChange],
                                        ),
                                        isUsingKeyboardRef,
                                        dir: direction,
                                        modal,
                                    },
                                    children,
                                ),
                            ),
                        )
                    )
                },
                $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeMenu, ...anchorProps } = props,
                        popperScope =
                            $6cc32821e9371a1c$var$usePopperScope(__scopeMenu)
                    return (0, react.createElement)(
                        react_popper_dist.ee,
                        (0, esm_extends.Z)({}, popperScope, anchorProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                [
                    $6cc32821e9371a1c$var$PortalProvider,
                    $6cc32821e9371a1c$var$usePortalContext,
                ] = $6cc32821e9371a1c$var$createMenuContext('MenuPortal', {
                    forceMount: void 0,
                }),
                $6cc32821e9371a1c$export$793392f970497feb = (props) => {
                    const { __scopeMenu, forceMount, children, container } =
                            props,
                        context = $6cc32821e9371a1c$var$useMenuContext(
                            'MenuPortal',
                            __scopeMenu,
                        )
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$PortalProvider,
                        { scope: __scopeMenu, forceMount },
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
                [
                    $6cc32821e9371a1c$var$MenuContentProvider,
                    $6cc32821e9371a1c$var$useMenuContentContext,
                ] = $6cc32821e9371a1c$var$createMenuContext('MenuContent'),
                $6cc32821e9371a1c$export$479f0f2f71193efe = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const portalContext =
                            $6cc32821e9371a1c$var$usePortalContext(
                                'MenuContent',
                                props.__scopeMenu,
                            ),
                        {
                            forceMount = portalContext.forceMount,
                            ...contentProps
                        } = props,
                        context = $6cc32821e9371a1c$var$useMenuContext(
                            'MenuContent',
                            props.__scopeMenu,
                        ),
                        rootContext = $6cc32821e9371a1c$var$useMenuRootContext(
                            'MenuContent',
                            props.__scopeMenu,
                        )
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$Collection.Provider,
                        { scope: props.__scopeMenu },
                        (0, react.createElement)(
                            react_presence_dist.z,
                            { present: forceMount || context.open },
                            (0, react.createElement)(
                                $6cc32821e9371a1c$var$Collection.Slot,
                                { scope: props.__scopeMenu },
                                rootContext.modal
                                    ? (0, react.createElement)(
                                          $6cc32821e9371a1c$var$MenuRootContentModal,
                                          (0, esm_extends.Z)({}, contentProps, {
                                              ref: forwardedRef,
                                          }),
                                      )
                                    : (0, react.createElement)(
                                          $6cc32821e9371a1c$var$MenuRootContentNonModal,
                                          (0, esm_extends.Z)({}, contentProps, {
                                              ref: forwardedRef,
                                          }),
                                      ),
                            ),
                        ),
                    )
                }),
                $6cc32821e9371a1c$var$MenuRootContentModal = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $6cc32821e9371a1c$var$useMenuContext(
                            'MenuContent',
                            props.__scopeMenu,
                        ),
                        ref = (0, react.useRef)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            ref,
                        )
                    return (
                        (0, react.useEffect)(() => {
                            const content = ref.current
                            if (content) return (0, es2015.Ry)(content)
                        }, []),
                        (0, react.createElement)(
                            $6cc32821e9371a1c$var$MenuContentImpl,
                            (0, esm_extends.Z)({}, props, {
                                ref: composedRefs,
                                trapFocus: context.open,
                                disableOutsidePointerEvents: context.open,
                                disableOutsideScroll: !0,
                                onFocusOutside: (0, dist.M)(
                                    props.onFocusOutside,
                                    (event) => event.preventDefault(),
                                    { checkForDefaultPrevented: !1 },
                                ),
                                onDismiss: () => context.onOpenChange(!1),
                            }),
                        )
                    )
                }),
                $6cc32821e9371a1c$var$MenuRootContentNonModal = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $6cc32821e9371a1c$var$useMenuContext(
                        'MenuContent',
                        props.__scopeMenu,
                    )
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$MenuContentImpl,
                        (0, esm_extends.Z)({}, props, {
                            ref: forwardedRef,
                            trapFocus: !1,
                            disableOutsidePointerEvents: !1,
                            disableOutsideScroll: !1,
                            onDismiss: () => context.onOpenChange(!1),
                        }),
                    )
                }),
                $6cc32821e9371a1c$var$MenuContentImpl = (0, react.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeMenu,
                                loop = !1,
                                trapFocus,
                                onOpenAutoFocus,
                                onCloseAutoFocus,
                                disableOutsidePointerEvents,
                                onEntryFocus,
                                onEscapeKeyDown,
                                onPointerDownOutside,
                                onFocusOutside,
                                onInteractOutside,
                                onDismiss,
                                disableOutsideScroll,
                                ...contentProps
                            } = props,
                            context = $6cc32821e9371a1c$var$useMenuContext(
                                'MenuContent',
                                __scopeMenu,
                            ),
                            rootContext =
                                $6cc32821e9371a1c$var$useMenuRootContext(
                                    'MenuContent',
                                    __scopeMenu,
                                ),
                            popperScope =
                                $6cc32821e9371a1c$var$usePopperScope(
                                    __scopeMenu,
                                ),
                            rovingFocusGroupScope =
                                $6cc32821e9371a1c$var$useRovingFocusGroupScope(
                                    __scopeMenu,
                                ),
                            getItems =
                                $6cc32821e9371a1c$var$useCollection(
                                    __scopeMenu,
                                ),
                            [currentItemId, setCurrentItemId] = (0,
                            react.useState)(null),
                            contentRef = (0, react.useRef)(null),
                            composedRefs = (0, react_compose_refs_dist.e)(
                                forwardedRef,
                                contentRef,
                                context.onContentChange,
                            ),
                            timerRef = (0, react.useRef)(0),
                            searchRef = (0, react.useRef)(''),
                            pointerGraceTimerRef = (0, react.useRef)(0),
                            pointerGraceIntentRef = (0, react.useRef)(null),
                            pointerDirRef = (0, react.useRef)('right'),
                            lastPointerXRef = (0, react.useRef)(0),
                            ScrollLockWrapper = disableOutsideScroll
                                ? Combination.Z
                                : react.Fragment,
                            scrollLockWrapperProps = disableOutsideScroll
                                ? {
                                      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
                                      allowPinchZoom: !0,
                                  }
                                : void 0,
                            handleTypeaheadSearch = (key) => {
                                var _items$find, _items$find2
                                const search = searchRef.current + key,
                                    items = getItems().filter(
                                        (item) => !item.disabled,
                                    ),
                                    currentItem = document.activeElement,
                                    currentMatch =
                                        null ===
                                            (_items$find = items.find(
                                                (item) =>
                                                    item.ref.current ===
                                                    currentItem,
                                            )) || void 0 === _items$find
                                            ? void 0
                                            : _items$find.textValue,
                                    nextMatch =
                                        (function $6cc32821e9371a1c$var$getNextMatch(
                                            values,
                                            search,
                                            currentMatch,
                                        ) {
                                            const isRepeated =
                                                    search.length > 1 &&
                                                    Array.from(search).every(
                                                        (char) =>
                                                            char === search[0],
                                                    ),
                                                normalizedSearch = isRepeated
                                                    ? search[0]
                                                    : search,
                                                currentMatchIndex = currentMatch
                                                    ? values.indexOf(
                                                          currentMatch,
                                                      )
                                                    : -1
                                            let wrappedValues =
                                                (function $6cc32821e9371a1c$var$wrapArray(
                                                    array,
                                                    startIndex,
                                                ) {
                                                    return array.map(
                                                        (_, index) =>
                                                            array[
                                                                (startIndex +
                                                                    index) %
                                                                    array.length
                                                            ],
                                                    )
                                                })(
                                                    values,
                                                    Math.max(
                                                        currentMatchIndex,
                                                        0,
                                                    ),
                                                )
                                            1 === normalizedSearch.length &&
                                                (wrappedValues =
                                                    wrappedValues.filter(
                                                        (v) =>
                                                            v !== currentMatch,
                                                    ))
                                            const nextMatch =
                                                wrappedValues.find((value) =>
                                                    value
                                                        .toLowerCase()
                                                        .startsWith(
                                                            normalizedSearch.toLowerCase(),
                                                        ),
                                                )
                                            return nextMatch !== currentMatch
                                                ? nextMatch
                                                : void 0
                                        })(
                                            items.map((item) => item.textValue),
                                            search,
                                            currentMatch,
                                        ),
                                    newItem =
                                        null ===
                                            (_items$find2 = items.find(
                                                (item) =>
                                                    item.textValue ===
                                                    nextMatch,
                                            )) || void 0 === _items$find2
                                            ? void 0
                                            : _items$find2.ref.current
                                !(function updateSearch(value) {
                                    ;(searchRef.current = value),
                                        window.clearTimeout(timerRef.current),
                                        '' !== value &&
                                            (timerRef.current =
                                                window.setTimeout(
                                                    () => updateSearch(''),
                                                    1e3,
                                                ))
                                })(search),
                                    newItem && setTimeout(() => newItem.focus())
                            }
                        ;(0, react.useEffect)(
                            () => () => window.clearTimeout(timerRef.current),
                            [],
                        ),
                            (0, react_focus_guards_dist.EW)()
                        const isPointerMovingToSubmenu = (0, react.useCallback)(
                            (event) => {
                                var _pointerGraceIntentRe,
                                    _pointerGraceIntentRe2
                                return (
                                    pointerDirRef.current ===
                                        (null ===
                                            (_pointerGraceIntentRe =
                                                pointerGraceIntentRef.current) ||
                                        void 0 === _pointerGraceIntentRe
                                            ? void 0
                                            : _pointerGraceIntentRe.side) &&
                                    (function $6cc32821e9371a1c$var$isPointerInGraceArea(
                                        event,
                                        area,
                                    ) {
                                        if (!area) return !1
                                        const cursorPos = {
                                            x: event.clientX,
                                            y: event.clientY,
                                        }
                                        return (function $6cc32821e9371a1c$var$isPointInPolygon(
                                            point,
                                            polygon,
                                        ) {
                                            const { x, y } = point
                                            let inside = !1
                                            for (
                                                let i = 0,
                                                    j = polygon.length - 1;
                                                i < polygon.length;
                                                j = i++
                                            ) {
                                                const xi = polygon[i].x,
                                                    yi = polygon[i].y,
                                                    xj = polygon[j].x,
                                                    yj = polygon[j].y
                                                yi > y != yj > y &&
                                                    x <
                                                        ((xj - xi) * (y - yi)) /
                                                            (yj - yi) +
                                                            xi &&
                                                    (inside = !inside)
                                            }
                                            return inside
                                        })(cursorPos, area)
                                    })(
                                        event,
                                        null ===
                                            (_pointerGraceIntentRe2 =
                                                pointerGraceIntentRef.current) ||
                                            void 0 === _pointerGraceIntentRe2
                                            ? void 0
                                            : _pointerGraceIntentRe2.area,
                                    )
                                )
                            },
                            [],
                        )
                        return (0, react.createElement)(
                            $6cc32821e9371a1c$var$MenuContentProvider,
                            {
                                scope: __scopeMenu,
                                searchRef,
                                onItemEnter: (0, react.useCallback)(
                                    (event) => {
                                        isPointerMovingToSubmenu(event) &&
                                            event.preventDefault()
                                    },
                                    [isPointerMovingToSubmenu],
                                ),
                                onItemLeave: (0, react.useCallback)(
                                    (event) => {
                                        var _contentRef$current
                                        isPointerMovingToSubmenu(event) ||
                                            (null ===
                                                (_contentRef$current =
                                                    contentRef.current) ||
                                                void 0 ===
                                                    _contentRef$current ||
                                                _contentRef$current.focus(),
                                            setCurrentItemId(null))
                                    },
                                    [isPointerMovingToSubmenu],
                                ),
                                onTriggerLeave: (0, react.useCallback)(
                                    (event) => {
                                        isPointerMovingToSubmenu(event) &&
                                            event.preventDefault()
                                    },
                                    [isPointerMovingToSubmenu],
                                ),
                                pointerGraceTimerRef,
                                onPointerGraceIntentChange: (0,
                                react.useCallback)((intent) => {
                                    pointerGraceIntentRef.current = intent
                                }, []),
                            },
                            (0, react.createElement)(
                                ScrollLockWrapper,
                                scrollLockWrapperProps,
                                (0, react.createElement)(
                                    react_focus_scope_dist.M,
                                    {
                                        asChild: !0,
                                        trapped: trapFocus,
                                        onMountAutoFocus: (0, dist.M)(
                                            onOpenAutoFocus,
                                            (event) => {
                                                var _contentRef$current2
                                                event.preventDefault(),
                                                    null ===
                                                        (_contentRef$current2 =
                                                            contentRef.current) ||
                                                        void 0 ===
                                                            _contentRef$current2 ||
                                                        _contentRef$current2.focus()
                                            },
                                        ),
                                        onUnmountAutoFocus: onCloseAutoFocus,
                                    },
                                    (0, react.createElement)(
                                        react_dismissable_layer_dist.XB,
                                        {
                                            asChild: !0,
                                            disableOutsidePointerEvents,
                                            onEscapeKeyDown,
                                            onPointerDownOutside,
                                            onFocusOutside,
                                            onInteractOutside,
                                            onDismiss,
                                        },
                                        (0, react.createElement)(
                                            react_roving_focus_dist.fC,
                                            (0, esm_extends.Z)(
                                                { asChild: !0 },
                                                rovingFocusGroupScope,
                                                {
                                                    dir: rootContext.dir,
                                                    orientation: 'vertical',
                                                    loop,
                                                    currentTabStopId:
                                                        currentItemId,
                                                    onCurrentTabStopIdChange:
                                                        setCurrentItemId,
                                                    onEntryFocus: (0, dist.M)(
                                                        onEntryFocus,
                                                        (event) => {
                                                            rootContext
                                                                .isUsingKeyboardRef
                                                                .current ||
                                                                event.preventDefault()
                                                        },
                                                    ),
                                                },
                                            ),
                                            (0, react.createElement)(
                                                react_popper_dist.VY,
                                                (0, esm_extends.Z)(
                                                    {
                                                        role: 'menu',
                                                        'aria-orientation':
                                                            'vertical',
                                                        'data-state':
                                                            $6cc32821e9371a1c$var$getOpenState(
                                                                context.open,
                                                            ),
                                                        'data-radix-menu-content':
                                                            '',
                                                        dir: rootContext.dir,
                                                    },
                                                    popperScope,
                                                    contentProps,
                                                    {
                                                        ref: composedRefs,
                                                        style: {
                                                            outline: 'none',
                                                            ...contentProps.style,
                                                        },
                                                        onKeyDown: (0, dist.M)(
                                                            contentProps.onKeyDown,
                                                            (event) => {
                                                                const isKeyDownInside =
                                                                        event.target.closest(
                                                                            '[data-radix-menu-content]',
                                                                        ) ===
                                                                        event.currentTarget,
                                                                    isModifierKey =
                                                                        event.ctrlKey ||
                                                                        event.altKey ||
                                                                        event.metaKey,
                                                                    isCharacterKey =
                                                                        1 ===
                                                                        event
                                                                            .key
                                                                            .length
                                                                isKeyDownInside &&
                                                                    ('Tab' ===
                                                                        event.key &&
                                                                        event.preventDefault(),
                                                                    !isModifierKey &&
                                                                        isCharacterKey &&
                                                                        handleTypeaheadSearch(
                                                                            event.key,
                                                                        ))
                                                                const content =
                                                                    contentRef.current
                                                                if (
                                                                    event.target !==
                                                                    content
                                                                )
                                                                    return
                                                                if (
                                                                    !$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(
                                                                        event.key,
                                                                    )
                                                                )
                                                                    return
                                                                event.preventDefault()
                                                                const candidateNodes =
                                                                    getItems()
                                                                        .filter(
                                                                            (
                                                                                item,
                                                                            ) =>
                                                                                !item.disabled,
                                                                        )
                                                                        .map(
                                                                            (
                                                                                item,
                                                                            ) =>
                                                                                item
                                                                                    .ref
                                                                                    .current,
                                                                        )
                                                                $6cc32821e9371a1c$var$LAST_KEYS.includes(
                                                                    event.key,
                                                                ) &&
                                                                    candidateNodes.reverse(),
                                                                    (function $6cc32821e9371a1c$var$focusFirst(
                                                                        candidates,
                                                                    ) {
                                                                        const PREVIOUSLY_FOCUSED_ELEMENT =
                                                                            document.activeElement
                                                                        for (const candidate of candidates) {
                                                                            if (
                                                                                candidate ===
                                                                                PREVIOUSLY_FOCUSED_ELEMENT
                                                                            )
                                                                                return
                                                                            if (
                                                                                (candidate.focus(),
                                                                                document.activeElement !==
                                                                                    PREVIOUSLY_FOCUSED_ELEMENT)
                                                                            )
                                                                                return
                                                                        }
                                                                    })(
                                                                        candidateNodes,
                                                                    )
                                                            },
                                                        ),
                                                        onBlur: (0, dist.M)(
                                                            props.onBlur,
                                                            (event) => {
                                                                event.currentTarget.contains(
                                                                    event.target,
                                                                ) ||
                                                                    (window.clearTimeout(
                                                                        timerRef.current,
                                                                    ),
                                                                    (searchRef.current =
                                                                        ''))
                                                            },
                                                        ),
                                                        onPointerMove: (0,
                                                        dist.M)(
                                                            props.onPointerMove,
                                                            $6cc32821e9371a1c$var$whenMouse(
                                                                (event) => {
                                                                    const target =
                                                                            event.target,
                                                                        pointerXHasChanged =
                                                                            lastPointerXRef.current !==
                                                                            event.clientX
                                                                    if (
                                                                        event.currentTarget.contains(
                                                                            target,
                                                                        ) &&
                                                                        pointerXHasChanged
                                                                    ) {
                                                                        const newDir =
                                                                            event.clientX >
                                                                            lastPointerXRef.current
                                                                                ? 'right'
                                                                                : 'left'
                                                                        ;(pointerDirRef.current =
                                                                            newDir),
                                                                            (lastPointerXRef.current =
                                                                                event.clientX)
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    },
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        )
                    },
                ),
                $6cc32821e9371a1c$export$22a631d1f72787bb = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeMenu, ...groupProps } = props
                    return (0, react.createElement)(
                        react_primitive_dist.WV.div,
                        (0, esm_extends.Z)({ role: 'group' }, groupProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                $6cc32821e9371a1c$export$dd37bec0e8a99143 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeMenu, ...labelProps } = props
                    return (0, react.createElement)(
                        react_primitive_dist.WV.div,
                        (0, esm_extends.Z)({}, labelProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                $6cc32821e9371a1c$export$2ce376c2cc3355c8 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { disabled = !1, onSelect, ...itemProps } = props,
                        ref = (0, react.useRef)(null),
                        rootContext = $6cc32821e9371a1c$var$useMenuRootContext(
                            'MenuItem',
                            props.__scopeMenu,
                        ),
                        contentContext =
                            $6cc32821e9371a1c$var$useMenuContentContext(
                                'MenuItem',
                                props.__scopeMenu,
                            ),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            ref,
                        ),
                        isPointerDownRef = (0, react.useRef)(!1)
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$MenuItemImpl,
                        (0, esm_extends.Z)({}, itemProps, {
                            ref: composedRefs,
                            disabled,
                            onClick: (0, dist.M)(props.onClick, () => {
                                const menuItem = ref.current
                                if (!disabled && menuItem) {
                                    const itemSelectEvent = new CustomEvent(
                                        'menu.itemSelect',
                                        { bubbles: !0, cancelable: !0 },
                                    )
                                    menuItem.addEventListener(
                                        'menu.itemSelect',
                                        (event) =>
                                            null == onSelect
                                                ? void 0
                                                : onSelect(event),
                                        { once: !0 },
                                    ),
                                        (0, react_primitive_dist.jH)(
                                            menuItem,
                                            itemSelectEvent,
                                        ),
                                        itemSelectEvent.defaultPrevented
                                            ? (isPointerDownRef.current = !1)
                                            : rootContext.onClose()
                                }
                            }),
                            onPointerDown: (event) => {
                                var _props$onPointerDown
                                null ===
                                    (_props$onPointerDown =
                                        props.onPointerDown) ||
                                    void 0 === _props$onPointerDown ||
                                    _props$onPointerDown.call(props, event),
                                    (isPointerDownRef.current = !0)
                            },
                            onPointerUp: (0, dist.M)(
                                props.onPointerUp,
                                (event) => {
                                    var _event$currentTarget
                                    isPointerDownRef.current ||
                                        null ===
                                            (_event$currentTarget =
                                                event.currentTarget) ||
                                        void 0 === _event$currentTarget ||
                                        _event$currentTarget.click()
                                },
                            ),
                            onKeyDown: (0, dist.M)(props.onKeyDown, (event) => {
                                const isTypingAhead =
                                    '' !== contentContext.searchRef.current
                                disabled ||
                                    (isTypingAhead && ' ' === event.key) ||
                                    ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(
                                        event.key,
                                    ) &&
                                        (event.currentTarget.click(),
                                        event.preventDefault()))
                            }),
                        }),
                    )
                }),
                $6cc32821e9371a1c$var$MenuItemImpl = (0, react.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeMenu,
                                disabled = !1,
                                textValue,
                                ...itemProps
                            } = props,
                            contentContext =
                                $6cc32821e9371a1c$var$useMenuContentContext(
                                    'MenuItem',
                                    __scopeMenu,
                                ),
                            rovingFocusGroupScope =
                                $6cc32821e9371a1c$var$useRovingFocusGroupScope(
                                    __scopeMenu,
                                ),
                            ref = (0, react.useRef)(null),
                            composedRefs = (0, react_compose_refs_dist.e)(
                                forwardedRef,
                                ref,
                            ),
                            [isFocused, setIsFocused] = (0, react.useState)(!1),
                            [textContent, setTextContent] = (0, react.useState)(
                                '',
                            )
                        return (
                            (0, react.useEffect)(() => {
                                const menuItem = ref.current
                                var _menuItem$textContent
                                menuItem &&
                                    setTextContent(
                                        (null !==
                                            (_menuItem$textContent =
                                                menuItem.textContent) &&
                                        void 0 !== _menuItem$textContent
                                            ? _menuItem$textContent
                                            : ''
                                        ).trim(),
                                    )
                            }, [itemProps.children]),
                            (0, react.createElement)(
                                $6cc32821e9371a1c$var$Collection.ItemSlot,
                                {
                                    scope: __scopeMenu,
                                    disabled,
                                    textValue:
                                        null != textValue
                                            ? textValue
                                            : textContent,
                                },
                                (0, react.createElement)(
                                    react_roving_focus_dist.ck,
                                    (0, esm_extends.Z)(
                                        { asChild: !0 },
                                        rovingFocusGroupScope,
                                        { focusable: !disabled },
                                    ),
                                    (0, react.createElement)(
                                        react_primitive_dist.WV.div,
                                        (0, esm_extends.Z)(
                                            {
                                                role: 'menuitem',
                                                'data-highlighted': isFocused
                                                    ? ''
                                                    : void 0,
                                                'aria-disabled':
                                                    disabled || void 0,
                                                'data-disabled': disabled
                                                    ? ''
                                                    : void 0,
                                            },
                                            itemProps,
                                            {
                                                ref: composedRefs,
                                                onPointerMove: (0, dist.M)(
                                                    props.onPointerMove,
                                                    $6cc32821e9371a1c$var$whenMouse(
                                                        (event) => {
                                                            if (disabled)
                                                                contentContext.onItemLeave(
                                                                    event,
                                                                )
                                                            else if (
                                                                (contentContext.onItemEnter(
                                                                    event,
                                                                ),
                                                                !event.defaultPrevented)
                                                            ) {
                                                                event.currentTarget.focus()
                                                            }
                                                        },
                                                    ),
                                                ),
                                                onPointerLeave: (0, dist.M)(
                                                    props.onPointerLeave,
                                                    $6cc32821e9371a1c$var$whenMouse(
                                                        (event) =>
                                                            contentContext.onItemLeave(
                                                                event,
                                                            ),
                                                    ),
                                                ),
                                                onFocus: (0, dist.M)(
                                                    props.onFocus,
                                                    () => setIsFocused(!0),
                                                ),
                                                onBlur: (0, dist.M)(
                                                    props.onBlur,
                                                    () => setIsFocused(!1),
                                                ),
                                            },
                                        ),
                                    ),
                                ),
                            )
                        )
                    },
                ),
                $6cc32821e9371a1c$export$f6f243521332502d = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const {
                        checked = !1,
                        onCheckedChange,
                        ...checkboxItemProps
                    } = props
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$ItemIndicatorProvider,
                        { scope: props.__scopeMenu, checked },
                        (0, react.createElement)(
                            $6cc32821e9371a1c$export$2ce376c2cc3355c8,
                            (0, esm_extends.Z)(
                                {
                                    role: 'menuitemcheckbox',
                                    'aria-checked':
                                        $6cc32821e9371a1c$var$isIndeterminate(
                                            checked,
                                        )
                                            ? 'mixed'
                                            : checked,
                                },
                                checkboxItemProps,
                                {
                                    ref: forwardedRef,
                                    'data-state':
                                        $6cc32821e9371a1c$var$getCheckedState(
                                            checked,
                                        ),
                                    onSelect: (0, dist.M)(
                                        checkboxItemProps.onSelect,
                                        () =>
                                            null == onCheckedChange
                                                ? void 0
                                                : onCheckedChange(
                                                      !!$6cc32821e9371a1c$var$isIndeterminate(
                                                          checked,
                                                      ) || !checked,
                                                  ),
                                        { checkForDefaultPrevented: !1 },
                                    ),
                                },
                            ),
                        ),
                    )
                }),
                [
                    $6cc32821e9371a1c$var$RadioGroupProvider,
                    $6cc32821e9371a1c$var$useRadioGroupContext,
                ] = $6cc32821e9371a1c$var$createMenuContext('MenuRadioGroup', {
                    value: void 0,
                    onValueChange: () => {},
                }),
                $6cc32821e9371a1c$export$ea2200c9eee416b3 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { value, onValueChange, ...groupProps } = props,
                        handleValueChange = (0, react_use_callback_ref_dist.W)(
                            onValueChange,
                        )
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$RadioGroupProvider,
                        {
                            scope: props.__scopeMenu,
                            value,
                            onValueChange: handleValueChange,
                        },
                        (0, react.createElement)(
                            $6cc32821e9371a1c$export$22a631d1f72787bb,
                            (0, esm_extends.Z)({}, groupProps, {
                                ref: forwardedRef,
                            }),
                        ),
                    )
                }),
                $6cc32821e9371a1c$export$69bd225e9817f6d0 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { value, ...radioItemProps } = props,
                        context = $6cc32821e9371a1c$var$useRadioGroupContext(
                            'MenuRadioItem',
                            props.__scopeMenu,
                        ),
                        checked = value === context.value
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$ItemIndicatorProvider,
                        { scope: props.__scopeMenu, checked },
                        (0, react.createElement)(
                            $6cc32821e9371a1c$export$2ce376c2cc3355c8,
                            (0, esm_extends.Z)(
                                {
                                    role: 'menuitemradio',
                                    'aria-checked': checked,
                                },
                                radioItemProps,
                                {
                                    ref: forwardedRef,
                                    'data-state':
                                        $6cc32821e9371a1c$var$getCheckedState(
                                            checked,
                                        ),
                                    onSelect: (0, dist.M)(
                                        radioItemProps.onSelect,
                                        () => {
                                            var _context$onValueChang
                                            return null ===
                                                (_context$onValueChang =
                                                    context.onValueChange) ||
                                                void 0 === _context$onValueChang
                                                ? void 0
                                                : _context$onValueChang.call(
                                                      context,
                                                      value,
                                                  )
                                        },
                                        { checkForDefaultPrevented: !1 },
                                    ),
                                },
                            ),
                        ),
                    )
                }),
                [
                    $6cc32821e9371a1c$var$ItemIndicatorProvider,
                    $6cc32821e9371a1c$var$useItemIndicatorContext,
                ] = $6cc32821e9371a1c$var$createMenuContext(
                    'MenuItemIndicator',
                    { checked: !1 },
                ),
                $6cc32821e9371a1c$export$a2593e23056970a3 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeMenu, forceMount, ...itemIndicatorProps } =
                            props,
                        indicatorContext =
                            $6cc32821e9371a1c$var$useItemIndicatorContext(
                                'MenuItemIndicator',
                                __scopeMenu,
                            )
                    return (0, react.createElement)(
                        react_presence_dist.z,
                        {
                            present:
                                forceMount ||
                                $6cc32821e9371a1c$var$isIndeterminate(
                                    indicatorContext.checked,
                                ) ||
                                !0 === indicatorContext.checked,
                        },
                        (0, react.createElement)(
                            react_primitive_dist.WV.span,
                            (0, esm_extends.Z)({}, itemIndicatorProps, {
                                ref: forwardedRef,
                                'data-state':
                                    $6cc32821e9371a1c$var$getCheckedState(
                                        indicatorContext.checked,
                                    ),
                            }),
                        ),
                    )
                }),
                $6cc32821e9371a1c$export$1cec7dcdd713e220 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeMenu, ...separatorProps } = props
                    return (0, react.createElement)(
                        react_primitive_dist.WV.div,
                        (0, esm_extends.Z)(
                            {
                                role: 'separator',
                                'aria-orientation': 'horizontal',
                            },
                            separatorProps,
                            { ref: forwardedRef },
                        ),
                    )
                }),
                $6cc32821e9371a1c$export$bcdda4773debf5fa = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopeMenu, ...arrowProps } = props,
                        popperScope =
                            $6cc32821e9371a1c$var$usePopperScope(__scopeMenu)
                    return (0, react.createElement)(
                        react_popper_dist.Eh,
                        (0, esm_extends.Z)({}, popperScope, arrowProps, {
                            ref: forwardedRef,
                        }),
                    )
                }),
                [
                    $6cc32821e9371a1c$var$MenuSubProvider,
                    $6cc32821e9371a1c$var$useMenuSubContext,
                ] = $6cc32821e9371a1c$var$createMenuContext('MenuSub'),
                $6cc32821e9371a1c$export$71bdb9d1e2909932 = (props) => {
                    const {
                            __scopeMenu,
                            children,
                            open = !1,
                            onOpenChange,
                        } = props,
                        parentMenuContext =
                            $6cc32821e9371a1c$var$useMenuContext(
                                'MenuSub',
                                __scopeMenu,
                            ),
                        popperScope =
                            $6cc32821e9371a1c$var$usePopperScope(__scopeMenu),
                        [trigger, setTrigger] = (0, react.useState)(null),
                        [content, setContent] = (0, react.useState)(null),
                        handleOpenChange = (0, react_use_callback_ref_dist.W)(
                            onOpenChange,
                        )
                    return (
                        (0, react.useEffect)(
                            () => (
                                !1 === parentMenuContext.open &&
                                    handleOpenChange(!1),
                                () => handleOpenChange(!1)
                            ),
                            [parentMenuContext.open, handleOpenChange],
                        ),
                        (0, react.createElement)(
                            react_popper_dist.fC,
                            popperScope,
                            (0, react.createElement)(
                                $6cc32821e9371a1c$var$MenuProvider,
                                {
                                    scope: __scopeMenu,
                                    open,
                                    onOpenChange: handleOpenChange,
                                    content,
                                    onContentChange: setContent,
                                },
                                (0, react.createElement)(
                                    $6cc32821e9371a1c$var$MenuSubProvider,
                                    {
                                        scope: __scopeMenu,
                                        contentId: (0, react_id_dist.M)(),
                                        triggerId: (0, react_id_dist.M)(),
                                        trigger,
                                        onTriggerChange: setTrigger,
                                    },
                                    children,
                                ),
                            ),
                        )
                    )
                },
                $6cc32821e9371a1c$export$5fbbb3ba7297405f = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const context = $6cc32821e9371a1c$var$useMenuContext(
                            'MenuSubTrigger',
                            props.__scopeMenu,
                        ),
                        rootContext = $6cc32821e9371a1c$var$useMenuRootContext(
                            'MenuSubTrigger',
                            props.__scopeMenu,
                        ),
                        subContext = $6cc32821e9371a1c$var$useMenuSubContext(
                            'MenuSubTrigger',
                            props.__scopeMenu,
                        ),
                        contentContext =
                            $6cc32821e9371a1c$var$useMenuContentContext(
                                'MenuSubTrigger',
                                props.__scopeMenu,
                            ),
                        openTimerRef = (0, react.useRef)(null),
                        { pointerGraceTimerRef, onPointerGraceIntentChange } =
                            contentContext,
                        scope = { __scopeMenu: props.__scopeMenu },
                        clearOpenTimer = (0, react.useCallback)(() => {
                            openTimerRef.current &&
                                window.clearTimeout(openTimerRef.current),
                                (openTimerRef.current = null)
                        }, [])
                    return (
                        (0, react.useEffect)(
                            () => clearOpenTimer,
                            [clearOpenTimer],
                        ),
                        (0, react.useEffect)(() => {
                            const pointerGraceTimer =
                                pointerGraceTimerRef.current
                            return () => {
                                window.clearTimeout(pointerGraceTimer),
                                    onPointerGraceIntentChange(null)
                            }
                        }, [pointerGraceTimerRef, onPointerGraceIntentChange]),
                        (0, react.createElement)(
                            $6cc32821e9371a1c$export$9fa5ebd18bee4d43,
                            (0, esm_extends.Z)({ asChild: !0 }, scope),
                            (0, react.createElement)(
                                $6cc32821e9371a1c$var$MenuItemImpl,
                                (0, esm_extends.Z)(
                                    {
                                        id: subContext.triggerId,
                                        'aria-haspopup': 'menu',
                                        'aria-expanded': context.open,
                                        'aria-controls': subContext.contentId,
                                        'data-state':
                                            $6cc32821e9371a1c$var$getOpenState(
                                                context.open,
                                            ),
                                    },
                                    props,
                                    {
                                        ref: (0, react_compose_refs_dist.F)(
                                            forwardedRef,
                                            subContext.onTriggerChange,
                                        ),
                                        onClick: (event) => {
                                            var _props$onClick
                                            null ===
                                                (_props$onClick =
                                                    props.onClick) ||
                                                void 0 === _props$onClick ||
                                                _props$onClick.call(
                                                    props,
                                                    event,
                                                ),
                                                props.disabled ||
                                                    event.defaultPrevented ||
                                                    (event.currentTarget.focus(),
                                                    context.open ||
                                                        context.onOpenChange(
                                                            !0,
                                                        ))
                                        },
                                        onPointerMove: (0, dist.M)(
                                            props.onPointerMove,
                                            $6cc32821e9371a1c$var$whenMouse(
                                                (event) => {
                                                    contentContext.onItemEnter(
                                                        event,
                                                    ),
                                                        event.defaultPrevented ||
                                                            props.disabled ||
                                                            context.open ||
                                                            openTimerRef.current ||
                                                            (contentContext.onPointerGraceIntentChange(
                                                                null,
                                                            ),
                                                            (openTimerRef.current =
                                                                window.setTimeout(
                                                                    () => {
                                                                        context.onOpenChange(
                                                                            !0,
                                                                        ),
                                                                            clearOpenTimer()
                                                                    },
                                                                    100,
                                                                )))
                                                },
                                            ),
                                        ),
                                        onPointerLeave: (0, dist.M)(
                                            props.onPointerLeave,
                                            $6cc32821e9371a1c$var$whenMouse(
                                                (event) => {
                                                    var _context$content
                                                    clearOpenTimer()
                                                    const contentRect =
                                                        null ===
                                                            (_context$content =
                                                                context.content) ||
                                                        void 0 ===
                                                            _context$content
                                                            ? void 0
                                                            : _context$content.getBoundingClientRect()
                                                    if (contentRect) {
                                                        var _context$content2
                                                        const side =
                                                                null ===
                                                                    (_context$content2 =
                                                                        context.content) ||
                                                                void 0 ===
                                                                    _context$content2
                                                                    ? void 0
                                                                    : _context$content2
                                                                          .dataset
                                                                          .side,
                                                            rightSide =
                                                                'right' ===
                                                                side,
                                                            bleed = rightSide
                                                                ? -5
                                                                : 5,
                                                            contentNearEdge =
                                                                contentRect[
                                                                    rightSide
                                                                        ? 'left'
                                                                        : 'right'
                                                                ],
                                                            contentFarEdge =
                                                                contentRect[
                                                                    rightSide
                                                                        ? 'right'
                                                                        : 'left'
                                                                ]
                                                        contentContext.onPointerGraceIntentChange(
                                                            {
                                                                area: [
                                                                    {
                                                                        x:
                                                                            event.clientX +
                                                                            bleed,
                                                                        y: event.clientY,
                                                                    },
                                                                    {
                                                                        x: contentNearEdge,
                                                                        y: contentRect.top,
                                                                    },
                                                                    {
                                                                        x: contentFarEdge,
                                                                        y: contentRect.top,
                                                                    },
                                                                    {
                                                                        x: contentFarEdge,
                                                                        y: contentRect.bottom,
                                                                    },
                                                                    {
                                                                        x: contentNearEdge,
                                                                        y: contentRect.bottom,
                                                                    },
                                                                ],
                                                                side,
                                                            },
                                                        ),
                                                            window.clearTimeout(
                                                                pointerGraceTimerRef.current,
                                                            ),
                                                            (pointerGraceTimerRef.current =
                                                                window.setTimeout(
                                                                    () =>
                                                                        contentContext.onPointerGraceIntentChange(
                                                                            null,
                                                                        ),
                                                                    300,
                                                                ))
                                                    } else {
                                                        if (
                                                            (contentContext.onTriggerLeave(
                                                                event,
                                                            ),
                                                            event.defaultPrevented)
                                                        )
                                                            return
                                                        contentContext.onPointerGraceIntentChange(
                                                            null,
                                                        )
                                                    }
                                                },
                                            ),
                                        ),
                                        onKeyDown: (0, dist.M)(
                                            props.onKeyDown,
                                            (event) => {
                                                const isTypingAhead =
                                                    '' !==
                                                    contentContext.searchRef
                                                        .current
                                                var _context$content3
                                                props.disabled ||
                                                    (isTypingAhead &&
                                                        ' ' === event.key) ||
                                                    ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[
                                                        rootContext.dir
                                                    ].includes(event.key) &&
                                                        (context.onOpenChange(
                                                            !0,
                                                        ),
                                                        null ===
                                                            (_context$content3 =
                                                                context.content) ||
                                                            void 0 ===
                                                                _context$content3 ||
                                                            _context$content3.focus(),
                                                        event.preventDefault()))
                                            },
                                        ),
                                    },
                                ),
                            ),
                        )
                    )
                }),
                $6cc32821e9371a1c$export$e7142ab31822bde6 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const portalContext =
                            $6cc32821e9371a1c$var$usePortalContext(
                                'MenuContent',
                                props.__scopeMenu,
                            ),
                        {
                            forceMount = portalContext.forceMount,
                            ...subContentProps
                        } = props,
                        context = $6cc32821e9371a1c$var$useMenuContext(
                            'MenuContent',
                            props.__scopeMenu,
                        ),
                        rootContext = $6cc32821e9371a1c$var$useMenuRootContext(
                            'MenuContent',
                            props.__scopeMenu,
                        ),
                        subContext = $6cc32821e9371a1c$var$useMenuSubContext(
                            'MenuSubContent',
                            props.__scopeMenu,
                        ),
                        ref = (0, react.useRef)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            ref,
                        )
                    return (0, react.createElement)(
                        $6cc32821e9371a1c$var$Collection.Provider,
                        { scope: props.__scopeMenu },
                        (0, react.createElement)(
                            react_presence_dist.z,
                            { present: forceMount || context.open },
                            (0, react.createElement)(
                                $6cc32821e9371a1c$var$Collection.Slot,
                                { scope: props.__scopeMenu },
                                (0, react.createElement)(
                                    $6cc32821e9371a1c$var$MenuContentImpl,
                                    (0, esm_extends.Z)(
                                        {
                                            id: subContext.contentId,
                                            'aria-labelledby':
                                                subContext.triggerId,
                                        },
                                        subContentProps,
                                        {
                                            ref: composedRefs,
                                            align: 'start',
                                            side:
                                                'rtl' === rootContext.dir
                                                    ? 'left'
                                                    : 'right',
                                            disableOutsidePointerEvents: !1,
                                            disableOutsideScroll: !1,
                                            trapFocus: !1,
                                            onOpenAutoFocus: (event) => {
                                                var _ref$current
                                                rootContext.isUsingKeyboardRef
                                                    .current &&
                                                    (null ===
                                                        (_ref$current =
                                                            ref.current) ||
                                                        void 0 ===
                                                            _ref$current ||
                                                        _ref$current.focus()),
                                                    event.preventDefault()
                                            },
                                            onCloseAutoFocus: (event) =>
                                                event.preventDefault(),
                                            onFocusOutside: (0, dist.M)(
                                                props.onFocusOutside,
                                                (event) => {
                                                    event.target !==
                                                        subContext.trigger &&
                                                        context.onOpenChange(!1)
                                                },
                                            ),
                                            onEscapeKeyDown: (0, dist.M)(
                                                props.onEscapeKeyDown,
                                                (event) => {
                                                    rootContext.onClose(),
                                                        event.preventDefault()
                                                },
                                            ),
                                            onKeyDown: (0, dist.M)(
                                                props.onKeyDown,
                                                (event) => {
                                                    const isKeyDownInside =
                                                            event.currentTarget.contains(
                                                                event.target,
                                                            ),
                                                        isCloseKey =
                                                            $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[
                                                                rootContext.dir
                                                            ].includes(
                                                                event.key,
                                                            )
                                                    var _subContext$trigger
                                                    isKeyDownInside &&
                                                        isCloseKey &&
                                                        (context.onOpenChange(
                                                            !1,
                                                        ),
                                                        null ===
                                                            (_subContext$trigger =
                                                                subContext.trigger) ||
                                                            void 0 ===
                                                                _subContext$trigger ||
                                                            _subContext$trigger.focus(),
                                                        event.preventDefault())
                                                },
                                            ),
                                        },
                                    ),
                                ),
                            ),
                        ),
                    )
                })
            function $6cc32821e9371a1c$var$getOpenState(open) {
                return open ? 'open' : 'closed'
            }
            function $6cc32821e9371a1c$var$isIndeterminate(checked) {
                return 'indeterminate' === checked
            }
            function $6cc32821e9371a1c$var$getCheckedState(checked) {
                return $6cc32821e9371a1c$var$isIndeterminate(checked)
                    ? 'indeterminate'
                    : checked
                      ? 'checked'
                      : 'unchecked'
            }
            function $6cc32821e9371a1c$var$whenMouse(handler) {
                return (event) =>
                    'mouse' === event.pointerType ? handler(event) : void 0
            }
            const $6cc32821e9371a1c$export$be92b6f5f03c0fe9 =
                    $6cc32821e9371a1c$export$d9b273488cd8ce6f,
                $6cc32821e9371a1c$export$b688253958b8dfe7 =
                    $6cc32821e9371a1c$export$9fa5ebd18bee4d43,
                $6cc32821e9371a1c$export$602eac185826482c =
                    $6cc32821e9371a1c$export$793392f970497feb,
                $6cc32821e9371a1c$export$7c6e2c02157bb7d2 =
                    $6cc32821e9371a1c$export$479f0f2f71193efe,
                $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4 =
                    $6cc32821e9371a1c$export$22a631d1f72787bb,
                $6cc32821e9371a1c$export$b04be29aa201d4f5 =
                    $6cc32821e9371a1c$export$dd37bec0e8a99143,
                $6cc32821e9371a1c$export$6d08773d2e66f8f2 =
                    $6cc32821e9371a1c$export$2ce376c2cc3355c8,
                $6cc32821e9371a1c$export$16ce288f89fa631c =
                    $6cc32821e9371a1c$export$f6f243521332502d,
                $6cc32821e9371a1c$export$a98f0dcb43a68a25 =
                    $6cc32821e9371a1c$export$ea2200c9eee416b3,
                $6cc32821e9371a1c$export$371ab307eab489c0 =
                    $6cc32821e9371a1c$export$69bd225e9817f6d0,
                $6cc32821e9371a1c$export$c3468e2714d175fa =
                    $6cc32821e9371a1c$export$a2593e23056970a3,
                $6cc32821e9371a1c$export$1ff3c3f08ae963c0 =
                    $6cc32821e9371a1c$export$1cec7dcdd713e220,
                $6cc32821e9371a1c$export$21b07c8f274aebd5 =
                    $6cc32821e9371a1c$export$bcdda4773debf5fa,
                $6cc32821e9371a1c$export$d7a01e11500dfb6f =
                    $6cc32821e9371a1c$export$71bdb9d1e2909932,
                $6cc32821e9371a1c$export$2ea8a7a591ac5eac =
                    $6cc32821e9371a1c$export$5fbbb3ba7297405f,
                $6cc32821e9371a1c$export$6d4de93b380beddf =
                    $6cc32821e9371a1c$export$e7142ab31822bde6
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
        './node_modules/lucide-react/dist/esm/icons/chevron-right.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => ChevronRight,
            })
            const ChevronRight = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('ChevronRight', [
                ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
            ])
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
