import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { Bold, Italic, Underline } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '../toggle-group'
var meta = {
    title: 'RealCube/toggle-group',
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
    render: function (args) {
        return _jsx(_Fragment, {
            children: _jsxs(ToggleGroup, {
                variant: args.variant,
                size: args.size,
                disabled: args.disabled,
                type: 'multiple',
                children: [
                    _jsx(ToggleGroupItem, {
                        value: 'bold',
                        'aria-label': 'Toggle bold',
                        children: _jsx(Bold, { className: 'h-4 w-4' }),
                    }),
                    _jsx(ToggleGroupItem, {
                        value: 'italic',
                        'aria-label': 'Toggle italic',
                        children: _jsx(Italic, { className: 'h-4 w-4' }),
                    }),
                    _jsx(ToggleGroupItem, {
                        value: 'strikethrough',
                        'aria-label': 'Toggle strikethrough',
                        children: _jsx(Underline, { className: 'h-4 w-4' }),
                    }),
                ],
            }),
        })
    },
}
//colors
export var ToggleGroupDefaultStyle = {
    args: { variant: 'default' },
}
export var ToggleGroupOutlineStyle = {
    args: { variant: 'outline' },
}
export var ToggleGroupSingle = {
    args: { variant: 'outline' },
    render: function (args) {
        return _jsx(_Fragment, {
            children: _jsxs(ToggleGroup, {
                variant: args.variant,
                size: args.size,
                disabled: args.disabled,
                type: 'single',
                children: [
                    _jsx(ToggleGroupItem, {
                        value: 'bold',
                        'aria-label': 'Toggle bold',
                        children: _jsx(Bold, { className: 'h-4 w-4' }),
                    }),
                    _jsx(ToggleGroupItem, {
                        value: 'italic',
                        'aria-label': 'Toggle italic',
                        children: _jsx(Italic, { className: 'h-4 w-4' }),
                    }),
                    _jsx(ToggleGroupItem, {
                        value: 'strikethrough',
                        'aria-label': 'Toggle strikethrough',
                        children: _jsx(Underline, { className: 'h-4 w-4' }),
                    }),
                ],
            }),
        })
    },
}
//sizes
export var ToggleGroupSizeDefault = {
    args: { variant: 'default', size: 'default' },
}
export var ToggleGroupSizeSmall = {
    args: { variant: 'default', size: 'sm' },
}
export var ToggleGroupSizeLarge = {
    args: { variant: 'default', size: 'lg' },
}
//disabled
export var ToggleGroupDisabled = {
    args: { variant: 'default', size: 'default', disabled: true },
}
export default meta
