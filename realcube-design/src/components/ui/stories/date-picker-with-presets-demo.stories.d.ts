import { StoryObj } from '@storybook/react'
import { DatePickerWithPresets } from '../demo/date-picker-with-presets-demo'
declare const meta: {
    title: string
    component: typeof DatePickerWithPresets
    parameters: {}
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DatePickerWithSelect: Story
