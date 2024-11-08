import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/avatar'
import { Button } from '../../../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '../../../ui/dropdown-menu'
export function UserNav() {
    return _jsxs(DropdownMenu, {
        children: [
            _jsx(DropdownMenuTrigger, {
                asChild: true,
                children: _jsx(Button, {
                    variant: 'ghost',
                    className: 'relative h-8 w-8 rounded-full',
                    children: _jsxs(Avatar, {
                        className: 'h-8 w-8',
                        children: [
                            _jsx(AvatarImage, {
                                src: '/avatars/01.png',
                                alt: '@shadcn',
                            }),
                            _jsx(AvatarFallback, { children: 'SC' }),
                        ],
                    }),
                }),
            }),
            _jsxs(DropdownMenuContent, {
                className: 'w-56',
                align: 'end',
                forceMount: true,
                children: [
                    _jsx(DropdownMenuLabel, {
                        className: 'font-normal',
                        children: _jsxs('div', {
                            className: 'flex flex-col space-y-1',
                            children: [
                                _jsx('p', {
                                    className:
                                        'text-sm font-medium leading-none',
                                    children: 'shadcn',
                                }),
                                _jsx('p', {
                                    className:
                                        'text-xs leading-none text-muted-foreground',
                                    children: 'm@example.com',
                                }),
                            ],
                        }),
                    }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuGroup, {
                        children: [
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    'Profile',
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u21E7\u2318P',
                                    }),
                                ],
                            }),
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    'Billing',
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u2318B',
                                    }),
                                ],
                            }),
                            _jsxs(DropdownMenuItem, {
                                children: [
                                    'Settings',
                                    _jsx(DropdownMenuShortcut, {
                                        children: '\u2318S',
                                    }),
                                ],
                            }),
                            _jsx(DropdownMenuItem, { children: 'New Team' }),
                        ],
                    }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuItem, {
                        children: [
                            'Log out',
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
