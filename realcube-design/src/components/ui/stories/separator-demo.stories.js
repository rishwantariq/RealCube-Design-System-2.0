import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { Separator } from '../separator'
var meta = {
    title: 'RealCube/separator',
    component: function () {
        return _jsxs('div', {
            children: [
                _jsxs('div', {
                    className: 'space-y-1',
                    children: [
                        _jsx('h4', {
                            className: 'text-sm font-medium leading-none',
                            children: 'Radix Primitives',
                        }),
                        _jsx('p', {
                            className: 'text-sm text-muted-foreground',
                            children: 'An open-source UI component library.',
                        }),
                    ],
                }),
                _jsx(Separator, { className: 'my-4' }),
                _jsxs('div', {
                    className: 'flex h-5 items-center space-x-4 text-sm',
                    children: [
                        _jsx('div', { children: 'Blog' }),
                        _jsx(Separator, { orientation: 'vertical' }),
                        _jsx('div', { children: 'Docs' }),
                        _jsx(Separator, { orientation: 'vertical' }),
                        _jsx('div', { children: 'Source' }),
                    ],
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var SeparatorDemo = {
    args: {},
}
export var SeparatorHorizontal = {
    args: {},
    render: function () {
        return _jsx(_Fragment, {
            children: _jsxs('div', {
                className: 'flex flex-col gap-2',
                children: [
                    _jsx('h1', { children: 'Shadcn-ui' }),
                    _jsx(Separator, { orientation: 'horizontal' }),
                    _jsx('p', {
                        children:
                            'This is NOT a component library. Its a collection of re-usable components that you can copy and paste into your apps.',
                    }),
                ],
            }),
        })
    },
}
export var SeparatorVertical = {
    args: {},
    render: function () {
        return _jsx(_Fragment, {
            children: _jsxs('div', {
                className: 'flex gap-2',
                children: [
                    _jsx('span', { children: 'Shadcn' }),
                    _jsx(Separator, { orientation: 'vertical' }),
                    _jsx('span', { children: 'UI' }),
                ],
            }),
        })
    },
}
