'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '../command'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
var frameworks = [
    {
        value: 'next.js',
        label: 'Next.js',
    },
    {
        value: 'sveltekit',
        label: 'SvelteKit',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
]
export function ComboboxDemo() {
    var _a
    var _b = React.useState(false),
        open = _b[0],
        setOpen = _b[1]
    var _c = React.useState(''),
        value = _c[0],
        setValue = _c[1]
    return _jsxs(Popover, {
        open: open,
        onOpenChange: setOpen,
        children: [
            _jsx(PopoverTrigger, {
                asChild: true,
                children: _jsxs(Button, {
                    variant: 'outline',
                    role: 'combobox',
                    'aria-expanded': open,
                    className: 'w-[200px] justify-between',
                    children: [
                        value
                            ? (_a = frameworks.find(function (framework) {
                                  return framework.value === value
                              })) === null || _a === void 0
                                ? void 0
                                : _a.label
                            : 'Select framework...',
                        _jsx(ChevronsUpDown, {
                            className: 'ml-2 h-4 w-4 shrink-0 opacity-50',
                        }),
                    ],
                }),
            }),
            _jsx(PopoverContent, {
                className: 'w-[200px] p-0',
                children: _jsxs(Command, {
                    children: [
                        _jsx(CommandInput, {
                            placeholder: 'Search framework...',
                        }),
                        _jsx(CommandEmpty, { children: 'No framework found.' }),
                        _jsx(CommandGroup, {
                            children: frameworks.map(function (framework) {
                                return _jsxs(
                                    CommandItem,
                                    {
                                        value: framework.value,
                                        onSelect: function (currentValue) {
                                            setValue(
                                                currentValue === value
                                                    ? ''
                                                    : currentValue,
                                            )
                                            setOpen(false)
                                        },
                                        children: [
                                            _jsx(Check, {
                                                className: cn(
                                                    'mr-2 h-4 w-4',
                                                    value === framework.value
                                                        ? 'opacity-100'
                                                        : 'opacity-0',
                                                ),
                                            }),
                                            framework.label,
                                        ],
                                    },
                                    framework.value,
                                )
                            }),
                        }),
                    ],
                }),
            }),
        ],
    })
}
