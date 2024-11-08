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
import { jsx as _jsx } from 'react/jsx-runtime'
import Link from 'next/link'
import { Badge, badgeVariants } from '../badge'
//meta
var meta = {
    title: 'RealCube/badge',
    render: function (args) {
        return _jsx(Badge, __assign({}, args, { children: args.children }))
    },
    tags: ['autodocs'],
    args: {
        variant: 'default',
        children: 'badgeCn',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'secondary', 'outline', 'destructive'],
        },
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
//colors
export var Default = {
    args: {
        variant: 'default',
    },
}
export var Secondary = {
    args: {
        variant: 'secondary',
    },
}
export var Outline = {
    args: {
        variant: 'outline',
    },
}
export var Destructive = {
    args: {
        variant: 'destructive',
    },
}
export var LinkWithStyleBadge = {
    render: function (_a) {
        var variant = _a.variant,
            children = _a.children
        return _jsx(Link, {
            href: '#',
            className: badgeVariants({ variant: variant }),
            children: children,
        })
    },
}
