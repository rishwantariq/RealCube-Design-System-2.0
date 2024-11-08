import { StoryObj } from '@storybook/react'
import { CheckboxReactHookFormSingle } from '../demo/checkbox-demo-with-form'
declare const meta: {
    title: string
    component: typeof CheckboxReactHookFormSingle
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const CheckboxDemoWithReactHookForm: Story
