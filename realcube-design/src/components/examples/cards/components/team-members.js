import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { ChevronDownIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/avatar'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../../../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
export function DemoTeamMembers() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                children: [
                    _jsx(CardTitle, { children: 'Team Members' }),
                    _jsx(CardDescription, {
                        children: 'Invite your team members to collaborate.',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                className: 'grid gap-6',
                children: [
                    _jsxs('div', {
                        className:
                            'flex items-center justify-between space-x-4',
                        children: [
                            _jsxs('div', {
                                className: 'flex items-center space-x-4',
                                children: [
                                    _jsxs(Avatar, {
                                        children: [
                                            _jsx(AvatarImage, {
                                                src: '/avatars/01.png',
                                            }),
                                            _jsx(AvatarFallback, {
                                                children: 'OM',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        children: [
                                            _jsx('p', {
                                                className:
                                                    'text-sm font-medium leading-none',
                                                children: 'Sofia Davis',
                                            }),
                                            _jsx('p', {
                                                className:
                                                    'text-sm text-muted-foreground',
                                                children: 'm@example.com',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs(Popover, {
                                children: [
                                    _jsx(PopoverTrigger, {
                                        asChild: true,
                                        children: _jsxs(Button, {
                                            variant: 'outline',
                                            className: 'ml-auto',
                                            children: [
                                                'Owner',
                                                ' ',
                                                _jsx(ChevronDownIcon, {
                                                    className:
                                                        'ml-2 h-4 w-4 text-muted-foreground',
                                                }),
                                            ],
                                        }),
                                    }),
                                    _jsx(PopoverContent, {
                                        className: 'p-0',
                                        align: 'end',
                                        children: _jsxs(Command, {
                                            children: [
                                                _jsx(CommandInput, {
                                                    placeholder:
                                                        'Select new role...',
                                                }),
                                                _jsxs(CommandList, {
                                                    children: [
                                                        _jsx(CommandEmpty, {
                                                            children:
                                                                'No roles found.',
                                                        }),
                                                        _jsxs(CommandGroup, {
                                                            children: [
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Viewer',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Can view and comment.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Developer',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Can view, comment and edit.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Billing',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Can view, comment and manage billing.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Owner',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Admin-level access to all resources.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            'flex items-center justify-between space-x-4',
                        children: [
                            _jsxs('div', {
                                className: 'flex items-center space-x-4',
                                children: [
                                    _jsxs(Avatar, {
                                        children: [
                                            _jsx(AvatarImage, {
                                                src: '/avatars/02.png',
                                            }),
                                            _jsx(AvatarFallback, {
                                                children: 'JL',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        children: [
                                            _jsx('p', {
                                                className:
                                                    'text-sm font-medium leading-none',
                                                children: 'Jackson Lee',
                                            }),
                                            _jsx('p', {
                                                className:
                                                    'text-sm text-muted-foreground',
                                                children: 'p@example.com',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs(Popover, {
                                children: [
                                    _jsx(PopoverTrigger, {
                                        asChild: true,
                                        children: _jsxs(Button, {
                                            variant: 'outline',
                                            className: 'ml-auto',
                                            children: [
                                                'Member',
                                                ' ',
                                                _jsx(ChevronDownIcon, {
                                                    className:
                                                        'ml-2 h-4 w-4 text-muted-foreground',
                                                }),
                                            ],
                                        }),
                                    }),
                                    _jsx(PopoverContent, {
                                        className: 'p-0',
                                        align: 'end',
                                        children: _jsxs(Command, {
                                            children: [
                                                _jsx(CommandInput, {
                                                    placeholder:
                                                        'Select new role...',
                                                }),
                                                _jsxs(CommandList, {
                                                    children: [
                                                        _jsx(CommandEmpty, {
                                                            children:
                                                                'No roles found.',
                                                        }),
                                                        _jsxs(CommandGroup, {
                                                            className: 'p-1.5',
                                                            children: [
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Viewer',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Can view and comment.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Developer',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Can view, comment and edit.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Billing',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Can view, comment and manage billing.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CommandItem,
                                                                    {
                                                                        className:
                                                                            'teamaspace-y-1 flex flex-col items-start px-4 py-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        children:
                                                                                            'Owner',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-muted-foreground',
                                                                                        children:
                                                                                            'Admin-level access to all resources.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
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
