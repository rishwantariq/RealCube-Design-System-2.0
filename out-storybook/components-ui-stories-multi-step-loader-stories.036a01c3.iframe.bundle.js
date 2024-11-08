/*! For license information please see components-ui-stories-multi-step-loader-stories.036a01c3.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [1612],
    {
        './src/components/ui/stories/multi-step-loader.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Example: () => Example,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => multi_step_loader_stories,
                })
            var defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                utils = __webpack_require__('./src/lib/utils.ts'),
                proxy = __webpack_require__(
                    './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs',
                ),
                AnimatePresence = __webpack_require__(
                    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs',
                ),
                __jsx = react.createElement,
                CheckIcon = function CheckIcon(_ref) {
                    var className = _ref.className
                    return __jsx(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            fill: 'none',
                            viewBox: '0 0 24 24',
                            strokeWidth: 1.5,
                            stroke: 'currentColor',
                            className: (0, utils.cn)('w-6 h-6 ', className),
                        },
                        __jsx('path', {
                            d: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
                        }),
                    )
                }
            CheckIcon.displayName = 'CheckIcon'
            var CheckFilled = function CheckFilled(_ref2) {
                var className = _ref2.className
                return __jsx(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        className: (0, utils.cn)('w-6 h-6 ', className),
                    },
                    __jsx('path', {
                        fillRule: 'evenodd',
                        d: 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
                        clipRule: 'evenodd',
                    }),
                )
            }
            CheckFilled.displayName = 'CheckFilled'
            var LoaderCore = function LoaderCore(_ref3) {
                var loadingStates = _ref3.loadingStates,
                    _ref3$value = _ref3.value,
                    value = void 0 === _ref3$value ? 0 : _ref3$value
                return __jsx(
                    'div',
                    {
                        className:
                            'flex relative justify-start max-w-xl mx-auto flex-col mt-40',
                    },
                    loadingStates.map(function (loadingState, index) {
                        var distance = Math.abs(index - value),
                            opacity = Math.max(1 - 0.2 * distance, 0)
                        return __jsx(
                            proxy.E.div,
                            {
                                key: index,
                                className: (0, utils.cn)(
                                    'text-left flex gap-2 mb-4',
                                ),
                                initial: { opacity: 0, y: -40 * value },
                                animate: { opacity, y: -40 * value },
                                transition: { duration: 0.5 },
                            },
                            __jsx(
                                'div',
                                null,
                                index > value &&
                                    __jsx(CheckIcon, {
                                        className: 'text-black dark:text-white',
                                    }),
                                index <= value &&
                                    __jsx(CheckFilled, {
                                        className: (0, utils.cn)(
                                            'text-black dark:text-white',
                                            value === index &&
                                                'text-black dark:text-primary opacity-100',
                                        ),
                                    }),
                            ),
                            __jsx(
                                'span',
                                {
                                    className: (0, utils.cn)(
                                        'text-black dark:text-white',
                                        value === index &&
                                            'text-black dark:text-primary opacity-100',
                                    ),
                                },
                                loadingState.text,
                            ),
                        )
                    }),
                )
            }
            LoaderCore.displayName = 'LoaderCore'
            var MultiStepLoader = function MultiStepLoader(_ref4) {
                var loadingStates = _ref4.loadingStates,
                    loading = _ref4.loading,
                    _ref4$duration = _ref4.duration,
                    duration = void 0 === _ref4$duration ? 2e3 : _ref4$duration,
                    _ref4$loop = _ref4.loop,
                    loop = void 0 === _ref4$loop || _ref4$loop,
                    _useState = (0, react.useState)(0),
                    currentState = _useState[0],
                    setCurrentState = _useState[1]
                return (
                    (0, react.useEffect)(
                        function () {
                            if (loading) {
                                var timeout = setTimeout(function () {
                                    setCurrentState(function (prevState) {
                                        return loop
                                            ? prevState ===
                                              loadingStates.length - 1
                                                ? 0
                                                : prevState + 1
                                            : Math.min(
                                                  prevState + 1,
                                                  loadingStates.length - 1,
                                              )
                                    })
                                }, duration)
                                return function () {
                                    return clearTimeout(timeout)
                                }
                            }
                            setCurrentState(0)
                        },
                        [
                            currentState,
                            loading,
                            loop,
                            loadingStates.length,
                            duration,
                        ],
                    ),
                    __jsx(
                        AnimatePresence.M,
                        { mode: 'wait' },
                        loading &&
                            __jsx(
                                proxy.E.div,
                                {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    className:
                                        'w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl',
                                },
                                __jsx(
                                    'div',
                                    { className: 'h-96  relative' },
                                    __jsx(LoaderCore, {
                                        value: currentState,
                                        loadingStates,
                                    }),
                                ),
                                __jsx('div', {
                                    className:
                                        'bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]',
                                }),
                            ),
                    )
                )
            }
            MultiStepLoader.displayName = 'MultiStepLoader'
            try {
                ;(MultiStepLoader.displayName = 'MultiStepLoader'),
                    (MultiStepLoader.__docgenInfo = {
                        description: '',
                        displayName: 'MultiStepLoader',
                        props: {
                            loadingStates: {
                                defaultValue: null,
                                description: '',
                                name: 'loadingStates',
                                required: !0,
                                type: { name: 'LoadingState[]' },
                            },
                            loading: {
                                defaultValue: null,
                                description: '',
                                name: 'loading',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            duration: {
                                defaultValue: { value: '2000' },
                                description: '',
                                name: 'duration',
                                required: !1,
                                type: { name: 'number' },
                            },
                            loop: {
                                defaultValue: { value: 'true' },
                                description: '',
                                name: 'loop',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/multi-step-loader.tsx#MultiStepLoader'
                        ] = {
                            docgenInfo: MultiStepLoader.__docgenInfo,
                            name: 'MultiStepLoader',
                            path: 'src/components/ui/multi-step-loader.tsx#MultiStepLoader',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var defaultAttributes = {
                outline: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                },
                filled: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'currentColor',
                    stroke: 'none',
                },
            }
            var _Example$parameters,
                _Example$parameters2,
                IconSquareRoundedX = ((
                    type,
                    iconName,
                    iconNamePascal,
                    iconNode,
                ) => {
                    const Component = (0, react.forwardRef)(
                        (
                            {
                                color = 'currentColor',
                                size = 24,
                                stroke = 2,
                                title,
                                className,
                                children,
                                ...rest
                            },
                            ref,
                        ) =>
                            (0, react.createElement)(
                                'svg',
                                {
                                    ref,
                                    ...defaultAttributes[type],
                                    width: size,
                                    height: size,
                                    className: [
                                        'tabler-icon',
                                        `tabler-icon-${iconName}`,
                                        className,
                                    ].join(' '),
                                    ...('filled' === type
                                        ? { fill: color }
                                        : {
                                              strokeWidth: stroke,
                                              stroke: color,
                                          }),
                                    ...rest,
                                },
                                [
                                    title &&
                                        (0, react.createElement)(
                                            'title',
                                            { key: 'svg-title' },
                                            title,
                                        ),
                                    ...iconNode.map(([tag, attrs]) =>
                                        (0, react.createElement)(tag, attrs),
                                    ),
                                    ...(Array.isArray(children)
                                        ? children
                                        : [children]),
                                ],
                            ),
                    )
                    return (
                        (Component.displayName = `${iconNamePascal}`), Component
                    )
                })('outline', 'square-rounded-x', 'IconSquareRoundedX', [
                    ['path', { d: 'M10 10l4 4m0 -4l-4 4', key: 'svg-0' }],
                    [
                        'path',
                        {
                            d: 'M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z',
                            key: 'svg-1',
                        },
                    ],
                ]),
                multi_step_loader_stories_jsx = react.createElement
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
            var loadingStates = [
                { text: 'Setting up your RealCube Profile' },
                { text: 'Loading Data' },
                { text: 'Defining Workflows' },
                { text: 'Loading Assets' },
                { text: 'Setting up Dashboard' },
                { text: 'Almost done' },
                { text: 'Welcome to RealCube 2.0' },
            ]
            const multi_step_loader_stories = {
                title: 'RealCube/multi-step-loader',
                component: MultiStepLoader,
                parameters: { layout: 'centered' },
                argTypes: {
                    loadingStates: {
                        control: 'object',
                        description:
                            'An array of loading states, each representing a step in the loader sequence.',
                        table: { type: { summary: 'Array<{ text: string }>' } },
                    },
                    loading: {
                        control: 'boolean',
                        description:
                            'Controls the loading state. When `true`, the loader is active and cycles through loading steps.',
                        table: { type: { summary: 'boolean' } },
                    },
                    duration: {
                        control: 'number',
                        description:
                            'Duration (in milliseconds) for each loading state step.',
                        table: { type: { summary: 'number' } },
                        defaultValue: 2e3,
                    },
                },
            }
            var ExampleLoader = function ExampleLoader() {
                var _useState = (0, react.useState)(!1),
                    loading = _useState[0],
                    setLoading = _useState[1]
                return multi_step_loader_stories_jsx(
                    'div',
                    {
                        className:
                            'w-full h-[60vh] flex items-center justify-center',
                    },
                    multi_step_loader_stories_jsx(MultiStepLoader, {
                        loadingStates,
                        loading,
                        duration: 2e3,
                    }),
                    multi_step_loader_stories_jsx(
                        'button',
                        {
                            onClick: function onClick() {
                                return setLoading(!0)
                            },
                            className:
                                'bg-primary hover:bg-primary/80 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center',
                            style: {
                                boxShadow:
                                    '0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset',
                            },
                        },
                        'Click to load',
                    ),
                    loading &&
                        multi_step_loader_stories_jsx(
                            'button',
                            {
                                className:
                                    'fixed top-4 right-4 text-black dark:text-white z-[120]',
                                onClick: function onClick() {
                                    return setLoading(!1)
                                },
                            },
                            multi_step_loader_stories_jsx(IconSquareRoundedX, {
                                className: 'h-10 w-10',
                            }),
                        ),
                )
            }
            ExampleLoader.displayName = 'ExampleLoader'
            var Example = {
                render: function render() {
                    return multi_step_loader_stories_jsx(ExampleLoader, null)
                },
                args: { loadingStates, loading: !1, duration: 2e3 },
                parameters: {
                    docs: {
                        description: {
                            component:
                                'The **MultiStepLoader** component is a customizable loader that guides users through a sequence of steps with descriptive messages, simulating a multi-stage process.\n\n**Usage**:\n- **loadingStates**: Array of steps, each with a text description.\n- **loading**: Boolean to activate or deactivate the loader.\n- **duration**: Time (in milliseconds) for each step display.\n\nThe interactive buttons in this story control the loader to demonstrate its functionality.',
                        },
                    },
                },
            }
            Example.parameters = _objectSpread(
                _objectSpread({}, Example.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_Example$parameters = Example.parameters) ||
                                void 0 === _Example$parameters
                                ? void 0
                                : _Example$parameters.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        '{\n  render: () => <ExampleLoader />,\n  args: {\n    loadingStates,\n    loading: false,\n    duration: 2000\n  }\n}',
                                },
                                null ===
                                    (_Example$parameters2 =
                                        Example.parameters) ||
                                    void 0 === _Example$parameters2 ||
                                    null ===
                                        (_Example$parameters2 =
                                            _Example$parameters2.docs) ||
                                    void 0 === _Example$parameters2
                                    ? void 0
                                    : _Example$parameters2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['Example']
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
