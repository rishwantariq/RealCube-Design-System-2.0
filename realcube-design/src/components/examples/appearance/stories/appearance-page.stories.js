import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { AppearanceForm } from '../appearance-form'
import { Separator } from '../../../ui/separator'
var meta = {
    title: 'Examples/appearance',
    component: function () {
        return _jsxs('div', {
            className: 'space-y-6',
            children: [
                _jsxs('div', {
                    children: [
                        _jsx('h3', {
                            className: 'text-lg font-medium',
                            children: 'Appearance',
                        }),
                        _jsx('p', {
                            className: 'text-sm text-muted-foreground',
                            children:
                                'Customize the appearance of the app. Automatically switch between day and night themes.',
                        }),
                    ],
                }),
                _jsx(Separator, {}),
                _jsx(AppearanceForm, {}),
            ],
        })
    },
}
export var AppearancePage = {}
export default meta
