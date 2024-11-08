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
import { formSchema } from '../../../schema/schemaForm'
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
import { Input } from '../input'
export function ProfileForm() {
    // 1. Define your form.
    var form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    // ...
    return _jsx(
        Form,
        __assign({}, form, {
            children: _jsxs('form', {
                onSubmit: form.handleSubmit(onSubmit),
                className: 'space-y-8',
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
                                            'This is your public display name.',
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
