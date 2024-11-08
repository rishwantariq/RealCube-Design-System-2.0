import { StoryObj } from '@storybook/react'
import { SwitchFormDemo } from '../demo/switch-form-demo'
declare const meta: {
    title: string
    component: typeof SwitchFormDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const SwitchForm: Story
