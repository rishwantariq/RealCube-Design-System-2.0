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
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { Button } from '../button'
import { Label } from '../label'
import { Input } from '../input'
var meta = {
    title: 'RealCube/input',
    component: function (args) {
        return _jsx(Input, __assign({}, args))
    },
    args: {
        type: 'text',
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: [
                'file',
                'email',
                'password',
                'text',
                'checkbox',
                'radio',
                ' date',
                'datetime-local',
                'email',
                'hidden',
                'image',
                'month',
                'number',
                'password',
                'range',
                'reset',
                'search',
                'submit',
                'tel',
                'time',
                'url',
                'week',
            ],
        },
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var InputDefault = {
    args: {
        type: 'text',
        placeholder: 'Name',
    },
}
export var InputFile = {
    args: {},
    render: function (args) {
        return _jsx(_Fragment, {
            children: _jsxs('div', {
                className: 'grid w-full max-w-sm items-center gap-1.5',
                children: [
                    _jsx(Label, { htmlFor: 'picture', children: 'Picture' }),
                    _jsx(
                        Input,
                        __assign({ id: 'picture', type: 'file' }, args),
                    ),
                ],
            }),
        })
    },
}
export var InputDisabled = {
    args: {
        disabled: true,
    },
    render: function (args) {
        return _jsx(
            Input,
            __assign({ type: 'email', placeholder: 'Email' }, args),
        )
    },
}
export var InputWithLabel = {
    args: {},
    render: function (args) {
        return _jsxs('div', {
            className: 'grid w-full max-w-sm items-center gap-1.5',
            children: [
                _jsx(Label, { htmlFor: 'email', children: 'Email' }),
                _jsx(Input, {
                    type: 'email',
                    id: 'email',
                    placeholder: 'Email',
                }),
            ],
        })
    },
}
export var InputWithButton = {
    args: {},
    render: function (args) {
        return _jsxs('div', {
            className: 'flex w-full max-w-sm items-center space-x-2',
            children: [
                _jsx(Input, { type: 'email', placeholder: 'Email' }),
                _jsx(Button, { type: 'submit', children: 'Subscribe' }),
            ],
        })
    },
}
