import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { DatePickerWithRange } from '../../../ui/demo/date-picker-with-ranger-demo'
import { Card, CardContent } from '../../../ui/card'
import { Label } from '../../../ui/label'
export function DemoDatePicker() {
    return _jsx(Card, {
        children: _jsx(CardContent, {
            className: 'pt-6',
            children: _jsxs('div', {
                className: 'space-y-2',
                children: [
                    _jsx(Label, {
                        htmlFor: 'date',
                        className: 'shrink-0',
                        children: 'Pick a date',
                    }),
                    _jsx(DatePickerWithRange, {
                        className: '[&>button]:w-[260px]',
                    }),
                ],
            }),
        }),
    })
}
