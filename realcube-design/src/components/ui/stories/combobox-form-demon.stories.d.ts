import { StoryObj } from '@storybook/react'
import { ComboboxForm } from '../demo/combobox-with-form-demon'
declare const meta: {
    title: string
    component: typeof ComboboxForm
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const ComboboxFormDemo: Story
