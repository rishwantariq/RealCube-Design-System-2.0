'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import * as React from 'react'
import { SortAscIcon, CheckIcon, PlusCircle } from 'lucide-react'
import { cn } from '../../../../lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/avatar'
import { Button } from '../../../ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '../../../ui/command'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../ui/dialog'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../ui/select'
var groups = [
    {
        label: 'Personal Account',
        teams: [
            {
                label: 'Alicia Koch',
                value: 'personal',
            },
        ],
    },
    {
        label: 'Teams',
        teams: [
            {
                label: 'Acme Inc.',
                value: 'acme-inc',
            },
            {
                label: 'Monsters Inc.',
                value: 'monsters',
            },
        ],
    },
]
export default function TeamSwitcher(_a) {
    var className = _a.className
    var _b = React.useState(false),
        open = _b[0],
        setOpen = _b[1]
    var _c = React.useState(false),
        showNewTeamDialog = _c[0],
        setShowNewTeamDialog = _c[1]
    var _d = React.useState(groups[0].teams[0]),
        selectedTeam = _d[0],
        setSelectedTeam = _d[1]
    return _jsxs(Dialog, {
        open: showNewTeamDialog,
        onOpenChange: setShowNewTeamDialog,
        children: [
            _jsxs(Popover, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    _jsx(PopoverTrigger, {
                        asChild: true,
                        children: _jsxs(Button, {
                            variant: 'outline',
                            role: 'combobox',
                            'aria-expanded': open,
                            'aria-label': 'Select a team',
                            className: cn(
                                'w-[200px] justify-between',
                                className,
                            ),
                            children: [
                                _jsxs(Avatar, {
                                    className: 'mr-2 h-5 w-5',
                                    children: [
                                        _jsx(AvatarImage, {
                                            src: 'https://avatar.vercel.sh/'.concat(
                                                selectedTeam.value,
                                                '.png',
                                            ),
                                            alt: selectedTeam.label,
                                        }),
                                        _jsx(AvatarFallback, {
                                            children: 'SC',
                                        }),
                                    ],
                                }),
                                selectedTeam.label,
                                _jsx(SortAscIcon, {
                                    className:
                                        'ml-auto h-4 w-4 shrink-0 opacity-50',
                                }),
                            ],
                        }),
                    }),
                    _jsx(PopoverContent, {
                        className: 'w-[200px] p-0',
                        children: _jsxs(Command, {
                            children: [
                                _jsxs(CommandList, {
                                    children: [
                                        _jsx(CommandInput, {
                                            placeholder: 'Search team...',
                                        }),
                                        _jsx(CommandEmpty, {
                                            children: 'No team found.',
                                        }),
                                        groups.map(function (group) {
                                            return _jsx(
                                                CommandGroup,
                                                {
                                                    heading: group.label,
                                                    children: group.teams.map(
                                                        function (team) {
                                                            return _jsxs(
                                                                CommandItem,
                                                                {
                                                                    onSelect:
                                                                        function () {
                                                                            setSelectedTeam(
                                                                                team,
                                                                            )
                                                                            setOpen(
                                                                                false,
                                                                            )
                                                                        },
                                                                    className:
                                                                        'text-sm',
                                                                    children: [
                                                                        _jsxs(
                                                                            Avatar,
                                                                            {
                                                                                className:
                                                                                    'mr-2 h-5 w-5',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            AvatarImage,
                                                                                            {
                                                                                                src: 'https://avatar.vercel.sh/'.concat(
                                                                                                    team.value,
                                                                                                    '.png',
                                                                                                ),
                                                                                                alt: team.label,
                                                                                                className:
                                                                                                    'grayscale',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            AvatarFallback,
                                                                                            {
                                                                                                children:
                                                                                                    'SC',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        team.label,
                                                                        _jsx(
                                                                            CheckIcon,
                                                                            {
                                                                                className:
                                                                                    cn(
                                                                                        'ml-auto h-4 w-4',
                                                                                        selectedTeam.value ===
                                                                                            team.value
                                                                                            ? 'opacity-100'
                                                                                            : 'opacity-0',
                                                                                    ),
                                                                            },
                                                                        ),
                                                                    ],
                                                                },
                                                                team.value,
                                                            )
                                                        },
                                                    ),
                                                },
                                                group.label,
                                            )
                                        }),
                                    ],
                                }),
                                _jsx(CommandSeparator, {}),
                                _jsx(CommandList, {
                                    children: _jsx(CommandGroup, {
                                        children: _jsx(DialogTrigger, {
                                            asChild: true,
                                            children: _jsxs(CommandItem, {
                                                onSelect: function () {
                                                    setOpen(false)
                                                    setShowNewTeamDialog(true)
                                                },
                                                children: [
                                                    _jsx(PlusCircle, {
                                                        className:
                                                            'mr-2 h-5 w-5',
                                                    }),
                                                    'Create Team',
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            _jsxs(DialogContent, {
                children: [
                    _jsxs(DialogHeader, {
                        children: [
                            _jsx(DialogTitle, { children: 'Create team' }),
                            _jsx(DialogDescription, {
                                children:
                                    'Add a new team to manage products and customers.',
                            }),
                        ],
                    }),
                    _jsx('div', {
                        children: _jsxs('div', {
                            className: 'space-y-4 py-2 pb-4',
                            children: [
                                _jsxs('div', {
                                    className: 'space-y-2',
                                    children: [
                                        _jsx(Label, {
                                            htmlFor: 'name',
                                            children: 'Team name',
                                        }),
                                        _jsx(Input, {
                                            id: 'name',
                                            placeholder: 'Acme Inc.',
                                        }),
                                    ],
                                }),
                                _jsxs('div', {
                                    className: 'space-y-2',
                                    children: [
                                        _jsx(Label, {
                                            htmlFor: 'plan',
                                            children: 'Subscription plan',
                                        }),
                                        _jsxs(Select, {
                                            children: [
                                                _jsx(SelectTrigger, {
                                                    children: _jsx(
                                                        SelectValue,
                                                        {
                                                            placeholder:
                                                                'Select a plan',
                                                        },
                                                    ),
                                                }),
                                                _jsxs(SelectContent, {
                                                    children: [
                                                        _jsxs(SelectItem, {
                                                            value: 'free',
                                                            children: [
                                                                _jsx('span', {
                                                                    className:
                                                                        'font-medium',
                                                                    children:
                                                                        'Free',
                                                                }),
                                                                ' ',
                                                                '-',
                                                                ' ',
                                                                _jsx('span', {
                                                                    className:
                                                                        'text-muted-foreground',
                                                                    children:
                                                                        'Trial for two weeks',
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs(SelectItem, {
                                                            value: 'pro',
                                                            children: [
                                                                _jsx('span', {
                                                                    className:
                                                                        'font-medium',
                                                                    children:
                                                                        'Pro',
                                                                }),
                                                                ' ',
                                                                '-',
                                                                ' ',
                                                                _jsx('span', {
                                                                    className:
                                                                        'text-muted-foreground',
                                                                    children:
                                                                        '$9/month per user',
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
                        }),
                    }),
                    _jsxs(DialogFooter, {
                        children: [
                            _jsx(Button, {
                                variant: 'outline',
                                onClick: function () {
                                    return setShowNewTeamDialog(false)
                                },
                                children: 'Cancel',
                            }),
                            _jsx(Button, {
                                type: 'submit',
                                children: 'Continue',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
