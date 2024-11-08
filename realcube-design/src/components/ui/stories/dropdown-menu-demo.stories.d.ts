import { StoryObj } from '@storybook/react'
import { DropdownMenuDemo } from '../demo/dropdown-menu-demo'
declare const meta: {
    title: string
    component: typeof DropdownMenuDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DropDownMenu: Story
