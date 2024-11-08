'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import { Label } from '../../../ui/label'
import { Switch } from '../../../ui/switch'
export function DemoCookieSettings() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                children: [
                    _jsx(CardTitle, { children: 'Cookie Settings' }),
                    _jsx(CardDescription, {
                        children: 'Manage your cookie settings here.',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                className: 'grid gap-6',
                children: [
                    _jsxs('div', {
                        className:
                            'flex items-center justify-between space-x-2',
                        children: [
                            _jsxs(Label, {
                                htmlFor: 'necessary',
                                className: 'flex flex-col space-y-1',
                                children: [
                                    _jsx('span', {
                                        children: 'Strictly Necessary',
                                    }),
                                    _jsx('span', {
                                        className:
                                            'font-normal leading-snug text-muted-foreground',
                                        children:
                                            'These cookies are essential in order to use the website and use its features.',
                                    }),
                                ],
                            }),
                            _jsx(Switch, {
                                id: 'necessary',
                                defaultChecked: true,
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            'flex items-center justify-between space-x-2',
                        children: [
                            _jsxs(Label, {
                                htmlFor: 'functional',
                                className: 'flex flex-col space-y-1',
                                children: [
                                    _jsx('span', {
                                        children: 'Functional Cookies',
                                    }),
                                    _jsx('span', {
                                        className:
                                            'font-normal leading-snug text-muted-foreground',
                                        children:
                                            'These cookies allow the website to provide personalized functionality.',
                                    }),
                                ],
                            }),
                            _jsx(Switch, { id: 'functional' }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            'flex items-center justify-between space-x-2',
                        children: [
                            _jsxs(Label, {
                                htmlFor: 'performance',
                                className: 'flex flex-col space-y-1',
                                children: [
                                    _jsx('span', {
                                        children: 'Performance Cookies',
                                    }),
                                    _jsx('span', {
                                        className:
                                            'font-normal leading-snug text-muted-foreground',
                                        children:
                                            'These cookies help to improve the performance of the website.',
                                    }),
                                ],
                            }),
                            _jsx(Switch, { id: 'performance' }),
                        ],
                    }),
                ],
            }),
            _jsx(CardFooter, {
                children: _jsx(Button, {
                    variant: 'outline',
                    className: 'w-full',
                    children: 'Save preferences',
                }),
            }),
        ],
    })
}
