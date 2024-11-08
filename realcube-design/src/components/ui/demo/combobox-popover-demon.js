'use client'
import {
    jsx as _jsx,
    Fragment as _Fragment,
    jsxs as _jsxs,
} from 'react/jsx-runtime'
import {
    ArrowUpCircle,
    CheckCircle2,
    Circle,
    HelpCircle,
    XCircle,
} from 'lucide-react'
import * as React from 'react'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../command'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
var statuses = [
    {
        value: 'backlog',
        label: 'Backlog',
        icon: HelpCircle,
    },
    {
        value: 'todo',
        label: 'Todo',
        icon: Circle,
    },
    {
        value: 'in progress',
        label: 'In Progress',
        icon: ArrowUpCircle,
    },
    {
        value: 'done',
        label: 'Done',
        icon: CheckCircle2,
    },
    {
        value: 'canceled',
        label: 'Canceled',
        icon: XCircle,
    },
]
export function ComboboxPopover() {
    var _a = React.useState(false),
        open = _a[0],
        setOpen = _a[1]
    var _b = React.useState(null),
        selectedStatus = _b[0],
        setSelectedStatus = _b[1]
    return _jsxs('div', {
        className: 'flex items-center space-x-4',
        children: [
            _jsx('p', {
                className: 'text-sm text-muted-foreground',
                children: 'Status',
            }),
            _jsxs(Popover, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    _jsx(PopoverTrigger, {
                        asChild: true,
                        children: _jsx(Button, {
                            variant: 'outline',
                            size: 'sm',
                            className: 'w-[150px] justify-start',
                            children: selectedStatus
                                ? _jsxs(_Fragment, {
                                      children: [
                                          _jsx(selectedStatus.icon, {
                                              className:
                                                  'mr-2 h-4 w-4 shrink-0',
                                          }),
                                          selectedStatus.label,
                                      ],
                                  })
                                : _jsx(_Fragment, { children: '+ Set status' }),
                        }),
                    }),
                    _jsx(PopoverContent, {
                        className: 'p-0',
                        side: 'right',
                        align: 'start',
                        children: _jsxs(Command, {
                            children: [
                                _jsx(CommandInput, {
                                    placeholder: 'Change status...',
                                }),
                                _jsxs(CommandList, {
                                    children: [
                                        _jsx(CommandEmpty, {
                                            children: 'No results found.',
                                        }),
                                        _jsx(CommandGroup, {
                                            children: statuses.map(
                                                function (status) {
                                                    return _jsxs(
                                                        CommandItem,
                                                        {
                                                            value: status.value,
                                                            onSelect: function (
                                                                value,
                                                            ) {
                                                                setSelectedStatus(
                                                                    statuses.find(
                                                                        function (
                                                                            priority,
                                                                        ) {
                                                                            return (
                                                                                priority.value ===
                                                                                value
                                                                            )
                                                                        },
                                                                    ) || null,
                                                                )
                                                                setOpen(false)
                                                            },
                                                            children: [
                                                                _jsx(
                                                                    status.icon,
                                                                    {
                                                                        className:
                                                                            cn(
                                                                                'mr-2 h-4 w-4',
                                                                                status.value ===
                                                                                    (selectedStatus ===
                                                                                        null ||
                                                                                    selectedStatus ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : selectedStatus.value)
                                                                                    ? 'opacity-100'
                                                                                    : 'opacity-40',
                                                                            ),
                                                                    },
                                                                ),
                                                                _jsx('span', {
                                                                    children:
                                                                        status.label,
                                                                }),
                                                            ],
                                                        },
                                                        status.value,
                                                    )
                                                },
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    })
}
