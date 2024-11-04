/*! For license information please see 9038.45f4c44d.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [9038],
    {
        './node_modules/@radix-ui/react-checkbox/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                fC: () => $e698a72e93240346$export$be92b6f5f03c0fe9,
                z$: () => $e698a72e93240346$export$adb584737d712b70,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                    ),
                _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-context/dist/index.mjs',
                    ),
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/primitive/dist/index.mjs',
                    ),
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs',
                    ),
                _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-previous/dist/index.mjs',
                    ),
                _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-size/dist/index.mjs',
                    ),
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-presence/dist/index.mjs',
                    ),
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    )
            const [
                    $e698a72e93240346$var$createCheckboxContext,
                    $e698a72e93240346$export$b566c4ff5488ea01,
                ] = (0, _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(
                    'Checkbox',
                ),
                [
                    $e698a72e93240346$var$CheckboxProvider,
                    $e698a72e93240346$var$useCheckboxContext,
                ] = $e698a72e93240346$var$createCheckboxContext('Checkbox'),
                $e698a72e93240346$export$48513f6b9f8ce62d = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeCheckbox,
                                name,
                                checked: checkedProp,
                                defaultChecked,
                                required,
                                disabled,
                                value = 'on',
                                onCheckedChange,
                                ...checkboxProps
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
                            ),
                            initialCheckedStateRef = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(checked)
                        return (
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                const form =
                                    null == button ? void 0 : button.form
                                if (form) {
                                    const reset = () =>
                                        setChecked(
                                            initialCheckedStateRef.current,
                                        )
                                    return (
                                        form.addEventListener('reset', reset),
                                        () =>
                                            form.removeEventListener(
                                                'reset',
                                                reset,
                                            )
                                    )
                                }
                            }, [button, setChecked]),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                $e698a72e93240346$var$CheckboxProvider,
                                {
                                    scope: __scopeCheckbox,
                                    state: checked,
                                    disabled,
                                },
                                (0,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__
                                        .WV.button,
                                    (0,
                                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                        {
                                            type: 'button',
                                            role: 'checkbox',
                                            'aria-checked':
                                                $e698a72e93240346$var$isIndeterminate(
                                                    checked,
                                                )
                                                    ? 'mixed'
                                                    : checked,
                                            'aria-required': required,
                                            'data-state':
                                                $e698a72e93240346$var$getState(
                                                    checked,
                                                ),
                                            'data-disabled': disabled
                                                ? ''
                                                : void 0,
                                            disabled,
                                            value,
                                        },
                                        checkboxProps,
                                        {
                                            ref: composedRefs,
                                            onKeyDown: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                                props.onKeyDown,
                                                (event) => {
                                                    'Enter' === event.key &&
                                                        event.preventDefault()
                                                },
                                            ),
                                            onClick: (0,
                                            _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(
                                                props.onClick,
                                                (event) => {
                                                    setChecked(
                                                        (prevChecked) =>
                                                            !!$e698a72e93240346$var$isIndeterminate(
                                                                prevChecked,
                                                            ) || !prevChecked,
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
                                        $e698a72e93240346$var$BubbleInput,
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
                        )
                    },
                ),
                $e698a72e93240346$export$59aad738f51d1c05 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                __scopeCheckbox,
                                forceMount,
                                ...indicatorProps
                            } = props,
                            context = $e698a72e93240346$var$useCheckboxContext(
                                'CheckboxIndicator',
                                __scopeCheckbox,
                            )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.z,
                            {
                                present:
                                    forceMount ||
                                    $e698a72e93240346$var$isIndeterminate(
                                        context.state,
                                    ) ||
                                    !0 === context.state,
                            },
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__
                                    .WV.span,
                                (0,
                                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                    {
                                        'data-state':
                                            $e698a72e93240346$var$getState(
                                                context.state,
                                            ),
                                        'data-disabled': context.disabled
                                            ? ''
                                            : void 0,
                                    },
                                    indicatorProps,
                                    {
                                        ref: forwardedRef,
                                        style: {
                                            pointerEvents: 'none',
                                            ...props.style,
                                        },
                                    },
                                ),
                            ),
                        )
                    },
                ),
                $e698a72e93240346$var$BubbleInput = (props) => {
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
                        _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__.D)(
                            checked,
                        ),
                        controlSize = (0,
                        _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__.t)(
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
                                ;(input.indeterminate =
                                    $e698a72e93240346$var$isIndeterminate(
                                        checked,
                                    )),
                                    setChecked.call(
                                        input,
                                        !$e698a72e93240346$var$isIndeterminate(
                                            checked,
                                        ) && checked,
                                    ),
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
                                    defaultChecked:
                                        !$e698a72e93240346$var$isIndeterminate(
                                            checked,
                                        ) && checked,
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
            function $e698a72e93240346$var$isIndeterminate(checked) {
                return 'indeterminate' === checked
            }
            function $e698a72e93240346$var$getState(checked) {
                return $e698a72e93240346$var$isIndeterminate(checked)
                    ? 'indeterminate'
                    : checked
                      ? 'checked'
                      : 'unchecked'
            }
            const $e698a72e93240346$export$be92b6f5f03c0fe9 =
                    $e698a72e93240346$export$48513f6b9f8ce62d,
                $e698a72e93240346$export$adb584737d712b70 =
                    $e698a72e93240346$export$59aad738f51d1c05
        },
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
        './node_modules/@radix-ui/react-use-previous/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                D: () => $010c2913dbd2fe3d$export$5cae361ad82dce8b,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
                const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                    value,
                    previous: value,
                })
                return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                    () => (
                        ref.current.value !== value &&
                            ((ref.current.previous = ref.current.value),
                            (ref.current.value = value)),
                        ref.current.previous
                    ),
                    [value],
                )
            }
        },
        './node_modules/@radix-ui/react-use-size/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                t: () => $db6c3485150b8e66$export$1ab7ae714698c4b8,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs',
                    )
            function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
                const [size, setSize] = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0)
                return (
                    (0,
                    _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                        if (element) {
                            setSize({
                                width: element.offsetWidth,
                                height: element.offsetHeight,
                            })
                            const resizeObserver = new ResizeObserver(
                                (entries) => {
                                    if (!Array.isArray(entries)) return
                                    if (!entries.length) return
                                    const entry = entries[0]
                                    let width, height
                                    if ('borderBoxSize' in entry) {
                                        const borderSizeEntry =
                                                entry.borderBoxSize,
                                            borderSize = Array.isArray(
                                                borderSizeEntry,
                                            )
                                                ? borderSizeEntry[0]
                                                : borderSizeEntry
                                        ;(width = borderSize.inlineSize),
                                            (height = borderSize.blockSize)
                                    } else
                                        (width = element.offsetWidth),
                                            (height = element.offsetHeight)
                                    setSize({ width, height })
                                },
                            )
                            return (
                                resizeObserver.observe(element, {
                                    box: 'border-box',
                                }),
                                () => resizeObserver.unobserve(element)
                            )
                        }
                        setSize(void 0)
                    }, [element]),
                    size
                )
            }
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
