import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Separator } from '../../../../ui/separator'
import { NotificationsForm } from '../notifications-form'
var meta = {
    title: 'Examples/notification',
    component: function (args) {
        return _jsxs('div', {
            className: 'space-y-6',
            children: [
                _jsxs('div', {
                    children: [
                        _jsx('h3', {
                            className: 'text-lg font-medium',
                            children: 'Notifications',
                        }),
                        _jsx('p', {
                            className: 'text-sm text-muted-foreground',
                            children:
                                'Configure how you receive notifications.',
                        }),
                    ],
                }),
                _jsx(Separator, {}),
                _jsx(NotificationsForm, {}),
            ],
        })
    },
}
export var NotificationPage = {}
export default meta
