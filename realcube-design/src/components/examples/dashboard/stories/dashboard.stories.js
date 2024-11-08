import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { Button } from '../../../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs'
import { CalendarDateRangePicker } from '../components/date-range-picker'
import { MainNav } from '../components/main-nav'
import { Overview } from '../components/overview'
import { RecentSales } from '../components/recent-sales'
import { Search } from '../components/search'
import TeamSwitcher from '../components/team-switcher'
import { UserNav } from '../components/user-nav'
import Image from 'next/image'
import ImgDashboardLight from '../assets/dashboard-light.png'
import ImgDashboardDark from '../assets/dashboard-dark.png'
var meta = {
    title: 'Examples/dashboard',
    component: function (args) {
        return _jsxs(_Fragment, {
            children: [
                _jsxs('div', {
                    className: 'md:hidden',
                    children: [
                        _jsx(Image, {
                            src: ImgDashboardLight,
                            width: 1280,
                            height: 866,
                            alt: 'Dashboard',
                            className: 'block dark:hidden',
                        }),
                        _jsx(Image, {
                            src: ImgDashboardDark,
                            width: 1280,
                            height: 866,
                            alt: 'Dashboard',
                            className: 'hidden dark:block',
                        }),
                    ],
                }),
                _jsxs('div', {
                    className: 'hidden flex-col md:flex',
                    children: [
                        _jsx('div', {
                            className: 'border-b',
                            children: _jsxs('div', {
                                className: 'flex h-16 items-center px-4',
                                children: [
                                    _jsx(TeamSwitcher, {}),
                                    _jsx(MainNav, { className: 'mx-6' }),
                                    _jsxs('div', {
                                        className:
                                            'ml-auto flex items-center space-x-4',
                                        children: [
                                            _jsx(Search, {}),
                                            _jsx(UserNav, {}),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        _jsxs('div', {
                            className: 'flex-1 space-y-4 p-8 pt-6',
                            children: [
                                _jsxs('div', {
                                    className:
                                        'flex items-center justify-between space-y-2',
                                    children: [
                                        _jsx('h2', {
                                            className:
                                                'text-3xl font-bold tracking-tight',
                                            children: 'Dashboard',
                                        }),
                                        _jsxs('div', {
                                            className:
                                                'flex items-center space-x-2',
                                            children: [
                                                _jsx(
                                                    CalendarDateRangePicker,
                                                    {},
                                                ),
                                                _jsx(Button, {
                                                    children: 'Download',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs(Tabs, {
                                    defaultValue: 'overview',
                                    className: 'space-y-4',
                                    children: [
                                        _jsxs(TabsList, {
                                            children: [
                                                _jsx(TabsTrigger, {
                                                    value: 'overview',
                                                    children: 'Overview',
                                                }),
                                                _jsx(TabsTrigger, {
                                                    value: 'analytics',
                                                    disabled: true,
                                                    children: 'Analytics',
                                                }),
                                                _jsx(TabsTrigger, {
                                                    value: 'reports',
                                                    disabled: true,
                                                    children: 'Reports',
                                                }),
                                                _jsx(TabsTrigger, {
                                                    value: 'notifications',
                                                    disabled: true,
                                                    children: 'Notifications',
                                                }),
                                            ],
                                        }),
                                        _jsxs(TabsContent, {
                                            value: 'overview',
                                            className: 'space-y-4',
                                            children: [
                                                _jsxs('div', {
                                                    className:
                                                        'grid gap-4 md:grid-cols-2 lg:grid-cols-4',
                                                    children: [
                                                        _jsxs(Card, {
                                                            children: [
                                                                _jsxs(
                                                                    CardHeader,
                                                                    {
                                                                        className:
                                                                            'flex flex-row items-center justify-between space-y-0 pb-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    CardTitle,
                                                                                    {
                                                                                        className:
                                                                                            'text-sm font-medium',
                                                                                        children:
                                                                                            'Total Revenue',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 24 24',
                                                                                        fill: 'none',
                                                                                        stroke: 'currentColor',
                                                                                        strokeLinecap:
                                                                                            'round',
                                                                                        strokeLinejoin:
                                                                                            'round',
                                                                                        strokeWidth:
                                                                                            '2',
                                                                                        className:
                                                                                            'h-4 w-4 text-muted-foreground',
                                                                                        children:
                                                                                            _jsx(
                                                                                                'path',
                                                                                                {
                                                                                                    d: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CardContent,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'text-2xl font-bold',
                                                                                        children:
                                                                                            '$45,231.89',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-xs text-muted-foreground',
                                                                                        children:
                                                                                            '+20.1% from last month',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        _jsxs(Card, {
                                                            children: [
                                                                _jsxs(
                                                                    CardHeader,
                                                                    {
                                                                        className:
                                                                            'flex flex-row items-center justify-between space-y-0 pb-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    CardTitle,
                                                                                    {
                                                                                        className:
                                                                                            'text-sm font-medium',
                                                                                        children:
                                                                                            'Subscriptions',
                                                                                    },
                                                                                ),
                                                                                _jsxs(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 24 24',
                                                                                        fill: 'none',
                                                                                        stroke: 'currentColor',
                                                                                        strokeLinecap:
                                                                                            'round',
                                                                                        strokeLinejoin:
                                                                                            'round',
                                                                                        strokeWidth:
                                                                                            '2',
                                                                                        className:
                                                                                            'h-4 w-4 text-muted-foreground',
                                                                                        children:
                                                                                            [
                                                                                                _jsx(
                                                                                                    'path',
                                                                                                    {
                                                                                                        d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'circle',
                                                                                                    {
                                                                                                        cx: '9',
                                                                                                        cy: '7',
                                                                                                        r: '4',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'path',
                                                                                                    {
                                                                                                        d: 'M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CardContent,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'text-2xl font-bold',
                                                                                        children:
                                                                                            '+2350',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-xs text-muted-foreground',
                                                                                        children:
                                                                                            '+180.1% from last month',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        _jsxs(Card, {
                                                            children: [
                                                                _jsxs(
                                                                    CardHeader,
                                                                    {
                                                                        className:
                                                                            'flex flex-row items-center justify-between space-y-0 pb-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    CardTitle,
                                                                                    {
                                                                                        className:
                                                                                            'text-sm font-medium',
                                                                                        children:
                                                                                            'Sales',
                                                                                    },
                                                                                ),
                                                                                _jsxs(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 24 24',
                                                                                        fill: 'none',
                                                                                        stroke: 'currentColor',
                                                                                        strokeLinecap:
                                                                                            'round',
                                                                                        strokeLinejoin:
                                                                                            'round',
                                                                                        strokeWidth:
                                                                                            '2',
                                                                                        className:
                                                                                            'h-4 w-4 text-muted-foreground',
                                                                                        children:
                                                                                            [
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        width: '20',
                                                                                                        height: '14',
                                                                                                        x: '2',
                                                                                                        y: '5',
                                                                                                        rx: '2',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'path',
                                                                                                    {
                                                                                                        d: 'M2 10h20',
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CardContent,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'text-2xl font-bold',
                                                                                        children:
                                                                                            '+12,234',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-xs text-muted-foreground',
                                                                                        children:
                                                                                            '+19% from last month',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        _jsxs(Card, {
                                                            children: [
                                                                _jsxs(
                                                                    CardHeader,
                                                                    {
                                                                        className:
                                                                            'flex flex-row items-center justify-between space-y-0 pb-2',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    CardTitle,
                                                                                    {
                                                                                        className:
                                                                                            'text-sm font-medium',
                                                                                        children:
                                                                                            'Active Now',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 24 24',
                                                                                        fill: 'none',
                                                                                        stroke: 'currentColor',
                                                                                        strokeLinecap:
                                                                                            'round',
                                                                                        strokeLinejoin:
                                                                                            'round',
                                                                                        strokeWidth:
                                                                                            '2',
                                                                                        className:
                                                                                            'h-4 w-4 text-muted-foreground',
                                                                                        children:
                                                                                            _jsx(
                                                                                                'path',
                                                                                                {
                                                                                                    d: 'M22 12h-4l-3 9L9 3l-3 9H2',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    CardContent,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'text-2xl font-bold',
                                                                                        children:
                                                                                            '+573',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-xs text-muted-foreground',
                                                                                        children:
                                                                                            '+201 since last hour',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs('div', {
                                                    className:
                                                        'grid gap-4 md:grid-cols-2 lg:grid-cols-7',
                                                    children: [
                                                        _jsxs(Card, {
                                                            className:
                                                                'col-span-4',
                                                            children: [
                                                                _jsx(
                                                                    CardHeader,
                                                                    {
                                                                        children:
                                                                            _jsx(
                                                                                CardTitle,
                                                                                {
                                                                                    children:
                                                                                        'Overview',
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    CardContent,
                                                                    {
                                                                        className:
                                                                            'pl-2',
                                                                        children:
                                                                            _jsx(
                                                                                Overview,
                                                                                {},
                                                                            ),
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        _jsxs(Card, {
                                                            className:
                                                                'col-span-3',
                                                            children: [
                                                                _jsxs(
                                                                    CardHeader,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    CardTitle,
                                                                                    {
                                                                                        children:
                                                                                            'Recent Sales',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    CardDescription,
                                                                                    {
                                                                                        children:
                                                                                            'You made 265 sales this month.',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    CardContent,
                                                                    {
                                                                        children:
                                                                            _jsx(
                                                                                RecentSales,
                                                                                {},
                                                                            ),
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
}
export default meta
export var Dashboard = {}
