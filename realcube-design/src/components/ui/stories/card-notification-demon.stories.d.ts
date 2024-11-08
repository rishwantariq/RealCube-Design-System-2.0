import { StoryObj } from '@storybook/react'
import { CardDemoNotification } from '../demo/card-notification-demo'
declare const meta: {
    title: string
    component: typeof CardDemoNotification
    parameters: {
        layout: string
    }
}
type Story = StoryObj<typeof meta>
export declare const CardNotificationDemo: Story
export default meta
