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
import Link from 'next/link'
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
    FormMessage,
} from '../form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../select'
import { toast } from '../use-toast'
var FormSchema = z.object({
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
})
export function SelectFormDemo() {
    var form = useForm({
        resolver: zodResolver(FormSchema),
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
                className: 'w-2/3 space-y-6',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'email',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                children: [
                                    _jsx(FormLabel, { children: 'Email' }),
                                    _jsxs(Select, {
                                        onValueChange: field.onChange,
                                        defaultValue: field.value,
                                        children: [
                                            _jsx(FormControl, {
                                                children: _jsx(SelectTrigger, {
                                                    children: _jsx(
                                                        SelectValue,
                                                        {
                                                            placeholder:
                                                                'Select a verified email to display',
                                                        },
                                                    ),
                                                }),
                                            }),
                                            _jsxs(SelectContent, {
                                                children: [
                                                    _jsx(SelectItem, {
                                                        value: 'm@example.com',
                                                        children:
                                                            'm@example.com',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'm@google.com',
                                                        children:
                                                            'm@google.com',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'm@support.com',
                                                        children:
                                                            'm@support.com',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs(FormDescription, {
                                        children: [
                                            'You can manage email addresses in your',
                                            ' ',
                                            _jsx(Link, {
                                                href: '/examples/forms',
                                                children: 'email settings',
                                            }),
                                            '.',
                                        ],
                                    }),
                                    _jsx(FormMessage, {}),
                                ],
                            })
                        },
                    }),
                    _jsx(Button, { type: 'submit', children: 'Submit' }),
                ],
            }),
        }),
    )
}
