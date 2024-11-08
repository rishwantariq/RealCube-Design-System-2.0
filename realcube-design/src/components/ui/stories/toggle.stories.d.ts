/// <reference types="react" />
import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    tags: string[]
    argTypes: {
        variant: {
            control: string
            options: string[]
        }
        size: {
            control: string
            options: string[]
        }
    }
    parameters: {
        layout: string
    }
    component: (
        args: Omit<
            import('@radix-ui/react-toggle').ToggleProps &
                import('react').RefAttributes<HTMLButtonElement>,
            'ref'
        > &
            import('class-variance-authority').VariantProps<
                (
                    props?:
                        | ({
                              variant?: 'default' | 'outline' | null | undefined
                              size?: 'default' | 'sm' | 'lg' | null | undefined
                          } & import('class-variance-authority/types').ClassProp)
                        | undefined,
                ) => string
            > &
            import('react').RefAttributes<HTMLButtonElement>,
    ) => import('react/jsx-runtime').JSX.Element
}
type Story = StoryObj<typeof meta>
export declare const ToggleDefaultStyle: Story
export declare const ToggleOutlineStyle: Story
export declare const ToggleSizeDefault: Story
export declare const ToggleSizeSmall: Story
export declare const ToggleSizeLarge: Story
export declare const ToggleDisabled: Story
export declare const ToggleWithText: (
    args: Story,
) => import('react/jsx-runtime').JSX.Element
export default meta
