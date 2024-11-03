import { Meta, StoryObj } from '@storybook/react'
import { SwitchFormDemo } from '../demo/switch-form-demo'

const meta = {
    title: 'RealCube/form',
    component: SwitchFormDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SwitchFormDemo>

export default meta

type Story = StoryObj<typeof meta>

export const SwitchForm: Story = {
    args: {},
}
