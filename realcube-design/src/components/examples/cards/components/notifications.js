import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { BellIcon, EyeIcon, PersonStanding } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
export function DemoNotifications() {
    return _jsxs(Card, {
        children: [
            _jsxs(CardHeader, {
                className: 'pb-3',
                children: [
                    _jsx(CardTitle, { children: 'Notifications' }),
                    _jsx(CardDescription, {
                        children: 'Choose what you want to be notified about.',
                    }),
                ],
            }),
            _jsxs(CardContent, {
                className: 'grid gap-1',
                children: [
                    _jsxs('div', {
                        className:
                            '-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground',
                        children: [
                            _jsx(BellIcon, { className: 'mt-px h-5 w-5' }),
                            _jsxs('div', {
                                className: 'space-y-1',
                                children: [
                                    _jsx('p', {
                                        className:
                                            'text-sm font-medium leading-none',
                                        children: 'Everything',
                                    }),
                                    _jsx('p', {
                                        className:
                                            'text-sm text-muted-foreground',
                                        children:
                                            'Email digest, mentions & all activity.',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            '-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all',
                        children: [
                            _jsx(PersonStanding, {
                                className: 'mt-px h-5 w-5',
                            }),
                            _jsxs('div', {
                                className: 'space-y-1',
                                children: [
                                    _jsx('p', {
                                        className:
                                            'text-sm font-medium leading-none',
                                        children: 'Available',
                                    }),
                                    _jsx('p', {
                                        className:
                                            'text-sm text-muted-foreground',
                                        children: 'Only mentions and comments.',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            '-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground',
                        children: [
                            _jsx(EyeIcon, { className: 'mt-px h-5 w-5' }),
                            _jsxs('div', {
                                className: 'space-y-1',
                                children: [
                                    _jsx('p', {
                                        className:
                                            'text-sm font-medium leading-none',
                                        children: 'Ignoring',
                                    }),
                                    _jsx('p', {
                                        className:
                                            'text-sm text-muted-foreground',
                                        children: 'Turn off all notifications.',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
