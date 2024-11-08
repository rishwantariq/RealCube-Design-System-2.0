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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../form'
import { RadioGroup, RadioGroupItem } from '../radio-group'
import { toast } from '../use-toast'
var FormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
        required_error: 'You need to select a notification type.',
    }),
})
export function RadioGroupFormDemo() {
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
                    _jsx(Button, { type: 'submit', children: 'Submit' }),
                ],
            }),
        }),
    )
}
