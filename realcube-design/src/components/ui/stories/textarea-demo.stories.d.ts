import { StoryObj } from '@storybook/react'
import { TextareaProps } from '../textarea'
declare const meta: {
    title: string
    component: (props: TextareaProps) => import('react/jsx-runtime').JSX.Element
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Default: Story
export declare const Disabled: Story
export declare const TextareaWithLabel: Story
export declare const TextareaWithText: Story
export declare const TextareaWithButton: Story
