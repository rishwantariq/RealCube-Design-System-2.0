var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { MultiStepForm } from '../multi-step-form'
import { z } from 'zod'
import {
    TypographyH1,
    TypographyH4,
    TypographyP,
} from '../../typography/typography'
import { Badge } from '../badge'
var wasteEntrySchema = z.object({
    wasteType: z.string().nonempty(),
    wasteClassification: z.string().nonempty(),
    producerName: z.string().nonempty(),
    producerContact: z.string().nonempty(),
    packageType: z.string().nonempty(),
    expectedQuantity: z.number().min(1),
    compliance: z.string().optional(),
})
var wasteEntrySteps = [
    {
        title: 'Basic Info',
        description: 'Select waste type and classification.',
        fields: [
            {
                name: 'wasteType',
                label: 'Waste Type',
                placeholder: 'Select waste type',
                type: 'select',
                options: ['Hazardous', 'Organic', 'Recyclable', 'Medical'],
            },
            {
                name: 'wasteClassification',
                label: 'Classification',
                placeholder: 'Select classification',
                type: 'select',
                options: ['Residential', 'Industrial', 'Medical'],
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
        description: 'Provide details about packaging and quantity.',
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
        description: 'Enter compliance requirements if applicable.',
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
var meta = {
    title: 'RealCube/dynamic-multistep-form',
    component: MultiStepForm,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        schema: {
            control: 'object',
            description:
                'Defines the Zod schema used for validation of each form field.',
            table: {
                type: { summary: 'ZodSchema' },
            },
            defaultValue: wasteEntrySchema,
        },
        steps: {
            control: 'object',
            description:
                'Defines the configuration for each step in the form, including titles, descriptions, and field information.',
            table: {
                type: { summary: 'StepConfig[]' },
            },
            defaultValue: wasteEntrySteps,
        },
        onSubmit: {
            action: 'submitted',
            description:
                'Callback function that handles the form submission when all steps are completed.',
        },
    },
}
export default meta
export var Docs = {
    args: {
        schema: wasteEntrySchema,
        steps: wasteEntrySteps,
        onSubmit: function (data) {
            return console.log('Form submitted:', data)
        },
    },
    render: function (args) {
        return _jsxs('div', {
            className: 'max-w-4xl mx-auto p-6 space-y-4',
            children: [
                _jsx(TypographyH1, {
                    children: 'Multi-Step Form Documentation',
                }),
                _jsxs(TypographyP, {
                    children: [
                        'The ',
                        _jsx('strong', { children: 'Multi-Step Form' }),
                        ' component provides an interactive form experience by guiding users through multiple steps, with validation at each stage. It leverages',
                        ' ',
                        _jsx('strong', { children: 'Zod' }),
                        ' for schema-based validation and integrates with ',
                        _jsx('strong', { children: 'react-hook-form' }),
                        ' to manage form state, making it flexible and easy to extend.',
                    ],
                }),
                _jsxs(TypographyP, {
                    children: [
                        'This component supports multiple field types, allowing for highly customizable forms. Supported types include:',
                        _jsx(Badge, { children: 'Text' }),
                        '  ',
                        _jsx(Badge, { children: 'Number' }),
                        '  ',
                        _jsx(Badge, { children: 'Select' }),
                        '  ',
                        ' and ',
                        _jsx(Badge, { children: 'checkbox' }),
                        _jsx('br', {}),
                        'Below is a guide on the primary parameters you need to provide to set up and customize the form effectively:',
                    ],
                }),
                _jsxs('div', {
                    className: 'space-y-6',
                    children: [
                        _jsxs('div', {
                            children: [
                                _jsx(TypographyH4, {
                                    children: '1. Schema & Payload',
                                }),
                                _jsxs(TypographyP, {
                                    children: [
                                        'The ',
                                        _jsx('strong', { children: 'schema' }),
                                        ' parameter defines the validation rules for each field in the form using a Zod schema. This schema specifies required fields, data types, and other constraints. By passing this schema to the component, a dynamic form is generated based on these validation rules, ensuring that all user input meets specified criteria.',
                                    ],
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            children: [
                                _jsx(TypographyH4, { children: '2. Steps' }),
                                _jsxs(TypographyP, {
                                    children: [
                                        'The ',
                                        _jsx('strong', { children: 'steps' }),
                                        ' parameter is an array of configurations for each form step, which allows for custom titles, descriptions, and fields per step. Each step object in the array contains:',
                                    ],
                                }),
                                _jsxs('ul', {
                                    className: 'list-disc pl-6 space-y-2',
                                    children: [
                                        _jsxs('li', {
                                            children: [
                                                _jsx('strong', {
                                                    children: 'Title',
                                                }),
                                                ': A descriptive title for the current step, which is displayed prominently at the top.',
                                            ],
                                        }),
                                        _jsxs('li', {
                                            children: [
                                                _jsx('strong', {
                                                    children: 'Description',
                                                }),
                                                ': A brief explanation or guide for the fields within this step, helping users understand what information is required.',
                                            ],
                                        }),
                                        _jsxs('li', {
                                            children: [
                                                _jsx('strong', {
                                                    children: 'Fields',
                                                }),
                                                ': An array of fields for the step, where each field object contains:',
                                                _jsxs('ul', {
                                                    className:
                                                        'list-circle pl-6',
                                                    children: [
                                                        _jsxs('li', {
                                                            children: [
                                                                _jsx('strong', {
                                                                    children:
                                                                        'Name',
                                                                }),
                                                                ': Unique identifier for the field.',
                                                            ],
                                                        }),
                                                        _jsxs('li', {
                                                            children: [
                                                                _jsx('strong', {
                                                                    children:
                                                                        'Label',
                                                                }),
                                                                ': Display label for the field.',
                                                            ],
                                                        }),
                                                        _jsxs('li', {
                                                            children: [
                                                                _jsx('strong', {
                                                                    children:
                                                                        'Placeholder',
                                                                }),
                                                                ': Example text shown in the input area.',
                                                            ],
                                                        }),
                                                        _jsxs('li', {
                                                            children: [
                                                                _jsx('strong', {
                                                                    children:
                                                                        'Type',
                                                                }),
                                                                ': The input type (e.g.,',
                                                                ' ',
                                                                _jsx('code', {
                                                                    children:
                                                                        'text',
                                                                }),
                                                                ', ',
                                                                _jsx('code', {
                                                                    children:
                                                                        'number',
                                                                }),
                                                                ',',
                                                                ' ',
                                                                _jsx('code', {
                                                                    children:
                                                                        'select',
                                                                }),
                                                                ', or',
                                                                ' ',
                                                                _jsx('code', {
                                                                    children:
                                                                        'checkbox',
                                                                }),
                                                                ').',
                                                            ],
                                                        }),
                                                        _jsxs('li', {
                                                            children: [
                                                                _jsx('strong', {
                                                                    children:
                                                                        'Options',
                                                                }),
                                                                ' (for select fields): An array of selectable options.',
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            children: [
                                _jsx(TypographyH4, { children: '3. onSubmit' }),
                                _jsxs(TypographyP, {
                                    children: [
                                        'The ',
                                        _jsx('strong', {
                                            children: 'onSubmit',
                                        }),
                                        ' function is called when the user completes all steps and submits the form. This function receives the final form data as its argument, allowing you to handle the data (e.g., saving it to a database, sending it to an API).',
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
}
export var Example = {
    args: {
        schema: wasteEntrySchema,
        steps: wasteEntrySteps,
        onSubmit: function (data) {
            return console.log('Form submitted:', data)
        }, // Accepts data as an object matching the schema
    },
    render: function (args) {
        return _jsx('div', {
            className: 'w-[100vw] max-w-xl shadow-lg rounded-lg',
            children: _jsx(MultiStepForm, __assign({}, args)),
        })
    },
}
