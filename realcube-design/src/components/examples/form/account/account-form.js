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
import { CalendarIcon, SortAscIcon, CheckIcon } from 'lucide-react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { cn } from '../../../../lib/utils'
import { Button } from '../../../ui/button'
import { Calendar } from '../../../ui/calendar'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '../../../ui/command'
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
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
import { toast } from '../../../ui/use-toast'
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
var accountFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Name must be at least 2 characters.',
        })
        .max(30, {
            message: 'Name must not be longer than 30 characters.',
        }),
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
    language: z.string({
        required_error: 'Please select a language.',
    }),
})
// This can come from your database or API.
var defaultValues = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
}
export function AccountForm() {
    var form = useForm({
        resolver: zodResolver(accountFormSchema),
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
                className: 'space-y-8',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'name',
                        render: function (_a) {
                            var field = _a.field
                            return _jsxs(FormItem, {
                                children: [
                                    _jsx(FormLabel, { children: 'Name' }),
                                    _jsx(FormControl, {
                                        children: _jsx(
                                            Input,
                                            __assign(
                                                { placeholder: 'Your name' },
                                                field,
                                            ),
                                        ),
                                    }),
                                    _jsx(FormDescription, {
                                        children:
                                            'This is the name that will be displayed on your profile and in emails.',
                                    }),
                                    _jsx(FormMessage, {}),
                                ],
                            })
                        },
                    }),
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
                                                                          'Pick a date',
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
                                                            _jsx(SortAscIcon, {
                                                                className:
                                                                    'ml-2 h-4 w-4 shrink-0 opacity-50',
                                                            }),
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
                                                                                            CheckIcon,
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
                    _jsx(Button, {
                        type: 'submit',
                        children: 'Update account',
                    }),
                ],
            }),
        }),
    )
}
