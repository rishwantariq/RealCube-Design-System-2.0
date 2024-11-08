import { StoryObj } from '@storybook/react'
import { SelectFormDemo } from '../demo/select-form-demo'
declare const meta: {
    title: string
    component: typeof SelectFormDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const SelectForm: Story
