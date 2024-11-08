import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Label } from '../label'
import { RadioGroup, RadioGroupItem } from '../radio-group'
var meta = {
    title: 'RealCube/radio-group',
    component: function () {
        return _jsxs(RadioGroup, {
            defaultValue: 'comfortable',
            children: [
                _jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                        _jsx(RadioGroupItem, { value: 'default', id: 'r1' }),
                        _jsx(Label, { htmlFor: 'r1', children: 'Default' }),
                    ],
                }),
                _jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                        _jsx(RadioGroupItem, {
                            value: 'comfortable',
                            id: 'r2',
                        }),
                        _jsx(Label, { htmlFor: 'r2', children: 'Comfortable' }),
                    ],
                }),
                _jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                        _jsx(RadioGroupItem, { value: 'compact', id: 'r3' }),
                        _jsx(Label, { htmlFor: 'r3', children: 'Compact' }),
                    ],
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var RadioGroupDemo = {
    args: {},
}
