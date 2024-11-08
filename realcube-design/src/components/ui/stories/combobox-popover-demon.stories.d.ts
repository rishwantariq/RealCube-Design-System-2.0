import { StoryObj } from '@storybook/react'
import { ComboboxPopover } from '../demo/combobox-popover-demon'
declare const meta: {
    title: string
    component: typeof ComboboxPopover
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const ComboboxPopoverDemo: Story
