import { StoryObj } from '@storybook/react'
import { InputProps } from '../input'
declare const meta: {
    title: string
    component: (args: InputProps) => import('react/jsx-runtime').JSX.Element
    args: {
        type: 'text'
    }
    argTypes: {
        type: {
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
export declare const InputDefault: Story
export declare const InputFile: Story
export declare const InputDisabled: Story
export declare const InputWithLabel: Story
export declare const InputWithButton: Story
