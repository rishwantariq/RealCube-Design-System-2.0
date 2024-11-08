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
import { BellRing, Check } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../card'
import { Switch } from '../switch'
var notifications = [
    {
        title: 'Your call has been confirmed.',
        description: '1 hour ago',
    },
    {
        title: 'You have a new message!',
        description: '1 hour ago',
    },
    {
        title: 'Your subscription is expiring soon!',
        description: '2 hours ago',
    },
]
export function CardDemoNotification(_a) {
    var className = _a.className,
        props = __rest(_a, ['className'])
    return _jsxs(
        Card,
        __assign({ className: cn('w-[380px]', className) }, props, {
            children: [
                _jsxs(CardHeader, {
                    children: [
                        _jsx(CardTitle, { children: 'Notifications' }),
                        _jsx(CardDescription, {
                            children: 'You have 3 unread messages.',
                        }),
                    ],
                }),
                _jsxs(CardContent, {
                    className: 'grid gap-4',
                    children: [
                        _jsxs('div', {
                            className:
                                ' flex items-center space-x-4 rounded-md border p-4',
                            children: [
                                _jsx(BellRing, {}),
                                _jsxs('div', {
                                    className: 'flex-1 space-y-1',
                                    children: [
                                        _jsx('p', {
                                            className:
                                                'text-sm font-medium leading-none',
                                            children: 'Push Notifications',
                                        }),
                                        _jsx('p', {
                                            className:
                                                'text-sm text-muted-foreground',
                                            children:
                                                'Send notifications to device.',
                                        }),
                                    ],
                                }),
                                _jsx(Switch, {}),
                            ],
                        }),
                        _jsx('div', {
                            children: notifications.map(
                                function (notification, index) {
                                    return _jsxs(
                                        'div',
                                        {
                                            className:
                                                'mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0',
                                            children: [
                                                _jsx('span', {
                                                    className:
                                                        'flex h-2 w-2 translate-y-1 rounded-full bg-sky-500',
                                                }),
                                                _jsxs('div', {
                                                    className: 'space-y-1',
                                                    children: [
                                                        _jsx('p', {
                                                            className:
                                                                'text-sm font-medium leading-none',
                                                            children:
                                                                notification.title,
                                                        }),
                                                        _jsx('p', {
                                                            className:
                                                                'text-sm text-muted-foreground',
                                                            children:
                                                                notification.description,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        index,
                                    )
                                },
                            ),
                        }),
                    ],
                }),
                _jsx(CardFooter, {
                    children: _jsxs(Button, {
                        className: 'w-full',
                        children: [
                            _jsx(Check, { className: 'mr-2 h-4 w-4' }),
                            ' Mark all as read',
                        ],
                    }),
                }),
            ],
        }),
    )
}
