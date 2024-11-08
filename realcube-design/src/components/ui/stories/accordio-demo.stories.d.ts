import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    render: (args: {}) => import('react/jsx-runtime').JSX.Element
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const AcorrdionDemo: Story
export declare const AccordionWithOneItem: Story
