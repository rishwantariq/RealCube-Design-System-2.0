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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from '../form'
import { Switch } from '../switch'
import { toast } from '../use-toast'
var FormSchema = z.object({
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
})
export function SwitchFormDemo() {
    var form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            security_emails: true,
        },
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
                className: 'w-full space-y-6',
                children: [
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
                                                                        'Receive emails about your account security.',
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
                    _jsx(Button, { type: 'submit', children: 'Submit' }),
                ],
            }),
        }),
    )
}
