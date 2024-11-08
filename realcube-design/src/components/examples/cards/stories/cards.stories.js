var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { cn } from '../../../../lib/utils'
import { DemoCookieSettings } from '../components/cookie-settings'
import { DemoCreateAccount } from '../components/create-account'
import { DemoDatePicker } from '../components/date-picker'
import { DemoGithub } from '../components/github-card'
import { DemoNotifications } from '../components/notifications'
import { DemoPaymentMethod } from '../components/payment-method'
import { DemoReportAnIssue } from '../components/report-an-issue'
import { DemoShareDocument } from '../components/share-document'
import { DemoTeamMembers } from '../components/team-members'
import Image from 'next/image'
import ImgCardDark from '../assets/cards-dark.png'
import ImgCardLight from '../assets/cards-light.png'
function DemoContainer(_a) {
    var className = _a.className,
        props = __rest(_a, ['className'])
    return _jsx(
        'div',
        __assign(
            {
                className: cn(
                    'flex items-center justify-center [&>div]:w-full',
                    className,
                ),
            },
            props,
        ),
    )
}
var meta = {
    title: 'Examples/cards',
    component: function (args) {
        return _jsxs(_Fragment, {
            children: [
                _jsxs('div', {
                    className: 'md:hidden',
                    children: [
                        _jsx(Image, {
                            src: ImgCardDark,
                            width: 1280,
                            height: 1214,
                            alt: 'Cards',
                            className: 'block dark:hidden',
                        }),
                        _jsx(Image, {
                            src: ImgCardLight,
                            width: 1280,
                            height: 1214,
                            alt: 'Cards',
                            className: 'hidden dark:block',
                        }),
                    ],
                }),
                _jsxs('div', {
                    className:
                        'hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3',
                    children: [
                        _jsxs('div', {
                            className:
                                'col-span-2 grid items-start gap-6 lg:col-span-1',
                            children: [
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoCreateAccount, {}),
                                }),
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoPaymentMethod, {}),
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            className:
                                'col-span-2 grid items-start gap-6 lg:col-span-1',
                            children: [
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoTeamMembers, {}),
                                }),
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoShareDocument, {}),
                                }),
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoDatePicker, {}),
                                }),
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoNotifications, {}),
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            className:
                                'col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1',
                            children: [
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoReportAnIssue, {}),
                                }),
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoGithub, {}),
                                }),
                                _jsx(DemoContainer, {
                                    children: _jsx(DemoCookieSettings, {}),
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
export var Cards = {}
