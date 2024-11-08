import { StoryObj } from '@storybook/react'
import { CardWithForm } from '../demo/card-with-form'
declare const meta: {
    title: string
    component: typeof CardWithForm
    parameters: {
        layout: string
    }
}
type Story = StoryObj<typeof meta>
export declare const CardWithFormDemo: Story
export default meta
