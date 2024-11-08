import { StoryObj } from '@storybook/react'
import { BadgeProps } from '../badge'
declare const meta: {
    title: string
    render: (args: BadgeProps) => import('react/jsx-runtime').JSX.Element
    tags: string[]
    args: {
        variant: 'default'
        children: string
    }
    argTypes: {
        variant: {
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
export declare const Outline: Story
export declare const Destructive: Story
export declare const LinkWithStyleBadge: Story
