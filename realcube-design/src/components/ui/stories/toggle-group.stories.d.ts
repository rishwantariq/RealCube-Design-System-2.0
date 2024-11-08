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
    render: (
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
export declare const ToggleGroupDefaultStyle: Story
export declare const ToggleGroupOutlineStyle: Story
export declare const ToggleGroupSingle: Story
export declare const ToggleGroupSizeDefault: Story
export declare const ToggleGroupSizeSmall: Story
export declare const ToggleGroupSizeLarge: Story
export declare const ToggleGroupDisabled: Story
export default meta
