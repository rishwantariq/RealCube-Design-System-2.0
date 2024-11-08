import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Alert, AlertDescription, AlertTitle } from '../alert'
import {
    CheckCircle,
    AlertCircle,
    Info,
    XCircle,
    Bell,
    Star,
    HelpCircle,
    Circle,
} from 'lucide-react'
var meta = {
    title: 'RealCube/alert',
    args: {
        variant: 'default',
    },
    render: function (_a) {
        var variant = _a.variant
        // Select the icon based on the variant
        var Icon = {
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
        return _jsxs(Alert, {
            variant: variant,
            children: [
                _jsx(Icon, { className: 'h-4 w-4' }),
                _jsx(AlertTitle, { children: 'Heads up!' }),
                _jsx(AlertDescription, {
                    children:
                        'You can add components to your app using the cli.',
                }),
            ],
        })
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
}
export default meta
// Individual Alert Stories
export var AlertDefaultDemo = {
    args: {
        variant: 'default',
    },
}
export var AlertTertiaryDemo = {
    args: {
        variant: 'tertiary',
    },
}
export var AlertActionDemo = {
    args: {
        variant: 'action',
    },
}
export var AlertResultDemo = {
    args: {
        variant: 'result',
    },
}
export var AlertStatusDemo = {
    args: {
        variant: 'status',
    },
}
export var AlertSuccessDemo = {
    args: {
        variant: 'success',
    },
}
export var AlertFailureDemo = {
    args: {
        variant: 'failure',
    },
}
export var AlertWarningDemo = {
    args: {
        variant: 'warning',
    },
}
export var AlertInfoDemo = {
    args: {
        variant: 'info',
    },
}
export var AlertNotTitle = {
    render: function (_a) {
        var variant = _a.variant
        var iconMap = {
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
        var Icon = iconMap[variant] || Info
        return _jsxs(Alert, {
            variant: variant,
            children: [
                _jsx(Icon, { className: 'h-4 w-4' }),
                _jsx(AlertDescription, {
                    children:
                        'You can add components to your app using the cli.',
                }),
            ],
        })
    },
}
