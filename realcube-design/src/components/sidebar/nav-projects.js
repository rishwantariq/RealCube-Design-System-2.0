'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Folder, MoreHorizontal, Share, Trash2 } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '../ui/sidebar'
export function NavProjects(_a) {
    var projects = _a.projects
    var isMobile = useSidebar().isMobile
    return _jsxs(SidebarGroup, {
        className: 'group-data-[collapsible=icon]:hidden',
        children: [
            _jsx(SidebarGroupLabel, { children: 'Projects' }),
            _jsxs(SidebarMenu, {
                children: [
                    projects.map(function (item) {
                        return _jsxs(
                            SidebarMenuItem,
                            {
                                children: [
                                    _jsx(SidebarMenuButton, {
                                        asChild: true,
                                        children: _jsxs('a', {
                                            href: item.url,
                                            children: [
                                                _jsx(item.icon, {}),
                                                _jsx('span', {
                                                    children: item.name,
                                                }),
                                            ],
                                        }),
                                    }),
                                    _jsxs(DropdownMenu, {
                                        children: [
                                            _jsx(DropdownMenuTrigger, {
                                                asChild: true,
                                                children: _jsxs(
                                                    SidebarMenuAction,
                                                    {
                                                        showOnHover: true,
                                                        children: [
                                                            _jsx(
                                                                MoreHorizontal,
                                                                {},
                                                            ),
                                                            _jsx('span', {
                                                                className:
                                                                    'sr-only',
                                                                children:
                                                                    'More',
                                                            }),
                                                        ],
                                                    },
                                                ),
                                            }),
                                            _jsxs(DropdownMenuContent, {
                                                className: 'w-48',
                                                side: isMobile
                                                    ? 'bottom'
                                                    : 'right',
                                                align: isMobile
                                                    ? 'end'
                                                    : 'start',
                                                children: [
                                                    _jsxs(DropdownMenuItem, {
                                                        children: [
                                                            _jsx(Folder, {
                                                                className:
                                                                    'text-muted-foreground',
                                                            }),
                                                            _jsx('span', {
                                                                children:
                                                                    'View Project',
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs(DropdownMenuItem, {
                                                        children: [
                                                            _jsx(Share, {
                                                                className:
                                                                    'text-muted-foreground',
                                                            }),
                                                            _jsx('span', {
                                                                children:
                                                                    'Share Project',
                                                            }),
                                                        ],
                                                    }),
                                                    _jsx(
                                                        DropdownMenuSeparator,
                                                        {},
                                                    ),
                                                    _jsxs(DropdownMenuItem, {
                                                        children: [
                                                            _jsx(Trash2, {
                                                                className:
                                                                    'text-muted-foreground',
                                                            }),
                                                            _jsx('span', {
                                                                children:
                                                                    'Delete Project',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            item.name,
                        )
                    }),
                    _jsx(SidebarMenuItem, {
                        children: _jsxs(SidebarMenuButton, {
                            children: [
                                _jsx(MoreHorizontal, {}),
                                _jsx('span', { children: 'More' }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    })
}