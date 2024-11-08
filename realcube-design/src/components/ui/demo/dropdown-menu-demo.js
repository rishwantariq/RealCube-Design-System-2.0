import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from 'lucide-react'
import { Button } from '../button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../dropdown-menu'
export function DropdownMenuDemo() {
    return _jsxs(DropdownMenu, {
        children: [
            _jsx(DropdownMenuTrigger, {
                asChild: true,
                children: _jsx(Button, {
                    variant: 'outline',
                    children: 'Open',
                }),
            }),
            _jsxs(DropdownMenuContent, {
                className: 'w-56',
                children: [
                    _jsx(DropdownMenuLabel, { children: 'My Account' }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuGroup, {
                        children: [
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    _jsx(User, { className: 'mr-2 h-4 w-4' }),
                                    _jsx('span', { children: 'Profile' }),
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u21E7\u2318P',
                                    }),
                                ],
                            }),
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    _jsx(CreditCard, {
                                        className: 'mr-2 h-4 w-4',
                                    }),
                                    _jsx('span', { children: 'Billing' }),
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u2318B',
                                    }),
                                ],
                            }),
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    _jsx(Settings, {
                                        className: 'mr-2 h-4 w-4',
                                    }),
                                    _jsx('span', { children: 'Settings' }),
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u2318S',
                                    }),
                                ],
                            }),
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    _jsx(Keyboard, {
                                        className: 'mr-2 h-4 w-4',
                                    }),
                                    _jsx('span', {
                                        children: 'Keyboard shortcuts',
                                    }),
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u2318K',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuGroup, {
                        children: [
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    _jsx(Users, { className: 'mr-2 h-4 w-4' }),
                                    _jsx('span', { children: 'Team' }),
                                ],
                            }),
                            _jsxs(DropdownMenuSub, {
                                children: [
                                    _jsxs(DropdownMenuSubTrigger, {
                                        children: [
                                            _jsx(UserPlus, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            _jsx('span', {
                                                children: 'Invite users',
                                            }),
                                        ],
                                    }),
                                    _jsx(DropdownMenuPortal, {
                                        children: _jsxs(
                                            DropdownMenuSubContent,
                                            {
                                                children: [
                                                    _jsxs(DropdownMenuItem, {
                                                        children: [
                                                            _jsx(Mail, {
                                                                className:
                                                                    'mr-2 h-4 w-4',
                                                            }),
                                                            _jsx('span', {
                                                                children:
                                                                    'Email',
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs(DropdownMenuItem, {
                                                        children: [
                                                            _jsx(
                                                                MessageSquare,
                                                                {
                                                                    className:
                                                                        'mr-2 h-4 w-4',
                                                                },
                                                            ),
                                                            _jsx('span', {
                                                                children:
                                                                    'Message',
                                                            }),
                                                        ],
                                                    }),
                                                    _jsx(
                                                        DropdownMenuSeparator,
                                                        {},
                                                    ),
                                                    _jsxs(DropdownMenuItem, {
                                                        children: [
                                                            _jsx(PlusCircle, {
                                                                className:
                                                                    'mr-2 h-4 w-4',
                                                            }),
                                                            _jsx('span', {
                                                                children:
                                                                    'More...',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                        ),
                                    }),
                                ],
                            }),
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    _jsx(Plus, { className: 'mr-2 h-4 w-4' }),
                                    _jsx('span', { children: 'New Team' }),
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u2318+T',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuItem, {
                        children: [
                            _jsx(Github, { className: 'mr-2 h-4 w-4' }),
                            _jsx('span', { children: 'GitHub' }),
                        ],
                    }),
                    _jsxs(DropdownMenuItem, {
                        children: [
                            _jsx(LifeBuoy, { className: 'mr-2 h-4 w-4' }),
                            _jsx('span', { children: 'Support' }),
                        ],
                    }),
                    _jsxs(DropdownMenuItem, {
                        disabled: true,
                        children: [
                            _jsx(Cloud, { className: 'mr-2 h-4 w-4' }),
                            _jsx('span', { children: 'API' }),
                        ],
                    }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuItem, {
                        children: [
                            _jsx(LogOut, { className: 'mr-2 h-4 w-4' }),
                            _jsx('span', { children: 'Log out' }),
                            _jsx(DropdownMenuShortcut, {
                                children: '\u21E7\u2318Q',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
