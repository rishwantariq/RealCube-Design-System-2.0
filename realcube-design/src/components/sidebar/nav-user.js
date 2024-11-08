'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '../ui/sidebar'
export function NavUser(_a) {
    var user = _a.user
    var isMobile = useSidebar().isMobile
    return _jsx(SidebarMenu, {
        children: _jsx(SidebarMenuItem, {
            children: _jsxs(DropdownMenu, {
                children: [
                    _jsx(DropdownMenuTrigger, {
                        asChild: true,
                        children: _jsxs(SidebarMenuButton, {
                            size: 'lg',
                            className:
                                'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
                            children: [
                                _jsxs(Avatar, {
                                    className: 'h-8 w-8 rounded-lg',
                                    children: [
                                        _jsx(AvatarImage, {
                                            src: user.avatar,
                                            alt: user.name,
                                        }),
                                        _jsx(AvatarFallback, {
                                            className: 'rounded-lg',
                                            children: 'CN',
                                        }),
                                    ],
                                }),
                                _jsxs('div', {
                                    className:
                                        'grid flex-1 text-left text-sm leading-tight',
                                    children: [
                                        _jsx('span', {
                                            className: 'truncate font-semibold',
                                            children: user.name,
                                        }),
                                        _jsx('span', {
                                            className: 'truncate text-xs',
                                            children: user.email,
                                        }),
                                    ],
                                }),
                                _jsx(ChevronsUpDown, {
                                    className: 'ml-auto size-4',
                                }),
                            ],
                        }),
                    }),
                    _jsxs(DropdownMenuContent, {
                        className:
                            'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                        side: isMobile ? 'bottom' : 'right',
                        align: 'end',
                        sideOffset: 4,
                        children: [
                            _jsx(DropdownMenuLabel, {
                                className: 'p-0 font-normal',
                                children: _jsxs('div', {
                                    className:
                                        'flex items-center gap-2 px-1 py-1.5 text-left text-sm',
                                    children: [
                                        _jsxs(Avatar, {
                                            className: 'h-8 w-8 rounded-lg',
                                            children: [
                                                _jsx(AvatarImage, {
                                                    src: user.avatar,
                                                    alt: user.name,
                                                }),
                                                _jsx(AvatarFallback, {
                                                    className: 'rounded-lg',
                                                    children: 'CN',
                                                }),
                                            ],
                                        }),
                                        _jsxs('div', {
                                            className:
                                                'grid flex-1 text-left text-sm leading-tight',
                                            children: [
                                                _jsx('span', {
                                                    className:
                                                        'truncate font-semibold',
                                                    children: user.name,
                                                }),
                                                _jsx('span', {
                                                    className:
                                                        'truncate text-xs',
                                                    children: user.email,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            _jsx(DropdownMenuSeparator, {}),
                            _jsx(DropdownMenuGroup, {
                                children: _jsxs(DropdownMenuItem, {
                                    children: [
                                        _jsx(Sparkles, {}),
                                        'Upgrade to Pro',
                                    ],
                                }),
                            }),
                            _jsx(DropdownMenuSeparator, {}),
                            _jsxs(DropdownMenuGroup, {
                                children: [
                                    _jsxs(DropdownMenuItem, {
                                        children: [
                                            _jsx(BadgeCheck, {}),
                                            'Account',
                                        ],
                                    }),
                                    _jsxs(DropdownMenuItem, {
                                        children: [
                                            _jsx(CreditCard, {}),
                                            'Billing',
                                        ],
                                    }),
                                    _jsxs(DropdownMenuItem, {
                                        children: [
                                            _jsx(Bell, {}),
                                            'Notifications',
                                        ],
                                    }),
                                ],
                            }),
                            _jsx(DropdownMenuSeparator, {}),
                            _jsxs(DropdownMenuItem, {
                                children: [_jsx(LogOut, {}), 'Log out'],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    })
}
