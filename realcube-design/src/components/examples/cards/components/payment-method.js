import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import { RadioGroup, RadioGroupItem } from '../../../ui/radio-group'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../ui/select'
import { Apple, PalmtreeIcon } from 'lucide-react'
export function DemoPaymentMethod() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                children: [
                    _jsx(CardTitle, { children: 'Payment Method' }),
                    _jsx(CardDescription, {
                        children: 'Add a new payment method to your account.',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                className: 'grid gap-6',
                children: [
                    _jsxs(RadioGroup, {
                        defaultValue: 'card',
                        className: 'grid grid-cols-3 gap-4',
                        children: [
                            _jsxs('div', {
                                children: [
                                    _jsx(RadioGroupItem, {
                                        value: 'card',
                                        id: 'card',
                                        className: 'peer sr-only',
                                    }),
                                    _jsxs(Label, {
                                        htmlFor: 'card',
                                        className:
                                            'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary',
                                        children: [
                                            _jsxs('svg', {
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                stroke: 'currentColor',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeWidth: '2',
                                                className: 'mb-3 h-6 w-6',
                                                children: [
                                                    _jsx('rect', {
                                                        width: '20',
                                                        height: '14',
                                                        x: '2',
                                                        y: '5',
                                                        rx: '2',
                                                    }),
                                                    _jsx('path', {
                                                        d: 'M2 10h20',
                                                    }),
                                                ],
                                            }),
                                            'Card',
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                children: [
                                    _jsx(RadioGroupItem, {
                                        value: 'paypal',
                                        id: 'paypal',
                                        className: 'peer sr-only',
                                    }),
                                    _jsxs(Label, {
                                        htmlFor: 'paypal',
                                        className:
                                            'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary',
                                        children: [
                                            _jsx(PalmtreeIcon, {
                                                className: 'mb-3 h-6 w-6',
                                            }),
                                            'Paypal',
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                children: [
                                    _jsx(RadioGroupItem, {
                                        value: 'apple',
                                        id: 'apple',
                                        className: 'peer sr-only',
                                    }),
                                    _jsxs(Label, {
                                        htmlFor: 'apple',
                                        className:
                                            'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary',
                                        children: [
                                            _jsx(Apple, {
                                                className: 'mb-3 h-6 w-6',
                                            }),
                                            'Apple',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-2',
                        children: [
                            _jsx(Label, { htmlFor: 'name', children: 'Name' }),
                            _jsx(Input, {
                                id: 'name',
                                placeholder: 'First Last',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-2',
                        children: [
                            _jsx(Label, {
                                htmlFor: 'number',
                                children: 'Card number',
                            }),
                            _jsx(Input, { id: 'number', placeholder: '' }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid grid-cols-3 gap-4',
                        children: [
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'month',
                                        children: 'Expires',
                                    }),
                                    _jsxs(Select, {
                                        children: [
                                            _jsx(SelectTrigger, {
                                                id: 'month',
                                                children: _jsx(SelectValue, {
                                                    placeholder: 'Month',
                                                }),
                                            }),
                                            _jsxs(SelectContent, {
                                                children: [
                                                    _jsx(SelectItem, {
                                                        value: '1',
                                                        children: 'January',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '2',
                                                        children: 'February',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '3',
                                                        children: 'March',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '4',
                                                        children: 'April',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '5',
                                                        children: 'May',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '6',
                                                        children: 'June',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '7',
                                                        children: 'July',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '8',
                                                        children: 'August',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '9',
                                                        children: 'September',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '10',
                                                        children: 'October',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '11',
                                                        children: 'November',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: '12',
                                                        children: 'December',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'year',
                                        children: 'Year',
                                    }),
                                    _jsxs(Select, {
                                        children: [
                                            _jsx(SelectTrigger, {
                                                id: 'year',
                                                children: _jsx(SelectValue, {
                                                    placeholder: 'Year',
                                                }),
                                            }),
                                            _jsx(SelectContent, {
                                                children: Array.from(
                                                    { length: 10 },
                                                    function (_, i) {
                                                        return _jsx(
                                                            SelectItem,
                                                            {
                                                                value: ''.concat(
                                                                    new Date().getFullYear() +
                                                                        i,
                                                                ),
                                                                children:
                                                                    new Date().getFullYear() +
                                                                    i,
                                                            },
                                                            i,
                                                        )
                                                    },
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'cvc',
                                        children: 'CVC',
                                    }),
                                    _jsx(Input, {
                                        id: 'cvc',
                                        placeholder: 'CVC',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsx(CardFooter, {
                children: _jsx(Button, {
                    className: 'w-full',
                    children: 'Continue',
                }),
            }),
        ],
    })
}
