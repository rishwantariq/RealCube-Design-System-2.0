/*! For license information please see components-ui-stories-toggle-group-stories.6c124edd.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [9500],
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
        './node_modules/@radix-ui/react-roving-focus/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Pc: () => $d7bdfb9eb0fdf311$export$c7109489551a4f4,
                ck: () => $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
                fC: () => $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/primitive/dist/index.mjs',
                    ),
                _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-collection/dist/index.mjs',
                    ),
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                    ),
                _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-context/dist/index.mjs',
                    ),
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-id/dist/index.mjs',
                    ),
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    ),
                _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs',
                    ),
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                    ),
                _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-direction/dist/index.mjs',
                    )
            const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
                    bubbles: !1,
                    cancelable: !0,
                },
                [
                    $d7bdfb9eb0fdf311$var$Collection,
                    $d7bdfb9eb0fdf311$var$useCollection,
                    $d7bdfb9eb0fdf311$var$createCollectionScope,
                ] = (0,
                _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__.B)(
                    'RovingFocusGroup',
                ),
                [
                    $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext,
                    $d7bdfb9eb0fdf311$export$c7109489551a4f4,
                ] = (0, _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.b)(
                    'RovingFocusGroup',
                    [$d7bdfb9eb0fdf311$var$createCollectionScope],
                ),
                [
                    $d7bdfb9eb0fdf311$var$RovingFocusProvider,
                    $d7bdfb9eb0fdf311$var$useRovingFocusContext,
                ] =
                    $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext(
                        'RovingFocusGroup',
                    ),
                $d7bdfb9eb0fdf311$export$8699f7c8af148338 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) =>
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            $d7bdfb9eb0fdf311$var$Collection.Provider,
                            { scope: props.__scopeRovingFocusGroup },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                $d7bdfb9eb0fdf311$var$Collection.Slot,
                                { scope: props.__scopeRovingFocusGroup },
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                        {},
                                        props,
                                        { ref: forwardedRef },
                                    ),
                                ),
                            ),
                        ),
                ),
                $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeRovingFocusGroup,
                                orientation,
                                loop = !1,
                                dir,
                                currentTabStopId: currentTabStopIdProp,
                                defaultCurrentTabStopId,
                                onCurrentTabStopIdChange,
                                onEntryFocus,
                                ...groupProps
                            } = props,
                            ref = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
                            composedRefs = (0,
                            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(
                                forwardedRef,
                                ref,
                            ),
                            direction = (0,
                            _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.gm)(
                                dir,
                            ),
                            [currentTabStopId = null, setCurrentTabStopId] = (0,
                            _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.T)(
                                {
                                    prop: currentTabStopIdProp,
                                    defaultProp: defaultCurrentTabStopId,
                                    onChange: onCurrentTabStopIdChange,
                                },
                            ),
                            [isTabbingBackOut, setIsTabbingBackOut] = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
                            handleEntryFocus = (0,
                            _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__.W)(
                                onEntryFocus,
                            ),
                            getItems = $d7bdfb9eb0fdf311$var$useCollection(
                                __scopeRovingFocusGroup,
                            ),
                            isClickFocusRef = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
                            [focusableItemsCount, setFocusableItemsCount] = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useState)(0)
                        return (
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                const node = ref.current
                                if (node)
                                    return (
                                        node.addEventListener(
                                            'rovingFocusGroup.onEntryFocus',
                                            handleEntryFocus,
                                        ),
                                        () =>
                                            node.removeEventListener(
                                                'rovingFocusGroup.onEntryFocus',
                                                handleEntryFocus,
                                            )
                                    )
                            }, [handleEntryFocus]),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                $d7bdfb9eb0fdf311$var$RovingFocusProvider,
                                {
                                    scope: __scopeRovingFocusGroup,
                                    orientation,
                                    dir: direction,
                                    loop,
                                    currentTabStopId,
                                    onItemFocus: (0,
                                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                                        (tabStopId) =>
                                            setCurrentTabStopId(tabStopId),
                                        [setCurrentTabStopId],
                                    ),
                                    onItemShiftTab: (0,
                                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                                        () => setIsTabbingBackOut(!0),
                                        [],
                                    ),
                                    onFocusableItemAdd: (0,
                                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                                        () =>
                                            setFocusableItemsCount(
                                                (prevCount) => prevCount + 1,
                                            ),
                                        [],
                                    ),
                                    onFocusableItemRemove: (0,
                                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                                        () =>
                                            setFocusableItemsCount(
                                                (prevCount) => prevCount - 1,
                                            ),
                                        [],
                                    ),
                                },
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__
                                        .WV.div,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                        {
                                            tabIndex:
                                                isTabbingBackOut ||
                                                0 === focusableItemsCount
                                                    ? -1
                                                    : 0,
                                            'data-orientation': orientation,
                                        },
                                        groupProps,
                                        {
                                            ref: composedRefs,
                                            style: {
                                                outline: 'none',
                                                ...props.style,
                                            },
                                            onMouseDown: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(
                                                props.onMouseDown,
                                                () => {
                                                    isClickFocusRef.current = !0
                                                },
                                            ),
                                            onFocus: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(
                                                props.onFocus,
                                                (event) => {
                                                    const isKeyboardFocus =
                                                        !isClickFocusRef.current
                                                    if (
                                                        event.target ===
                                                            event.currentTarget &&
                                                        isKeyboardFocus &&
                                                        !isTabbingBackOut
                                                    ) {
                                                        const entryFocusEvent =
                                                            new CustomEvent(
                                                                'rovingFocusGroup.onEntryFocus',
                                                                $d7bdfb9eb0fdf311$var$EVENT_OPTIONS,
                                                            )
                                                        if (
                                                            (event.currentTarget.dispatchEvent(
                                                                entryFocusEvent,
                                                            ),
                                                            !entryFocusEvent.defaultPrevented)
                                                        ) {
                                                            const items =
                                                                getItems().filter(
                                                                    (item) =>
                                                                        item.focusable,
                                                                )
                                                            $d7bdfb9eb0fdf311$var$focusFirst(
                                                                [
                                                                    items.find(
                                                                        (
                                                                            item,
                                                                        ) =>
                                                                            item.active,
                                                                    ),
                                                                    items.find(
                                                                        (
                                                                            item,
                                                                        ) =>
                                                                            item.id ===
                                                                            currentTabStopId,
                                                                    ),
                                                                    ...items,
                                                                ]
                                                                    .filter(
                                                                        Boolean,
                                                                    )
                                                                    .map(
                                                                        (
                                                                            item,
                                                                        ) =>
                                                                            item
                                                                                .ref
                                                                                .current,
                                                                    ),
                                                            )
                                                        }
                                                    }
                                                    isClickFocusRef.current = !1
                                                },
                                            ),
                                            onBlur: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(
                                                props.onBlur,
                                                () => setIsTabbingBackOut(!1),
                                            ),
                                        },
                                    ),
                                ),
                            )
                        )
                    },
                ),
                $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeRovingFocusGroup,
                                focusable = !0,
                                active = !1,
                                tabStopId,
                                ...itemProps
                            } = props,
                            autoId = (0,
                            _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.M)(),
                            id = tabStopId || autoId,
                            context =
                                $d7bdfb9eb0fdf311$var$useRovingFocusContext(
                                    'RovingFocusGroupItem',
                                    __scopeRovingFocusGroup,
                                ),
                            isCurrentTabStop = context.currentTabStopId === id,
                            getItems = $d7bdfb9eb0fdf311$var$useCollection(
                                __scopeRovingFocusGroup,
                            ),
                            { onFocusableItemAdd, onFocusableItemRemove } =
                                context
                        return (
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                if (focusable)
                                    return (
                                        onFocusableItemAdd(),
                                        () => onFocusableItemRemove()
                                    )
                            }, [
                                focusable,
                                onFocusableItemAdd,
                                onFocusableItemRemove,
                            ]),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                $d7bdfb9eb0fdf311$var$Collection.ItemSlot,
                                {
                                    scope: __scopeRovingFocusGroup,
                                    id,
                                    focusable,
                                    active,
                                },
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__
                                        .WV.span,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                        {
                                            tabIndex: isCurrentTabStop ? 0 : -1,
                                            'data-orientation':
                                                context.orientation,
                                        },
                                        itemProps,
                                        {
                                            ref: forwardedRef,
                                            onMouseDown: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(
                                                props.onMouseDown,
                                                (event) => {
                                                    focusable
                                                        ? context.onItemFocus(
                                                              id,
                                                          )
                                                        : event.preventDefault()
                                                },
                                            ),
                                            onFocus: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(
                                                props.onFocus,
                                                () => context.onItemFocus(id),
                                            ),
                                            onKeyDown: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(
                                                props.onKeyDown,
                                                (event) => {
                                                    if (
                                                        'Tab' === event.key &&
                                                        event.shiftKey
                                                    )
                                                        return void context.onItemShiftTab()
                                                    if (
                                                        event.target !==
                                                        event.currentTarget
                                                    )
                                                        return
                                                    const focusIntent =
                                                        (function $d7bdfb9eb0fdf311$var$getFocusIntent(
                                                            event,
                                                            orientation,
                                                            dir,
                                                        ) {
                                                            const key =
                                                                (function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(
                                                                    key,
                                                                    dir,
                                                                ) {
                                                                    return 'rtl' !==
                                                                        dir
                                                                        ? key
                                                                        : 'ArrowLeft' ===
                                                                            key
                                                                          ? 'ArrowRight'
                                                                          : 'ArrowRight' ===
                                                                              key
                                                                            ? 'ArrowLeft'
                                                                            : key
                                                                })(
                                                                    event.key,
                                                                    dir,
                                                                )
                                                            return ('vertical' ===
                                                                orientation &&
                                                                [
                                                                    'ArrowLeft',
                                                                    'ArrowRight',
                                                                ].includes(
                                                                    key,
                                                                )) ||
                                                                ('horizontal' ===
                                                                    orientation &&
                                                                    [
                                                                        'ArrowUp',
                                                                        'ArrowDown',
                                                                    ].includes(
                                                                        key,
                                                                    ))
                                                                ? void 0
                                                                : $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[
                                                                      key
                                                                  ]
                                                        })(
                                                            event,
                                                            context.orientation,
                                                            context.dir,
                                                        )
                                                    if (
                                                        void 0 !== focusIntent
                                                    ) {
                                                        event.preventDefault()
                                                        let candidateNodes =
                                                            getItems()
                                                                .filter(
                                                                    (item) =>
                                                                        item.focusable,
                                                                )
                                                                .map(
                                                                    (item) =>
                                                                        item.ref
                                                                            .current,
                                                                )
                                                        if (
                                                            'last' ===
                                                            focusIntent
                                                        )
                                                            candidateNodes.reverse()
                                                        else if (
                                                            'prev' ===
                                                                focusIntent ||
                                                            'next' ===
                                                                focusIntent
                                                        ) {
                                                            'prev' ===
                                                                focusIntent &&
                                                                candidateNodes.reverse()
                                                            const currentIndex =
                                                                candidateNodes.indexOf(
                                                                    event.currentTarget,
                                                                )
                                                            candidateNodes =
                                                                context.loop
                                                                    ? (function $d7bdfb9eb0fdf311$var$wrapArray(
                                                                          array,
                                                                          startIndex,
                                                                      ) {
                                                                          return array.map(
                                                                              (
                                                                                  _,
                                                                                  index,
                                                                              ) =>
                                                                                  array[
                                                                                      (startIndex +
                                                                                          index) %
                                                                                          array.length
                                                                                  ],
                                                                          )
                                                                      })(
                                                                          candidateNodes,
                                                                          currentIndex +
                                                                              1,
                                                                      )
                                                                    : candidateNodes.slice(
                                                                          currentIndex +
                                                                              1,
                                                                      )
                                                        }
                                                        setTimeout(() =>
                                                            $d7bdfb9eb0fdf311$var$focusFirst(
                                                                candidateNodes,
                                                            ),
                                                        )
                                                    }
                                                },
                                            ),
                                        },
                                    ),
                                ),
                            )
                        )
                    },
                ),
                $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
                    ArrowLeft: 'prev',
                    ArrowUp: 'prev',
                    ArrowRight: 'next',
                    ArrowDown: 'next',
                    PageUp: 'first',
                    Home: 'first',
                    PageDown: 'last',
                    End: 'last',
                }
            function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
                const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement
                for (const candidate of candidates) {
                    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return
                    if (
                        (candidate.focus(),
                        document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
                    )
                        return
                }
            }
            const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 =
                    $d7bdfb9eb0fdf311$export$8699f7c8af148338,
                $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 =
                    $d7bdfb9eb0fdf311$export$ab9df7c53fe8454
        },
        './node_modules/@radix-ui/react-toggle/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => $b3bbe2732c13b576$export$bea8ebba691c5813,
                f: () => $b3bbe2732c13b576$export$be92b6f5f03c0fe9,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/primitive/dist/index.mjs',
                    ),
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                    ),
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    )
            const $b3bbe2732c13b576$export$bea8ebba691c5813 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                pressed: pressedProp,
                                defaultPressed = !1,
                                onPressedChange,
                                ...buttonProps
                            } = props,
                            [pressed = !1, setPressed] = (0,
                            _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_1__.T)(
                                {
                                    prop: pressedProp,
                                    onChange: onPressedChange,
                                    defaultProp: defaultPressed,
                                },
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__
                                .WV.button,
                            (0,
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    type: 'button',
                                    'aria-pressed': pressed,
                                    'data-state': pressed ? 'on' : 'off',
                                    'data-disabled': props.disabled
                                        ? ''
                                        : void 0,
                                },
                                buttonProps,
                                {
                                    ref: forwardedRef,
                                    onClick: (0,
                                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__.M)(
                                        props.onClick,
                                        () => {
                                            props.disabled ||
                                                setPressed(!pressed)
                                        },
                                    ),
                                },
                            ),
                        )
                    },
                ),
                $b3bbe2732c13b576$export$be92b6f5f03c0fe9 =
                    $b3bbe2732c13b576$export$bea8ebba691c5813
        },
        './src/components/ui/stories/toggle-group.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    ToggleGroupDefaultStyle: () => ToggleGroupDefaultStyle,
                    ToggleGroupDisabled: () => ToggleGroupDisabled,
                    ToggleGroupOutlineStyle: () => ToggleGroupOutlineStyle,
                    ToggleGroupSingle: () => ToggleGroupSingle,
                    ToggleGroupSizeDefault: () => ToggleGroupSizeDefault,
                    ToggleGroupSizeLarge: () => ToggleGroupSizeLarge,
                    ToggleGroupSizeSmall: () => ToggleGroupSizeSmall,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => toggle_group_stories,
                })
            var defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                bold = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/bold.js',
                ),
                italic = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/italic.js',
                )
            const Underline = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Underline', [
                ['path', { d: 'M6 4v6a6 6 0 0 0 12 0V4', key: '9kb039' }],
                [
                    'line',
                    { x1: '4', x2: '20', y1: '20', y2: '20', key: 'nun2al' },
                ],
            ])
            var esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                objectWithoutProperties = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                ),
                dist = __webpack_require__(
                    './node_modules/@radix-ui/react-context/dist/index.mjs',
                ),
                react_primitive_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                ),
                react_roving_focus_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-roving-focus/dist/index.mjs',
                ),
                react_toggle_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-toggle/dist/index.mjs',
                ),
                react_use_controllable_state_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                ),
                react_direction_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-direction/dist/index.mjs',
                )
            const [
                    $6c1fd9e6a8969628$var$createToggleGroupContext,
                    $6c1fd9e6a8969628$export$d1c7c4bcd9f26dd4,
                ] = (0, dist.b)('ToggleGroup', [react_roving_focus_dist.Pc]),
                $6c1fd9e6a8969628$var$useRovingFocusGroupScope = (0,
                react_roving_focus_dist.Pc)(),
                $6c1fd9e6a8969628$export$af3ec21f6cfb5e30 = react.forwardRef(
                    (props, forwardedRef) => {
                        const { type, ...toggleGroupProps } = props
                        if ('single' === type) {
                            const singleProps = toggleGroupProps
                            return react.createElement(
                                $6c1fd9e6a8969628$var$ToggleGroupImplSingle,
                                (0, esm_extends.Z)({}, singleProps, {
                                    ref: forwardedRef,
                                }),
                            )
                        }
                        if ('multiple' === type) {
                            const multipleProps = toggleGroupProps
                            return react.createElement(
                                $6c1fd9e6a8969628$var$ToggleGroupImplMultiple,
                                (0, esm_extends.Z)({}, multipleProps, {
                                    ref: forwardedRef,
                                }),
                            )
                        }
                        throw new Error(
                            'Missing prop `type` expected on `ToggleGroup`',
                        )
                    },
                ),
                [
                    $6c1fd9e6a8969628$var$ToggleGroupValueProvider,
                    $6c1fd9e6a8969628$var$useToggleGroupValueContext,
                ] =
                    $6c1fd9e6a8969628$var$createToggleGroupContext(
                        'ToggleGroup',
                    ),
                $6c1fd9e6a8969628$var$ToggleGroupImplSingle = react.forwardRef(
                    (props, forwardedRef) => {
                        const {
                                value: valueProp,
                                defaultValue,
                                onValueChange = () => {},
                                ...toggleGroupSingleProps
                            } = props,
                            [value, setValue] = (0,
                            react_use_controllable_state_dist.T)({
                                prop: valueProp,
                                defaultProp: defaultValue,
                                onChange: onValueChange,
                            })
                        return react.createElement(
                            $6c1fd9e6a8969628$var$ToggleGroupValueProvider,
                            {
                                scope: props.__scopeToggleGroup,
                                type: 'single',
                                value: value ? [value] : [],
                                onItemActivate: setValue,
                                onItemDeactivate: react.useCallback(
                                    () => setValue(''),
                                    [setValue],
                                ),
                            },
                            react.createElement(
                                $6c1fd9e6a8969628$var$ToggleGroupImpl,
                                (0, esm_extends.Z)({}, toggleGroupSingleProps, {
                                    ref: forwardedRef,
                                }),
                            ),
                        )
                    },
                ),
                $6c1fd9e6a8969628$var$ToggleGroupImplMultiple =
                    react.forwardRef((props, forwardedRef) => {
                        const {
                                value: valueProp,
                                defaultValue,
                                onValueChange = () => {},
                                ...toggleGroupMultipleProps
                            } = props,
                            [value1 = [], setValue] = (0,
                            react_use_controllable_state_dist.T)({
                                prop: valueProp,
                                defaultProp: defaultValue,
                                onChange: onValueChange,
                            }),
                            handleButtonActivate = react.useCallback(
                                (itemValue) =>
                                    setValue((prevValue = []) => [
                                        ...prevValue,
                                        itemValue,
                                    ]),
                                [setValue],
                            ),
                            handleButtonDeactivate = react.useCallback(
                                (itemValue) =>
                                    setValue((prevValue = []) =>
                                        prevValue.filter(
                                            (value) => value !== itemValue,
                                        ),
                                    ),
                                [setValue],
                            )
                        return react.createElement(
                            $6c1fd9e6a8969628$var$ToggleGroupValueProvider,
                            {
                                scope: props.__scopeToggleGroup,
                                type: 'multiple',
                                value: value1,
                                onItemActivate: handleButtonActivate,
                                onItemDeactivate: handleButtonDeactivate,
                            },
                            react.createElement(
                                $6c1fd9e6a8969628$var$ToggleGroupImpl,
                                (0, esm_extends.Z)(
                                    {},
                                    toggleGroupMultipleProps,
                                    { ref: forwardedRef },
                                ),
                            ),
                        )
                    }),
                [
                    $6c1fd9e6a8969628$var$ToggleGroupContext,
                    $6c1fd9e6a8969628$var$useToggleGroupContext,
                ] =
                    $6c1fd9e6a8969628$var$createToggleGroupContext(
                        'ToggleGroup',
                    ),
                $6c1fd9e6a8969628$var$ToggleGroupImpl = react.forwardRef(
                    (props, forwardedRef) => {
                        const {
                                __scopeToggleGroup,
                                disabled = !1,
                                rovingFocus = !0,
                                orientation,
                                dir,
                                loop = !0,
                                ...toggleGroupProps
                            } = props,
                            rovingFocusGroupScope =
                                $6c1fd9e6a8969628$var$useRovingFocusGroupScope(
                                    __scopeToggleGroup,
                                ),
                            direction = (0, react_direction_dist.gm)(dir),
                            commonProps = {
                                role: 'group',
                                dir: direction,
                                ...toggleGroupProps,
                            }
                        return react.createElement(
                            $6c1fd9e6a8969628$var$ToggleGroupContext,
                            {
                                scope: __scopeToggleGroup,
                                rovingFocus,
                                disabled,
                            },
                            rovingFocus
                                ? react.createElement(
                                      react_roving_focus_dist.fC,
                                      (0, esm_extends.Z)(
                                          { asChild: !0 },
                                          rovingFocusGroupScope,
                                          { orientation, dir: direction, loop },
                                      ),
                                      react.createElement(
                                          react_primitive_dist.WV.div,
                                          (0, esm_extends.Z)({}, commonProps, {
                                              ref: forwardedRef,
                                          }),
                                      ),
                                  )
                                : react.createElement(
                                      react_primitive_dist.WV.div,
                                      (0, esm_extends.Z)({}, commonProps, {
                                          ref: forwardedRef,
                                      }),
                                  ),
                        )
                    },
                ),
                $6c1fd9e6a8969628$export$b453109e13abe10b = react.forwardRef(
                    (props, forwardedRef) => {
                        const valueContext =
                                $6c1fd9e6a8969628$var$useToggleGroupValueContext(
                                    'ToggleGroupItem',
                                    props.__scopeToggleGroup,
                                ),
                            context =
                                $6c1fd9e6a8969628$var$useToggleGroupContext(
                                    'ToggleGroupItem',
                                    props.__scopeToggleGroup,
                                ),
                            rovingFocusGroupScope =
                                $6c1fd9e6a8969628$var$useRovingFocusGroupScope(
                                    props.__scopeToggleGroup,
                                ),
                            pressed = valueContext.value.includes(props.value),
                            disabled = context.disabled || props.disabled,
                            commonProps = { ...props, pressed, disabled },
                            ref = react.useRef(null)
                        return context.rovingFocus
                            ? react.createElement(
                                  react_roving_focus_dist.ck,
                                  (0, esm_extends.Z)(
                                      { asChild: !0 },
                                      rovingFocusGroupScope,
                                      {
                                          focusable: !disabled,
                                          active: pressed,
                                          ref,
                                      },
                                  ),
                                  react.createElement(
                                      $6c1fd9e6a8969628$var$ToggleGroupItemImpl,
                                      (0, esm_extends.Z)({}, commonProps, {
                                          ref: forwardedRef,
                                      }),
                                  ),
                              )
                            : react.createElement(
                                  $6c1fd9e6a8969628$var$ToggleGroupItemImpl,
                                  (0, esm_extends.Z)({}, commonProps, {
                                      ref: forwardedRef,
                                  }),
                              )
                    },
                ),
                $6c1fd9e6a8969628$var$ToggleGroupItemImpl = react.forwardRef(
                    (props, forwardedRef) => {
                        const { __scopeToggleGroup, value, ...itemProps } =
                                props,
                            valueContext =
                                $6c1fd9e6a8969628$var$useToggleGroupValueContext(
                                    'ToggleGroupItem',
                                    __scopeToggleGroup,
                                ),
                            singleProps = {
                                role: 'radio',
                                'aria-checked': props.pressed,
                                'aria-pressed': void 0,
                            },
                            typeProps =
                                'single' === valueContext.type
                                    ? singleProps
                                    : void 0
                        return react.createElement(
                            react_toggle_dist.Z,
                            (0, esm_extends.Z)({}, typeProps, itemProps, {
                                ref: forwardedRef,
                                onPressedChange: (pressed) => {
                                    pressed
                                        ? valueContext.onItemActivate(value)
                                        : valueContext.onItemDeactivate(value)
                                },
                            }),
                        )
                    },
                ),
                $6c1fd9e6a8969628$export$be92b6f5f03c0fe9 =
                    $6c1fd9e6a8969628$export$af3ec21f6cfb5e30,
                $6c1fd9e6a8969628$export$6d08773d2e66f8f2 =
                    $6c1fd9e6a8969628$export$b453109e13abe10b
            var utils = __webpack_require__('./src/lib/utils.ts'),
                toggle = __webpack_require__('./src/components/ui/toggle.tsx'),
                _excluded = ['className', 'variant', 'size', 'children'],
                _excluded2 = ['className', 'children', 'variant', 'size'],
                __jsx = react.createElement,
                ToggleGroupContext = react.createContext({
                    size: 'default',
                    variant: 'default',
                }),
                ToggleGroup = react.forwardRef(function (_ref, ref) {
                    var className = _ref.className,
                        variant = _ref.variant,
                        size = _ref.size,
                        children = _ref.children,
                        props = (0, objectWithoutProperties.Z)(_ref, _excluded)
                    return __jsx(
                        $6c1fd9e6a8969628$export$be92b6f5f03c0fe9,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                className: (0, utils.cn)(
                                    'flex items-center justify-center gap-1',
                                    className,
                                ),
                            },
                            props,
                        ),
                        __jsx(
                            ToggleGroupContext.Provider,
                            { value: { variant, size } },
                            children,
                        ),
                    )
                })
            ToggleGroup.displayName =
                $6c1fd9e6a8969628$export$be92b6f5f03c0fe9.displayName
            var _ToggleGroupDefaultSt,
                _ToggleGroupDefaultSt2,
                _ToggleGroupOutlineSt,
                _ToggleGroupOutlineSt2,
                _ToggleGroupSingle$pa,
                _ToggleGroupSingle$pa2,
                _ToggleGroupSizeDefau,
                _ToggleGroupSizeDefau2,
                _ToggleGroupSizeSmall,
                _ToggleGroupSizeSmall2,
                _ToggleGroupSizeLarge,
                _ToggleGroupSizeLarge2,
                _ToggleGroupDisabled$,
                _ToggleGroupDisabled$2,
                ToggleGroupItem = react.forwardRef(function (_ref2, ref) {
                    var className = _ref2.className,
                        children = _ref2.children,
                        variant = _ref2.variant,
                        size = _ref2.size,
                        props = (0, objectWithoutProperties.Z)(
                            _ref2,
                            _excluded2,
                        ),
                        context = react.useContext(ToggleGroupContext)
                    return __jsx(
                        $6c1fd9e6a8969628$export$6d08773d2e66f8f2,
                        (0, esm_extends.Z)(
                            {
                                ref,
                                className: (0, utils.cn)(
                                    (0, toggle.E)({
                                        variant: context.variant || variant,
                                        size: context.size || size,
                                    }),
                                    className,
                                ),
                            },
                            props,
                        ),
                        children,
                    )
                })
            ToggleGroupItem.displayName =
                $6c1fd9e6a8969628$export$6d08773d2e66f8f2.displayName
            try {
                ;(ToggleGroup.displayName = 'ToggleGroup'),
                    (ToggleGroup.__docgenInfo = {
                        description: '',
                        displayName: 'ToggleGroup',
                        props: {
                            asChild: {
                                defaultValue: null,
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
                                type: { name: '"default" | "outline" | null' },
                            },
                            size: {
                                defaultValue: null,
                                description: '',
                                name: 'size',
                                required: !1,
                                type: {
                                    name: '"default" | "sm" | "lg" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/toggle-group.tsx#ToggleGroup'
                        ] = {
                            docgenInfo: ToggleGroup.__docgenInfo,
                            name: 'ToggleGroup',
                            path: 'src/components/ui/toggle-group.tsx#ToggleGroup',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(ToggleGroupItem.displayName = 'ToggleGroupItem'),
                    (ToggleGroupItem.__docgenInfo = {
                        description: '',
                        displayName: 'ToggleGroupItem',
                        props: {
                            asChild: {
                                defaultValue: null,
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
                                type: { name: '"default" | "outline" | null' },
                            },
                            size: {
                                defaultValue: null,
                                description: '',
                                name: 'size',
                                required: !1,
                                type: {
                                    name: '"default" | "sm" | "lg" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/toggle-group.tsx#ToggleGroupItem'
                        ] = {
                            docgenInfo: ToggleGroupItem.__docgenInfo,
                            name: 'ToggleGroupItem',
                            path: 'src/components/ui/toggle-group.tsx#ToggleGroupItem',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var toggle_group_stories_jsx = react.createElement
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
            var ToggleGroupDefaultStyle = { args: { variant: 'default' } },
                ToggleGroupOutlineStyle = { args: { variant: 'outline' } },
                ToggleGroupSingle = {
                    args: { variant: 'outline' },
                    render: function render(args) {
                        return toggle_group_stories_jsx(
                            react.Fragment,
                            null,
                            toggle_group_stories_jsx(
                                ToggleGroup,
                                {
                                    variant: args.variant,
                                    size: args.size,
                                    disabled: args.disabled,
                                    type: 'single',
                                },
                                toggle_group_stories_jsx(
                                    ToggleGroupItem,
                                    {
                                        value: 'bold',
                                        'aria-label': 'Toggle bold',
                                    },
                                    toggle_group_stories_jsx(bold.Z, {
                                        className: 'h-4 w-4',
                                    }),
                                ),
                                toggle_group_stories_jsx(
                                    ToggleGroupItem,
                                    {
                                        value: 'italic',
                                        'aria-label': 'Toggle italic',
                                    },
                                    toggle_group_stories_jsx(italic.Z, {
                                        className: 'h-4 w-4',
                                    }),
                                ),
                                toggle_group_stories_jsx(
                                    ToggleGroupItem,
                                    {
                                        value: 'strikethrough',
                                        'aria-label': 'Toggle strikethrough',
                                    },
                                    toggle_group_stories_jsx(Underline, {
                                        className: 'h-4 w-4',
                                    }),
                                ),
                            ),
                        )
                    },
                },
                ToggleGroupSizeDefault = {
                    args: { variant: 'default', size: 'default' },
                },
                ToggleGroupSizeSmall = {
                    args: { variant: 'default', size: 'sm' },
                },
                ToggleGroupSizeLarge = {
                    args: { variant: 'default', size: 'lg' },
                },
                ToggleGroupDisabled = {
                    args: { variant: 'default', size: 'default', disabled: !0 },
                }
            const toggle_group_stories = {
                title: 'RealCube/toggle-group',
                tags: ['autodocs'],
                argTypes: {
                    variant: {
                        control: 'select',
                        options: ['default', 'outline'],
                    },
                    size: {
                        control: 'select',
                        options: ['default', 'sm', 'lg'],
                    },
                },
                parameters: { layout: 'centered' },
                render: function render(args) {
                    return toggle_group_stories_jsx(
                        react.Fragment,
                        null,
                        toggle_group_stories_jsx(
                            ToggleGroup,
                            {
                                variant: args.variant,
                                size: args.size,
                                disabled: args.disabled,
                                type: 'multiple',
                            },
                            toggle_group_stories_jsx(
                                ToggleGroupItem,
                                { value: 'bold', 'aria-label': 'Toggle bold' },
                                toggle_group_stories_jsx(bold.Z, {
                                    className: 'h-4 w-4',
                                }),
                            ),
                            toggle_group_stories_jsx(
                                ToggleGroupItem,
                                {
                                    value: 'italic',
                                    'aria-label': 'Toggle italic',
                                },
                                toggle_group_stories_jsx(italic.Z, {
                                    className: 'h-4 w-4',
                                }),
                            ),
                            toggle_group_stories_jsx(
                                ToggleGroupItem,
                                {
                                    value: 'strikethrough',
                                    'aria-label': 'Toggle strikethrough',
                                },
                                toggle_group_stories_jsx(Underline, {
                                    className: 'h-4 w-4',
                                }),
                            ),
                        ),
                    )
                },
            }
            ;(ToggleGroupDefaultStyle.parameters = _objectSpread(
                _objectSpread({}, ToggleGroupDefaultStyle.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_ToggleGroupDefaultSt =
                                    ToggleGroupDefaultStyle.parameters) ||
                                void 0 === _ToggleGroupDefaultSt
                                ? void 0
                                : _ToggleGroupDefaultSt.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        "{\n  args: {\n    variant: 'default'\n  }\n}",
                                },
                                null ===
                                    (_ToggleGroupDefaultSt2 =
                                        ToggleGroupDefaultStyle.parameters) ||
                                    void 0 === _ToggleGroupDefaultSt2 ||
                                    null ===
                                        (_ToggleGroupDefaultSt2 =
                                            _ToggleGroupDefaultSt2.docs) ||
                                    void 0 === _ToggleGroupDefaultSt2
                                    ? void 0
                                    : _ToggleGroupDefaultSt2.source,
                            ),
                        },
                    ),
                },
            )),
                (ToggleGroupOutlineStyle.parameters = _objectSpread(
                    _objectSpread({}, ToggleGroupOutlineStyle.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToggleGroupOutlineSt =
                                        ToggleGroupOutlineStyle.parameters) ||
                                    void 0 === _ToggleGroupOutlineSt
                                    ? void 0
                                    : _ToggleGroupOutlineSt.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'outline'\n  }\n}",
                                    },
                                    null ===
                                        (_ToggleGroupOutlineSt2 =
                                            ToggleGroupOutlineStyle.parameters) ||
                                        void 0 === _ToggleGroupOutlineSt2 ||
                                        null ===
                                            (_ToggleGroupOutlineSt2 =
                                                _ToggleGroupOutlineSt2.docs) ||
                                        void 0 === _ToggleGroupOutlineSt2
                                        ? void 0
                                        : _ToggleGroupOutlineSt2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToggleGroupSingle.parameters = _objectSpread(
                    _objectSpread({}, ToggleGroupSingle.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToggleGroupSingle$pa =
                                        ToggleGroupSingle.parameters) ||
                                    void 0 === _ToggleGroupSingle$pa
                                    ? void 0
                                    : _ToggleGroupSingle$pa.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  args: {\n    variant: \'outline\'\n  },\n  render: args => <>\n            <ToggleGroup variant={args.variant} size={args.size} disabled={args.disabled} type="single">\n                <ToggleGroupItem value="bold" aria-label="Toggle bold">\n                    <Bold className="h-4 w-4" />\n                </ToggleGroupItem>\n                <ToggleGroupItem value="italic" aria-label="Toggle italic">\n                    <Italic className="h-4 w-4" />\n                </ToggleGroupItem>\n                <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">\n                    <Underline className="h-4 w-4" />\n                </ToggleGroupItem>\n            </ToggleGroup>\n        </>\n}',
                                    },
                                    null ===
                                        (_ToggleGroupSingle$pa2 =
                                            ToggleGroupSingle.parameters) ||
                                        void 0 === _ToggleGroupSingle$pa2 ||
                                        null ===
                                            (_ToggleGroupSingle$pa2 =
                                                _ToggleGroupSingle$pa2.docs) ||
                                        void 0 === _ToggleGroupSingle$pa2
                                        ? void 0
                                        : _ToggleGroupSingle$pa2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToggleGroupSizeDefault.parameters = _objectSpread(
                    _objectSpread({}, ToggleGroupSizeDefault.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToggleGroupSizeDefau =
                                        ToggleGroupSizeDefault.parameters) ||
                                    void 0 === _ToggleGroupSizeDefau
                                    ? void 0
                                    : _ToggleGroupSizeDefau.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'default',\n    size: 'default'\n  }\n}",
                                    },
                                    null ===
                                        (_ToggleGroupSizeDefau2 =
                                            ToggleGroupSizeDefault.parameters) ||
                                        void 0 === _ToggleGroupSizeDefau2 ||
                                        null ===
                                            (_ToggleGroupSizeDefau2 =
                                                _ToggleGroupSizeDefau2.docs) ||
                                        void 0 === _ToggleGroupSizeDefau2
                                        ? void 0
                                        : _ToggleGroupSizeDefau2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToggleGroupSizeSmall.parameters = _objectSpread(
                    _objectSpread({}, ToggleGroupSizeSmall.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToggleGroupSizeSmall =
                                        ToggleGroupSizeSmall.parameters) ||
                                    void 0 === _ToggleGroupSizeSmall
                                    ? void 0
                                    : _ToggleGroupSizeSmall.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'default',\n    size: 'sm'\n  }\n}",
                                    },
                                    null ===
                                        (_ToggleGroupSizeSmall2 =
                                            ToggleGroupSizeSmall.parameters) ||
                                        void 0 === _ToggleGroupSizeSmall2 ||
                                        null ===
                                            (_ToggleGroupSizeSmall2 =
                                                _ToggleGroupSizeSmall2.docs) ||
                                        void 0 === _ToggleGroupSizeSmall2
                                        ? void 0
                                        : _ToggleGroupSizeSmall2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToggleGroupSizeLarge.parameters = _objectSpread(
                    _objectSpread({}, ToggleGroupSizeLarge.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToggleGroupSizeLarge =
                                        ToggleGroupSizeLarge.parameters) ||
                                    void 0 === _ToggleGroupSizeLarge
                                    ? void 0
                                    : _ToggleGroupSizeLarge.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'default',\n    size: 'lg'\n  }\n}",
                                    },
                                    null ===
                                        (_ToggleGroupSizeLarge2 =
                                            ToggleGroupSizeLarge.parameters) ||
                                        void 0 === _ToggleGroupSizeLarge2 ||
                                        null ===
                                            (_ToggleGroupSizeLarge2 =
                                                _ToggleGroupSizeLarge2.docs) ||
                                        void 0 === _ToggleGroupSizeLarge2
                                        ? void 0
                                        : _ToggleGroupSizeLarge2.source,
                                ),
                            },
                        ),
                    },
                )),
                (ToggleGroupDisabled.parameters = _objectSpread(
                    _objectSpread({}, ToggleGroupDisabled.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_ToggleGroupDisabled$ =
                                        ToggleGroupDisabled.parameters) ||
                                    void 0 === _ToggleGroupDisabled$
                                    ? void 0
                                    : _ToggleGroupDisabled$.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            "{\n  args: {\n    variant: 'default',\n    size: 'default',\n    disabled: true\n  }\n}",
                                    },
                                    null ===
                                        (_ToggleGroupDisabled$2 =
                                            ToggleGroupDisabled.parameters) ||
                                        void 0 === _ToggleGroupDisabled$2 ||
                                        null ===
                                            (_ToggleGroupDisabled$2 =
                                                _ToggleGroupDisabled$2.docs) ||
                                        void 0 === _ToggleGroupDisabled$2
                                        ? void 0
                                        : _ToggleGroupDisabled$2.source,
                                ),
                            },
                        ),
                    },
                ))
            const __namedExportsOrder = [
                'ToggleGroupDefaultStyle',
                'ToggleGroupOutlineStyle',
                'ToggleGroupSingle',
                'ToggleGroupSizeDefault',
                'ToggleGroupSizeSmall',
                'ToggleGroupSizeLarge',
                'ToggleGroupDisabled',
            ]
        },
        './src/components/ui/toggle.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                E: () => toggleVariants,
                Z: () => Toggle,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-toggle/dist/index.mjs',
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
                _excluded = ['className', 'variant', 'size'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                toggleVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
                    {
                        variants: {
                            variant: {
                                default: 'bg-transparent',
                                outline:
                                    'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
                            },
                            size: {
                                default: 'h-10 px-3',
                                sm: 'h-9 px-2.5',
                                lg: 'h-11 px-5',
                            },
                        },
                        defaultVariants: {
                            variant: 'default',
                            size: 'default',
                        },
                    },
                ),
                Toggle = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            variant = _ref.variant,
                            size = _ref.size,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__.f,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        toggleVariants({
                                            variant,
                                            size,
                                            className,
                                        }),
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Toggle.displayName =
                _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__.f.displayName
            try {
                ;(Toggle.displayName = 'Toggle'),
                    (Toggle.__docgenInfo = {
                        description: '',
                        displayName: 'Toggle',
                        props: {
                            asChild: {
                                defaultValue: null,
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
                                type: { name: '"default" | "outline" | null' },
                            },
                            size: {
                                defaultValue: null,
                                description: '',
                                name: 'size',
                                required: !1,
                                type: {
                                    name: '"default" | "sm" | "lg" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/toggle.tsx#Toggle'
                        ] = {
                            docgenInfo: Toggle.__docgenInfo,
                            name: 'Toggle',
                            path: 'src/components/ui/toggle.tsx#Toggle',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './node_modules/lucide-react/dist/esm/icons/bold.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Bold })
            const Bold = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Bold', [
                ['path', { d: 'M14 12a4 4 0 0 0 0-8H6v8', key: 'v2sylx' }],
                ['path', { d: 'M15 20a4 4 0 0 0 0-8H6v8Z', key: '1ef5ya' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/italic.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Italic })
            const Italic = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Italic', [
                [
                    'line',
                    { x1: '19', x2: '10', y1: '4', y2: '4', key: '15jd3p' },
                ],
                [
                    'line',
                    { x1: '14', x2: '5', y1: '20', y2: '20', key: 'bu0au3' },
                ],
                [
                    'line',
                    { x1: '15', x2: '9', y1: '4', y2: '20', key: 'uljnxc' },
                ],
            ])
        },
    },
])
