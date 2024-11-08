import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from 'lucide-react'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../../ui/dropdown-menu'
import { Separator } from '../../../ui/separator'
export function DemoGithub() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                className:
                    'grid grid-cols-[1fr_110px] items-start gap-4 space-y-0',
                children: [
                    _jsxs('div', {
                        className: 'space-y-1',
                        children: [
                            _jsx(CardTitle, { children: 'shadcn/ui' }),
                            _jsx(CardDescription, {
                                children:
                                    'Beautifully designed components built with Radix UI and Tailwind CSS.',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            'flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground',
                        children: [
                            _jsxs(Button, {
                                variant: 'secondary',
                                className: 'px-3 shadow-none',
                                children: [
                                    _jsx(StarIcon, {
                                        className: 'mr-2 h-4 w-4',
                                    }),
                                    'Star',
                                ],
                            }),
                            _jsx(Separator, {
                                orientation: 'vertical',
                                className: 'h-[20px]',
                            }),
                            _jsxs(DropdownMenu, {
                                children: [
                                    _jsx(DropdownMenuTrigger, {
                                        asChild: true,
                                        children: _jsx(Button, {
                                            variant: 'secondary',
                                            className: 'px-2 shadow-none',
                                            children: _jsx(ChevronDownIcon, {
                                                className:
                                                    'h-4 w-4 text-secondary-foreground',
                                            }),
                                        }),
                                    }),
                                    _jsxs(DropdownMenuContent, {
                                        align: 'end',
                                        alignOffset: -5,
                                        className: 'w-[200px]',
                                        forceMount: true,
                                        children: [
                                            _jsx(DropdownMenuLabel, {
                                                children: 'Suggested Lists',
                                            }),
                                            _jsx(DropdownMenuSeparator, {}),
                                            _jsx(DropdownMenuCheckboxItem, {
                                                checked: true,
                                                children: 'Future Ideas',
                                            }),
                                            _jsx(DropdownMenuCheckboxItem, {
                                                children: 'My Stack',
                                            }),
                                            _jsx(DropdownMenuCheckboxItem, {
                                                children: 'Inspiration',
                                            }),
                                            _jsx(DropdownMenuSeparator, {}),
                                            _jsxs(DropdownMenuItem, {
                                                children: [
                                                    _jsx(PlusIcon, {
                                                        className:
                                                            'mr-2 h-4 w-4',
                                                    }),
                                                    ' Create List',
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsx(CardContent, {
                children: _jsxs('div', {
                    className: 'flex space-x-4 text-sm text-muted-foreground',
                    children: [
                        _jsxs('div', {
                            className: 'flex items-center',
                            children: [
                                _jsx(CircleIcon, {
                                    className:
                                        'mr-1 h-3 w-3 fill-sky-400 text-sky-400',
                                }),
                                'TypeScript',
                            ],
                        }),
                        _jsxs('div', {
                            className: 'flex items-center',
                            children: [
                                _jsx(StarIcon, { className: 'mr-1 h-3 w-3' }),
                                '20k',
                            ],
                        }),
                        _jsx('div', { children: 'Updated April 2023' }),
                    ],
                }),
            }),
        ],
    })
}
