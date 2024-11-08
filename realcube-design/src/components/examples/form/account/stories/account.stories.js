import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { Separator } from '../../../../ui/separator'
import { AccountForm } from '../account-form'
var meta = {
    title: 'Examples/form',
    component: function () {
        return _jsx(_Fragment, {
            children: _jsxs('div', {
                className: 'space-y-6 max-w-xl',
                children: [
                    _jsxs('div', {
                        children: [
                            _jsx('h3', {
                                className: 'text-lg font-medium',
                                children: 'Account',
                            }),
                            _jsx('p', {
                                className: 'text-sm text-muted-foreground',
                                children:
                                    'Update your account settings. Set your preferred language and timezone.',
                            }),
                        ],
                    }),
                    _jsx(Separator, {}),
                    _jsx(AccountForm, {}),
                ],
            }),
        })
    },
}
export default meta
export var PageAccountForm = {}
