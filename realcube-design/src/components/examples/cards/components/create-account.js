'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Github, Goal } from 'lucide-react'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
export function DemoCreateAccount() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                className: 'space-y-1',
                children: [
                    _jsx(CardTitle, {
                        className: 'text-2xl',
                        children: 'Create an account',
                    }),
                    _jsx(CardDescription, {
                        children:
                            'Enter your email below to create your account',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                className: 'grid gap-4',
                children: [
                    _jsxs('div', {
                        className: 'grid grid-cols-2 gap-6',
                        children: [
                            _jsxs(Button, {
                                variant: 'outline',
                                children: [
                                    _jsx(Github, { className: 'mr-2 h-4 w-4' }),
                                    'Github',
                                ],
                            }),
                            _jsxs(Button, {
                                variant: 'outline',
                                children: [
                                    _jsx(Goal, { className: 'mr-2 h-4 w-4' }),
                                    'Google',
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'relative',
                        children: [
                            _jsx('div', {
                                className: 'absolute inset-0 flex items-center',
                                children: _jsx('span', {
                                    className: 'w-full border-t',
                                }),
                            }),
                            _jsx('div', {
                                className:
                                    'relative flex justify-center text-xs uppercase',
                                children: _jsx('span', {
                                    className:
                                        'bg-background px-2 text-muted-foreground',
                                    children: 'Or continue with',
                                }),
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-2',
                        children: [
                            _jsx(Label, {
                                htmlFor: 'email',
                                children: 'Email',
                            }),
                            _jsx(Input, {
                                id: 'email',
                                type: 'email',
                                placeholder: 'm@example.com',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-2',
                        children: [
                            _jsx(Label, {
                                htmlFor: 'password',
                                children: 'Password',
                            }),
                            _jsx(Input, { id: 'password', type: 'password' }),
                        ],
                    }),
                ],
            }),
            _jsx(CardFooter, {
                children: _jsx(Button, {
                    className: 'w-full',
                    children: 'Create account',
                }),
            }),
        ],
    })
}
