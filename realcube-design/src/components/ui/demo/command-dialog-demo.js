'use client'
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import * as React from 'react'
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-react'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '../command'
export function CommandDialogDemo() {
    var _a = React.useState(false),
        open = _a[0],
        setOpen = _a[1]
    React.useEffect(function () {
        var down = function (e) {
            if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen(function (open) {
                    return !open
                })
            }
        }
        document.addEventListener('keydown', down)
        return function () {
            return document.removeEventListener('keydown', down)
        }
    }, [])
    return _jsxs(_Fragment, {
        children: [
            _jsxs('p', {
                className: 'text-sm text-muted-foreground',
                children: [
                    'Press',
                    ' ',
                    _jsxs('kbd', {
                        className:
                            'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
                        children: [
                            _jsx('span', {
                                className: 'text-xs',
                                children: '\u2318',
                            }),
                            'J',
                        ],
                    }),
                ],
            }),
            _jsxs(CommandDialog, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    _jsx(CommandInput, {
                        placeholder: 'Type a command or search...',
                    }),
                    _jsxs(CommandList, {
                        children: [
                            _jsx(CommandEmpty, {
                                children: 'No results found.',
                            }),
                            _jsxs(CommandGroup, {
                                heading: 'Suggestions',
                                children: [
                                    _jsxs(CommandItem, {
                                        children: [
                                            _jsx(Calendar, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Calendar',
                                            }),
                                        ],
                                    }),
                                    _jsxs(CommandItem, {
                                        children: [
                                            _jsx(Smile, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Search Emoji',
                                            }),
                                        ],
                                    }),
                                    _jsxs(CommandItem, {
                                        children: [
                                            _jsx(Calculator, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Calculator',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsx(CommandSeparator, {}),
                            _jsxs(CommandGroup, {
                                heading: 'Settings',
                                children: [
                                    _jsxs(CommandItem, {
                                        children: [
                                            _jsx(User, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Profile',
                                            }),
                                            _jsx(CommandShortcut, {
                                                children: '\u2318P',
                                            }),
                                        ],
                                    }),
                                    _jsxs(CommandItem, {
                                        children: [
                                            _jsx(CreditCard, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Billing',
                                            }),
                                            _jsx(CommandShortcut, {
                                                children: '\u2318B',
                                            }),
                                        ],
                                    }),
                                    _jsxs(CommandItem, {
                                        children: [
                                            _jsx(Settings, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Settings',
                                            }),
                                            _jsx(CommandShortcut, {
                                                children: '\u2318S',
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
