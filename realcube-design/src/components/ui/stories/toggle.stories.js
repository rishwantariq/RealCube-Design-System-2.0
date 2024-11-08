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
import {
    jsx as _jsx,
    Fragment as _Fragment,
    jsxs as _jsxs,
} from 'react/jsx-runtime'
import { Bold, Italic } from 'lucide-react'
import { Toggle } from '../toggle'
var meta = {
    title: 'RealCube/toggle',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    component: function (args) {
        return _jsx(_Fragment, {
            children: _jsx(
                Toggle,
                __assign({}, args, {
                    children: _jsx(Bold, { className: 'h-4 w-4' }),
                }),
            ),
        })
    },
}
//colors
export var ToggleDefaultStyle = {
    args: { variant: 'default' },
}
export var ToggleOutlineStyle = {
    args: { variant: 'outline' },
}
//sizes
export var ToggleSizeDefault = {
    args: { variant: 'default', size: 'default' },
}
export var ToggleSizeSmall = {
    args: { variant: 'default', size: 'sm' },
}
export var ToggleSizeLarge = {
    args: { variant: 'default', size: 'lg' },
}
//disabled
export var ToggleDisabled = {
    args: { variant: 'default', size: 'default', disabled: true },
}
export var ToggleWithText = function (args) {
    return _jsxs(
        Toggle,
        __assign({ 'aria-label': 'Toggle italic' }, args, {
            children: [_jsx(Italic, { className: 'mr-2 h-4 w-4' }), 'Italic'],
        }),
    )
}
export default meta
