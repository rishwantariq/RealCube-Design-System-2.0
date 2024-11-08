import { StoryObj } from '@storybook/react'
import { DataTableDemo } from '../demo/data-table-demo'
declare const meta: {
    title: string
    component: typeof DataTableDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DataTable: Story
