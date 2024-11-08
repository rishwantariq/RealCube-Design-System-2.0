import { Metadata } from 'next'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { StepConfig } from '../../../ui/multi-step-form'
interface SignupPageProps {
    steps: StepConfig[]
    schema: z.ZodSchema<any>
    onSubmit: SubmitHandler<any>
    siteConfig?: {
        logo: string
        name: string
        title: string
        description: string
    }
    backgroundImage?: string
    flipWords?: string[]
    metaData?: Metadata
    termsLink?: string
    privacyLink?: string
}
export default function SignupPage({
    steps,
    schema,
    onSubmit,
    siteConfig,
    backgroundImage,
    flipWords,
    metaData,
    termsLink,
    privacyLink,
}: SignupPageProps): import('react/jsx-runtime').JSX.Element
export {}
