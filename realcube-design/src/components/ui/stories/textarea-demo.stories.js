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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../button'
import { Textarea } from '../textarea'
import { Label } from '../label'
var meta = {
    title: 'RealCube/textarea',
    component: function (props) {
        return _jsx(
            Textarea,
            __assign({}, props, { placeholder: 'Type your message here.' }),
        )
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var Default = {
    args: {},
}
export var Disabled = {
    args: {
        disabled: true,
        'aria-disabled': true,
    },
}
export var TextareaWithLabel = {
    args: {
        children: 'Shadcn',
    },
    render: function (props) {
        return _jsxs('div', {
            className: 'grid w-full gap-1.5',
            children: [
                _jsx(Label, { htmlFor: 'message', children: props.children }),
                _jsx(Textarea, {
                    placeholder: 'Type your message here.',
                    id: 'message',
                }),
            ],
        })
    },
}
export var TextareaWithText = {
    args: {},
    render: function (props) {
        return _jsxs('div', {
            className: 'grid w-full gap-1.5',
            children: [
                _jsx(Label, { htmlFor: 'message-2', children: 'Your Message' }),
                _jsx(Textarea, {
                    placeholder: 'Type your message here.',
                    id: 'message-2',
                }),
                _jsx('p', {
                    className: 'text-sm text-muted-foreground',
                    children:
                        'Your message will be copied to the support team.',
                }),
            ],
        })
    },
}
export var TextareaWithButton = {
    args: {},
    render: function (args) {
        return _jsxs('div', {
            className: 'grid w-full gap-2',
            children: [
                _jsx(Textarea, { placeholder: 'Type your message here.' }),
                _jsx(Button, { children: 'Send message' }),
            ],
        })
    },
}
