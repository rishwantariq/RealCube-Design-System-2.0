import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    component: (args: any) => import('react/jsx-runtime').JSX.Element
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Music: Story