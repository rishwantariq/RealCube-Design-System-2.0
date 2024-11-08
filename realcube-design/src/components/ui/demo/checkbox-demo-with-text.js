'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Checkbox } from '../checkbox'
import { Label } from '../label'
export function CheckboxWithText() {
    return _jsxs('div', {
        className: 'items-top flex space-x-2',
        children: [
            _jsx(Checkbox, { id: 'terms1' }),
            _jsxs('div', {
                className: 'grid gap-1.5 leading-none',
                children: [
                    _jsx(Label, {
                        htmlFor: 'terms1',
                        className:
                            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                        children: 'Accept terms and conditions',
                    }),
                    _jsx('p', {
                        className: 'text-sm text-muted-foreground',
                        children:
                            'You agree to our Terms of Service and Privacy Policy.',
                    }),
                ],
            }),
        ],
    })
}
