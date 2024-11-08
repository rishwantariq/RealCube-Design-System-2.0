import { Meta, StoryObj } from '@storybook/react'
import { DatePickerDemo } from '../demo/date-picker-demo'

//meta
const meta = {
    title: 'RealCube/date',
    component: DatePickerDemo,
    parameters: {},
} satisfies Meta<typeof DatePickerDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DatePicker: Story = {
    args: {},
}
