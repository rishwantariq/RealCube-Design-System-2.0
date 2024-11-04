'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [13],
    {
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
        './src/components/ui/stories/context-menu-demo.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    ContextMenuDemo: () => ContextMenuDemo,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _ContextMenuDemo$para,
                _ContextMenuDemo$para2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _context_menu__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__('./src/components/ui/context-menu.tsx'),
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
                title: 'RealCube/context-menu',
                component: function component() {
                    return __jsx(
                        _context_menu__WEBPACK_IMPORTED_MODULE_2__.xV,
                        null,
                        __jsx(
                            _context_menu__WEBPACK_IMPORTED_MODULE_2__.W4,
                            {
                                className:
                                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                            },
                            'Right click here',
                        ),
                        __jsx(
                            _context_menu__WEBPACK_IMPORTED_MODULE_2__.h_,
                            { className: 'w-64' },
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                { inset: !0 },
                                'Back',
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.cX,
                                    null,
                                    '⌘[',
                                ),
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                { inset: !0, disabled: !0 },
                                'Forward',
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.cX,
                                    null,
                                    '⌘]',
                                ),
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                { inset: !0 },
                                'Reload',
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.cX,
                                    null,
                                    '⌘R',
                                ),
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.qu,
                                null,
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.xx,
                                    { inset: !0 },
                                    'More Tools',
                                ),
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.dp,
                                    { className: 'w-48' },
                                    __jsx(
                                        _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                        null,
                                        'Save Page As...',
                                        __jsx(
                                            _context_menu__WEBPACK_IMPORTED_MODULE_2__.cX,
                                            null,
                                            '⇧⌘S',
                                        ),
                                    ),
                                    __jsx(
                                        _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                        null,
                                        'Create Shortcut...',
                                    ),
                                    __jsx(
                                        _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                        null,
                                        'Name Window...',
                                    ),
                                    __jsx(
                                        _context_menu__WEBPACK_IMPORTED_MODULE_2__.uP,
                                        null,
                                    ),
                                    __jsx(
                                        _context_menu__WEBPACK_IMPORTED_MODULE_2__.Zo,
                                        null,
                                        'Developer Tools',
                                    ),
                                ),
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.uP,
                                null,
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.$c,
                                { checked: !0 },
                                'Show Bookmarks Bar',
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.cX,
                                    null,
                                    '⌘⇧B',
                                ),
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.$c,
                                null,
                                'Show Full URLs',
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.uP,
                                null,
                            ),
                            __jsx(
                                _context_menu__WEBPACK_IMPORTED_MODULE_2__.Lc,
                                { value: 'pedro' },
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.OS,
                                    { inset: !0 },
                                    'People',
                                ),
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.uP,
                                    null,
                                ),
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.zP,
                                    { value: 'pedro' },
                                    'Pedro Duarte',
                                ),
                                __jsx(
                                    _context_menu__WEBPACK_IMPORTED_MODULE_2__.zP,
                                    { value: 'colm' },
                                    'Colm Tuite',
                                ),
                            ),
                        ),
                    )
                },
                parameters: { layout: 'centered' },
            }
            var ContextMenuDemo = { args: {} }
            ContextMenuDemo.parameters = _objectSpread(
                _objectSpread({}, ContextMenuDemo.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_ContextMenuDemo$para =
                                    ContextMenuDemo.parameters) ||
                                void 0 === _ContextMenuDemo$para
                                ? void 0
                                : _ContextMenuDemo$para.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{\n  args: {}\n}' },
                                null ===
                                    (_ContextMenuDemo$para2 =
                                        ContextMenuDemo.parameters) ||
                                    void 0 === _ContextMenuDemo$para2 ||
                                    null ===
                                        (_ContextMenuDemo$para2 =
                                            _ContextMenuDemo$para2.docs) ||
                                    void 0 === _ContextMenuDemo$para2
                                    ? void 0
                                    : _ContextMenuDemo$para2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['ContextMenuDemo']
        },
        './src/components/ui/context-menu.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $c: () => ContextMenuCheckboxItem,
                Lc: () => ContextMenuRadioGroup,
                OS: () => ContextMenuLabel,
                W4: () => ContextMenuTrigger,
                Zo: () => ContextMenuItem,
                cX: () => ContextMenuShortcut,
                dp: () => ContextMenuSubContent,
                h_: () => ContextMenuContent,
                qu: () => ContextMenuSub,
                uP: () => ContextMenuSeparator,
                xV: () => ContextMenu,
                xx: () => ContextMenuSubTrigger,
                zP: () => ContextMenuRadioItem,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-context-menu/dist/index.mjs',
                    ),
                lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/chevron-right.js',
                ),
                lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/check.js',
                ),
                lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/circle.js',
                ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'inset', 'children'],
                _excluded2 = ['className'],
                _excluded3 = ['className'],
                _excluded4 = ['className', 'inset'],
                _excluded5 = ['className', 'children', 'checked'],
                _excluded6 = ['className', 'children'],
                _excluded7 = ['className', 'inset'],
                _excluded8 = ['className'],
                _excluded9 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                ContextMenu =
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.fC,
                ContextMenuTrigger =
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.xz,
                ContextMenuSub =
                    (_radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.ZA,
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Tr),
                ContextMenuRadioGroup =
                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Ee,
                ContextMenuSubTrigger =
                    react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                        function (_ref, ref) {
                            var className = _ref.className,
                                inset = _ref.inset,
                                children = _ref.children,
                                props = (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                    _ref,
                                    _excluded,
                                )
                            return __jsx(
                                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.fF,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                                            inset && 'pl-8',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                                children,
                                __jsx(
                                    lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,
                                    { className: 'ml-auto h-4 w-4' },
                                ),
                            )
                        },
                    )
            ContextMenuSubTrigger.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.fF.displayName
            var ContextMenuSubContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref2, ref) {
                        var className = _ref2.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref2,
                                _excluded2,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.tu,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            ContextMenuSubContent.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.tu.displayName
            var ContextMenuContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref3, ref) {
                        var className = _ref3.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref3,
                                _excluded3,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                            null,
                            __jsx(
                                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            ContextMenuContent.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var ContextMenuItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref4, ref) {
                    var className = _ref4.className,
                        inset = _ref4.inset,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref4,
                            _excluded4,
                        )
                    return __jsx(
                        _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.ck,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                    inset && 'pl-8',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            ContextMenuItem.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName
            var ContextMenuCheckboxItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref5, ref) {
                        var className = _ref5.className,
                            children = _ref5.children,
                            checked = _ref5.checked,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref5,
                                _excluded5,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.oC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        className,
                                    ),
                                    checked,
                                },
                                props,
                            ),
                            __jsx(
                                'span',
                                {
                                    className:
                                        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                                },
                                __jsx(
                                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
                                    null,
                                    __jsx(
                                        lucide_react__WEBPACK_IMPORTED_MODULE_6__.Z,
                                        { className: 'h-4 w-4' },
                                    ),
                                ),
                            ),
                            children,
                        )
                    },
                )
            ContextMenuCheckboxItem.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.oC.displayName
            var ContextMenuRadioItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref6, ref) {
                        var className = _ref6.className,
                            children = _ref6.children,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref6,
                                _excluded6,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Rk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        className,
                                    ),
                                },
                                props,
                            ),
                            __jsx(
                                'span',
                                {
                                    className:
                                        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                                },
                                __jsx(
                                    _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
                                    null,
                                    __jsx(
                                        lucide_react__WEBPACK_IMPORTED_MODULE_7__.Z,
                                        { className: 'h-2 w-2 fill-current' },
                                    ),
                                ),
                            ),
                            children,
                        )
                    },
                )
            ContextMenuRadioItem.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Rk.displayName
            var ContextMenuLabel =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref7, ref) {
                        var className = _ref7.className,
                            inset = _ref7.inset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref7,
                                _excluded7,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.__,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'px-2 py-1.5 text-sm font-semibold text-foreground',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            ContextMenuLabel.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.__.displayName
            var ContextMenuSeparator =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref8, ref) {
                        var className = _ref8.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref8,
                                _excluded8,
                            )
                        return __jsx(
                            _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Z0,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        '-mx-1 my-1 h-px bg-border',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            ContextMenuSeparator.displayName =
                _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_1__.Z0.displayName
            var ContextMenuShortcut = function ContextMenuShortcut(_ref9) {
                var className = _ref9.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref9,
                        _excluded9,
                    )
                return __jsx(
                    'span',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'ml-auto text-xs tracking-widest text-muted-foreground',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(ContextMenuShortcut.displayName = 'ContextMenuShortcut'),
                (ContextMenuShortcut.displayName = 'ContextMenuShortcut')
            try {
                ;(ContextMenuShortcut.displayName = 'ContextMenuShortcut'),
                    (ContextMenuShortcut.__docgenInfo = {
                        description: '',
                        displayName: 'ContextMenuShortcut',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/context-menu.tsx#ContextMenuShortcut'
                        ] = {
                            docgenInfo: ContextMenuShortcut.__docgenInfo,
                            name: 'ContextMenuShortcut',
                            path: 'src/components/ui/context-menu.tsx#ContextMenuShortcut',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
