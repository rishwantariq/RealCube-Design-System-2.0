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
import Link from 'next/link'
import * as React from 'react'
import { cn } from '../../../lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '../navigation-menu'
var components = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
]
export function NavigationMenuDemo() {
    return _jsx(NavigationMenu, {
        children: _jsxs(NavigationMenuList, {
            children: [
                _jsxs(NavigationMenuItem, {
                    children: [
                        _jsx(NavigationMenuTrigger, {
                            children: 'Getting started',
                        }),
                        _jsx(NavigationMenuContent, {
                            children: _jsxs('ul', {
                                className:
                                    'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
                                children: [
                                    _jsx('li', {
                                        className: 'row-span-3',
                                        children: _jsx(NavigationMenuLink, {
                                            asChild: true,
                                            children: _jsxs(Link, {
                                                className:
                                                    'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md',
                                                href: '/',
                                                children: [
                                                    _jsx('div', {
                                                        className:
                                                            'mb-2 mt-4 text-lg font-medium',
                                                        children: 'shadcn/ui',
                                                    }),
                                                    _jsx('p', {
                                                        className:
                                                            'text-sm leading-tight text-muted-foreground',
                                                        children:
                                                            'Beautifully designed components built with Radix UI and Tailwind CSS.',
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    _jsx(ListItem, {
                                        href: '/docs',
                                        title: 'Introduction',
                                        children:
                                            'Re-usable components built using Radix UI and Tailwind CSS.',
                                    }),
                                    _jsx(ListItem, {
                                        href: '/docs/installation',
                                        title: 'Installation',
                                        children:
                                            'How to install dependencies and structure your app.',
                                    }),
                                    _jsx(ListItem, {
                                        href: '/docs/primitives/typography',
                                        title: 'Typography',
                                        children:
                                            'Styles for headings, paragraphs, lists...etc',
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                _jsxs(NavigationMenuItem, {
                    children: [
                        _jsx(NavigationMenuTrigger, { children: 'Components' }),
                        _jsx(NavigationMenuContent, {
                            children: _jsx('ul', {
                                className:
                                    'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ',
                                children: components.map(function (component) {
                                    return _jsx(
                                        ListItem,
                                        {
                                            title: component.title,
                                            href: component.href,
                                            children: component.description,
                                        },
                                        component.title,
                                    )
                                }),
                            }),
                        }),
                    ],
                }),
                _jsx(NavigationMenuItem, {
                    children: _jsx(Link, {
                        href: '/docs',
                        legacyBehavior: true,
                        passHref: true,
                        children: _jsx(NavigationMenuLink, {
                            className: navigationMenuTriggerStyle(),
                            children: 'Documentation',
                        }),
                    }),
                }),
            ],
        }),
    })
}
var ListItem = React.forwardRef(function (_a, ref) {
    var className = _a.className,
        title = _a.title,
        children = _a.children,
        props = __rest(_a, ['className', 'title', 'children'])
    return _jsx('li', {
        children: _jsx(NavigationMenuLink, {
            asChild: true,
            children: _jsxs(
                'a',
                __assign(
                    {
                        ref: ref,
                        className: cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className,
                        ),
                    },
                    props,
                    {
                        children: [
                            _jsx('div', {
                                className: 'text-sm font-medium leading-none',
                                children: title,
                            }),
                            _jsx('p', {
                                className:
                                    'line-clamp-2 text-sm leading-snug text-muted-foreground',
                                children: children,
                            }),
                        ],
                    },
                ),
            ),
        }),
    })
})
ListItem.displayName = 'ListItem'
