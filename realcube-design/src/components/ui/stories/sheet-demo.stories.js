import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../sheet'
var meta = {
    title: 'RealCube/sheet',
    component: function () {
        return _jsxs(Sheet, {
            children: [
                _jsx(SheetTrigger, {
                    asChild: true,
                    children: _jsx(Button, {
                        variant: 'outline',
                        children: 'Open',
                    }),
                }),
                _jsxs(SheetContent, {
                    children: [
                        _jsxs(SheetHeader, {
                            children: [
                                _jsx(SheetTitle, { children: 'Edit profile' }),
                                _jsx(SheetDescription, {
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
                                            value: 'Pedro Duarte',
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
                                            value: '@peduarte',
                                            className: 'col-span-3',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx(SheetFooter, {
                            children: _jsx(SheetClose, {
                                asChild: true,
                                children: _jsx(Button, {
                                    type: 'submit',
                                    children: 'Save changes',
                                }),
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
export var SheetDemo = {
    args: {},
}
var SHEET_SIDES = ['top', 'right', 'bottom', 'left']
export var SheetSideExample = {
    args: {},
    render: function () {
        return _jsx('div', {
            className: 'grid grid-cols-2 gap-2',
            children: SHEET_SIDES.map(function (side) {
                return _jsxs(
                    Sheet,
                    {
                        children: [
                            _jsx(SheetTrigger, {
                                asChild: true,
                                children: _jsx(Button, {
                                    variant: 'outline',
                                    children: side,
                                }),
                            }),
                            _jsxs(SheetContent, {
                                side: side,
                                children: [
                                    _jsxs(SheetHeader, {
                                        children: [
                                            _jsx(SheetTitle, {
                                                children: 'Edit profile',
                                            }),
                                            _jsx(SheetDescription, {
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
                                                        value: 'Pedro Duarte',
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
                                                        value: '@peduarte',
                                                        className: 'col-span-3',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsx(SheetFooter, {
                                        children: _jsx(SheetClose, {
                                            asChild: true,
                                            children: _jsx(Button, {
                                                type: 'submit',
                                                children: 'Save changes',
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    },
                    side,
                )
            }),
        })
    },
}
