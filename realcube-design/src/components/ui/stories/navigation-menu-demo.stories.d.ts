import { StoryObj } from '@storybook/react'
import { NavigationMenuDemo } from '../demo/navigation-menu-demo'
declare const meta: {
    title: string
    component: typeof NavigationMenuDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const NavigationMenu: Story
