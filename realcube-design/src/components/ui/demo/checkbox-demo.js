'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Checkbox } from '../checkbox'
export function CheckboxDemo() {
    return _jsxs('div', {
        className: 'flex items-center space-x-2',
        children: [
            _jsx(Checkbox, { id: 'terms' }),
            _jsx('label', {
                htmlFor: 'terms',
                className:
                    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                children: 'Accept terms and conditions',
            }),
        ],
    })
}
