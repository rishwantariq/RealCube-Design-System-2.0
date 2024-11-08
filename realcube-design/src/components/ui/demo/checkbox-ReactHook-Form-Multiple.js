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
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                    ar[i] = from[i]
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from))
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../form'
import { toast } from '../use-toast'
var items = [
    {
        id: 'recents',
        label: 'Recents',
    },
    {
        id: 'home',
        label: 'Home',
    },
    {
        id: 'applications',
        label: 'Applications',
    },
    {
        id: 'desktop',
        label: 'Desktop',
    },
    {
        id: 'downloads',
        label: 'Downloads',
    },
    {
        id: 'documents',
        label: 'Documents',
    },
]
var FormSchema = z.object({
    items: z.array(z.string()).refine(
        function (value) {
            return value.some(function (item) {
                return item
            })
        },
        {
            message: 'You have to select at least one item.',
        },
    ),
})
export function CheckboxReactHookFormMultiple() {
    var form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: ['recents', 'home'],
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
                className: 'space-y-8',
                children: [
                    _jsx(FormField, {
                        control: form.control,
                        name: 'items',
                        render: function () {
                            return _jsxs(FormItem, {
                                children: [
                                    _jsxs('div', {
                                        className: 'mb-4',
                                        children: [
                                            _jsx(FormLabel, {
                                                className: 'text-base',
                                                children: 'Sidebar',
                                            }),
                                            _jsx(FormDescription, {
                                                children:
                                                    'Select the items you want to display in the sidebar.',
                                            }),
                                        ],
                                    }),
                                    items.map(function (item) {
                                        return _jsx(
                                            FormField,
                                            {
                                                control: form.control,
                                                name: 'items',
                                                render: function (_a) {
                                                    var _b
                                                    var field = _a.field
                                                    return _jsxs(
                                                        FormItem,
                                                        {
                                                            className:
                                                                'flex flex-row items-start space-x-3 space-y-0',
                                                            children: [
                                                                _jsx(
                                                                    FormControl,
                                                                    {
                                                                        children:
                                                                            _jsx(
                                                                                Checkbox,
                                                                                {
                                                                                    checked:
                                                                                        (_b =
                                                                                            field.value) ===
                                                                                            null ||
                                                                                        _b ===
                                                                                            void 0
                                                                                            ? void 0
                                                                                            : _b.includes(
                                                                                                  item.id,
                                                                                              ),
                                                                                    onCheckedChange:
                                                                                        function (
                                                                                            checked,
                                                                                        ) {
                                                                                            var _a
                                                                                            return checked
                                                                                                ? field.onChange(
                                                                                                      __spreadArray(
                                                                                                          __spreadArray(
                                                                                                              [],
                                                                                                              field.value,
                                                                                                              true,
                                                                                                          ),
                                                                                                          [
                                                                                                              item.id,
                                                                                                          ],
                                                                                                          false,
                                                                                                      ),
                                                                                                  )
                                                                                                : field.onChange(
                                                                                                      (_a =
                                                                                                          field.value) ===
                                                                                                          null ||
                                                                                                          _a ===
                                                                                                              void 0
                                                                                                          ? void 0
                                                                                                          : _a.filter(
                                                                                                                function (
                                                                                                                    value,
                                                                                                                ) {
                                                                                                                    return (
                                                                                                                        value !==
                                                                                                                        item.id
                                                                                                                    )
                                                                                                                },
                                                                                                            ),
                                                                                                  )
                                                                                        },
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    FormLabel,
                                                                    {
                                                                        className:
                                                                            'font-normal',
                                                                        children:
                                                                            item.label,
                                                                    },
                                                                ),
                                                            ],
                                                        },
                                                        item.id,
                                                    )
                                                },
                                            },
                                            item.id,
                                        )
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
