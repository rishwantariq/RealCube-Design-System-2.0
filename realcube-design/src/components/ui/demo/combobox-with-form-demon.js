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
import { Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '../command'
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
var languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
]
var FormSchema = z.object({
    language: z.string({
        required_error: 'Please select a language.',
    }),
})
export function ComboboxForm() {
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
                className: 'space-y-6',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'language',
                        render: function (_a) {
                            var _b
                            var field = _a.field
                            return _jsxs(FormItem, {
                                className: 'flex flex-col',
                                children: [
                                    _jsx(FormLabel, { children: 'Language' }),
                                    _jsxs(Popover, {
                                        children: [
                                            _jsx(PopoverTrigger, {
                                                asChild: true,
                                                children: _jsx(FormControl, {
                                                    children: _jsxs(Button, {
                                                        variant: 'outline',
                                                        role: 'combobox',
                                                        className: cn(
                                                            'w-[200px] justify-between',
                                                            !field.value &&
                                                                'text-muted-foreground',
                                                        ),
                                                        children: [
                                                            field.value
                                                                ? (_b =
                                                                      languages.find(
                                                                          function (
                                                                              language,
                                                                          ) {
                                                                              return (
                                                                                  language.value ===
                                                                                  field.value
                                                                              )
                                                                          },
                                                                      )) ===
                                                                      null ||
                                                                  _b === void 0
                                                                    ? void 0
                                                                    : _b.label
                                                                : 'Select language',
                                                            _jsx(
                                                                ChevronsUpDown,
                                                                {
                                                                    className:
                                                                        'ml-2 h-4 w-4 shrink-0 opacity-50',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            _jsx(PopoverContent, {
                                                className: 'w-[200px] p-0',
                                                children: _jsxs(Command, {
                                                    children: [
                                                        _jsx(CommandInput, {
                                                            placeholder:
                                                                'Search language...',
                                                        }),
                                                        _jsx(CommandEmpty, {
                                                            children:
                                                                'No language found.',
                                                        }),
                                                        _jsx(CommandGroup, {
                                                            children:
                                                                languages.map(
                                                                    function (
                                                                        language,
                                                                    ) {
                                                                        return _jsxs(
                                                                            CommandItem,
                                                                            {
                                                                                value: language.label,
                                                                                onSelect:
                                                                                    function () {
                                                                                        form.setValue(
                                                                                            'language',
                                                                                            language.value,
                                                                                        )
                                                                                    },
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            Check,
                                                                                            {
                                                                                                className:
                                                                                                    cn(
                                                                                                        'mr-2 h-4 w-4',
                                                                                                        language.value ===
                                                                                                            field.value
                                                                                                            ? 'opacity-100'
                                                                                                            : 'opacity-0',
                                                                                                    ),
                                                                                            },
                                                                                        ),
                                                                                        language.label,
                                                                                    ],
                                                                            },
                                                                            language.value,
                                                                        )
                                                                    },
                                                                ),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    _jsx(FormDescription, {
                                        children:
                                            'This is the language that will be used in the dashboard.',
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
