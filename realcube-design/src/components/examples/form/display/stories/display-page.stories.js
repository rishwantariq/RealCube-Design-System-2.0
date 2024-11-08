import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Separator } from '../../../../ui/separator'
import { DisplayForm } from '../display-form'
var meta = {
    title: 'Examples/display',
    component: function () {
        return _jsxs('div', {
            className: 'space-y-6',
            children: [
                _jsxs('div', {
                    children: [
                        _jsx('h3', {
                            className: 'text-lg font-medium',
                            children: 'Display',
                        }),
                        _jsx('p', {
                            className: 'text-sm text-muted-foreground',
                            children:
                                "Turn items on or off to control what's displayed in the app.",
                        }),
                    ],
                }),
                _jsx(Separator, {}),
                _jsx(DisplayForm, {}),
            ],
        })
    },
}
export default meta
export var DisplayPage = {}
