import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../alert-dialog'
var meta = {
    title: 'RealCube/alert',
    component: function () {
        return _jsx(_Fragment, {
            children: _jsxs(AlertDialog, {
                children: [
                    _jsx(AlertDialogTrigger, {
                        'data-testid': 'trigger',
                        children: 'Open',
                    }),
                    _jsxs(AlertDialogContent, {
                        children: [
                            _jsxs(AlertDialogHeader, {
                                children: [
                                    _jsx(AlertDialogTitle, {
                                        'data-testid': 'title',
                                        children: 'Are you absolutely sure?',
                                    }),
                                    _jsx(AlertDialogDescription, {
                                        'data-testid': 'description',
                                        children:
                                            'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
                                    }),
                                ],
                            }),
                            _jsxs(AlertDialogFooter, {
                                children: [
                                    _jsx(AlertDialogCancel, {
                                        'data-testid': 'cancel',
                                        children: 'Cancel',
                                    }),
                                    _jsx(AlertDialogAction, {
                                        'data-testid': 'Action',
                                        children: 'Continue',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var AlertDialogDemo = {
    args: {},
}
