import { StoryObj } from '@storybook/react'
import { CheckboxDemo } from '../demo/checkbox-demo'
declare const meta: {
    title: string
    component: typeof CheckboxDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Checkbox: Story
