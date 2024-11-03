import { Meta, StoryObj } from '@storybook/react'
import { VariantProps } from 'class-variance-authority'
import { Alert, AlertDescription, AlertTitle, alertVariants } from '../alert'
import {
    CheckCircle,
    AlertCircle,
    Info,
    XCircle,
    Bell,
    Star,
    HelpCircle,
    Circle,
    LucideIcon,
} from 'lucide-react'

type TypeCustomAlertProps = {} & VariantProps<typeof alertVariants>

const meta = {
    title: 'RealCube/alert',

    args: {
        variant: 'default',
    },

    render: ({ variant }) => {
        // Select the icon based on the variant
        const Icon = {
            success: CheckCircle,
            failure: XCircle,
            warning: AlertCircle,
            info: Info,
            result: Star,
            action: Bell,
            tertiary: HelpCircle,
            status: Circle,
            default: Info,
        }[variant || 'default']

        return (
            <Alert variant={variant}>
                <Icon className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        )
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'tertiary',
                'action',
                'result',
                'status',
                'success',
                'failure',
                'warning',
                'info',
            ],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<TypeCustomAlertProps>

export default meta

type Story = StoryObj<typeof meta>

// Individual Alert Stories
export const AlertDefaultDemo: Story = {
    args: {
        variant: 'default',
    },
}
export const AlertTertiaryDemo: Story = {
    args: {
        variant: 'tertiary',
    },
}
export const AlertActionDemo: Story = {
    args: {
        variant: 'action',
    },
}
export const AlertResultDemo: Story = {
    args: {
        variant: 'result',
    },
}
export const AlertStatusDemo: Story = {
    args: {
        variant: 'status',
    },
}
export const AlertSuccessDemo: Story = {
    args: {
        variant: 'success',
    },
}
export const AlertFailureDemo: Story = {
    args: {
        variant: 'failure',
    },
}
export const AlertWarningDemo: Story = {
    args: {
        variant: 'warning',
    },
}
export const AlertInfoDemo: Story = {
    args: {
        variant: 'info',
    },
}

export const AlertNotTitle: Story = {
    render: ({ variant }) => {
        const iconMap: Record<string, LucideIcon> = {
            success: CheckCircle,
            failure: XCircle,
            warning: AlertCircle,
            info: Info,
            result: Star,
            action: Bell,
            tertiary: HelpCircle,
            status: Circle,
            default: Info,
        }

        const Icon = iconMap[variant as keyof typeof iconMap] || Info

        return (
            <Alert variant={variant}>
                <Icon className="h-4 w-4" />
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        )
    },
}
