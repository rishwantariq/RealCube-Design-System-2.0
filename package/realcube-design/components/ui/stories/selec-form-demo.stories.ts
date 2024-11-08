import { Meta, StoryObj } from '@storybook/react'
import { SelectFormDemo } from '../demo/select-form-demo'

const meta = {
    title: 'RealCube/form',
    component: SelectFormDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SelectFormDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const SelectForm: Story = {
    args: {},
}
