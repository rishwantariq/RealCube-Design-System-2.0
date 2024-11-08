import React from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { ZodSchema } from 'zod'
export interface StepConfig {
    title: string
    description?: string
    icon?: React.ReactNode
    fields: {
        name: string
        label: string
        placeholder: string
        type: 'text' | 'number' | 'select' | 'checkbox' | 'password' | 'date'
        options?: string[]
        icon?: React.ReactNode
        disabled?: boolean
        hidden?: boolean
    }[]
}
interface MultiStepFormProps<T extends FieldValues> {
    schema: ZodSchema<T>
    steps: StepConfig[]
    onSubmit: SubmitHandler<T>
}
export declare const MultiStepForm: <T extends Record<string, any>>({
    schema,
    steps,
    onSubmit,
}: MultiStepFormProps<T>) => import('react/jsx-runtime').JSX.Element
export {}
