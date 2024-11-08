import { StoryObj } from '@storybook/react'
import { RadioGroupFormDemo } from '../demo/radio-group-form-demo'
declare const meta: {
    title: string
    component: typeof RadioGroupFormDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const RadioGroupForm: Story
