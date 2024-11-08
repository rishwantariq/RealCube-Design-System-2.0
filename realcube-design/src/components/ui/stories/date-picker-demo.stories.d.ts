import { StoryObj } from '@storybook/react'
import { DatePickerDemo } from '../demo/date-picker-demo'
declare const meta: {
    title: string
    component: typeof DatePickerDemo
    parameters: {}
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DatePicker: Story
