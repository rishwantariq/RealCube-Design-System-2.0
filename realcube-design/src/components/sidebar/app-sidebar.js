'use client'
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Command } from 'lucide-react'
import { NavMain } from './nav-main'
import { NavProjects } from './nav-projects'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from '../ui/sidebar'
export function AppSidebar(_a) {
    var user = _a.user,
        navMain = _a.navMain,
        navSecondary = _a.navSecondary,
        projects = _a.projects,
        _b = _a.hideUserSection,
        hideUserSection = _b === void 0 ? false : _b,
        _c = _a.hideNavMain,
        hideNavMain = _c === void 0 ? false : _c,
        _d = _a.hideProjects,
        hideProjects = _d === void 0 ? false : _d,
        _e = _a.hideNavSecondary,
        hideNavSecondary = _e === void 0 ? false : _e,
        props = __rest(_a, [
            'user',
            'navMain',
            'navSecondary',
            'projects',
            'hideUserSection',
            'hideNavMain',
            'hideProjects',
            'hideNavSecondary',
        ])
    return _jsx(SidebarProvider, {
        children: _jsxs(
            Sidebar,
            __assign({ variant: 'inset' }, props, {
                children: [
                    _jsx(SidebarHeader, {
                        children: _jsx(SidebarMenu, {
                            children: _jsx(SidebarMenuItem, {
                                children: _jsx(SidebarMenuButton, {
                                    size: 'lg',
                                    asChild: true,
                                    children: _jsxs('a', {
                                        href: '#',
                                        children: [
                                            _jsx('div', {
                                                className:
                                                    'flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground',
                                                children: _jsx(Command, {
                                                    className: 'size-4',
                                                }),
                                            }),
                                            _jsxs('div', {
                                                className:
                                                    'grid flex-1 text-left text-sm leading-tight',
                                                children: [
                                                    _jsx('span', {
                                                        className:
                                                            'truncate font-semibold',
                                                        children: 'RealCube',
                                                    }),
                                                    _jsx('span', {
                                                        className:
                                                            'truncate text-xs',
                                                        children: 'Estate',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                    _jsxs(SidebarContent, {
                        children: [
                            !hideNavMain &&
                                navMain &&
                                _jsx(NavMain, { items: navMain }),
                            !hideProjects &&
                                projects &&
                                _jsx(NavProjects, { projects: projects }),
                            !hideNavSecondary &&
                                navSecondary &&
                                _jsx(NavSecondary, {
                                    items: navSecondary,
                                    className: 'mt-auto',
                                }),
                        ],
                    }),
                    !hideUserSection &&
                        user &&
                        _jsx(SidebarFooter, {
                            children: _jsx(NavUser, { user: user }),
                        }),
                ],
            }),
        ),
    })
}
