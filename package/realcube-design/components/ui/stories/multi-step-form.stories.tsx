import { Meta, StoryObj } from '@storybook/react'
import { MultiStepForm, StepConfig } from '../multi-step-form'
import { z } from 'zod'
import {
    TypographyH1,
    TypographyH3,
    TypographyH4,
    TypographyP,
} from '../../typography/typography'
import { Badge } from '../badge'

const wasteEntrySchema = z.object({
    wasteType: z.string().nonempty(),
    wasteClassification: z.string().nonempty(),
    producerName: z.string().nonempty(),
    producerContact: z.string().nonempty(),
    packageType: z.string().nonempty(),
    expectedQuantity: z.number().min(1),
    compliance: z.string().optional(),
})

const wasteEntrySteps: StepConfig[] = [
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

const meta = {
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
} satisfies Meta<typeof MultiStepForm>

export default meta

type Story = StoryObj<typeof meta>

export const Docs: Story = {
    args: {
        schema: wasteEntrySchema,
        steps: wasteEntrySteps,
        onSubmit: (data) => console.log('Form submitted:', data),
    },
    render: (args) => (
        <div className="max-w-4xl mx-auto p-6 space-y-4">
            <TypographyH1>Multi-Step Form Documentation</TypographyH1>

            <TypographyP>
                The <strong>Multi-Step Form</strong> component provides an
                interactive form experience by guiding users through multiple
                steps, with validation at each stage. It leverages{' '}
                <strong>Zod</strong> for schema-based validation and integrates
                with <strong>react-hook-form</strong> to manage form state,
                making it flexible and easy to extend.
            </TypographyP>

            <TypographyP>
                This component supports multiple field types, allowing for
                highly customizable forms. Supported types include:
                <Badge>Text</Badge>
                {'  '}
                <Badge>Number</Badge>
                {'  '}
                <Badge>Select</Badge>
                {'  '} and <Badge>checkbox</Badge>
                <br></br>
                Below is a guide on the primary parameters you need to provide
                to set up and customize the form effectively:
            </TypographyP>

            <div className="space-y-6">
                <div>
                    <TypographyH4>1. Schema & Payload</TypographyH4>
                    <TypographyP>
                        The <strong>schema</strong> parameter defines the
                        validation rules for each field in the form using a Zod
                        schema. This schema specifies required fields, data
                        types, and other constraints. By passing this schema to
                        the component, a dynamic form is generated based on
                        these validation rules, ensuring that all user input
                        meets specified criteria.
                    </TypographyP>
                </div>

                <div>
                    <TypographyH4>2. Steps</TypographyH4>
                    <TypographyP>
                        The <strong>steps</strong> parameter is an array of
                        configurations for each form step, which allows for
                        custom titles, descriptions, and fields per step. Each
                        step object in the array contains:
                    </TypographyP>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Title</strong>: A descriptive title for the
                            current step, which is displayed prominently at the
                            top.
                        </li>
                        <li>
                            <strong>Description</strong>: A brief explanation or
                            guide for the fields within this step, helping users
                            understand what information is required.
                        </li>
                        <li>
                            <strong>Fields</strong>: An array of fields for the
                            step, where each field object contains:
                            <ul className="list-circle pl-6">
                                <li>
                                    <strong>Name</strong>: Unique identifier for
                                    the field.
                                </li>
                                <li>
                                    <strong>Label</strong>: Display label for
                                    the field.
                                </li>
                                <li>
                                    <strong>Placeholder</strong>: Example text
                                    shown in the input area.
                                </li>
                                <li>
                                    <strong>Type</strong>: The input type (e.g.,{' '}
                                    <code>text</code>, <code>number</code>,{' '}
                                    <code>select</code>, or{' '}
                                    <code>checkbox</code>).
                                </li>
                                <li>
                                    <strong>Options</strong> (for select
                                    fields): An array of selectable options.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <TypographyH4>3. onSubmit</TypographyH4>
                    <TypographyP>
                        The <strong>onSubmit</strong> function is called when
                        the user completes all steps and submits the form. This
                        function receives the final form data as its argument,
                        allowing you to handle the data (e.g., saving it to a
                        database, sending it to an API).
                    </TypographyP>
                </div>
            </div>
        </div>
    ),
}

export const Example: Story = {
    args: {
        schema: wasteEntrySchema,
        steps: wasteEntrySteps,
        onSubmit: (data) => console.log('Form submitted:', data), // Accepts data as an object matching the schema
    },
    render: (args) => (
        <div className="w-[100vw] max-w-xl shadow-lg rounded-lg">
            <MultiStepForm {...args} />
        </div>
    ),
}
