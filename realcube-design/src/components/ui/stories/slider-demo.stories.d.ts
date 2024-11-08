/// <reference types="react" />
import { StoryObj } from '@storybook/react'
declare const meta: {
    title: string
    component: (
        props: Omit<
            import('@radix-ui/react-slider').SliderProps &
                import('react').RefAttributes<HTMLSpanElement>,
            'ref'
        > &
            import('react').RefAttributes<HTMLSpanElement>,
    ) => import('react/jsx-runtime').JSX.Element
}
export default meta
type Story = StoryObj<typeof meta>
export declare const Default: Story
