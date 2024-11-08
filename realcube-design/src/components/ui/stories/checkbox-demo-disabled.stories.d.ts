import { StoryObj } from '@storybook/react'
import { CheckboxDisabled } from '../demo/checkbox-disabled'
declare const meta: {
    title: string
    component: typeof CheckboxDisabled
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const CheckboxDemoDisabled: Story
