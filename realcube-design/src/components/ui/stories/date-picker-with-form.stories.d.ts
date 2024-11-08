import { StoryObj } from '@storybook/react'
import { DatePickerForm } from '../demo/date-picker-with-form'
declare const meta: {
    title: string
    component: typeof DatePickerForm
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DatePickerFormDemo: Story
