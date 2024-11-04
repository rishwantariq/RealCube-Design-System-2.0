'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [8662],
    {
        './node_modules/@radix-ui/react-radio-group/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                ck: () => $f99a8c78507165f7$export$6d08773d2e66f8f2,
                fC: () => $f99a8c78507165f7$export$be92b6f5f03c0fe9,
                z$: () => $f99a8c78507165f7$export$adb584737d712b70,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ =
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
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    ),
                _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-roving-focus/dist/index.mjs',
                    ),
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_11__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                    ),
                _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_10__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-direction/dist/index.mjs',
                    ),
                _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-size/dist/index.mjs',
                    ),
                _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-previous/dist/index.mjs',
                    ),
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-presence/dist/index.mjs',
                    )
            const [
                    $ce77a8961b41be9e$var$createRadioContext,
                    $ce77a8961b41be9e$export$67d2296460f1b002,
                ] = (0, _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(
                    'Radio',
                ),
                [
                    $ce77a8961b41be9e$var$RadioProvider,
                    $ce77a8961b41be9e$var$useRadioContext,
                ] = $ce77a8961b41be9e$var$createRadioContext('Radio'),
                $ce77a8961b41be9e$export$d7b12c4107be0d61 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeRadio,
                                name,
                                checked = !1,
                                required,
                                disabled,
                                value = 'on',
                                onCheck,
                                ...radioProps
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
                                !button || Boolean(button.closest('form'))
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            $ce77a8961b41be9e$var$RadioProvider,
                            { scope: __scopeRadio, checked, disabled },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__
                                    .WV.button,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    {
                                        type: 'button',
                                        role: 'radio',
                                        'aria-checked': checked,
                                        'data-state':
                                            $ce77a8961b41be9e$var$getState(
                                                checked,
                                            ),
                                        'data-disabled': disabled ? '' : void 0,
                                        disabled,
                                        value,
                                    },
                                    radioProps,
                                    {
                                        ref: composedRefs,
                                        onClick: (0,
                                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.M)(
                                            props.onClick,
                                            (event) => {
                                                checked ||
                                                    null == onCheck ||
                                                    onCheck(),
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
                                    $ce77a8961b41be9e$var$BubbleInput,
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
                $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const { __scopeRadio, forceMount, ...indicatorProps } =
                                props,
                            context = $ce77a8961b41be9e$var$useRadioContext(
                                'RadioIndicator',
                                __scopeRadio,
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__.z,
                            { present: forceMount || context.checked },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__
                                    .WV.span,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    {
                                        'data-state':
                                            $ce77a8961b41be9e$var$getState(
                                                context.checked,
                                            ),
                                        'data-disabled': context.disabled
                                            ? ''
                                            : void 0,
                                    },
                                    indicatorProps,
                                    { ref: forwardedRef },
                                ),
                            ),
                        )
                    },
                ),
                $ce77a8961b41be9e$var$BubbleInput = (props) => {
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
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    type: 'radio',
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
            function $ce77a8961b41be9e$var$getState(checked) {
                return checked ? 'checked' : 'unchecked'
            }
            const $f99a8c78507165f7$var$ARROW_KEYS = [
                    'ArrowUp',
                    'ArrowDown',
                    'ArrowLeft',
                    'ArrowRight',
                ],
                [
                    $f99a8c78507165f7$var$createRadioGroupContext,
                    $f99a8c78507165f7$export$c547093f11b76da2,
                ] = (0, _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(
                    'RadioGroup',
                    [
                        _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.Pc,
                        $ce77a8961b41be9e$export$67d2296460f1b002,
                    ],
                ),
                $f99a8c78507165f7$var$useRovingFocusGroupScope = (0,
                _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.Pc)(),
                $f99a8c78507165f7$var$useRadioScope =
                    $ce77a8961b41be9e$export$67d2296460f1b002(),
                [
                    $f99a8c78507165f7$var$RadioGroupProvider,
                    $f99a8c78507165f7$var$useRadioGroupContext,
                ] = $f99a8c78507165f7$var$createRadioGroupContext('RadioGroup'),
                $f99a8c78507165f7$export$a98f0dcb43a68a25 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeRadioGroup,
                                name,
                                defaultValue,
                                value: valueProp,
                                required = !1,
                                disabled = !1,
                                orientation,
                                dir,
                                loop = !0,
                                onValueChange,
                                ...groupProps
                            } = props,
                            rovingFocusGroupScope =
                                $f99a8c78507165f7$var$useRovingFocusGroupScope(
                                    __scopeRadioGroup,
                                ),
                            direction = (0,
                            _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_10__.gm)(
                                dir,
                            ),
                            [value, setValue] = (0,
                            _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_11__.T)(
                                {
                                    prop: valueProp,
                                    defaultProp: defaultValue,
                                    onChange: onValueChange,
                                },
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            $f99a8c78507165f7$var$RadioGroupProvider,
                            {
                                scope: __scopeRadioGroup,
                                name,
                                required,
                                disabled,
                                value,
                                onValueChange: setValue,
                            },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.fC,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    { asChild: !0 },
                                    rovingFocusGroupScope,
                                    { orientation, dir: direction, loop },
                                ),
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__
                                        .WV.div,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                        {
                                            role: 'radiogroup',
                                            'aria-required': required,
                                            'aria-orientation': orientation,
                                            'data-disabled': disabled
                                                ? ''
                                                : void 0,
                                            dir: direction,
                                        },
                                        groupProps,
                                        { ref: forwardedRef },
                                    ),
                                ),
                            ),
                        )
                    },
                ),
                $f99a8c78507165f7$export$9f866c100ef519e4 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const { __scopeRadioGroup, disabled, ...itemProps } =
                                props,
                            context =
                                $f99a8c78507165f7$var$useRadioGroupContext(
                                    'RadioGroupItem',
                                    __scopeRadioGroup,
                                ),
                            isDisabled = context.disabled || disabled,
                            rovingFocusGroupScope =
                                $f99a8c78507165f7$var$useRovingFocusGroupScope(
                                    __scopeRadioGroup,
                                ),
                            radioScope =
                                $f99a8c78507165f7$var$useRadioScope(
                                    __scopeRadioGroup,
                                ),
                            ref = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
                            composedRefs = (0,
                            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(
                                forwardedRef,
                                ref,
                            ),
                            checked = context.value === itemProps.value,
                            isArrowKeyPressedRef = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1)
                        return (
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                const handleKeyDown = (event) => {
                                        $f99a8c78507165f7$var$ARROW_KEYS.includes(
                                            event.key,
                                        ) && (isArrowKeyPressedRef.current = !0)
                                    },
                                    handleKeyUp = () =>
                                        (isArrowKeyPressedRef.current = !1)
                                return (
                                    document.addEventListener(
                                        'keydown',
                                        handleKeyDown,
                                    ),
                                    document.addEventListener(
                                        'keyup',
                                        handleKeyUp,
                                    ),
                                    () => {
                                        document.removeEventListener(
                                            'keydown',
                                            handleKeyDown,
                                        ),
                                            document.removeEventListener(
                                                'keyup',
                                                handleKeyUp,
                                            )
                                    }
                                )
                            }, []),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.ck,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    { asChild: !0 },
                                    rovingFocusGroupScope,
                                    { focusable: !isDisabled, active: checked },
                                ),
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    $ce77a8961b41be9e$export$d7b12c4107be0d61,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                        {
                                            disabled: isDisabled,
                                            required: context.required,
                                            checked,
                                        },
                                        radioScope,
                                        itemProps,
                                        {
                                            name: context.name,
                                            ref: composedRefs,
                                            onCheck: () =>
                                                context.onValueChange(
                                                    itemProps.value,
                                                ),
                                            onKeyDown: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.M)(
                                                (event) => {
                                                    'Enter' === event.key &&
                                                        event.preventDefault()
                                                },
                                            ),
                                            onFocus: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.M)(
                                                itemProps.onFocus,
                                                () => {
                                                    var _ref$current
                                                    isArrowKeyPressedRef.current &&
                                                        (null ===
                                                            (_ref$current =
                                                                ref.current) ||
                                                            void 0 ===
                                                                _ref$current ||
                                                            _ref$current.click())
                                                },
                                            ),
                                        },
                                    ),
                                ),
                            )
                        )
                    },
                ),
                $f99a8c78507165f7$export$5fb54c671a65c88 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const { __scopeRadioGroup, ...indicatorProps } = props,
                            radioScope =
                                $f99a8c78507165f7$var$useRadioScope(
                                    __scopeRadioGroup,
                                )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            $ce77a8961b41be9e$export$d35a9ffa9a04f9e7,
                            (0,
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {},
                                radioScope,
                                indicatorProps,
                                { ref: forwardedRef },
                            ),
                        )
                    },
                ),
                $f99a8c78507165f7$export$be92b6f5f03c0fe9 =
                    $f99a8c78507165f7$export$a98f0dcb43a68a25,
                $f99a8c78507165f7$export$6d08773d2e66f8f2 =
                    $f99a8c78507165f7$export$9f866c100ef519e4,
                $f99a8c78507165f7$export$adb584737d712b70 =
                    $f99a8c78507165f7$export$5fb54c671a65c88
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
    },
])
