import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    component: () => import('react/jsx-runtime').JSX.Element
}
type Story = StoryObj<typeof meta>
export declare const AppearancePage: Story
export default meta
