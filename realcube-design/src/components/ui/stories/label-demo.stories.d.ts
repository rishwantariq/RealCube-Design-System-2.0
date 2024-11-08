/// <reference types="react" />
import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    args: {
        children: string
    }
    component: (
        args: Omit<
            import('react').DetailedHTMLProps<
                import('react').LabelHTMLAttributes<HTMLLabelElement>,
                HTMLLabelElement
            >,
            'ref'
        > & {
            ref?:
                | ((instance: HTMLLabelElement | null) => void)
                | import('react').RefObject<HTMLLabelElement>
                | null
                | undefined
        },
    ) => import('react/jsx-runtime').JSX.Element
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const LabelDemo: Story
