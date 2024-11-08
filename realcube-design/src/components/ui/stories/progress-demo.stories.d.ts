import { StoryObj } from '@storybook/react'
import { ProgressDemo } from '../demo/progress-demo'
declare const meta: {
    title: string
    component: typeof ProgressDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Progress: Story
