var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../lib/utils'
// Import specific icons from lucide-react for different alert types
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
export var alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground border-border',
                // Structured Variants using CSS Variables for Alert Colors
                success:
                    'bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] border-[hsl(var(--success))]',
                failure:
                    'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] border-[hsl(var(--destructive))]',
                warning:
                    'bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))] border-[hsl(var(--warning))]',
                info: 'bg-[hsl(var(--info))] text-[hsl(var(--info-foreground))] border-[hsl(var(--info))]',
                result: 'bg-[hsl(var(--result))] text-[hsl(var(--result-foreground))] border-[hsl(var(--result))]',
                action: 'bg-[hsl(var(--action))] text-[hsl(var(--action-foreground))] border-[hsl(var(--action))]',
                tertiary:
                    'bg-[hsl(var(--tertiary))] text-[hsl(var(--tertiary-foreground))] border-[hsl(var(--tertiary))]',
                status: 'bg-[hsl(var(--status))] text-[hsl(var(--status-foreground))] border-[hsl(var(--status))]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)
var Alert = React.forwardRef(function (_a, ref) {
    var className = _a.className,
        variant = _a.variant,
        props = __rest(_a, ['className', 'variant'])
    // Select the appropriate icon based on the alert variant
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
    }[variant || 'default'] // Use 'default' icon if no variant specified
    return _jsxs(
        'div',
        __assign(
            {
                ref: ref,
                role: 'alert',
                className: cn(alertVariants({ variant: variant }), className),
            },
            props,
            {
                children: [
                    _jsx(Icon, { className: 'h-5 w-5 text-foreground-muted' }),
                    ' ',
                    props.children,
                ],
            },
        ),
    )
})
Alert.displayName = 'Alert'
var AlertTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className,
        props = __rest(_a, ['className'])
    return _jsx(
        'h5',
        __assign(
            {
                ref: ref,
                className: cn(
                    'mb-1 font-medium leading-none tracking-tight',
                    className,
                ),
            },
            props,
        ),
    )
})
AlertTitle.displayName = 'AlertTitle'
var AlertDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className,
        props = __rest(_a, ['className'])
    return _jsx(
        'div',
        __assign(
            {
                ref: ref,
                className: cn('text-sm [&_p]:leading-relaxed', className),
            },
            props,
        ),
    )
})
AlertDescription.displayName = 'AlertDescription'
export { Alert, AlertDescription, AlertTitle }
