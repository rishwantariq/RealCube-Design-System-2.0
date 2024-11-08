'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/avatar'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import { Input } from '../../../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../ui/select'
import { Separator } from '../../../ui/separator'
export function DemoShareDocument() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                children: [
                    _jsx(CardTitle, { children: 'Share this document' }),
                    _jsx(CardDescription, {
                        children:
                            'Anyone with the link can view this document.',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                children: [
                    _jsxs('div', {
                        className: 'flex space-x-2',
                        children: [
                            _jsx(Input, {
                                value: 'http://example.com/link/to/document',
                                readOnly: true,
                            }),
                            _jsx(Button, {
                                variant: 'secondary',
                                className: 'shrink-0',
                                children: 'Copy Link',
                            }),
                        ],
                    }),
                    _jsx(Separator, { className: 'my-4' }),
                    _jsxs('div', {
                        className: 'space-y-4',
                        children: [
                            _jsx('h4', {
                                className: 'text-sm font-medium',
                                children: 'People with access',
                            }),
                            _jsxs('div', {
                                className: 'grid gap-6',
                                children: [
                                    _jsxs('div', {
                                        className:
                                            'flex items-center justify-between space-x-4',
                                        children: [
                                            _jsxs('div', {
                                                className:
                                                    'flex items-center space-x-4',
                                                children: [
                                                    _jsxs(Avatar, {
                                                        children: [
                                                            _jsx(AvatarImage, {
                                                                src: '/avatars/03.png',
                                                            }),
                                                            _jsx(
                                                                AvatarFallback,
                                                                {
                                                                    children:
                                                                        'OM',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        children: [
                                                            _jsx('p', {
                                                                className:
                                                                    'text-sm font-medium leading-none',
                                                                children:
                                                                    'Olivia Martin',
                                                            }),
                                                            _jsx('p', {
                                                                className:
                                                                    'text-sm text-muted-foreground',
                                                                children:
                                                                    'm@example.com',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Select, {
                                                defaultValue: 'edit',
                                                children: [
                                                    _jsx(SelectTrigger, {
                                                        className:
                                                            'ml-auto w-[110px]',
                                                        children: _jsx(
                                                            SelectValue,
                                                            {
                                                                placeholder:
                                                                    'Select',
                                                            },
                                                        ),
                                                    }),
                                                    _jsxs(SelectContent, {
                                                        children: [
                                                            _jsx(SelectItem, {
                                                                value: 'edit',
                                                                children:
                                                                    'Can edit',
                                                            }),
                                                            _jsx(SelectItem, {
                                                                value: 'view',
                                                                children:
                                                                    'Can view',
                                                            }),
                                                        ],
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
                                                className:
                                                    'flex items-center space-x-4',
                                                children: [
                                                    _jsxs(Avatar, {
                                                        children: [
                                                            _jsx(AvatarImage, {
                                                                src: '/avatars/05.png',
                                                            }),
                                                            _jsx(
                                                                AvatarFallback,
                                                                {
                                                                    children:
                                                                        'IN',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        children: [
                                                            _jsx('p', {
                                                                className:
                                                                    'text-sm font-medium leading-none',
                                                                children:
                                                                    'Isabella Nguyen',
                                                            }),
                                                            _jsx('p', {
                                                                className:
                                                                    'text-sm text-muted-foreground',
                                                                children:
                                                                    'b@example.com',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Select, {
                                                defaultValue: 'view',
                                                children: [
                                                    _jsx(SelectTrigger, {
                                                        className:
                                                            'ml-auto w-[110px]',
                                                        children: _jsx(
                                                            SelectValue,
                                                            {
                                                                placeholder:
                                                                    'Select',
                                                            },
                                                        ),
                                                    }),
                                                    _jsxs(SelectContent, {
                                                        children: [
                                                            _jsx(SelectItem, {
                                                                value: 'edit',
                                                                children:
                                                                    'Can edit',
                                                            }),
                                                            _jsx(SelectItem, {
                                                                value: 'view',
                                                                children:
                                                                    'Can view',
                                                            }),
                                                        ],
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
                                                className:
                                                    'flex items-center space-x-4',
                                                children: [
                                                    _jsxs(Avatar, {
                                                        children: [
                                                            _jsx(AvatarImage, {
                                                                src: '/avatars/01.png',
                                                            }),
                                                            _jsx(
                                                                AvatarFallback,
                                                                {
                                                                    children:
                                                                        'SD',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        children: [
                                                            _jsx('p', {
                                                                className:
                                                                    'text-sm font-medium leading-none',
                                                                children:
                                                                    'Sofia Davis',
                                                            }),
                                                            _jsx('p', {
                                                                className:
                                                                    'text-sm text-muted-foreground',
                                                                children:
                                                                    'p@example.com',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Select, {
                                                defaultValue: 'view',
                                                children: [
                                                    _jsx(SelectTrigger, {
                                                        className:
                                                            'ml-auto w-[110px]',
                                                        children: _jsx(
                                                            SelectValue,
                                                            {
                                                                placeholder:
                                                                    'Select',
                                                            },
                                                        ),
                                                    }),
                                                    _jsxs(SelectContent, {
                                                        children: [
                                                            _jsx(SelectItem, {
                                                                value: 'edit',
                                                                children:
                                                                    'Can edit',
                                                            }),
                                                            _jsx(SelectItem, {
                                                                value: 'view',
                                                                children:
                                                                    'Can view',
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
                ],
            }),
        ],
    })
}
