import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    render: (args: {}) => import('react/jsx-runtime').JSX.Element
    tags: string[]
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const AvatarWithImage: Story
export declare const AvatarWithFallback: Story
