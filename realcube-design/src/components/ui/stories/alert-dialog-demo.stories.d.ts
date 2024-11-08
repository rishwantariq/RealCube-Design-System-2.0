import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    component: () => import('react/jsx-runtime').JSX.Element
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<{}>
export declare const AlertDialogDemo: Story
