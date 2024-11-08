import { StoryObj } from '@storybook/react'
import { ToastDemo } from '../demo/toast-data-demo'
declare const meta: {
    title: string
    component: typeof ToastDemo
    tags: string[]
    argTypes: {
        variant: {
            control: string
            options: string[]
        }
    }
    parameters: {}
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Toast: Story
export declare const ToastStyleDestructive: Story
export declare const ToastNotDescription: Story
export declare const ToastNotTitle: Story
