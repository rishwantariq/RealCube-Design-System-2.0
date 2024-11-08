'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Calendar, MoreHorizontal, Tags, Trash, User } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../command'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../dropdown-menu'
var labels = [
    'feature',
    'bug',
    'enhancement',
    'documentation',
    'design',
    'question',
    'maintenance',
]
export function ComboboxDropdownMenu() {
    var _a = React.useState('feature'),
        label = _a[0],
        setLabel = _a[1]
    var _b = React.useState(false),
        open = _b[0],
        setOpen = _b[1]
    return _jsxs('div', {
        className:
            'flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center',
        children: [
            _jsxs('p', {
                className: 'text-sm font-medium leading-none',
                children: [
                    _jsx('span', {
                        className:
                            'mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground',
                        children: label,
                    }),
                    _jsx('span', {
                        className: 'text-muted-foreground',
                        children: 'Create a new project',
                    }),
                ],
            }),
            _jsxs(DropdownMenu, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    _jsx(DropdownMenuTrigger, {
                        asChild: true,
                        children: _jsx(Button, {
                            variant: 'ghost',
                            size: 'sm',
                            children: _jsx(MoreHorizontal, {}),
                        }),
                    }),
                    _jsxs(DropdownMenuContent, {
                        align: 'end',
                        className: 'w-[200px]',
                        children: [
                            _jsx(DropdownMenuLabel, { children: 'Actions' }),
                            _jsxs(DropdownMenuGroup, {
                                children: [
                                    _jsxs(DropdownMenuItem, {
                                        children: [
                                            _jsx(User, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            'Assign to...',
                                        ],
                                    }),
                                    _jsxs(DropdownMenuItem, {
                                        children: [
                                            _jsx(Calendar, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            'Set due date...',
                                        ],
                                    }),
                                    _jsx(DropdownMenuSeparator, {}),
                                    _jsxs(DropdownMenuSub, {
                                        children: [
                                            _jsxs(DropdownMenuSubTrigger, {
                                                children: [
                                                    _jsx(Tags, {
                                                        className:
                                                            'mr-2 h-4 w-4',
                                                    }),
                                                    'Apply label',
                                                ],
                                            }),
                                            _jsx(DropdownMenuSubContent, {
                                                className: 'p-0',
                                                children: _jsxs(Command, {
                                                    children: [
                                                        _jsx(CommandInput, {
                                                            placeholder:
                                                                'Filter label...',
                                                            autoFocus: true,
                                                        }),
                                                        _jsxs(CommandList, {
                                                            children: [
                                                                _jsx(
                                                                    CommandEmpty,
                                                                    {
                                                                        children:
                                                                            'No label found.',
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    CommandGroup,
                                                                    {
                                                                        children:
                                                                            labels.map(
                                                                                function (
                                                                                    label,
                                                                                ) {
                                                                                    return _jsx(
                                                                                        CommandItem,
                                                                                        {
                                                                                            value: label,
                                                                                            onSelect:
                                                                                                function (
                                                                                                    value,
                                                                                                ) {
                                                                                                    setLabel(
                                                                                                        value,
                                                                                                    )
                                                                                                    setOpen(
                                                                                                        false,
                                                                                                    )
                                                                                                },
                                                                                            children:
                                                                                                label,
                                                                                        },
                                                                                        label,
                                                                                    )
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    _jsx(DropdownMenuSeparator, {}),
                                    _jsxs(DropdownMenuItem, {
                                        className: 'text-red-600',
                                        children: [
                                            _jsx(Trash, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            'Delete',
                                            _jsx(DropdownMenuShortcut, {
                                                children: '\u2318\u232B',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
