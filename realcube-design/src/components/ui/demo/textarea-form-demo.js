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
    FormMessage,
} from '../form'
import { Textarea } from '../textarea'
import { toast } from '../use-toast'
var FormSchema = z.object({
    bio: z
        .string()
        .min(10, {
            message: 'Bio must be at least 10 characters.',
        })
        .max(160, {
            message: 'Bio must not be longer than 30 characters.',
        }),
})
export function TextareaFormDemo() {
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
                                            ' other users and organizations.',
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
