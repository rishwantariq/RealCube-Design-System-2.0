import { StoryObj } from '@storybook/react'
import { ComboboxDemo } from '../demo/combobox-demo'
declare const meta: {
    title: string
    component: typeof ComboboxDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Combobox: Story
