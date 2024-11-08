import { StoryObj } from '@storybook/react'
import { VariantProps } from 'class-variance-authority'
declare const meta: {
    title: string
    args: {
        variant: 'default'
    }
    render: ({
        variant,
    }: VariantProps<
        (
            props?:
                | ({
                      variant?:
                          | 'default'
                          | 'status'
                          | 'result'
                          | 'action'
                          | 'success'
                          | 'failure'
                          | 'warning'
                          | 'info'
                          | 'tertiary'
                          | null
                          | undefined
                  } & import('class-variance-authority/types').ClassProp)
                | undefined,
        ) => string
    >) => import('react/jsx-runtime').JSX.Element
    tags: string[]
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
export declare const AlertDefaultDemo: Story
export declare const AlertTertiaryDemo: Story
export declare const AlertActionDemo: Story
export declare const AlertResultDemo: Story
export declare const AlertStatusDemo: Story
export declare const AlertSuccessDemo: Story
export declare const AlertFailureDemo: Story
export declare const AlertWarningDemo: Story
export declare const AlertInfoDemo: Story
export declare const AlertNotTitle: Story
