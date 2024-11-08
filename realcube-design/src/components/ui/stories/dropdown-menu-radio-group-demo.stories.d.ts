import { StoryObj } from '@storybook/react'
import { DropdownMenuRadioGroupDemo } from '../demo/dropdown-menu-radio-group-demo'
declare const meta: {
    title: string
    component: typeof DropdownMenuRadioGroupDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DropdownMenuRadioGroup: Story
