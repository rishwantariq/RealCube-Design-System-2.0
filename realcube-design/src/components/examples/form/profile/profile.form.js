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
import { useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { cn } from '../../../../lib/utils'
import { Button } from '../../../ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../ui/form'
import { Input } from '../../../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../ui/select'
import { Textarea } from '../../../ui/textarea'
import { toast } from '../../../ui/use-toast'
var profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: 'Username must be at least 2 characters.',
        })
        .max(30, {
            message: 'Username must not be longer than 30 characters.',
        }),
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
    bio: z.string().max(160).min(4),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: 'Please enter a valid URL.' }),
            }),
        )
        .optional(),
})
// This can come from your database or API.
var defaultValues = {
    bio: 'I own a computer.',
    urls: [
        { value: 'https://shadcn.com' },
        { value: 'http://twitter.com/shadcn' },
    ],
}
export function ProfileForm() {
    var form = useForm({
        resolver: zodResolver(profileFormSchema),
        defaultValues: defaultValues,
        mode: 'onChange',
    })
    var _a = useFieldArray({
            name: 'urls',
            control: form.control,
        }),
        fields = _a.fields,
        append = _a.append
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
                className: 'space-y-8 max-w-xl',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'username',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                children: [
                                    _jsx(FormLabel, { children: 'Username' }),
                                    _jsx(FormControl, {
                                        children: _jsx(
                                            Input,
                                            __assign(
                                                { placeholder: 'shadcn' },
                                                field,
                                            ),
                                        ),
                                    }),
                                    _jsx(FormDescription, {
                                        children:
                                            'This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.',
                                    }),
                                    _jsx(FormMessage, {}),
                                ],
                            })
                        },
                    }),
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
                                            'You can manage verified email addresses in your',
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
                    _jsx(FormField, {
                        control: form.control,
                        name: 'bio',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                children: [
                                    _jsx(FormLabel, { children: 'Bio' }),
                                    _jsx(FormControl, {
                                        children: _jsx(
                                            Textarea,
                                            __assign(
                                                {
                                                    placeholder:
                                                        'Tell us a little bit about yourself',
                                                    className: 'resize-none',
                                                },
                                                field,
                                            ),
                                        ),
                                    }),
                                    _jsxs(FormDescription, {
                                        children: [
                                            'You can ',
                                            _jsx('span', {
                                                children: '@mention',
                                            }),
                                            ' other users and organizations to link to them.',
                                        ],
                                    }),
                                    _jsx(FormMessage, {}),
                                ],
                            })
                        },
                    }),
                    _jsxs('div', {
                        children: [
                            fields.map(function (field, index) {
                                return _jsx(
                                    FormField,
                                    {
                                        control: form.control,
                                        name: 'urls.'.concat(index, '.value'),
                                        render: function (_a) {
                                            var field = _a.field
                                            return _jsxs(FormItem, {
                                                children: [
                                                    _jsx(FormLabel, {
                                                        className: cn(
                                                            index !== 0 &&
                                                                'sr-only',
                                                        ),
                                                        children: 'URLs',
                                                    }),
                                                    _jsx(FormDescription, {
                                                        className: cn(
                                                            index !== 0 &&
                                                                'sr-only',
                                                        ),
                                                        children:
                                                            'Add links to your website, blog, or social media profiles.',
                                                    }),
                                                    _jsx(FormControl, {
                                                        children: _jsx(
                                                            Input,
                                                            __assign({}, field),
                                                        ),
                                                    }),
                                                    _jsx(FormMessage, {}),
                                                ],
                                            })
                                        },
                                    },
                                    field.id,
                                )
                            }),
                            _jsx(Button, {
                                type: 'button',
                                variant: 'outline',
                                size: 'sm',
                                className: 'mt-2',
                                onClick: function () {
                                    return append({ value: '' })
                                },
                                children: 'Add URL',
                            }),
                        ],
                    }),
                    _jsx(Button, {
                        type: 'submit',
                        children: 'Update profile',
                    }),
                ],
            }),
        }),
    )
}
