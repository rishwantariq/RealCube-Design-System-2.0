import { StoryObj } from '@storybook/react'
import { DatePickerWithRange } from '../demo/date-picker-with-ranger-demo'
declare const meta: {
    title: string
    component: typeof DatePickerWithRange
    parameters: {}
}
export default meta
type Story = StoryObj<typeof meta>
export declare const DatePickerWithRangeDemo: Story
