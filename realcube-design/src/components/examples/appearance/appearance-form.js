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
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { cn } from '../../../lib/utils'
import { Button, buttonVariants } from '../../ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../ui/form'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'
import { toast } from '../../ui/use-toast'
var appearanceFormSchema = z.object({
    theme: z.enum(['light', 'dark'], {
        required_error: 'Please select a theme.',
    }),
    font: z.enum(['inter', 'manrope', 'system'], {
        invalid_type_error: 'Select a font',
        required_error: 'Please select a font.',
    }),
})
// This can come from your database or API.
var defaultValues = {
    theme: 'light',
}
export function AppearanceForm() {
    var form = useForm({
        resolver: zodResolver(appearanceFormSchema),
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
                        name: 'font',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                children: [
                                    _jsx(FormLabel, { children: 'Font' }),
                                    _jsxs('div', {
                                        className: 'relative w-max',
                                        children: [
                                            _jsx(FormControl, {
                                                children: _jsxs(
                                                    'select',
                                                    __assign(
                                                        {
                                                            className: cn(
                                                                buttonVariants({
                                                                    variant:
                                                                        'outline',
                                                                }),
                                                                'w-[200px] appearance-none bg-background font-normal',
                                                            ),
                                                        },
                                                        field,
                                                        {
                                                            children: [
                                                                _jsx('option', {
                                                                    value: 'inter',
                                                                    children:
                                                                        'Inter',
                                                                }),
                                                                _jsx('option', {
                                                                    value: 'manrope',
                                                                    children:
                                                                        'Manrope',
                                                                }),
                                                                _jsx('option', {
                                                                    value: 'system',
                                                                    children:
                                                                        'System',
                                                                }),
                                                            ],
                                                        },
                                                    ),
                                                ),
                                            }),
                                            _jsx(ChevronDownIcon, {
                                                className:
                                                    'absolute right-3 top-2.5 h-4 w-4 opacity-50',
                                            }),
                                        ],
                                    }),
                                    _jsx(FormDescription, {
                                        children:
                                            'Set the font you want to use in the dashboard.',
                                    }),
                                    _jsx(FormMessage, {}),
                                ],
                            })
                        },
                    }),
                    _jsx(FormField, {
                        control: form.control,
                        name: 'theme',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                className: 'space-y-1',
                                children: [
                                    _jsx(FormLabel, { children: 'Theme' }),
                                    _jsx(FormDescription, {
                                        children:
                                            'Select the theme for the dashboard.',
                                    }),
                                    _jsx(FormMessage, {}),
                                    _jsxs(RadioGroup, {
                                        onValueChange: field.onChange,
                                        defaultValue: field.value,
                                        className:
                                            'grid max-w-md grid-cols-2 gap-8 pt-2',
                                        children: [
                                            _jsx(FormItem, {
                                                children: _jsxs(FormLabel, {
                                                    className:
                                                        '[&:has([data-state=checked])>div]:border-primary',
                                                    children: [
                                                        _jsx(FormControl, {
                                                            children: _jsx(
                                                                RadioGroupItem,
                                                                {
                                                                    value: 'light',
                                                                    className:
                                                                        'sr-only',
                                                                },
                                                            ),
                                                        }),
                                                        _jsx('div', {
                                                            className:
                                                                'items-center rounded-md border-2 border-muted p-1 hover:border-accent/30 cursor-pointer',
                                                            children: _jsxs(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'space-y-2 rounded-sm bg-[#ecedef] p-2',
                                                                    children: [
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'space-y-2 rounded-md bg-white p-2 shadow-sm',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[80px] rounded-lg bg-[#ecedef]',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[100px] rounded-lg bg-[#ecedef]',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-4 w-4 rounded-full bg-[#ecedef]',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[100px] rounded-lg bg-[#ecedef]',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-4 w-4 rounded-full bg-[#ecedef]',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[100px] rounded-lg bg-[#ecedef]',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                    ],
                                                                },
                                                            ),
                                                        }),
                                                        _jsx('span', {
                                                            className:
                                                                'block w-full p-2 text-center font-normal',
                                                            children: 'Light',
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsx(FormItem, {
                                                children: _jsxs(FormLabel, {
                                                    className:
                                                        '[&:has([data-state=checked])>div]:border-primary',
                                                    children: [
                                                        _jsx(FormControl, {
                                                            children: _jsx(
                                                                RadioGroupItem,
                                                                {
                                                                    value: 'dark',
                                                                    className:
                                                                        'sr-only',
                                                                },
                                                            ),
                                                        }),
                                                        _jsx('div', {
                                                            className:
                                                                'items-center rounded-md border-2 border-muted bg-popover p-1 cursor-pointer hover:border-accent/30',
                                                            children: _jsxs(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'space-y-2 rounded-sm bg-slate-950 p-2',
                                                                    children: [
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'space-y-2 rounded-md bg-slate-800 p-2 shadow-sm',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[80px] rounded-lg bg-slate-400',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[100px] rounded-lg bg-slate-400',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-4 w-4 rounded-full bg-slate-400',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[100px] rounded-lg bg-slate-400',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-4 w-4 rounded-full bg-slate-400',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'h-2 w-[100px] rounded-lg bg-slate-400',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                    ],
                                                                },
                                                            ),
                                                        }),
                                                        _jsx('span', {
                                                            className:
                                                                'block w-full p-2 text-center font-normal',
                                                            children: 'Dark',
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            })
                        },
                    }),
                    _jsx(Button, {
                        type: 'submit',
                        children: 'Update preferences',
                    }),
                ],
            }),
        }),
    )
}
