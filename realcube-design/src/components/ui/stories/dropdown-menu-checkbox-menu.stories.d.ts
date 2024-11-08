import { StoryObj } from '@storybook/react'
import { DropdownMenuCheckboxesDemo } from '../demo/dropdown-menu-checkbox-demo'
declare const meta: {
    title: string
    component: typeof DropdownMenuCheckboxesDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DropdownMenuCheckboxes: Story
