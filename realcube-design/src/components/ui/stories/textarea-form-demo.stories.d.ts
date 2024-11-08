import { StoryObj } from '@storybook/react'
import { TextareaFormDemo } from '../demo/textarea-form-demo'
declare const meta: {
    title: string
    component: typeof TextareaFormDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Textarea: Story
