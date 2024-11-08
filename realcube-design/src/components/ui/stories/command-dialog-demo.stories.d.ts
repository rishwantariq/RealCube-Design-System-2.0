import { StoryObj } from '@storybook/react'
import { CommandDialogDemo } from '../demo/command-dialog-demo'
declare const meta: {
    title: string
    component: typeof CommandDialogDemo
    parameters: {
        layout: string
    }
}
export default meta
type Story = StoryObj<typeof meta>
export declare const CommandWithCmdkDialog: Story
