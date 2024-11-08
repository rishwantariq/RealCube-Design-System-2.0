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
import { FormSchemaCheckbox } from '../../../schema/schemaForm'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from '../form'
import { toast } from '../use-toast'
export function CheckboxReactHookFormSingle() {
    var form = useForm({
        resolver: zodResolver(FormSchemaCheckbox),
        defaultValues: {
            mobile: true,
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
                className: 'space-y-6',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'mobile',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                className:
                                    'flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4',
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
                                                    'You can manage your mobile notifications in the ',
                                                    _jsx(Link, {
                                                        href: '#',
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
                    _jsx(Button, { type: 'submit', children: 'Submit' }),
                ],
            }),
        }),
    )
}
