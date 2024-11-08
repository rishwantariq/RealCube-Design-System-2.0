import { StoryObj } from '@storybook/react'
import { CollapsibleDemo } from '../demo/collapsible-demo'
declare const meta: {
    title: string
    component: typeof CollapsibleDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Collapsible: Story
