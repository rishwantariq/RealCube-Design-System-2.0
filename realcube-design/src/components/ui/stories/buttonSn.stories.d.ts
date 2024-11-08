/// <reference types="react" />
import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    component: import('react').ForwardRefExoticComponent<
        import('../button').ButtonProps &
            import('react').RefAttributes<HTMLButtonElement>
    >
    tags: string[]
    argTypes: {
        variant: {
            control: {
                type: string
            }
            options: string[]
        }
        size: {
            control: {
                type: string
            }
            options: string[]
        }
    }
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Default: Story
export declare const Secondary: Story
export declare const Destructive: Story
export declare const Ghost: Story
export declare const Link: Story
export declare const Outline: Story
export declare const SizeDefault: Story
export declare const SizeIcon: Story
export declare const SizeLarge: Story
export declare const SizeSmall: Story
