'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../collapsible'
export function CollapsibleDemo() {
    var _a = React.useState(false),
        isOpen = _a[0],
        setIsOpen = _a[1]
    return _jsxs(Collapsible, {
        open: isOpen,
        onOpenChange: setIsOpen,
        className: 'w-[350px] space-y-2',
        children: [
            _jsxs('div', {
                className: 'flex items-center justify-between space-x-4 px-4',
                children: [
                    _jsx('h4', {
                        className: 'text-sm font-semibold',
                        children: '@peduarte starred 3 repositories',
                    }),
                    _jsx(CollapsibleTrigger, {
                        asChild: true,
                        children: _jsxs(Button, {
                            variant: 'ghost',
                            size: 'sm',
                            className: 'w-9 p-0',
                            children: [
                                _jsx(ChevronsUpDown, { className: 'h-4 w-4' }),
                                _jsx('span', {
                                    className: 'sr-only',
                                    children: 'Toggle',
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            _jsx('div', {
                className: 'rounded-md border px-4 py-3 font-mono text-sm',
                children: '@radix-ui/primitives',
            }),
            _jsxs(CollapsibleContent, {
                className: 'space-y-2',
                children: [
                    _jsx('div', {
                        className:
                            'rounded-md border px-4 py-3 font-mono text-sm',
                        children: '@radix-ui/colors',
                    }),
                    _jsx('div', {
                        className:
                            'rounded-md border px-4 py-3 font-mono text-sm',
                        children: '@stitches/react',
                    }),
                ],
            }),
        ],
    })
}
