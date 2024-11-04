'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [7493],
    {
        './src/components/ui/stories/multi-step-form.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Docs: () => Docs,
                    Example: () => Example,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                })
            var _Docs$parameters,
                _Docs$parameters2,
                _Example$parameters,
                _Example$parameters2,
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _multi_step_form__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './src/components/ui/multi-step-form.tsx',
                    ),
                zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    './node_modules/zod/lib/index.mjs',
                ),
                _typography_typography__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './src/components/typography/typography.tsx',
                    ),
                _badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './src/components/ui/badge.tsx',
                ),
                console = __webpack_require__(
                    './node_modules/console-browserify/index.js',
                ),
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
            var wasteEntrySchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({
                    wasteType: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .string()
                        .nonempty(),
                    wasteClassification: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .string()
                        .nonempty(),
                    producerName: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .string()
                        .nonempty(),
                    producerContact: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .string()
                        .nonempty(),
                    packageType: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .string()
                        .nonempty(),
                    expectedQuantity: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .number()
                        .min(1),
                    compliance: zod__WEBPACK_IMPORTED_MODULE_5__.z
                        .string()
                        .optional(),
                }),
                wasteEntrySteps = [
                    {
                        title: 'Basic Info',
                        description: 'Select waste type and classification.',
                        fields: [
                            {
                                name: 'wasteType',
                                label: 'Waste Type',
                                placeholder: 'Select waste type',
                                type: 'select',
                                options: [
                                    'Hazardous',
                                    'Organic',
                                    'Recyclable',
                                    'Medical',
                                ],
                            },
                            {
                                name: 'wasteClassification',
                                label: 'Classification',
                                placeholder: 'Select classification',
                                type: 'select',
                                options: [
                                    'Residential',
                                    'Industrial',
                                    'Medical',
                                ],
                            },
                        ],
                    },
                    {
                        title: 'Producer Details',
                        description: 'Enter the producer details.',
                        fields: [
                            {
                                name: 'producerName',
                                label: 'Producer Name',
                                placeholder: 'Enter name',
                                type: 'text',
                            },
                            {
                                name: 'producerContact',
                                label: 'Producer Contact',
                                placeholder: 'Enter contact',
                                type: 'text',
                            },
                        ],
                    },
                    {
                        title: 'Waste Details',
                        description:
                            'Provide details about packaging and quantity.',
                        fields: [
                            {
                                name: 'packageType',
                                label: 'Package Type',
                                placeholder: 'Select package type',
                                type: 'select',
                                options: ['Barrels', 'Bags', 'Boxes'],
                            },
                            {
                                name: 'expectedQuantity',
                                label: 'Expected Quantity (kg)',
                                placeholder: 'Enter quantity',
                                type: 'number',
                            },
                        ],
                    },
                    {
                        title: 'Compliance',
                        description:
                            'Enter compliance requirements if applicable.',
                        fields: [
                            {
                                name: 'compliance',
                                label: 'Compliance Requirements',
                                placeholder: 'Enter compliance requirements',
                                type: 'text',
                            },
                        ],
                    },
                ]
            const __WEBPACK_DEFAULT_EXPORT__ = {
                title: 'RealCube/dynamic-multistep-form',
                component: _multi_step_form__WEBPACK_IMPORTED_MODULE_2__.h,
                parameters: { layout: 'centered' },
                argTypes: {
                    schema: {
                        control: 'object',
                        description:
                            'Defines the Zod schema used for validation of each form field.',
                        table: { type: { summary: 'ZodSchema' } },
                        defaultValue: wasteEntrySchema,
                    },
                    steps: {
                        control: 'object',
                        description:
                            'Defines the configuration for each step in the form, including titles, descriptions, and field information.',
                        table: { type: { summary: 'StepConfig[]' } },
                        defaultValue: wasteEntrySteps,
                    },
                    onSubmit: {
                        action: 'submitted',
                        description:
                            'Callback function that handles the form submission when all steps are completed.',
                    },
                },
            }
            var Docs = {
                    args: {
                        schema: wasteEntrySchema,
                        steps: wasteEntrySteps,
                        onSubmit: function onSubmit(data) {
                            return console.log('Form submitted:', data)
                        },
                    },
                    render: function render(args) {
                        return __jsx(
                            'div',
                            { className: 'max-w-4xl mx-auto p-6 space-y-4' },
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.S5,
                                null,
                                'Multi-Step Form Documentation',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                null,
                                'The ',
                                __jsx('strong', null, 'Multi-Step Form'),
                                ' component provides an interactive form experience by guiding users through multiple steps, with validation at each stage. It leverages',
                                ' ',
                                __jsx('strong', null, 'Zod'),
                                ' for schema-based validation and integrates with ',
                                __jsx('strong', null, 'react-hook-form'),
                                ' to manage form state, making it flexible and easy to extend.',
                            ),
                            __jsx(
                                _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                null,
                                'This component supports multiple field types, allowing for highly customizable forms. Supported types include:',
                                __jsx(
                                    _badge__WEBPACK_IMPORTED_MODULE_4__.C,
                                    null,
                                    'Text',
                                ),
                                '  ',
                                __jsx(
                                    _badge__WEBPACK_IMPORTED_MODULE_4__.C,
                                    null,
                                    'Number',
                                ),
                                '  ',
                                __jsx(
                                    _badge__WEBPACK_IMPORTED_MODULE_4__.C,
                                    null,
                                    'Select',
                                ),
                                '  ',
                                ' and ',
                                __jsx(
                                    _badge__WEBPACK_IMPORTED_MODULE_4__.C,
                                    null,
                                    'checkbox',
                                ),
                                __jsx('br', null),
                                'Below is a guide on the primary parameters you need to provide to set up and customize the form effectively:',
                            ),
                            __jsx(
                                'div',
                                { className: 'space-y-6' },
                                __jsx(
                                    'div',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.ip,
                                        null,
                                        '1. Schema & Payload',
                                    ),
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        'The ',
                                        __jsx('strong', null, 'schema'),
                                        ' parameter defines the validation rules for each field in the form using a Zod schema. This schema specifies required fields, data types, and other constraints. By passing this schema to the component, a dynamic form is generated based on these validation rules, ensuring that all user input meets specified criteria.',
                                    ),
                                ),
                                __jsx(
                                    'div',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.ip,
                                        null,
                                        '2. Steps',
                                    ),
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        'The ',
                                        __jsx('strong', null, 'steps'),
                                        ' parameter is an array of configurations for each form step, which allows for custom titles, descriptions, and fields per step. Each step object in the array contains:',
                                    ),
                                    __jsx(
                                        'ul',
                                        {
                                            className:
                                                'list-disc pl-6 space-y-2',
                                        },
                                        __jsx(
                                            'li',
                                            null,
                                            __jsx('strong', null, 'Title'),
                                            ': A descriptive title for the current step, which is displayed prominently at the top.',
                                        ),
                                        __jsx(
                                            'li',
                                            null,
                                            __jsx(
                                                'strong',
                                                null,
                                                'Description',
                                            ),
                                            ': A brief explanation or guide for the fields within this step, helping users understand what information is required.',
                                        ),
                                        __jsx(
                                            'li',
                                            null,
                                            __jsx('strong', null, 'Fields'),
                                            ': An array of fields for the step, where each field object contains:',
                                            __jsx(
                                                'ul',
                                                {
                                                    className:
                                                        'list-circle pl-6',
                                                },
                                                __jsx(
                                                    'li',
                                                    null,
                                                    __jsx(
                                                        'strong',
                                                        null,
                                                        'Name',
                                                    ),
                                                    ': Unique identifier for the field.',
                                                ),
                                                __jsx(
                                                    'li',
                                                    null,
                                                    __jsx(
                                                        'strong',
                                                        null,
                                                        'Label',
                                                    ),
                                                    ': Display label for the field.',
                                                ),
                                                __jsx(
                                                    'li',
                                                    null,
                                                    __jsx(
                                                        'strong',
                                                        null,
                                                        'Placeholder',
                                                    ),
                                                    ': Example text shown in the input area.',
                                                ),
                                                __jsx(
                                                    'li',
                                                    null,
                                                    __jsx(
                                                        'strong',
                                                        null,
                                                        'Type',
                                                    ),
                                                    ': The input type (e.g.,',
                                                    ' ',
                                                    __jsx('code', null, 'text'),
                                                    ', ',
                                                    __jsx(
                                                        'code',
                                                        null,
                                                        'number',
                                                    ),
                                                    ',',
                                                    ' ',
                                                    __jsx(
                                                        'code',
                                                        null,
                                                        'select',
                                                    ),
                                                    ', or',
                                                    ' ',
                                                    __jsx(
                                                        'code',
                                                        null,
                                                        'checkbox',
                                                    ),
                                                    ').',
                                                ),
                                                __jsx(
                                                    'li',
                                                    null,
                                                    __jsx(
                                                        'strong',
                                                        null,
                                                        'Options',
                                                    ),
                                                    ' (for select fields): An array of selectable options.',
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                __jsx(
                                    'div',
                                    null,
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.ip,
                                        null,
                                        '3. onSubmit',
                                    ),
                                    __jsx(
                                        _typography_typography__WEBPACK_IMPORTED_MODULE_3__.C0,
                                        null,
                                        'The ',
                                        __jsx('strong', null, 'onSubmit'),
                                        ' function is called when the user completes all steps and submits the form. This function receives the final form data as its argument, allowing you to handle the data (e.g., saving it to a database, sending it to an API).',
                                    ),
                                ),
                            ),
                        )
                    },
                },
                Example = {
                    args: {
                        schema: wasteEntrySchema,
                        steps: wasteEntrySteps,
                        onSubmit: function onSubmit(data) {
                            return console.log('Form submitted:', data)
                        },
                    },
                    render: function render(args) {
                        return __jsx(
                            'div',
                            {
                                className:
                                    'w-[100vw] max-w-xl shadow-lg rounded-lg',
                            },
                            __jsx(
                                _multi_step_form__WEBPACK_IMPORTED_MODULE_2__.h,
                                args,
                            ),
                        )
                    },
                }
            ;(Docs.parameters = _objectSpread(
                _objectSpread({}, Docs.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null === (_Docs$parameters = Docs.parameters) ||
                                void 0 === _Docs$parameters
                                ? void 0
                                : _Docs$parameters.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        "{\n  args: {\n    schema: wasteEntrySchema,\n    steps: wasteEntrySteps,\n    onSubmit: data => console.log('Form submitted:', data)\n  },\n  render: args => <div className=\"max-w-4xl mx-auto p-6 space-y-4\">\n            <TypographyH1>Multi-Step Form Documentation</TypographyH1>\n\n            <TypographyP>\n                The <strong>Multi-Step Form</strong> component provides an\n                interactive form experience by guiding users through multiple\n                steps, with validation at each stage. It leverages{' '}\n                <strong>Zod</strong> for schema-based validation and integrates\n                with <strong>react-hook-form</strong> to manage form state,\n                making it flexible and easy to extend.\n            </TypographyP>\n\n            <TypographyP>\n                This component supports multiple field types, allowing for\n                highly customizable forms. Supported types include:\n                <Badge>Text</Badge>\n                {'  '}\n                <Badge>Number</Badge>\n                {'  '}\n                <Badge>Select</Badge>\n                {'  '} and <Badge>checkbox</Badge>\n                <br></br>\n                Below is a guide on the primary parameters you need to provide\n                to set up and customize the form effectively:\n            </TypographyP>\n\n            <div className=\"space-y-6\">\n                <div>\n                    <TypographyH4>1. Schema & Payload</TypographyH4>\n                    <TypographyP>\n                        The <strong>schema</strong> parameter defines the\n                        validation rules for each field in the form using a Zod\n                        schema. This schema specifies required fields, data\n                        types, and other constraints. By passing this schema to\n                        the component, a dynamic form is generated based on\n                        these validation rules, ensuring that all user input\n                        meets specified criteria.\n                    </TypographyP>\n                </div>\n\n                <div>\n                    <TypographyH4>2. Steps</TypographyH4>\n                    <TypographyP>\n                        The <strong>steps</strong> parameter is an array of\n                        configurations for each form step, which allows for\n                        custom titles, descriptions, and fields per step. Each\n                        step object in the array contains:\n                    </TypographyP>\n                    <ul className=\"list-disc pl-6 space-y-2\">\n                        <li>\n                            <strong>Title</strong>: A descriptive title for the\n                            current step, which is displayed prominently at the\n                            top.\n                        </li>\n                        <li>\n                            <strong>Description</strong>: A brief explanation or\n                            guide for the fields within this step, helping users\n                            understand what information is required.\n                        </li>\n                        <li>\n                            <strong>Fields</strong>: An array of fields for the\n                            step, where each field object contains:\n                            <ul className=\"list-circle pl-6\">\n                                <li>\n                                    <strong>Name</strong>: Unique identifier for\n                                    the field.\n                                </li>\n                                <li>\n                                    <strong>Label</strong>: Display label for\n                                    the field.\n                                </li>\n                                <li>\n                                    <strong>Placeholder</strong>: Example text\n                                    shown in the input area.\n                                </li>\n                                <li>\n                                    <strong>Type</strong>: The input type (e.g.,{' '}\n                                    <code>text</code>, <code>number</code>,{' '}\n                                    <code>select</code>, or{' '}\n                                    <code>checkbox</code>).\n                                </li>\n                                <li>\n                                    <strong>Options</strong> (for select\n                                    fields): An array of selectable options.\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n\n                <div>\n                    <TypographyH4>3. onSubmit</TypographyH4>\n                    <TypographyP>\n                        The <strong>onSubmit</strong> function is called when\n                        the user completes all steps and submits the form. This\n                        function receives the final form data as its argument,\n                        allowing you to handle the data (e.g., saving it to a\n                        database, sending it to an API).\n                    </TypographyP>\n                </div>\n            </div>\n        </div>\n}",
                                },
                                null ===
                                    (_Docs$parameters2 = Docs.parameters) ||
                                    void 0 === _Docs$parameters2 ||
                                    null ===
                                        (_Docs$parameters2 =
                                            _Docs$parameters2.docs) ||
                                    void 0 === _Docs$parameters2
                                    ? void 0
                                    : _Docs$parameters2.source,
                            ),
                        },
                    ),
                },
            )),
                (Example.parameters = _objectSpread(
                    _objectSpread({}, Example.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Example$parameters =
                                        Example.parameters) ||
                                    void 0 === _Example$parameters
                                    ? void 0
                                    : _Example$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    {
                                        originalSource:
                                            '{\n  args: {\n    schema: wasteEntrySchema,\n    steps: wasteEntrySteps,\n    onSubmit: data => console.log(\'Form submitted:\', data) // Accepts data as an object matching the schema\n  },\n\n  render: args => <div className="w-[100vw] max-w-xl shadow-lg rounded-lg">\n            <MultiStepForm {...args} />\n        </div>\n}',
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
                ))
            const __namedExportsOrder = ['Docs', 'Example']
        },
        './src/components/ui/badge.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                C: () => Badge,
                t: () => badgeVariants,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/class-variance-authority/dist/index.mjs',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className', 'variant'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                badgeVariants = (0,
                class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    {
                        variants: {
                            variant: {
                                default:
                                    'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                                secondary:
                                    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                                destructive:
                                    'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                                outline: 'text-foreground',
                            },
                        },
                        defaultVariants: { variant: 'default' },
                    },
                )
            function Badge(_ref) {
                var className = _ref.className,
                    variant = _ref.variant,
                    props = (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                        _ref,
                        _excluded,
                    )
                return __jsx(
                    'div',
                    (0,
                    _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {
                            className: (0,
                            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                badgeVariants({ variant }),
                                className,
                            ),
                        },
                        props,
                    ),
                )
            }
            Badge.displayName = 'Badge'
            try {
                ;(Badge.displayName = 'Badge'),
                    (Badge.__docgenInfo = {
                        description: '',
                        displayName: 'Badge',
                        props: {
                            variant: {
                                defaultValue: null,
                                description: '',
                                name: 'variant',
                                required: !1,
                                type: {
                                    name: '"default" | "outline" | "destructive" | "secondary" | null',
                                },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/badge.tsx#Badge'
                        ] = {
                            docgenInfo: Badge.__docgenInfo,
                            name: 'Badge',
                            path: 'src/components/ui/badge.tsx#Badge',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
