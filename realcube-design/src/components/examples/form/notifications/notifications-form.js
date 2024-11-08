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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../../../ui/button'
import { Checkbox } from '../../../ui/checkbox'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../ui/form'
import { RadioGroup, RadioGroupItem } from '../../../ui/radio-group'
import { Switch } from '../../../ui/switch'
import { toast } from '../../../ui/use-toast'
var notificationsFormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
        required_error: 'You need to select a notification type.',
    }),
    mobile: z.boolean().default(false).optional(),
    communication_emails: z.boolean().default(false).optional(),
    social_emails: z.boolean().default(false).optional(),
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
})
// This can come from your database or API.
var defaultValues = {
    communication_emails: false,
    marketing_emails: false,
    social_emails: true,
    security_emails: true,
}
export function NotificationsForm() {
    var form = useForm({
        resolver: zodResolver(notificationsFormSchema),
        defaultValues: defaultValues,
    })
    function onSubmit(data) {
        toast({
            title: 'You submitted the following values:',
            description: _jsx('pre', {
                className: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4',
                children: _jsx('code', {
                    className: 'text-white',
                    children: JSON.stringify(data, null, 2),
                }),
            }),
        })
    }
    return _jsx(
        Form,
        __assign({}, form, {
            children: _jsxs('form', {
                onSubmit: form.handleSubmit(onSubmit),
                className: 'space-y-8 max-w-3xl',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'type',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                className: 'space-y-3',
                                children: [
                                    _jsx(FormLabel, {
                                        children: 'Notify me about...',
                                    }),
                                    _jsx(FormControl, {
                                        children: _jsxs(RadioGroup, {
                                            onValueChange: field.onChange,
                                            defaultValue: field.value,
                                            className:
                                                'flex flex-col space-y-1',
                                            children: [
                                                _jsxs(FormItem, {
                                                    className:
                                                        'flex items-center space-x-3 space-y-0',
                                                    children: [
                                                        _jsx(FormControl, {
                                                            children: _jsx(
                                                                RadioGroupItem,
                                                                {
                                                                    value: 'all',
                                                                },
                                                            ),
                                                        }),
                                                        _jsx(FormLabel, {
                                                            className:
                                                                'font-normal',
                                                            children:
                                                                'All new messages',
                                                        }),
                                                    ],
                                                }),
                                                _jsxs(FormItem, {
                                                    className:
                                                        'flex items-center space-x-3 space-y-0',
                                                    children: [
                                                        _jsx(FormControl, {
                                                            children: _jsx(
                                                                RadioGroupItem,
                                                                {
                                                                    value: 'mentions',
                                                                },
                                                            ),
                                                        }),
                                                        _jsx(FormLabel, {
                                                            className:
                                                                'font-normal',
                                                            children:
                                                                'Direct messages and mentions',
                                                        }),
                                                    ],
                                                }),
                                                _jsxs(FormItem, {
                                                    className:
                                                        'flex items-center space-x-3 space-y-0',
                                                    children: [
                                                        _jsx(FormControl, {
                                                            children: _jsx(
                                                                RadioGroupItem,
                                                                {
                                                                    value: 'none',
                                                                },
                                                            ),
                                                        }),
                                                        _jsx(FormLabel, {
                                                            className:
                                                                'font-normal',
                                                            children: 'Nothing',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    _jsx(FormMessage, {}),
                                ],
                            })
                        },
                    }),
                    _jsxs('div', {
                        children: [
                            _jsx('h3', {
                                className: 'mb-4 text-lg font-medium',
                                children: 'Email Notifications',
                            }),
                            _jsxs('div', {
                                className: 'space-y-4',
                                children: [
                                    _jsx(FormField, {
                                        control: form.control,
                                        name: 'communication_emails',
                                        render: function (_a) {
                                            var field = _a.field
                                            return _jsxs(FormItem, {
                                                className:
                                                    'flex flex-row items-center justify-between rounded-lg border p-4',
                                                children: [
                                                    _jsxs('div', {
                                                        className:
                                                            'space-y-0.5',
                                                        children: [
                                                            _jsx(FormLabel, {
                                                                className:
                                                                    'text-base',
                                                                children:
                                                                    'Communication emails',
                                                            }),
                                                            _jsx(
                                                                FormDescription,
                                                                {
                                                                    children:
                                                                        'Receive emails about your account activity.',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(FormControl, {
                                                        children: _jsx(Switch, {
                                                            checked:
                                                                field.value,
                                                            onCheckedChange:
                                                                field.onChange,
                                                        }),
                                                    }),
                                                ],
                                            })
                                        },
                                    }),
                                    _jsx(FormField, {
                                        control: form.control,
                                        name: 'marketing_emails',
                                        render: function (_a) {
                                            var field = _a.field
                                            return _jsxs(FormItem, {
                                                className:
                                                    'flex flex-row items-center justify-between rounded-lg border p-4',
                                                children: [
                                                    _jsxs('div', {
                                                        className:
                                                            'space-y-0.5',
                                                        children: [
                                                            _jsx(FormLabel, {
                                                                className:
                                                                    'text-base',
                                                                children:
                                                                    'Marketing emails',
                                                            }),
                                                            _jsx(
                                                                FormDescription,
                                                                {
                                                                    children:
                                                                        'Receive emails about new products, features, and more.',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(FormControl, {
                                                        children: _jsx(Switch, {
                                                            checked:
                                                                field.value,
                                                            onCheckedChange:
                                                                field.onChange,
                                                        }),
                                                    }),
                                                ],
                                            })
                                        },
                                    }),
                                    _jsx(FormField, {
                                        control: form.control,
                                        name: 'social_emails',
                                        render: function (_a) {
                                            var field = _a.field
                                            return _jsxs(FormItem, {
                                                className:
                                                    'flex flex-row items-center justify-between rounded-lg border p-4',
                                                children: [
                                                    _jsxs('div', {
                                                        className:
                                                            'space-y-0.5',
                                                        children: [
                                                            _jsx(FormLabel, {
                                                                className:
                                                                    'text-base',
                                                                children:
                                                                    'Social emails',
                                                            }),
                                                            _jsx(
                                                                FormDescription,
                                                                {
                                                                    children:
                                                                        'Receive emails for friend requests, follows, and more.',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(FormControl, {
                                                        children: _jsx(Switch, {
                                                            checked:
                                                                field.value,
                                                            onCheckedChange:
                                                                field.onChange,
                                                        }),
                                                    }),
                                                ],
                                            })
                                        },
                                    }),
                                    _jsx(FormField, {
                                        control: form.control,
                                        name: 'security_emails',
                                        render: function (_a) {
                                            var field = _a.field
                                            return _jsxs(FormItem, {
                                                className:
                                                    'flex flex-row items-center justify-between rounded-lg border p-4',
                                                children: [
                                                    _jsxs('div', {
                                                        className:
                                                            'space-y-0.5',
                                                        children: [
                                                            _jsx(FormLabel, {
                                                                className:
                                                                    'text-base',
                                                                children:
                                                                    'Security emails',
                                                            }),
                                                            _jsx(
                                                                FormDescription,
                                                                {
                                                                    children:
                                                                        'Receive emails about your account activity and security.',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(FormControl, {
                                                        children: _jsx(Switch, {
                                                            checked:
                                                                field.value,
                                                            onCheckedChange:
                                                                field.onChange,
                                                            disabled: true,
                                                            'aria-readonly': true,
                                                        }),
                                                    }),
                                                ],
                                            })
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx(FormField, {
                        control: form.control,
                        name: 'mobile',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                className:
                                    'flex flex-row items-start space-x-3 space-y-0',
                                children: [
                                    _jsx(FormControl, {
                                        children: _jsx(Checkbox, {
                                            checked: field.value,
                                            onCheckedChange: field.onChange,
                                        }),
                                    }),
                                    _jsxs('div', {
                                        className: 'space-y-1 leading-none',
                                        children: [
                                            _jsx(FormLabel, {
                                                children:
                                                    'Use different settings for my mobile devices',
                                            }),
                                            _jsxs(FormDescription, {
                                                children: [
                                                    'You can manage your mobile notifications in the',
                                                    ' ',
                                                    _jsx(Link, {
                                                        href: '/examples/forms',
                                                        children:
                                                            'mobile settings',
                                                    }),
                                                    ' ',
                                                    'page.',
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            })
                        },
                    }),
                    _jsx(Button, {
                        type: 'submit',
                        children: 'Update notifications',
                    }),
                ],
            }),
        }),
    )
}
