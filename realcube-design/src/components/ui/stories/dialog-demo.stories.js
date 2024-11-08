import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../dialog'
import { Input } from '../input'
import { Label } from '../label'
import { Copy } from 'lucide-react'
var meta = {
    title: 'RealCube/dialog',
    component: function () {
        return _jsxs(Dialog, {
            children: [
                _jsx(DialogTrigger, {
                    asChild: true,
                    children: _jsx(Button, {
                        variant: 'outline',
                        children: 'Edit Profile',
                    }),
                }),
                _jsxs(DialogContent, {
                    className: 'sm:max-w-[425px]',
                    children: [
                        _jsxs(DialogHeader, {
                            children: [
                                _jsx(DialogTitle, { children: 'Edit profile' }),
                                _jsx(DialogDescription, {
                                    children:
                                        'Make changes to your profile here. Click save when youre done.',
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            className: 'grid gap-4 py-4',
                            children: [
                                _jsxs('div', {
                                    className:
                                        'grid grid-cols-4 items-center gap-4',
                                    children: [
                                        _jsx(Label, {
                                            htmlFor: 'name',
                                            className: 'text-right',
                                            children: 'Name',
                                        }),
                                        _jsx(Input, {
                                            id: 'name',
                                            defaultValue: 'Pedro Duarte',
                                            className: 'col-span-3',
                                        }),
                                    ],
                                }),
                                _jsxs('div', {
                                    className:
                                        'grid grid-cols-4 items-center gap-4',
                                    children: [
                                        _jsx(Label, {
                                            htmlFor: 'username',
                                            className: 'text-right',
                                            children: 'Username',
                                        }),
                                        _jsx(Input, {
                                            id: 'username',
                                            defaultValue: '@peduarte',
                                            className: 'col-span-3',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx(DialogFooter, {
                            children: _jsx(Button, {
                                type: 'submit',
                                children: 'Save changes',
                            }),
                        }),
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
export var DialogDemo = {
    args: {},
}
export var DialogCustomShareLink = {
    args: {},
    render: function () {
        return _jsxs(Dialog, {
            children: [
                _jsx(DialogTrigger, {
                    asChild: true,
                    children: _jsx(Button, {
                        variant: 'outline',
                        children: 'Share',
                    }),
                }),
                _jsxs(DialogContent, {
                    className: 'sm:max-w-md',
                    children: [
                        _jsxs(DialogHeader, {
                            children: [
                                _jsx(DialogTitle, { children: 'Share link' }),
                                _jsx(DialogDescription, {
                                    children:
                                        'Anyone who has this link will be able to view this.',
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                                _jsxs('div', {
                                    className: 'grid flex-1 gap-2',
                                    children: [
                                        _jsx(Label, {
                                            htmlFor: 'link',
                                            className: 'sr-only',
                                            children: 'Link',
                                        }),
                                        _jsx(Input, {
                                            id: 'link',
                                            defaultValue:
                                                'https://ui.shadcn.com/docs/installation',
                                            readOnly: true,
                                        }),
                                    ],
                                }),
                                _jsxs(Button, {
                                    type: 'submit',
                                    size: 'sm',
                                    className: 'px-3',
                                    children: [
                                        _jsx('span', {
                                            className: 'sr-only',
                                            children: 'Copy',
                                        }),
                                        _jsx(Copy, { className: 'h-4 w-4' }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx(DialogFooter, {
                            className: 'sm:justify-start',
                            children: _jsx(DialogClose, {
                                asChild: true,
                                children: _jsx(Button, {
                                    type: 'button',
                                    variant: 'secondary',
                                    children: 'Close',
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        })
    },
}
