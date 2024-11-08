import { StoryObj } from '@storybook/react'
import { TableDemo } from '../demo/table-demo'
declare const meta: {
    title: string
    component: typeof TableDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Table: Story
