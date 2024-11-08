import { StoryObj } from '@storybook/react'
import { ProfileForm } from '../demo/Form-example-demo'
declare const meta: {
    title: string
    component: typeof ProfileForm
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const ProfileFormDemo: Story
