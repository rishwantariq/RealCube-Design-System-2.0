'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '../../../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../../../ui/dropdown-menu'
import { labels } from '../data/data'
import { taskSchema } from '../schema/schema'
export function DataTableRowActions(_a) {
    var row = _a.row
    var task = taskSchema.parse(row.original)
    return _jsxs(DropdownMenu, {
        children: [
            _jsx(DropdownMenuTrigger, {
                asChild: true,
                children: _jsxs(Button, {
                    variant: 'ghost',
                    className: 'flex h-8 w-8 p-0 data-[state=open]:bg-muted',
                    children: [
                        _jsx(DotsHorizontalIcon, { className: 'h-4 w-4' }),
                        _jsx('span', {
                            className: 'sr-only',
                            children: 'Open menu',
                        }),
                    ],
                }),
            }),
            _jsxs(DropdownMenuContent, {
                align: 'end',
                className: 'w-[160px]',
                children: [
                    _jsx(DropdownMenuItem, { children: 'Edit' }),
                    _jsx(DropdownMenuItem, { children: 'Make a copy' }),
                    _jsx(DropdownMenuItem, { children: 'Favorite' }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuSub, {
                        children: [
                            _jsx(DropdownMenuSubTrigger, {
                                children: 'Labels',
                            }),
                            _jsx(DropdownMenuSubContent, {
                                children: _jsx(DropdownMenuRadioGroup, {
                                    value: task.label,
                                    children: labels.map(function (label) {
                                        return _jsx(
                                            DropdownMenuRadioItem,
                                            {
                                                value: label.value,
                                                children: label.label,
                                            },
                                            label.value,
                                        )
                                    }),
                                }),
                            }),
                        ],
                    }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuItem, {
                        children: [
                            'Delete',
                            _jsx(DropdownMenuShortcut, {
                                children: '\u2318\u232B',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
