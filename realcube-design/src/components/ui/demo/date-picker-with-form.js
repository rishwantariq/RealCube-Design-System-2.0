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
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { cn } from '../../../lib/utils'
import { FormSchemaDatePicker } from '../../../schema/schemaForm'
import { Button } from '../button'
import { Calendar } from '../calendar'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../form'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { toast } from '../use-toast'
export function DatePickerForm() {
    var form = useForm({
        resolver: zodResolver(FormSchemaDatePicker),
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
                className: 'space-y-8',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'dob',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                className: 'flex flex-col',
                                children: [
                                    _jsx(FormLabel, {
                                        children: 'Date of birth',
                                    }),
                                    _jsxs(Popover, {
                                        children: [
                                            _jsx(PopoverTrigger, {
                                                asChild: true,
                                                children: _jsx(FormControl, {
                                                    children: _jsxs(Button, {
                                                        variant: 'outline',
                                                        className: cn(
                                                            'w-[240px] pl-3 text-left font-normal',
                                                            !field.value &&
                                                                'text-muted-foreground',
                                                        ),
                                                        children: [
                                                            field.value
                                                                ? format(
                                                                      field.value,
                                                                      'PPP',
                                                                  )
                                                                : _jsx('span', {
                                                                      children:
                                                                          'Escolha uma data',
                                                                  }),
                                                            _jsx(CalendarIcon, {
                                                                className:
                                                                    'ml-auto h-4 w-4 opacity-50',
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            _jsx(PopoverContent, {
                                                className: 'w-auto p-0',
                                                align: 'start',
                                                children: _jsx(Calendar, {
                                                    mode: 'single',
                                                    selected: field.value,
                                                    onSelect: field.onChange,
                                                    disabled: function (date) {
                                                        return (
                                                            date > new Date() ||
                                                            date <
                                                                new Date(
                                                                    '1900-01-01',
                                                                )
                                                        )
                                                    },
                                                    initialFocus: true,
                                                }),
                                            }),
                                        ],
                                    }),
                                    _jsx(FormDescription, {
                                        children:
                                            'Your date of birth is used to calculate your age.',
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
