import { StoryObj } from '@storybook/react'
import { CheckboxWithText } from '../demo/checkbox-demo-with-text'
declare const meta: {
    title: string
    component: typeof CheckboxWithText
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const CheckboxDemoWithText: Story
