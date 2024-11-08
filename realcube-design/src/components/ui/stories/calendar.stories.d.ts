import { StoryObj } from '@storybook/react'
import { CalendarDemo } from '../demo/calendar-demo'
declare const meta: {
    title: string
    component: typeof CalendarDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Calendar: Story
