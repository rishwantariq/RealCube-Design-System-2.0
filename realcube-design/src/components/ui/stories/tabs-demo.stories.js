import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../card'
import { Input } from '../input'
import { Label } from '../label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs'
var meta = {
    title: 'RealCube/tabs',
    component: function () {
        return _jsxs(Tabs, {
            defaultValue: 'account',
            className: 'w-[400px]',
            children: [
                _jsxs(TabsList, {
                    className: 'grid w-full grid-cols-2',
                    children: [
                        _jsx(TabsTrigger, {
                            value: 'account',
                            children: 'Account',
                        }),
                        _jsx(TabsTrigger, {
                            value: 'password',
                            children: 'Password',
                        }),
                    ],
                }),
                _jsx(TabsContent, {
                    value: 'account',
                    children: _jsxs(Card, {
                        children: [
                            _jsxs(CardHeader, {
                                children: [
                                    _jsx(CardTitle, { children: 'Account' }),
                                    _jsx(CardDescription, {
                                        children:
                                            'Make changes to your account here. Click save when youre done.',
                                    }),
                                ],
                            }),
                            _jsxs(CardContent, {
                                className: 'space-y-2',
                                children: [
                                    _jsxs('div', {
                                        className: 'space-y-1',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'name',
                                                children: 'Name',
                                            }),
                                            _jsx(Input, {
                                                id: 'name',
                                                defaultValue: 'Pedro Duarte',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        className: 'space-y-1',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'username',
                                                children: 'Username',
                                            }),
                                            _jsx(Input, {
                                                id: 'username',
                                                defaultValue: '@peduarte',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsx(CardFooter, {
                                children: _jsx(Button, {
                                    children: 'Save changes',
                                }),
                            }),
                        ],
                    }),
                }),
                _jsx(TabsContent, {
                    value: 'password',
                    children: _jsxs(Card, {
                        children: [
                            _jsxs(CardHeader, {
                                children: [
                                    _jsx(CardTitle, { children: 'Password' }),
                                    _jsx(CardDescription, {
                                        children:
                                            'Change your password here. After saving, youll be logged out.',
                                    }),
                                ],
                            }),
                            _jsxs(CardContent, {
                                className: 'space-y-2',
                                children: [
                                    _jsxs('div', {
                                        className: 'space-y-1',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'current',
                                                children: 'Current password',
                                            }),
                                            _jsx(Input, {
                                                id: 'current',
                                                type: 'password',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        className: 'space-y-1',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'new',
                                                children: 'New password',
                                            }),
                                            _jsx(Input, {
                                                id: 'new',
                                                type: 'password',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsx(CardFooter, {
                                children: _jsx(Button, {
                                    children: 'Save password',
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var TabsDemo = {
    args: {},
}
