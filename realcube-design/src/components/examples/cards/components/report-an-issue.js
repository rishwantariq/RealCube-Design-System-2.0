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
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../ui/select'
import { Textarea } from '../../../ui/textarea'
export function DemoReportAnIssue() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                children: [
                    _jsx(CardTitle, { children: 'Report an issue' }),
                    _jsx(CardDescription, {
                        children: 'What area are you having problems with?',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                className: 'grid gap-6',
                children: [
                    _jsxs('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'area',
                                        children: 'Area',
                                    }),
                                    _jsxs(Select, {
                                        defaultValue: 'billing',
                                        children: [
                                            _jsx(SelectTrigger, {
                                                id: 'area',
                                                children: _jsx(SelectValue, {
                                                    placeholder: 'Select',
                                                }),
                                            }),
                                            _jsxs(SelectContent, {
                                                children: [
                                                    _jsx(SelectItem, {
                                                        value: 'team',
                                                        children: 'Team',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'billing',
                                                        children: 'Billing',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'account',
                                                        children: 'Account',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'deployments',
                                                        children: 'Deployments',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'support',
                                                        children: 'Support',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'security-level',
                                        children: 'Security Level',
                                    }),
                                    _jsxs(Select, {
                                        defaultValue: '2',
                                        children: [
                                            _jsx(SelectTrigger, {
                                                id: 'security-level',
                                                className:
                                                    'line-clamp-1 w-[160px] truncate',
                                                children: _jsx(SelectValue, {
                                                    placeholder: 'Select level',
                                                }),
                                            }),
                                            _jsxs(SelectContent, {
                                                children: [
                                                    _jsx(SelectItem, {
                                                        value: '1',
                                                        children:
                                                            'Severity 1 (Highest)',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '2',
                                                        children: 'Severity 2',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '3',
                                                        children: 'Severity 3',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '4',
                                                        children:
                                                            'Severity 4 (Lowest)',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-2',
                        children: [
                            _jsx(Label, {
                                htmlFor: 'subject',
                                children: 'Subject',
                            }),
                            _jsx(Input, {
                                id: 'subject',
                                placeholder: 'I need help with...',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-2',
                        children: [
                            _jsx(Label, {
                                htmlFor: 'description',
                                children: 'Description',
                            }),
                            _jsx(Textarea, {
                                id: 'description',
                                placeholder:
                                    'Please include all information relevant to your issue.',
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs(CardFooter, {
                className: 'justify-between space-x-2',
                children: [
                    _jsx(Button, { variant: 'ghost', children: 'Cancel' }),
                    _jsx(Button, { children: 'Submit' }),
                ],
            }),
        ],
    })
}
