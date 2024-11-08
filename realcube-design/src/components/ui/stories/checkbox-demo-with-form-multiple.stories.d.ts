import { StoryObj } from '@storybook/react'
import { CheckboxReactHookFormMultiple } from '../demo/checkbox-ReactHook-Form-Multiple'
declare const meta: {
    title: string
    component: typeof CheckboxReactHookFormMultiple
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const CheckboxDemoReactHookFormMultiple: Story
