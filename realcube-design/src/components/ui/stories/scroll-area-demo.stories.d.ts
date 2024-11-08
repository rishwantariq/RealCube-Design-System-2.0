import { StoryObj } from '@storybook/react'
import { ScrollAreaDemo } from '../demo/Scroll-area-demo'
declare const meta: {
    title: string
    component: typeof ScrollAreaDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const ScrollAreaVertical: Story
export declare const ScrollAreaHorizontal: Story
