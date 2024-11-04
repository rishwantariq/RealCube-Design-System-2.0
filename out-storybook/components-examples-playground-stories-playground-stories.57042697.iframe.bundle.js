'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [1393],
    {
        './src/components/examples/playground/stories/playground.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Playground: () => Playground,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => playground_stories,
                })
            var defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                clock = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/clock.js',
                ),
                ui_button = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                hover_card = __webpack_require__(
                    './src/components/ui/hover-card.tsx',
                ),
                label = __webpack_require__('./src/components/ui/label.tsx'),
                separator = __webpack_require__(
                    './src/components/ui/separator.tsx',
                ),
                tabs = __webpack_require__('./src/components/ui/tabs.tsx'),
                ui_textarea = __webpack_require__(
                    './src/components/ui/textarea.tsx',
                ),
                dialog = __webpack_require__('./src/components/ui/dialog.tsx'),
                __jsx = react.createElement
            function CodeViewer() {
                return __jsx(
                    dialog.Vq,
                    null,
                    __jsx(
                        dialog.hg,
                        { asChild: !0 },
                        __jsx(
                            ui_button.z,
                            { variant: 'secondary' },
                            'View code',
                        ),
                    ),
                    __jsx(
                        dialog.cZ,
                        { className: 'sm:max-w-[625px]' },
                        __jsx(
                            dialog.fK,
                            null,
                            __jsx(dialog.$N, null, 'View code'),
                            __jsx(
                                dialog.Be,
                                null,
                                'You can use the following code to start integrating your current prompt and settings into your application.',
                            ),
                        ),
                        __jsx(
                            'div',
                            { className: 'grid gap-4' },
                            __jsx(
                                'div',
                                { className: 'rounded-md bg-black p-6' },
                                __jsx(
                                    'pre',
                                    null,
                                    __jsx(
                                        'code',
                                        {
                                            className:
                                                'grid gap-1 text-sm text-muted-foreground [&_span]:h-4',
                                        },
                                        __jsx(
                                            'span',
                                            null,
                                            __jsx(
                                                'span',
                                                { className: 'text-sky-300' },
                                                'import',
                                            ),
                                            ' ',
                                            'os',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            __jsx(
                                                'span',
                                                { className: 'text-sky-300' },
                                                'import',
                                            ),
                                            ' ',
                                            'openai',
                                        ),
                                        __jsx('span', null),
                                        __jsx(
                                            'span',
                                            null,
                                            'openai.api_key = os.getenv(',
                                            __jsx(
                                                'span',
                                                { className: 'text-green-300' },
                                                '"OPENAI_API_KEY"',
                                            ),
                                            ')',
                                        ),
                                        __jsx('span', null),
                                        __jsx(
                                            'span',
                                            null,
                                            'response = openai.Completion.create(',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'model=',
                                            __jsx(
                                                'span',
                                                { className: 'text-green-300' },
                                                '"davinci"',
                                            ),
                                            ',',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'prompt=',
                                            __jsx(
                                                'span',
                                                { className: 'text-amber-300' },
                                                '""',
                                            ),
                                            ',',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'temperature=',
                                            __jsx(
                                                'span',
                                                { className: 'text-amber-300' },
                                                '0.9',
                                            ),
                                            ',',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'max_tokens=',
                                            __jsx(
                                                'span',
                                                { className: 'text-amber-300' },
                                                '5',
                                            ),
                                            ',',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'top_p=',
                                            __jsx(
                                                'span',
                                                { className: 'text-amber-300' },
                                                '1',
                                            ),
                                            ',',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'frequency_penalty=',
                                            __jsx(
                                                'span',
                                                { className: 'text-amber-300' },
                                                '0',
                                            ),
                                            ',',
                                        ),
                                        __jsx(
                                            'span',
                                            null,
                                            ' ',
                                            'presence_penalty=',
                                            __jsx(
                                                'span',
                                                { className: 'text-green-300' },
                                                '0',
                                            ),
                                            ',',
                                        ),
                                        __jsx('span', null, ')'),
                                    ),
                                ),
                            ),
                            __jsx(
                                'div',
                                null,
                                __jsx(
                                    'p',
                                    {
                                        className:
                                            'text-sm text-muted-foreground',
                                    },
                                    'Your API Key can be found here. You should use environment variables or a secret management tool to expose your key to your applications.',
                                ),
                            ),
                        ),
                    ),
                )
            }
            CodeViewer.displayName = 'CodeViewer'
            var slicedToArray = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
                ),
                slider = __webpack_require__('./src/components/ui/slider.tsx'),
                maxlength_selector_jsx = react.createElement
            function MaxLengthSelector(_ref) {
                var defaultValue = _ref.defaultValue,
                    _React$useState = react.useState(defaultValue),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    value = _React$useState2[0],
                    setValue = _React$useState2[1]
                return maxlength_selector_jsx(
                    'div',
                    { className: 'grid gap-2 pt-2' },
                    maxlength_selector_jsx(
                        hover_card.zs,
                        { openDelay: 200 },
                        maxlength_selector_jsx(
                            hover_card.Yi,
                            { asChild: !0 },
                            maxlength_selector_jsx(
                                'div',
                                { className: 'grid gap-4' },
                                maxlength_selector_jsx(
                                    'div',
                                    {
                                        className:
                                            'flex items-center justify-between',
                                    },
                                    maxlength_selector_jsx(
                                        label._,
                                        { htmlFor: 'maxlength' },
                                        'Maximum Length',
                                    ),
                                    maxlength_selector_jsx(
                                        'span',
                                        {
                                            className:
                                                'w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border',
                                        },
                                        value,
                                    ),
                                ),
                                maxlength_selector_jsx(slider.i, {
                                    id: 'maxlength',
                                    max: 4e3,
                                    defaultValue: value,
                                    step: 10,
                                    onValueChange: setValue,
                                    className:
                                        '[&_[role=slider]]:h-4 [&_[role=slider]]:w-4',
                                    'aria-label': 'Maximum Length',
                                }),
                            ),
                        ),
                        maxlength_selector_jsx(
                            hover_card.bZ,
                            {
                                align: 'start',
                                className: 'w-[260px] text-sm',
                                side: 'left',
                            },
                            'The maximum number of tokens to generate. Requests can use up to 2,048 or 4,000 tokens, shared between prompt and completion. The exact limit varies by model.',
                        ),
                    ),
                )
            }
            MaxLengthSelector.displayName = 'MaxLengthSelector'
            try {
                ;(MaxLengthSelector.displayName = 'MaxLengthSelector'),
                    (MaxLengthSelector.__docgenInfo = {
                        description: '',
                        displayName: 'MaxLengthSelector',
                        props: {
                            defaultValue: {
                                defaultValue: null,
                                description: '',
                                name: 'defaultValue',
                                required: !0,
                                type: { name: 'number[] | undefined' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/playground/components/maxlength-selector.tsx#MaxLengthSelector'
                        ] = {
                            docgenInfo: MaxLengthSelector.__docgenInfo,
                            name: 'MaxLengthSelector',
                            path: 'src/components/examples/playground/components/maxlength-selector.tsx#MaxLengthSelector',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                objectWithoutProperties = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                ),
                arrow_up_narrow_wide = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/arrow-up-narrow-wide.js',
                ),
                check = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/check.js',
                ),
                utils = __webpack_require__('./src/lib/utils.ts'),
                useMutationObserver = function useMutationObserver(
                    ref,
                    callback,
                ) {
                    var options =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {
                                  attributes: !0,
                                  characterData: !0,
                                  childList: !0,
                                  subtree: !0,
                              }
                    react.useEffect(
                        function () {
                            if (ref.current) {
                                var observer = new MutationObserver(callback)
                                return (
                                    observer.observe(ref.current, options),
                                    function () {
                                        return observer.disconnect()
                                    }
                                )
                            }
                        },
                        [ref, callback, options],
                    )
                },
                command = __webpack_require__(
                    './src/components/ui/command.tsx',
                ),
                popover = __webpack_require__(
                    './src/components/ui/popover.tsx',
                ),
                _excluded = ['models', 'types'],
                model_selector_jsx = react.createElement
            function _createForOfIteratorHelper(o, allowArrayLike) {
                var it =
                    ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                    o['@@iterator']
                if (!it) {
                    if (
                        Array.isArray(o) ||
                        (it = (function _unsupportedIterableToArray(o, minLen) {
                            if (!o) return
                            if ('string' == typeof o)
                                return _arrayLikeToArray(o, minLen)
                            var n = Object.prototype.toString
                                .call(o)
                                .slice(8, -1)
                            'Object' === n &&
                                o.constructor &&
                                (n = o.constructor.name)
                            if ('Map' === n || 'Set' === n) return Array.from(o)
                            if (
                                'Arguments' === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n,
                                )
                            )
                                return _arrayLikeToArray(o, minLen)
                        })(o)) ||
                        (allowArrayLike && o && 'number' == typeof o.length)
                    ) {
                        it && (o = it)
                        var i = 0,
                            F = function F() {}
                        return {
                            s: F,
                            n: function n() {
                                return i >= o.length
                                    ? { done: !0 }
                                    : { done: !1, value: o[i++] }
                            },
                            e: function e(_e) {
                                throw _e
                            },
                            f: F,
                        }
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    )
                }
                var err,
                    normalCompletion = !0,
                    didErr = !1
                return {
                    s: function s() {
                        it = it.call(o)
                    },
                    n: function n() {
                        var step = it.next()
                        return (normalCompletion = step.done), step
                    },
                    e: function e(_e2) {
                        ;(didErr = !0), (err = _e2)
                    },
                    f: function f() {
                        try {
                            normalCompletion || null == it.return || it.return()
                        } finally {
                            if (didErr) throw err
                        }
                    },
                }
            }
            function _arrayLikeToArray(arr, len) {
                ;(null == len || len > arr.length) && (len = arr.length)
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i]
                return arr2
            }
            function ModelSelector(_ref) {
                var models = _ref.models,
                    types = _ref.types,
                    props = (0, objectWithoutProperties.Z)(_ref, _excluded),
                    _React$useState = react.useState(!1),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    open = _React$useState2[0],
                    setOpen = _React$useState2[1],
                    _React$useState3 = react.useState(models[0]),
                    _React$useState4 = (0, slicedToArray.Z)(
                        _React$useState3,
                        2,
                    ),
                    selectedModel = _React$useState4[0],
                    setSelectedModel = _React$useState4[1],
                    _React$useState5 = react.useState(models[0]),
                    _React$useState6 = (0, slicedToArray.Z)(
                        _React$useState5,
                        2,
                    ),
                    peekedModel = _React$useState6[0],
                    setPeekedModel = _React$useState6[1]
                return model_selector_jsx(
                    'div',
                    { className: 'grid gap-2' },
                    model_selector_jsx(
                        hover_card.zs,
                        { openDelay: 200 },
                        model_selector_jsx(
                            hover_card.Yi,
                            { asChild: !0 },
                            model_selector_jsx(
                                label._,
                                { htmlFor: 'model' },
                                'Model',
                            ),
                        ),
                        model_selector_jsx(
                            hover_card.bZ,
                            {
                                align: 'start',
                                className: 'w-[260px] text-sm',
                                side: 'left',
                            },
                            'The model which will generate the completion. Some models are suitable for natural language tasks, others specialize in code. Learn more.',
                        ),
                    ),
                    model_selector_jsx(
                        popover.J2,
                        (0, esm_extends.Z)(
                            { open, onOpenChange: setOpen },
                            props,
                        ),
                        model_selector_jsx(
                            popover.xo,
                            { asChild: !0 },
                            model_selector_jsx(
                                ui_button.z,
                                {
                                    variant: 'outline',
                                    role: 'combobox',
                                    'aria-expanded': open,
                                    'aria-label': 'Select a model',
                                    className: 'w-full justify-between',
                                },
                                selectedModel
                                    ? selectedModel.name
                                    : 'Select a model...',
                                model_selector_jsx(arrow_up_narrow_wide.Z, {
                                    className:
                                        'ml-2 h-4 w-4 shrink-0 opacity-50',
                                }),
                            ),
                        ),
                        model_selector_jsx(
                            popover.yk,
                            { align: 'end', className: 'w-[250px] p-0' },
                            model_selector_jsx(
                                hover_card.zs,
                                null,
                                model_selector_jsx(
                                    hover_card.bZ,
                                    {
                                        side: 'left',
                                        align: 'start',
                                        forceMount: !0,
                                        className: 'min-h-[280px]',
                                    },
                                    model_selector_jsx(
                                        'div',
                                        { className: 'grid gap-2' },
                                        model_selector_jsx(
                                            'h4',
                                            {
                                                className:
                                                    'font-medium leading-none',
                                            },
                                            peekedModel.name,
                                        ),
                                        model_selector_jsx(
                                            'div',
                                            {
                                                className:
                                                    'text-sm text-muted-foreground',
                                            },
                                            peekedModel.description,
                                        ),
                                        peekedModel.strengths
                                            ? model_selector_jsx(
                                                  'div',
                                                  {
                                                      className:
                                                          'mt-4 grid gap-2',
                                                  },
                                                  model_selector_jsx(
                                                      'h5',
                                                      {
                                                          className:
                                                              'text-sm font-medium leading-none',
                                                      },
                                                      'Strengths',
                                                  ),
                                                  model_selector_jsx(
                                                      'ul',
                                                      {
                                                          className:
                                                              'text-sm text-muted-foreground',
                                                      },
                                                      peekedModel.strengths,
                                                  ),
                                              )
                                            : null,
                                    ),
                                ),
                                model_selector_jsx(
                                    command.mY,
                                    { loop: !0 },
                                    model_selector_jsx(
                                        command.e8,
                                        {
                                            className:
                                                'h-[var(--cmdk-list-height)] max-h-[400px]',
                                        },
                                        model_selector_jsx(command.sZ, {
                                            placeholder: 'Search Models...',
                                        }),
                                        model_selector_jsx(
                                            command.rb,
                                            null,
                                            'No Models found.',
                                        ),
                                        model_selector_jsx(hover_card.Yi, null),
                                        types.map(function (type) {
                                            return model_selector_jsx(
                                                command.fu,
                                                { key: type, heading: type },
                                                models
                                                    .filter(function (model) {
                                                        return (
                                                            model.type === type
                                                        )
                                                    })
                                                    .map(function (model) {
                                                        return model_selector_jsx(
                                                            ModelItem,
                                                            {
                                                                key: model.id,
                                                                model,
                                                                isSelected:
                                                                    (null ==
                                                                    selectedModel
                                                                        ? void 0
                                                                        : selectedModel.id) ===
                                                                    model.id,
                                                                onPeek: function onPeek(
                                                                    model,
                                                                ) {
                                                                    return setPeekedModel(
                                                                        model,
                                                                    )
                                                                },
                                                                onSelect:
                                                                    function onSelect() {
                                                                        setSelectedModel(
                                                                            model,
                                                                        ),
                                                                            setOpen(
                                                                                !1,
                                                                            )
                                                                    },
                                                            },
                                                        )
                                                    }),
                                            )
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                )
            }
            function ModelItem(_ref2) {
                var model = _ref2.model,
                    isSelected = _ref2.isSelected,
                    onSelect = _ref2.onSelect,
                    onPeek = _ref2.onPeek,
                    ref = react.useRef(null)
                return (
                    useMutationObserver(ref, function (mutations) {
                        var _step,
                            _iterator = _createForOfIteratorHelper(mutations)
                        try {
                            for (
                                _iterator.s();
                                !(_step = _iterator.n()).done;

                            ) {
                                var mutation = _step.value
                                'attributes' === mutation.type &&
                                    'aria-selected' ===
                                        mutation.attributeName &&
                                    onPeek(model)
                            }
                        } catch (err) {
                            _iterator.e(err)
                        } finally {
                            _iterator.f()
                        }
                    }),
                    model_selector_jsx(
                        command.di,
                        {
                            key: model.id,
                            onSelect,
                            ref,
                            className:
                                'aria-selected:bg-primary aria-selected:text-primary-foreground',
                        },
                        model.name,
                        model_selector_jsx(check.Z, {
                            className: (0, utils.cn)(
                                'ml-auto h-4 w-4',
                                isSelected ? 'opacity-100' : 'opacity-0',
                            ),
                        }),
                    )
                )
            }
            ;(ModelSelector.displayName = 'ModelSelector'),
                (ModelItem.displayName = 'ModelItem')
            try {
                ;(ModelSelector.displayName = 'ModelSelector'),
                    (ModelSelector.__docgenInfo = {
                        description: '',
                        displayName: 'ModelSelector',
                        props: {
                            types: {
                                defaultValue: null,
                                description: '',
                                name: 'types',
                                required: !0,
                                type: {
                                    name: 'readonly ("GPT-3" | "Codex")[]',
                                },
                            },
                            models: {
                                defaultValue: null,
                                description: '',
                                name: 'models',
                                required: !0,
                                type: { name: 'Model<string>[]' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/playground/components/model-selector.tsx#ModelSelector'
                        ] = {
                            docgenInfo: ModelSelector.__docgenInfo,
                            name: 'ModelSelector',
                            path: 'src/components/examples/playground/components/model-selector.tsx#ModelSelector',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var dist = __webpack_require__(
                    './node_modules/@radix-ui/react-dialog/dist/index.mjs',
                ),
                dot = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/dot.js',
                ),
                alert_dialog = __webpack_require__(
                    './src/components/ui/alert-dialog.tsx',
                ),
                dropdown_menu = __webpack_require__(
                    './src/components/ui/dropdown-menu.tsx',
                ),
                ui_switch = __webpack_require__(
                    './src/components/ui/switch.tsx',
                ),
                use_toast = __webpack_require__(
                    './src/components/ui/use-toast.ts',
                ),
                preset_actions_jsx = react.createElement
            function PresetActions() {
                var _React$useState = react.useState(!1),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    open = _React$useState2[0],
                    setIsOpen = _React$useState2[1],
                    _React$useState3 = react.useState(!1),
                    _React$useState4 = (0, slicedToArray.Z)(
                        _React$useState3,
                        2,
                    ),
                    showDeleteDialog = _React$useState4[0],
                    setShowDeleteDialog = _React$useState4[1]
                return preset_actions_jsx(
                    react.Fragment,
                    null,
                    preset_actions_jsx(
                        dropdown_menu.h_,
                        null,
                        preset_actions_jsx(
                            dropdown_menu.$F,
                            { asChild: !0 },
                            preset_actions_jsx(
                                ui_button.z,
                                { variant: 'secondary' },
                                preset_actions_jsx(
                                    'span',
                                    { className: 'sr-only' },
                                    'Actions',
                                ),
                                preset_actions_jsx(
                                    'div',
                                    { className: 'flex' },
                                    preset_actions_jsx(dot.Z, {
                                        className: 'w-3 h-3',
                                    }),
                                    preset_actions_jsx(dot.Z, {
                                        className: 'w-3 h-3',
                                    }),
                                    preset_actions_jsx(dot.Z, {
                                        className: 'w-3 h-3',
                                    }),
                                ),
                            ),
                        ),
                        preset_actions_jsx(
                            dropdown_menu.AW,
                            { align: 'end' },
                            preset_actions_jsx(
                                dropdown_menu.Xi,
                                {
                                    onSelect: function onSelect() {
                                        return setIsOpen(!0)
                                    },
                                },
                                'Content filter preferences',
                            ),
                            preset_actions_jsx(dropdown_menu.VD, null),
                            preset_actions_jsx(
                                dropdown_menu.Xi,
                                {
                                    onSelect: function onSelect() {
                                        return setShowDeleteDialog(!0)
                                    },
                                    className: 'text-red-600',
                                },
                                'Delete preset',
                            ),
                        ),
                    ),
                    preset_actions_jsx(
                        dist.Vq,
                        { open, onOpenChange: setIsOpen },
                        preset_actions_jsx(
                            dialog.cZ,
                            null,
                            preset_actions_jsx(
                                dialog.fK,
                                null,
                                preset_actions_jsx(
                                    dialog.$N,
                                    null,
                                    'Content filter preferences',
                                ),
                                preset_actions_jsx(
                                    dialog.Be,
                                    null,
                                    "The content filter flags text that may violate our content policy. It's powered by our moderation endpoint which is free to use to moderate your OpenAI API traffic. Learn more.",
                                ),
                            ),
                            preset_actions_jsx(
                                'div',
                                { className: 'py-6' },
                                preset_actions_jsx(
                                    'h4',
                                    {
                                        className:
                                            'text-sm text-muted-foreground',
                                    },
                                    'Playground Warnings',
                                ),
                                preset_actions_jsx(
                                    'div',
                                    {
                                        className:
                                            'flex items-start justify-between space-x-4 pt-3',
                                    },
                                    preset_actions_jsx(ui_switch.r, {
                                        name: 'show',
                                        id: 'show',
                                        defaultChecked: !0,
                                    }),
                                    preset_actions_jsx(
                                        label._,
                                        {
                                            className: 'grid gap-1 font-normal',
                                            htmlFor: 'show',
                                        },
                                        preset_actions_jsx(
                                            'span',
                                            { className: 'font-semibold' },
                                            'Show a warning when content is flagged',
                                        ),
                                        preset_actions_jsx(
                                            'span',
                                            {
                                                className:
                                                    'text-sm text-muted-foreground',
                                            },
                                            'A warning will be shown when sexual, hateful, violent or self-harm content is detected.',
                                        ),
                                    ),
                                ),
                            ),
                            preset_actions_jsx(
                                dialog.cN,
                                null,
                                preset_actions_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'secondary',
                                        onClick: function onClick() {
                                            return setIsOpen(!1)
                                        },
                                    },
                                    'Close',
                                ),
                            ),
                        ),
                    ),
                    preset_actions_jsx(
                        alert_dialog.aR,
                        {
                            open: showDeleteDialog,
                            onOpenChange: setShowDeleteDialog,
                        },
                        preset_actions_jsx(
                            alert_dialog._T,
                            null,
                            preset_actions_jsx(
                                alert_dialog.fY,
                                null,
                                preset_actions_jsx(
                                    alert_dialog.f$,
                                    null,
                                    'Are you sure absolutely sure?',
                                ),
                                preset_actions_jsx(
                                    alert_dialog.yT,
                                    null,
                                    "This action cannot be undone. This preset will no longer be accessible by you or others you've shared it with.",
                                ),
                            ),
                            preset_actions_jsx(
                                alert_dialog.xo,
                                null,
                                preset_actions_jsx(
                                    alert_dialog.le,
                                    null,
                                    'Cancel',
                                ),
                                preset_actions_jsx(
                                    ui_button.z,
                                    {
                                        variant: 'destructive',
                                        onClick: function onClick() {
                                            setShowDeleteDialog(!1),
                                                (0, use_toast.Am)({
                                                    description:
                                                        'This preset has been deleted.',
                                                })
                                        },
                                    },
                                    'Delete',
                                ),
                            ),
                        ),
                    ),
                )
            }
            var input = __webpack_require__('./src/components/ui/input.tsx'),
                preset_save_jsx = react.createElement
            function PresetSave() {
                return preset_save_jsx(
                    dialog.Vq,
                    null,
                    preset_save_jsx(
                        dialog.hg,
                        { asChild: !0 },
                        preset_save_jsx(
                            ui_button.z,
                            { variant: 'secondary' },
                            'Save',
                        ),
                    ),
                    preset_save_jsx(
                        dialog.cZ,
                        { className: 'sm:max-w-[475px]' },
                        preset_save_jsx(
                            dialog.fK,
                            null,
                            preset_save_jsx(dialog.$N, null, 'Save preset'),
                            preset_save_jsx(
                                dialog.Be,
                                null,
                                'This will save the current playground state as a preset which you can access later or share with others.',
                            ),
                        ),
                        preset_save_jsx(
                            'div',
                            { className: 'grid gap-4 py-4' },
                            preset_save_jsx(
                                'div',
                                { className: 'grid gap-2' },
                                preset_save_jsx(
                                    label._,
                                    { htmlFor: 'name' },
                                    'Name',
                                ),
                                preset_save_jsx(input.I, {
                                    id: 'name',
                                    autoFocus: !0,
                                }),
                            ),
                            preset_save_jsx(
                                'div',
                                { className: 'grid gap-2' },
                                preset_save_jsx(
                                    label._,
                                    { htmlFor: 'description' },
                                    'Description',
                                ),
                                preset_save_jsx(input.I, { id: 'description' }),
                            ),
                        ),
                        preset_save_jsx(
                            dialog.cN,
                            null,
                            preset_save_jsx(
                                ui_button.z,
                                { type: 'submit' },
                                'Save',
                            ),
                        ),
                    ),
                )
            }
            PresetSave.displayName = 'PresetSave'
            var preset_selector_excluded = ['presets'],
                preset_selector_jsx = react.createElement
            function PresetSelector(_ref) {
                var presets = _ref.presets,
                    props = (0, objectWithoutProperties.Z)(
                        _ref,
                        preset_selector_excluded,
                    ),
                    _React$useState = react.useState(!1),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    open = _React$useState2[0],
                    setOpen = _React$useState2[1],
                    _React$useState3 = react.useState(),
                    _React$useState4 = (0, slicedToArray.Z)(
                        _React$useState3,
                        2,
                    ),
                    selectedPreset = _React$useState4[0],
                    setSelectedPreset = _React$useState4[1]
                return preset_selector_jsx(
                    popover.J2,
                    (0, esm_extends.Z)({ open, onOpenChange: setOpen }, props),
                    preset_selector_jsx(
                        popover.xo,
                        { asChild: !0 },
                        preset_selector_jsx(
                            ui_button.z,
                            {
                                variant: 'outline',
                                role: 'combobox',
                                'aria-label': 'Load a preset...',
                                'aria-expanded': open,
                                className:
                                    'flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]',
                            },
                            selectedPreset
                                ? selectedPreset.name
                                : 'Load a preset...',
                            preset_selector_jsx(arrow_up_narrow_wide.Z, {
                                className: 'ml-2 h-4 w-4 shrink-0 opacity-50',
                            }),
                        ),
                    ),
                    preset_selector_jsx(
                        popover.yk,
                        { className: 'w-[300px] p-0' },
                        preset_selector_jsx(
                            command.mY,
                            null,
                            preset_selector_jsx(command.sZ, {
                                placeholder: 'Search presets...',
                            }),
                            preset_selector_jsx(
                                command.rb,
                                null,
                                'No presets found.',
                            ),
                            preset_selector_jsx(
                                command.fu,
                                { heading: 'Examples' },
                                presets.map(function (preset) {
                                    return preset_selector_jsx(
                                        command.di,
                                        {
                                            key: preset.id,
                                            onSelect: function onSelect() {
                                                setSelectedPreset(preset),
                                                    setOpen(!1)
                                            },
                                        },
                                        preset.name,
                                        preset_selector_jsx(check.Z, {
                                            className: (0, utils.cn)(
                                                'ml-auto h-4 w-4',
                                                (null == selectedPreset
                                                    ? void 0
                                                    : selectedPreset.id) ===
                                                    preset.id
                                                    ? 'opacity-100'
                                                    : 'opacity-0',
                                            ),
                                        }),
                                    )
                                }),
                            ),
                            preset_selector_jsx(
                                command.fu,
                                { className: 'pt-0' },
                                preset_selector_jsx(
                                    command.di,
                                    { onSelect: function onSelect() {} },
                                    'More examples',
                                ),
                            ),
                        ),
                    ),
                )
            }
            PresetSelector.displayName = 'PresetSelector'
            try {
                ;(PresetSelector.displayName = 'PresetSelector'),
                    (PresetSelector.__docgenInfo = {
                        description: '',
                        displayName: 'PresetSelector',
                        props: {
                            presets: {
                                defaultValue: null,
                                description: '',
                                name: 'presets',
                                required: !0,
                                type: { name: 'Preset[]' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/playground/components/preset-selector.tsx#PresetSelector'
                        ] = {
                            docgenInfo: PresetSelector.__docgenInfo,
                            name: 'PresetSelector',
                            path: 'src/components/examples/playground/components/preset-selector.tsx#PresetSelector',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var copy = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/copy.js',
                ),
                preset_share_jsx = react.createElement
            function PresetShare() {
                return preset_share_jsx(
                    popover.J2,
                    null,
                    preset_share_jsx(
                        popover.xo,
                        { asChild: !0 },
                        preset_share_jsx(
                            ui_button.z,
                            { variant: 'secondary' },
                            'Share',
                        ),
                    ),
                    preset_share_jsx(
                        popover.yk,
                        { align: 'end', className: 'w-[520px]' },
                        preset_share_jsx(
                            'div',
                            {
                                className:
                                    'flex flex-col space-y-2 text-center sm:text-left',
                            },
                            preset_share_jsx(
                                'h3',
                                { className: 'text-lg font-semibold' },
                                'Share preset',
                            ),
                            preset_share_jsx(
                                'p',
                                { className: 'text-sm text-muted-foreground' },
                                'Anyone who has this link and an OpenAI account will be able to view this.',
                            ),
                        ),
                        preset_share_jsx(
                            'div',
                            { className: 'flex items-center space-x-2 pt-4' },
                            preset_share_jsx(
                                'div',
                                { className: 'grid flex-1 gap-2' },
                                preset_share_jsx(
                                    label._,
                                    { htmlFor: 'link', className: 'sr-only' },
                                    'Link',
                                ),
                                preset_share_jsx(input.I, {
                                    id: 'link',
                                    defaultValue:
                                        'https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003',
                                    readOnly: !0,
                                    className: 'h-9',
                                }),
                            ),
                            preset_share_jsx(
                                ui_button.z,
                                {
                                    type: 'submit',
                                    size: 'sm',
                                    className: 'px-3',
                                },
                                preset_share_jsx(
                                    'span',
                                    { className: 'sr-only' },
                                    'Copy',
                                ),
                                preset_share_jsx(copy.Z, {
                                    className: 'h-4 w-4',
                                }),
                            ),
                        ),
                    ),
                )
            }
            PresetShare.displayName = 'PresetShare'
            var temperature_selector_jsx = react.createElement
            function TemperatureSelector(_ref) {
                var defaultValue = _ref.defaultValue,
                    _React$useState = react.useState(defaultValue),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    value = _React$useState2[0],
                    setValue = _React$useState2[1]
                return temperature_selector_jsx(
                    'div',
                    { className: 'grid gap-2 pt-2' },
                    temperature_selector_jsx(
                        hover_card.zs,
                        { openDelay: 200 },
                        temperature_selector_jsx(
                            hover_card.Yi,
                            { asChild: !0 },
                            temperature_selector_jsx(
                                'div',
                                { className: 'grid gap-4' },
                                temperature_selector_jsx(
                                    'div',
                                    {
                                        className:
                                            'flex items-center justify-between',
                                    },
                                    temperature_selector_jsx(
                                        label._,
                                        { htmlFor: 'temperature' },
                                        'Temperature',
                                    ),
                                    temperature_selector_jsx(
                                        'span',
                                        {
                                            className:
                                                'w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border',
                                        },
                                        value,
                                    ),
                                ),
                                temperature_selector_jsx(slider.i, {
                                    id: 'temperature',
                                    max: 1,
                                    defaultValue: value,
                                    step: 0.1,
                                    onValueChange: setValue,
                                    className:
                                        '[&_[role=slider]]:h-4 [&_[role=slider]]:w-4',
                                    'aria-label': 'Temperature',
                                }),
                            ),
                        ),
                        temperature_selector_jsx(
                            hover_card.bZ,
                            {
                                align: 'start',
                                className: 'w-[260px] text-sm',
                                side: 'left',
                            },
                            'Controls randomness: lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.',
                        ),
                    ),
                )
            }
            TemperatureSelector.displayName = 'TemperatureSelector'
            try {
                ;(TemperatureSelector.displayName = 'TemperatureSelector'),
                    (TemperatureSelector.__docgenInfo = {
                        description: '',
                        displayName: 'TemperatureSelector',
                        props: {
                            defaultValue: {
                                defaultValue: null,
                                description: '',
                                name: 'defaultValue',
                                required: !0,
                                type: { name: 'number[] | undefined' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/playground/components/temperature-selector.tsx#TemperatureSelector'
                        ] = {
                            docgenInfo: TemperatureSelector.__docgenInfo,
                            name: 'TemperatureSelector',
                            path: 'src/components/examples/playground/components/temperature-selector.tsx#TemperatureSelector',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var top_p_selector_jsx = react.createElement
            function TopPSelector(_ref) {
                var defaultValue = _ref.defaultValue,
                    _React$useState = react.useState(defaultValue),
                    _React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
                    value = _React$useState2[0],
                    setValue = _React$useState2[1]
                return top_p_selector_jsx(
                    'div',
                    { className: 'grid gap-2 pt-2' },
                    top_p_selector_jsx(
                        hover_card.zs,
                        { openDelay: 200 },
                        top_p_selector_jsx(
                            hover_card.Yi,
                            { asChild: !0 },
                            top_p_selector_jsx(
                                'div',
                                { className: 'grid gap-4' },
                                top_p_selector_jsx(
                                    'div',
                                    {
                                        className:
                                            'flex items-center justify-between',
                                    },
                                    top_p_selector_jsx(
                                        label._,
                                        { htmlFor: 'top-p' },
                                        'Top P',
                                    ),
                                    top_p_selector_jsx(
                                        'span',
                                        {
                                            className:
                                                'w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border',
                                        },
                                        value,
                                    ),
                                ),
                                top_p_selector_jsx(slider.i, {
                                    id: 'top-p',
                                    max: 1,
                                    defaultValue: value,
                                    step: 0.1,
                                    onValueChange: setValue,
                                    className:
                                        '[&_[role=slider]]:h-4 [&_[role=slider]]:w-4',
                                    'aria-label': 'Top P',
                                }),
                            ),
                        ),
                        top_p_selector_jsx(
                            hover_card.bZ,
                            {
                                align: 'start',
                                className: 'w-[260px] text-sm',
                                side: 'left',
                            },
                            'Control diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.',
                        ),
                    ),
                )
            }
            TopPSelector.displayName = 'TopPSelector'
            try {
                ;(TopPSelector.displayName = 'TopPSelector'),
                    (TopPSelector.__docgenInfo = {
                        description: '',
                        displayName: 'TopPSelector',
                        props: {
                            defaultValue: {
                                defaultValue: null,
                                description: '',
                                name: 'defaultValue',
                                required: !0,
                                type: { name: 'number[] | undefined' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/examples/playground/components/top-p-selector.tsx#TopPSelector'
                        ] = {
                            docgenInfo: TopPSelector.__docgenInfo,
                            name: 'TopPSelector',
                            path: 'src/components/examples/playground/components/top-p-selector.tsx#TopPSelector',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            var types = ['GPT-3', 'Codex'],
                models = [
                    {
                        id: 'c305f976-8e38-42b1-9fb7-d21b2e34f0da',
                        name: 'text-davinci-003',
                        description:
                            'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.',
                        type: 'GPT-3',
                        strengths:
                            'Complex intent, cause and effect, creative generation, search, summarization for audience',
                    },
                    {
                        id: '464a47c3-7ab5-44d7-b669-f9cb5a9e8465',
                        name: 'text-curie-001',
                        description:
                            'Very capable, but faster and lower cost than Davinci.',
                        type: 'GPT-3',
                        strengths:
                            'Language translation, complex classification, sentiment, summarization',
                    },
                    {
                        id: 'ac0797b0-7e31-43b6-a494-da7e2ab43445',
                        name: 'text-babbage-001',
                        description:
                            'Capable of straightforward tasks, very fast, and lower cost.',
                        type: 'GPT-3',
                        strengths: 'Moderate classification, semantic search',
                    },
                    {
                        id: ' be638fb1-973b-4471-a49c-290325085802',
                        name: 'text-ada-001',
                        description:
                            'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
                        type: 'GPT-3',
                        strengths:
                            'Parsing text, simple classification, address correction, keywords',
                    },
                    {
                        id: 'b43c0ea9-5ad4-456a-ae29-26cd77b6d0fb',
                        name: 'code-davinci-002',
                        description:
                            'Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.',
                        type: 'Codex',
                    },
                    {
                        id: 'bbd57291-4622-4a21-9eed-dd6bd786fdd1',
                        name: 'code-cushman-001',
                        description:
                            'Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.',
                        type: 'Codex',
                        strengths:
                            'Real-time application where low-latency is preferable',
                    },
                ],
                presets = [
                    {
                        id: '9cb0e66a-9937-465d-a188-2c4c4ae2401f',
                        name: 'Grammatical Standard English',
                    },
                    {
                        id: '61eb0e32-2391-4cd3-adc3-66efe09bc0b7',
                        name: 'Summarize for a 2nd grader',
                    },
                    {
                        id: 'a4e1fa51-f4ce-4e45-892c-224030a00bdd',
                        name: 'Text to command',
                    },
                    { id: 'cc198b13-4933-43aa-977e-dcd95fa30770', name: 'Q&A' },
                    {
                        id: 'adfa95be-a575-45fd-a9ef-ea45386c64de',
                        name: 'English to other languages',
                    },
                    {
                        id: 'c569a06a-0bd6-43a7-adf9-bf68c09e7a79',
                        name: 'Parse unstructured data',
                    },
                    {
                        id: '15ccc0d7-f37a-4f0a-8163-a37e162877dc',
                        name: 'Classification',
                    },
                    {
                        id: '4641ef41-1c0f-421d-b4b2-70fe431081f3',
                        name: 'Natural language to Python',
                    },
                    {
                        id: '48d34082-72f3-4a1b-a14d-f15aca4f57a0',
                        name: 'Explain code',
                    },
                    {
                        id: 'dfd42fd5-0394-4810-92c6-cc907d3bfd1a',
                        name: 'Chat',
                    },
                ],
                next_image = __webpack_require__(
                    './node_modules/@storybook/nextjs/dist/images/next-image.mjs',
                )
            const playground_dark = {
                    src: 'static/media/playground-dark.7d626548.png',
                    height: 916,
                    width: 1280,
                    blurDataURL: 'static/media/playground-dark.7d626548.png',
                },
                playground_light = {
                    src: 'static/media/playground-light.6d1d10b2.png',
                    height: 916,
                    width: 1280,
                    blurDataURL: 'static/media/playground-light.6d1d10b2.png',
                }
            var _Playground$parameter,
                _Playground$parameter2,
                playground_stories_jsx = react.createElement
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
            const playground_stories = {
                title: 'Examples/playground',
                component: function component() {
                    return playground_stories_jsx(
                        react.Fragment,
                        null,
                        playground_stories_jsx(
                            'div',
                            { className: 'md:hidden' },
                            playground_stories_jsx(next_image.Z, {
                                src: playground_light,
                                width: 1280,
                                height: 916,
                                alt: 'Playground',
                                className: 'block dark:hidden',
                            }),
                            playground_stories_jsx(next_image.Z, {
                                src: playground_dark,
                                width: 1280,
                                height: 916,
                                alt: 'Playground',
                                className: 'hidden dark:block',
                            }),
                        ),
                        playground_stories_jsx(
                            'div',
                            { className: 'hidden h-full flex-col md:flex' },
                            playground_stories_jsx(
                                'div',
                                {
                                    className:
                                        'container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16',
                                },
                                playground_stories_jsx(
                                    'h2',
                                    { className: 'text-lg font-semibold' },
                                    'Playground',
                                ),
                                playground_stories_jsx(
                                    'div',
                                    {
                                        className:
                                            'ml-auto flex w-full space-x-2 sm:justify-end',
                                    },
                                    playground_stories_jsx(PresetSelector, {
                                        presets,
                                    }),
                                    playground_stories_jsx(PresetSave, null),
                                    playground_stories_jsx(
                                        'div',
                                        {
                                            className:
                                                'hidden space-x-2 md:flex',
                                        },
                                        playground_stories_jsx(
                                            CodeViewer,
                                            null,
                                        ),
                                        playground_stories_jsx(
                                            PresetShare,
                                            null,
                                        ),
                                    ),
                                    playground_stories_jsx(PresetActions, null),
                                ),
                            ),
                            playground_stories_jsx(separator.Z, null),
                            playground_stories_jsx(
                                tabs.mQ,
                                {
                                    defaultValue: 'complete',
                                    className: 'flex-1',
                                },
                                playground_stories_jsx(
                                    'div',
                                    { className: 'container h-full py-6' },
                                    playground_stories_jsx(
                                        'div',
                                        {
                                            className:
                                                'grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]',
                                        },
                                        playground_stories_jsx(
                                            'div',
                                            {
                                                className:
                                                    'hidden flex-col space-y-4 sm:flex md:order-2',
                                            },
                                            playground_stories_jsx(
                                                'div',
                                                { className: 'grid gap-2' },
                                                playground_stories_jsx(
                                                    hover_card.zs,
                                                    { openDelay: 200 },
                                                    playground_stories_jsx(
                                                        hover_card.Yi,
                                                        { asChild: !0 },
                                                        playground_stories_jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                                                            },
                                                            'Mode',
                                                        ),
                                                    ),
                                                    playground_stories_jsx(
                                                        hover_card.bZ,
                                                        {
                                                            className:
                                                                'w-[320px] text-sm',
                                                            side: 'left',
                                                        },
                                                        'Choose the interface that best suits your task. You can provide: a simple prompt to complete, starting and ending text to insert a completion within, or some text with instructions to edit it.',
                                                    ),
                                                ),
                                                playground_stories_jsx(
                                                    tabs.dr,
                                                    {
                                                        className:
                                                            'grid grid-cols-3',
                                                    },
                                                    playground_stories_jsx(
                                                        tabs.SP,
                                                        { value: 'complete' },
                                                        playground_stories_jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    'sr-only',
                                                            },
                                                            'Complete',
                                                        ),
                                                        playground_stories_jsx(
                                                            'svg',
                                                            {
                                                                xmlns: 'http://www.w3.org/2000/svg',
                                                                viewBox:
                                                                    '0 0 20 20',
                                                                fill: 'none',
                                                                className:
                                                                    'h-5 w-5',
                                                            },
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '3',
                                                                    width: '12',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '7',
                                                                    width: '12',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '11',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '15',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '8.5',
                                                                    y: '11',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '8.5',
                                                                    y: '15',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '13',
                                                                    y: '11',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    playground_stories_jsx(
                                                        tabs.SP,
                                                        { value: 'insert' },
                                                        playground_stories_jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    'sr-only',
                                                            },
                                                            'Insert',
                                                        ),
                                                        playground_stories_jsx(
                                                            'svg',
                                                            {
                                                                xmlns: 'http://www.w3.org/2000/svg',
                                                                viewBox:
                                                                    '0 0 20 20',
                                                                fill: 'none',
                                                                className:
                                                                    'h-5 w-5',
                                                            },
                                                            playground_stories_jsx(
                                                                'path',
                                                                {
                                                                    fillRule:
                                                                        'evenodd',
                                                                    clipRule:
                                                                        'evenodd',
                                                                    d: 'M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '15',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '8.5',
                                                                    y: '15',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '13',
                                                                    y: '15',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    playground_stories_jsx(
                                                        tabs.SP,
                                                        { value: 'edit' },
                                                        playground_stories_jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    'sr-only',
                                                            },
                                                            'Edit',
                                                        ),
                                                        playground_stories_jsx(
                                                            'svg',
                                                            {
                                                                xmlns: 'http://www.w3.org/2000/svg',
                                                                viewBox:
                                                                    '0 0 20 20',
                                                                fill: 'none',
                                                                className:
                                                                    'h-5 w-5',
                                                            },
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '3',
                                                                    width: '12',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '7',
                                                                    width: '12',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '11',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '4',
                                                                    y: '15',
                                                                    width: '4',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'rect',
                                                                {
                                                                    x: '8.5',
                                                                    y: '11',
                                                                    width: '3',
                                                                    height: '2',
                                                                    rx: '1',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                            playground_stories_jsx(
                                                                'path',
                                                                {
                                                                    d: 'M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z',
                                                                    fill: 'currentColor',
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            playground_stories_jsx(
                                                ModelSelector,
                                                { types, models },
                                            ),
                                            playground_stories_jsx(
                                                TemperatureSelector,
                                                { defaultValue: [0.56] },
                                            ),
                                            playground_stories_jsx(
                                                MaxLengthSelector,
                                                { defaultValue: [256] },
                                            ),
                                            playground_stories_jsx(
                                                TopPSelector,
                                                { defaultValue: [0.9] },
                                            ),
                                        ),
                                        playground_stories_jsx(
                                            'div',
                                            { className: 'md:order-1' },
                                            playground_stories_jsx(
                                                tabs.nU,
                                                {
                                                    value: 'complete',
                                                    className:
                                                        'mt-0 border-0 p-0',
                                                },
                                                playground_stories_jsx(
                                                    'div',
                                                    {
                                                        className:
                                                            'flex h-full flex-col space-y-4',
                                                    },
                                                    playground_stories_jsx(
                                                        ui_textarea.g,
                                                        {
                                                            placeholder:
                                                                'Write a tagline for an ice cream shop',
                                                            className:
                                                                'min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]',
                                                        },
                                                    ),
                                                    playground_stories_jsx(
                                                        'div',
                                                        {
                                                            className:
                                                                'flex items-center space-x-2',
                                                        },
                                                        playground_stories_jsx(
                                                            ui_button.z,
                                                            null,
                                                            'Submit',
                                                        ),
                                                        playground_stories_jsx(
                                                            ui_button.z,
                                                            {
                                                                variant:
                                                                    'secondary',
                                                            },
                                                            playground_stories_jsx(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'sr-only',
                                                                },
                                                                'Show history',
                                                            ),
                                                            playground_stories_jsx(
                                                                clock.Z,
                                                                {
                                                                    className:
                                                                        'h-4 w-4',
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            playground_stories_jsx(
                                                tabs.nU,
                                                {
                                                    value: 'insert',
                                                    className:
                                                        'mt-0 border-0 p-0',
                                                },
                                                playground_stories_jsx(
                                                    'div',
                                                    {
                                                        className:
                                                            'flex flex-col space-y-4',
                                                    },
                                                    playground_stories_jsx(
                                                        'div',
                                                        {
                                                            className:
                                                                'grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1',
                                                        },
                                                        playground_stories_jsx(
                                                            ui_textarea.g,
                                                            {
                                                                placeholder:
                                                                    "We're writing to [inset]. Congrats from OpenAI!",
                                                                className:
                                                                    'h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]',
                                                            },
                                                        ),
                                                        playground_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'rounded-md border bg-muted',
                                                            },
                                                        ),
                                                    ),
                                                    playground_stories_jsx(
                                                        'div',
                                                        {
                                                            className:
                                                                'flex items-center space-x-2',
                                                        },
                                                        playground_stories_jsx(
                                                            ui_button.z,
                                                            null,
                                                            'Submit',
                                                        ),
                                                        playground_stories_jsx(
                                                            ui_button.z,
                                                            {
                                                                variant:
                                                                    'secondary',
                                                            },
                                                            playground_stories_jsx(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'sr-only',
                                                                },
                                                                'Show history',
                                                            ),
                                                            playground_stories_jsx(
                                                                clock.Z,
                                                                {
                                                                    className:
                                                                        'h-4 w-4',
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            playground_stories_jsx(
                                                tabs.nU,
                                                {
                                                    value: 'edit',
                                                    className:
                                                        'mt-0 border-0 p-0',
                                                },
                                                playground_stories_jsx(
                                                    'div',
                                                    {
                                                        className:
                                                            'flex flex-col space-y-4',
                                                    },
                                                    playground_stories_jsx(
                                                        'div',
                                                        {
                                                            className:
                                                                'grid h-full gap-6 lg:grid-cols-2',
                                                        },
                                                        playground_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'flex flex-col space-y-4',
                                                            },
                                                            playground_stories_jsx(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'flex flex-1 flex-col space-y-2',
                                                                },
                                                                playground_stories_jsx(
                                                                    label._,
                                                                    {
                                                                        htmlFor:
                                                                            'input',
                                                                    },
                                                                    'Input',
                                                                ),
                                                                playground_stories_jsx(
                                                                    ui_textarea.g,
                                                                    {
                                                                        id: 'input',
                                                                        placeholder:
                                                                            'We is going to the market.',
                                                                        className:
                                                                            'flex-1 lg:min-h-[580px]',
                                                                    },
                                                                ),
                                                            ),
                                                            playground_stories_jsx(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'flex flex-col space-y-2',
                                                                },
                                                                playground_stories_jsx(
                                                                    label._,
                                                                    {
                                                                        htmlFor:
                                                                            'instructions',
                                                                    },
                                                                    'Instructions',
                                                                ),
                                                                playground_stories_jsx(
                                                                    ui_textarea.g,
                                                                    {
                                                                        id: 'instructions',
                                                                        placeholder:
                                                                            'Fix the grammar.',
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                        playground_stories_jsx(
                                                            'div',
                                                            {
                                                                className:
                                                                    'mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]',
                                                            },
                                                        ),
                                                    ),
                                                    playground_stories_jsx(
                                                        'div',
                                                        {
                                                            className:
                                                                'flex items-center space-x-2',
                                                        },
                                                        playground_stories_jsx(
                                                            ui_button.z,
                                                            null,
                                                            'Submit',
                                                        ),
                                                        playground_stories_jsx(
                                                            ui_button.z,
                                                            {
                                                                variant:
                                                                    'secondary',
                                                            },
                                                            playground_stories_jsx(
                                                                'span',
                                                                {
                                                                    className:
                                                                        'sr-only',
                                                                },
                                                                'Show history',
                                                            ),
                                                            playground_stories_jsx(
                                                                clock.Z,
                                                                {
                                                                    className:
                                                                        'h-4 w-4',
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    )
                },
            }
            var Playground = {}
            Playground.parameters = _objectSpread(
                _objectSpread({}, Playground.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null ===
                                (_Playground$parameter =
                                    Playground.parameters) ||
                                void 0 === _Playground$parameter
                                ? void 0
                                : _Playground$parameter.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{}' },
                                null ===
                                    (_Playground$parameter2 =
                                        Playground.parameters) ||
                                    void 0 === _Playground$parameter2 ||
                                    null ===
                                        (_Playground$parameter2 =
                                            _Playground$parameter2.docs) ||
                                    void 0 === _Playground$parameter2
                                    ? void 0
                                    : _Playground$parameter2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['Playground']
        },
        './src/components/ui/alert-dialog.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                OL: () => AlertDialogAction,
                _T: () => AlertDialogContent,
                aR: () => AlertDialog,
                f$: () => AlertDialogTitle,
                fY: () => AlertDialogHeader,
                le: () => AlertDialogCancel,
                vW: () => AlertDialogTrigger,
                xo: () => AlertDialogFooter,
                yT: () => AlertDialogDescription,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-alert-dialog/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './src/components/ui/button.tsx',
                ),
                _excluded = ['className'],
                _excluded2 = ['className'],
                _excluded3 = ['className'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                _excluded7 = ['className'],
                _excluded8 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                AlertDialog =
                    _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.fC,
                AlertDialogTrigger =
                    _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.xz,
                AlertDialogPortal =
                    _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.h_,
                AlertDialogOverlay =
                    react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                        function (_ref, ref) {
                            var className = _ref.className,
                                props = (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    _ref,
                                    _excluded,
                                )
                            return __jsx(
                                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.aV,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    {
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                            'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                            className,
                                        ),
                                    },
                                    props,
                                    { ref },
                                ),
                            )
                        },
                    )
            AlertDialogOverlay.displayName =
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.aV.displayName
            var AlertDialogContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref2, ref) {
                        var className = _ref2.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                _ref2,
                                _excluded2,
                            )
                        return __jsx(
                            AlertDialogPortal,
                            null,
                            __jsx(AlertDialogOverlay, null),
                            __jsx(
                                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            AlertDialogContent.displayName =
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.VY.displayName
            var AlertDialogHeader = function AlertDialogHeader(_ref3) {
                var className = _ref3.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        _ref3,
                        _excluded3,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                'flex flex-col space-y-2 text-center sm:text-left',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(AlertDialogHeader.displayName = 'AlertDialogHeader'),
                (AlertDialogHeader.displayName = 'AlertDialogHeader')
            var AlertDialogFooter = function AlertDialogFooter(_ref4) {
                var className = _ref4.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        _ref4,
                        _excluded4,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(AlertDialogFooter.displayName = 'AlertDialogFooter'),
                (AlertDialogFooter.displayName = 'AlertDialogFooter')
            var AlertDialogTitle =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref5, ref) {
                        var className = _ref5.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                _ref5,
                                _excluded5,
                            )
                        return __jsx(
                            _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.Dx,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        'text-lg font-semibold',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            AlertDialogTitle.displayName =
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.Dx.displayName
            var AlertDialogDescription =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref6, ref) {
                        var className = _ref6.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                _ref6,
                                _excluded6,
                            )
                        return __jsx(
                            _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.dk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        'text-sm text-muted-foreground',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            AlertDialogDescription.displayName =
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.dk.displayName
            var AlertDialogAction =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref7, ref) {
                        var className = _ref7.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                _ref7,
                                _excluded7,
                            )
                        return __jsx(
                            _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.aU,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        (0,
                                        _button__WEBPACK_IMPORTED_MODULE_1__.d)(),
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            AlertDialogAction.displayName =
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.aU.displayName
            var AlertDialogCancel =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref8, ref) {
                        var className = _ref8.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                _ref8,
                                _excluded8,
                            )
                        return __jsx(
                            _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.$j,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        (0,
                                        _button__WEBPACK_IMPORTED_MODULE_1__.d)(
                                            { variant: 'outline' },
                                        ),
                                        'mt-2 sm:mt-0',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            AlertDialogCancel.displayName =
                _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.$j.displayName
            try {
                ;(AlertDialogHeader.displayName = 'AlertDialogHeader'),
                    (AlertDialogHeader.__docgenInfo = {
                        description: '',
                        displayName: 'AlertDialogHeader',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/alert-dialog.tsx#AlertDialogHeader'
                        ] = {
                            docgenInfo: AlertDialogHeader.__docgenInfo,
                            name: 'AlertDialogHeader',
                            path: 'src/components/ui/alert-dialog.tsx#AlertDialogHeader',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/button.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                d: () => buttonVariants,
                z: () => Button,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-slot/dist/index.mjs',
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
                _excluded = ['className', 'variant', 'size', 'asChild'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                buttonVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    {
                        variants: {
                            variant: {
                                default:
                                    'bg-primary text-primary-foreground hover:bg-primary/90',
                                destructive:
                                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                                outline:
                                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                                secondary:
                                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                                ghost: 'hover:bg-accent hover:text-accent-foreground',
                                link: 'text-primary underline-offset-4 hover:underline',
                            },
                            size: {
                                default: 'h-10 px-4 py-2',
                                sm: 'h-9 rounded-md px-3',
                                lg: 'h-11 rounded-md px-8',
                                icon: 'h-10 w-10',
                            },
                        },
                        defaultVariants: {
                            variant: 'default',
                            size: 'default',
                        },
                    },
                ),
                Button = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            variant = _ref.variant,
                            size = _ref.size,
                            _ref$asChild = _ref.asChild,
                            asChild = void 0 !== _ref$asChild && _ref$asChild,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            ),
                            Comp = asChild
                                ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7
                                : 'button'
                        return __jsx(
                            Comp,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        buttonVariants({
                                            variant,
                                            size,
                                            className,
                                        }),
                                    ),
                                    ref,
                                },
                                props,
                            ),
                        )
                    },
                )
            Button.displayName = 'Button'
            try {
                ;(Button.displayName = 'Button'),
                    (Button.__docgenInfo = {
                        description: '',
                        displayName: 'Button',
                        props: {
                            asChild: {
                                defaultValue: { value: 'false' },
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
                                type: {
                                    name: '"link" | "default" | "outline" | "destructive" | "secondary" | "ghost" | null',
                                },
                            },
                            size: {
                                defaultValue: null,
                                description: '',
                                name: 'size',
                                required: !1,
                                type: {
                                    name: '"default" | "sm" | "lg" | "icon" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/button.tsx#Button'
                        ] = {
                            docgenInfo: Button.__docgenInfo,
                            name: 'Button',
                            path: 'src/components/ui/button.tsx#Button',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/command.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Oc: () => CommandShortcut,
                di: () => CommandItem,
                e8: () => CommandList,
                fu: () => CommandGroup,
                m5: () => CommandDialog,
                mY: () => Command,
                rb: () => CommandEmpty,
                sZ: () => CommandInput,
                zz: () => CommandSeparator,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                cmdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    './node_modules/cmdk/dist/index.mjs',
                ),
                lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/search.js',
                ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './src/components/ui/dialog.tsx',
                ),
                _excluded = ['className'],
                _excluded2 = ['children'],
                _excluded3 = ['className'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                _excluded7 = ['className'],
                _excluded8 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Command = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            cmdk__WEBPACK_IMPORTED_MODULE_3__.mY,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Command.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.displayName
            var CommandDialog = function CommandDialog(_ref2) {
                var children = _ref2.children,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref2,
                        _excluded2,
                    )
                return __jsx(
                    _dialog__WEBPACK_IMPORTED_MODULE_1__.Vq,
                    props,
                    __jsx(
                        _dialog__WEBPACK_IMPORTED_MODULE_1__.cZ,
                        { className: 'overflow-hidden p-0 shadow-lg' },
                        __jsx(
                            Command,
                            {
                                className:
                                    '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
                            },
                            children,
                        ),
                    ),
                )
            }
            CommandDialog.displayName = 'CommandDialog'
            var CommandInput = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref3, ref) {
                    var className = _ref3.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref3,
                            _excluded3,
                        )
                    return __jsx(
                        'div',
                        {
                            className: 'flex items-center border-b px-3',
                            'cmdk-input-wrapper': '',
                        },
                        __jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Z, {
                            className: 'mr-2 h-4 w-4 shrink-0 opacity-50',
                        }),
                        __jsx(
                            cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Input,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        ),
                    )
                },
            )
            CommandInput.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Input.displayName
            var CommandList = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref4, ref) {
                    var className = _ref4.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref4,
                            _excluded4,
                        )
                    return __jsx(
                        cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.List,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                    'max-h-[300px] overflow-y-auto overflow-x-hidden',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            CommandList.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.List.displayName
            var CommandEmpty = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (props, ref) {
                    return __jsx(
                        cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Empty,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                            { ref, className: 'py-6 text-center text-sm' },
                            props,
                        ),
                    )
                },
            )
            CommandEmpty.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Empty.displayName
            var CommandGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref5, ref) {
                    var className = _ref5.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref5,
                            _excluded5,
                        )
                    return __jsx(
                        cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Group,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                    'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            CommandGroup.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Group.displayName
            var CommandSeparator =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref6, ref) {
                        var className = _ref6.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref6,
                                _excluded6,
                            )
                        return __jsx(
                            cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Separator,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        '-mx-1 h-px bg-border',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            CommandSeparator.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Separator.displayName
            var CommandItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref7, ref) {
                    var className = _ref7.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref7,
                            _excluded7,
                        )
                    return __jsx(
                        cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Item,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            CommandItem.displayName =
                cmdk__WEBPACK_IMPORTED_MODULE_3__.mY.Item.displayName
            var CommandShortcut = function CommandShortcut(_ref8) {
                var className = _ref8.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref8,
                        _excluded8,
                    )
                return __jsx(
                    'span',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                'ml-auto text-xs tracking-widest text-muted-foreground',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(CommandShortcut.displayName = 'CommandShortcut'),
                (CommandShortcut.displayName = 'CommandShortcut')
            try {
                ;(CommandShortcut.displayName = 'CommandShortcut'),
                    (CommandShortcut.__docgenInfo = {
                        description: '',
                        displayName: 'CommandShortcut',
                        props: {
                            filter: {
                                defaultValue: null,
                                description:
                                    'Custom filter function for whether each command menu item should matches the given search query.\nIt should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.\nBy default, uses the `command-score` library.',
                                name: 'filter',
                                required: !1,
                                type: {
                                    name: '((value: string, search: string) => number)',
                                },
                            },
                            label: {
                                defaultValue: null,
                                description:
                                    'Accessible label for this command menu. Not shown visibly.',
                                name: 'label',
                                required: !1,
                                type: { name: 'string' },
                            },
                            value: {
                                defaultValue: null,
                                description:
                                    'Optional controlled state of the selected command menu item.',
                                name: 'value',
                                required: !1,
                                type: { name: 'string' },
                            },
                            onValueChange: {
                                defaultValue: null,
                                description:
                                    'Event handler called when the selected item of the menu changes.',
                                name: 'onValueChange',
                                required: !1,
                                type: { name: '((value: string) => void)' },
                            },
                            loop: {
                                defaultValue: null,
                                description:
                                    'Optionally set to `true` to turn on looping around when using the arrow keys.',
                                name: 'loop',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            shouldFilter: {
                                defaultValue: null,
                                description:
                                    'Optionally set to `false` to turn off the automatic filtering and sorting.\nIf `false`, you must conditionally render valid items based on the search query yourself.',
                                name: 'shouldFilter',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/command.tsx#CommandShortcut'
                        ] = {
                            docgenInfo: CommandShortcut.__docgenInfo,
                            name: 'CommandShortcut',
                            path: 'src/components/ui/command.tsx#CommandShortcut',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/dialog.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $N: () => DialogTitle,
                Be: () => DialogDescription,
                GG: () => DialogClose,
                Vq: () => Dialog,
                cN: () => DialogFooter,
                cZ: () => DialogContent,
                fK: () => DialogHeader,
                hg: () => DialogTrigger,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-dialog/dist/index.mjs',
                    ),
                lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    './node_modules/lucide-react/dist/esm/icons/x.js',
                ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                _excluded2 = ['className', 'children'],
                _excluded3 = ['className'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.fC,
                DialogTrigger =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.xz,
                DialogPortal =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_,
                DialogClose =
                    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,
                DialogOverlay = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DialogOverlay.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV.displayName
            var DialogContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        children = _ref2.children,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        DialogPortal,
                        null,
                        __jsx(DialogOverlay, null),
                        __jsx(
                            _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                                        className,
                                    ),
                                },
                                props,
                            ),
                            children,
                            __jsx(
                                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,
                                {
                                    className:
                                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                                },
                                __jsx(
                                    lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,
                                    { className: 'h-4 w-4' },
                                ),
                                __jsx(
                                    'span',
                                    { className: 'sr-only' },
                                    'Close',
                                ),
                            ),
                        ),
                    )
                },
            )
            DialogContent.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var DialogHeader = function DialogHeader(_ref3) {
                var className = _ref3.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref3,
                        _excluded3,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'flex flex-col space-y-1.5 text-center sm:text-left',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(DialogHeader.displayName = 'DialogHeader'),
                (DialogHeader.displayName = 'DialogHeader')
            var DialogFooter = function DialogFooter(_ref4) {
                var className = _ref4.className,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref4,
                        _excluded4,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(DialogFooter.displayName = 'DialogFooter'),
                (DialogFooter.displayName = 'DialogFooter')
            var DialogTitle = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref5, ref) {
                    var className = _ref5.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref5,
                            _excluded5,
                        )
                    return __jsx(
                        _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'text-lg font-semibold leading-none tracking-tight',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            DialogTitle.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx.displayName
            var DialogDescription =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref6, ref) {
                        var className = _ref6.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref6,
                                _excluded6,
                            )
                        return __jsx(
                            _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'text-sm text-muted-foreground',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DialogDescription.displayName =
                _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk.displayName
            try {
                ;(DialogHeader.displayName = 'DialogHeader'),
                    (DialogHeader.__docgenInfo = {
                        description: '',
                        displayName: 'DialogHeader',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/dialog.tsx#DialogHeader'
                        ] = {
                            docgenInfo: DialogHeader.__docgenInfo,
                            name: 'DialogHeader',
                            path: 'src/components/ui/dialog.tsx#DialogHeader',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/dropdown-menu.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                $F: () => DropdownMenuTrigger,
                AW: () => DropdownMenuContent,
                Ju: () => DropdownMenuLabel,
                KM: () => DropdownMenuShortcut,
                Ph: () => DropdownMenuSub,
                Qk: () => DropdownMenuGroup,
                TG: () => DropdownMenuSubContent,
                VD: () => DropdownMenuSeparator,
                Xi: () => DropdownMenuItem,
                _x: () => DropdownMenuRadioGroup,
                bO: () => DropdownMenuCheckboxItem,
                cq: () => DropdownMenuPortal,
                h_: () => DropdownMenu,
                kt: () => DropdownMenuSubTrigger,
                qB: () => DropdownMenuRadioItem,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs',
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
                _excluded3 = ['className', 'sideOffset'],
                _excluded4 = ['className', 'inset'],
                _excluded5 = ['className', 'children', 'checked'],
                _excluded6 = ['className', 'children'],
                _excluded7 = ['className', 'inset'],
                _excluded8 = ['className'],
                _excluded9 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                DropdownMenu =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fC,
                DropdownMenuTrigger =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.xz,
                DropdownMenuGroup =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ZA,
                DropdownMenuPortal =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                DropdownMenuSub =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Tr,
                DropdownMenuRadioGroup =
                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Ee,
                DropdownMenuSubTrigger =
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
                                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fF,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
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
            DropdownMenuSubTrigger.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fF.displayName
            var DropdownMenuSubContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref2, ref) {
                        var className = _ref2.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref2,
                                _excluded2,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.tu,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuSubContent.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.tu.displayName
            var DropdownMenuContent =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref3, ref) {
                        var className = _ref3.className,
                            _ref3$sideOffset = _ref3.sideOffset,
                            sideOffset =
                                void 0 === _ref3$sideOffset
                                    ? 4
                                    : _ref3$sideOffset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref3,
                                _excluded3,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,
                            null,
                            __jsx(
                                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        sideOffset,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            DropdownMenuContent.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            var DropdownMenuItem =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref4, ref) {
                        var className = _ref4.className,
                            inset = _ref4.inset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref4,
                                _excluded4,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuItem.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName
            var DropdownMenuCheckboxItem =
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
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.oC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
                                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
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
            DropdownMenuCheckboxItem.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.oC.displayName
            var DropdownMenuRadioItem =
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
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Rk,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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
                                    _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.wU,
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
            DropdownMenuRadioItem.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Rk.displayName
            var DropdownMenuLabel =
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
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.__,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'px-2 py-1.5 text-sm font-semibold',
                                        inset && 'pl-8',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuLabel.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.__.displayName
            var DropdownMenuSeparator =
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref8, ref) {
                        var className = _ref8.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref8,
                                _excluded8,
                            )
                        return __jsx(
                            _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z0,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        '-mx-1 my-1 h-px bg-muted',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            DropdownMenuSeparator.displayName =
                _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z0.displayName
            var DropdownMenuShortcut = function DropdownMenuShortcut(_ref9) {
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
                                'ml-auto text-xs tracking-widest opacity-60',
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            ;(DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'),
                (DropdownMenuShortcut.displayName = 'DropdownMenuShortcut')
            try {
                ;(DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'),
                    (DropdownMenuShortcut.__docgenInfo = {
                        description: '',
                        displayName: 'DropdownMenuShortcut',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/dropdown-menu.tsx#DropdownMenuShortcut'
                        ] = {
                            docgenInfo: DropdownMenuShortcut.__docgenInfo,
                            name: 'DropdownMenuShortcut',
                            path: 'src/components/ui/dropdown-menu.tsx#DropdownMenuShortcut',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/hover-card.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Yi: () => HoverCardTrigger,
                bZ: () => HoverCardContent,
                zs: () => HoverCard,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-hover-card/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'align', 'sideOffset'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                HoverCard =
                    _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.fC,
                HoverCardTrigger =
                    _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.xz,
                HoverCardContent =
                    react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                        function (_ref, ref) {
                            var className = _ref.className,
                                _ref$align = _ref.align,
                                align =
                                    void 0 === _ref$align
                                        ? 'center'
                                        : _ref$align,
                                _ref$sideOffset = _ref.sideOffset,
                                sideOffset =
                                    void 0 === _ref$sideOffset
                                        ? 4
                                        : _ref$sideOffset,
                                props = (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                    _ref,
                                    _excluded,
                                )
                            return __jsx(
                                _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        align,
                                        sideOffset,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            )
                        },
                    )
            HoverCardContent.displayName =
                _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            try {
                ;(HoverCard.displayName = 'HoverCard'),
                    (HoverCard.__docgenInfo = {
                        description: '',
                        displayName: 'HoverCard',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/hover-card.tsx#HoverCard'
                        ] = {
                            docgenInfo: HoverCard.__docgenInfo,
                            name: 'HoverCard',
                            path: 'src/components/ui/hover-card.tsx#HoverCard',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(HoverCardContent.displayName = 'HoverCardContent'),
                    (HoverCardContent.__docgenInfo = {
                        description: '',
                        displayName: 'HoverCardContent',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/hover-card.tsx#HoverCardContent'
                        ] = {
                            docgenInfo: HoverCardContent.__docgenInfo,
                            name: 'HoverCardContent',
                            path: 'src/components/ui/hover-card.tsx#HoverCardContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(HoverCardTrigger.displayName = 'HoverCardTrigger'),
                    (HoverCardTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'HoverCardTrigger',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/hover-card.tsx#HoverCardTrigger'
                        ] = {
                            docgenInfo: HoverCardTrigger.__docgenInfo,
                            name: 'HoverCardTrigger',
                            path: 'src/components/ui/hover-card.tsx#HoverCardTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/input.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { I: () => Input })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'type'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Input = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            type = _ref.type,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            'input',
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                {
                                    type,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                                        className,
                                    ),
                                    ref,
                                },
                                props,
                            ),
                        )
                    },
                )
            Input.displayName = 'Input'
            try {
                ;(Input.displayName = 'Input'),
                    (Input.__docgenInfo = {
                        description: '',
                        displayName: 'Input',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/input.tsx#Input'
                        ] = {
                            docgenInfo: Input.__docgenInfo,
                            name: 'Input',
                            path: 'src/components/ui/input.tsx#Input',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/label.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { _: () => Label })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-label/dist/index.mjs',
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
                _excluded = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                labelVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                ),
                Label = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(
                                        labelVariants(),
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Label.displayName =
                _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f.displayName
            try {
                ;(Label.displayName = 'Label'),
                    (Label.__docgenInfo = {
                        description: '',
                        displayName: 'Label',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/label.tsx#Label'
                        ] = {
                            docgenInfo: Label.__docgenInfo,
                            name: 'Label',
                            path: 'src/components/ui/label.tsx#Label',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/popover.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                J2: () => Popover,
                xo: () => PopoverTrigger,
                yk: () => PopoverContent,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-popover/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'align', 'sideOffset'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Popover =
                    _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.fC,
                PopoverTrigger =
                    _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.xz,
                PopoverContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            _ref$align = _ref.align,
                            align =
                                void 0 === _ref$align ? 'center' : _ref$align,
                            _ref$sideOffset = _ref.sideOffset,
                            sideOffset =
                                void 0 === _ref$sideOffset
                                    ? 4
                                    : _ref$sideOffset,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.h_,
                            null,
                            __jsx(
                                _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.VY,
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                    {
                                        ref,
                                        align,
                                        sideOffset,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                            'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            PopoverContent.displayName =
                _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            try {
                ;(Popover.displayName = 'Popover'),
                    (Popover.__docgenInfo = {
                        description: '',
                        displayName: 'Popover',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/popover.tsx#Popover'
                        ] = {
                            docgenInfo: Popover.__docgenInfo,
                            name: 'Popover',
                            path: 'src/components/ui/popover.tsx#Popover',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(PopoverContent.displayName = 'PopoverContent'),
                    (PopoverContent.__docgenInfo = {
                        description: '',
                        displayName: 'PopoverContent',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/popover.tsx#PopoverContent'
                        ] = {
                            docgenInfo: PopoverContent.__docgenInfo,
                            name: 'PopoverContent',
                            path: 'src/components/ui/popover.tsx#PopoverContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(PopoverTrigger.displayName = 'PopoverTrigger'),
                    (PopoverTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'PopoverTrigger',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/popover.tsx#PopoverTrigger'
                        ] = {
                            docgenInfo: PopoverTrigger.__docgenInfo,
                            name: 'PopoverTrigger',
                            path: 'src/components/ui/popover.tsx#PopoverTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/separator.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Separator })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-separator/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'orientation', 'decorative'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Separator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            _ref$orientation = _ref.orientation,
                            orientation =
                                void 0 === _ref$orientation
                                    ? 'horizontal'
                                    : _ref$orientation,
                            _ref$decorative = _ref.decorative,
                            decorative =
                                void 0 === _ref$decorative || _ref$decorative,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.f,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    decorative,
                                    orientation,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'shrink-0 bg-border',
                                        'horizontal' === orientation
                                            ? 'h-[1px] w-full'
                                            : 'h-full w-[1px]',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            Separator.displayName =
                _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.f.displayName
            try {
                ;(Separator.displayName = 'Separator'),
                    (Separator.__docgenInfo = {
                        description: '',
                        displayName: 'Separator',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/separator.tsx#Separator'
                        ] = {
                            docgenInfo: Separator.__docgenInfo,
                            name: 'Separator',
                            path: 'src/components/ui/separator.tsx#Separator',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/slider.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { i: () => Slider })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-slider/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Slider = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__.fC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'relative flex w-full touch-none select-none items-center',
                                        className,
                                    ),
                                },
                                props,
                            ),
                            __jsx(
                                _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__.fQ,
                                {
                                    className:
                                        'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                                },
                                __jsx(
                                    _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__.e6,
                                    { className: 'absolute h-full bg-primary' },
                                ),
                            ),
                            __jsx(
                                _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__.bU,
                                {
                                    className:
                                        'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                                },
                            ),
                        )
                    },
                )
            Slider.displayName =
                _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__.fC.displayName
            try {
                ;(Slider.displayName = 'Slider'),
                    (Slider.__docgenInfo = {
                        description: '',
                        displayName: 'Slider',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/slider.tsx#Slider'
                        ] = {
                            docgenInfo: Slider.__docgenInfo,
                            name: 'Slider',
                            path: 'src/components/ui/slider.tsx#Slider',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/switch.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { r: () => Switch })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-switch/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Switch = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.fC,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
                                        className,
                                    ),
                                },
                                props,
                                { ref },
                            ),
                            __jsx(
                                _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.bU,
                                {
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
                                    ),
                                },
                            ),
                        )
                    },
                )
            Switch.displayName =
                _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.fC.displayName
            try {
                ;(Switch.displayName = 'Switch'),
                    (Switch.__docgenInfo = {
                        description: '',
                        displayName: 'Switch',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/switch.tsx#Switch'
                        ] = {
                            docgenInfo: Switch.__docgenInfo,
                            name: 'Switch',
                            path: 'src/components/ui/switch.tsx#Switch',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/tabs.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                SP: () => TabsTrigger,
                dr: () => TabsList,
                mQ: () => Tabs,
                nU: () => TabsContent,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-tabs/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                _excluded2 = ['className'],
                _excluded3 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Tabs = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.fC,
                TabsList = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.aV,
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                                {
                                    ref,
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
                                        className,
                                    ),
                                },
                                props,
                            ),
                        )
                    },
                )
            TabsList.displayName =
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.aV.displayName
            var TabsTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.xz,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TabsTrigger.displayName =
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.xz.displayName
            var TabsContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref3, ref) {
                    var className = _ref3.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            _ref3,
                            _excluded3,
                        )
                    return __jsx(
                        _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.VY,
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TabsContent.displayName =
                _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_1__.VY.displayName
            try {
                ;(Tabs.displayName = 'Tabs'),
                    (Tabs.__docgenInfo = {
                        description: '',
                        displayName: 'Tabs',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/tabs.tsx#Tabs'
                        ] = {
                            docgenInfo: Tabs.__docgenInfo,
                            name: 'Tabs',
                            path: 'src/components/ui/tabs.tsx#Tabs',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TabsContent.displayName = 'TabsContent'),
                    (TabsContent.__docgenInfo = {
                        description: '',
                        displayName: 'TabsContent',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/tabs.tsx#TabsContent'
                        ] = {
                            docgenInfo: TabsContent.__docgenInfo,
                            name: 'TabsContent',
                            path: 'src/components/ui/tabs.tsx#TabsContent',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TabsList.displayName = 'TabsList'),
                    (TabsList.__docgenInfo = {
                        description: '',
                        displayName: 'TabsList',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/tabs.tsx#TabsList'
                        ] = {
                            docgenInfo: TabsList.__docgenInfo,
                            name: 'TabsList',
                            path: 'src/components/ui/tabs.tsx#TabsList',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                ;(TabsTrigger.displayName = 'TabsTrigger'),
                    (TabsTrigger.__docgenInfo = {
                        description: '',
                        displayName: 'TabsTrigger',
                        props: {
                            asChild: {
                                defaultValue: null,
                                description: '',
                                name: 'asChild',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/tabs.tsx#TabsTrigger'
                        ] = {
                            docgenInfo: TabsTrigger.__docgenInfo,
                            name: 'TabsTrigger',
                            path: 'src/components/ui/tabs.tsx#TabsTrigger',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/components/ui/textarea.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { g: () => Textarea })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Textarea = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            'textarea',
                            (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                {
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                                        className,
                                    ),
                                    ref,
                                },
                                props,
                            ),
                        )
                    },
                )
            Textarea.displayName = 'Textarea'
            try {
                ;(Textarea.displayName = 'Textarea'),
                    (Textarea.__docgenInfo = {
                        description: '',
                        displayName: 'Textarea',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/textarea.tsx#Textarea'
                        ] = {
                            docgenInfo: Textarea.__docgenInfo,
                            name: 'Textarea',
                            path: 'src/components/ui/textarea.tsx#Textarea',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
