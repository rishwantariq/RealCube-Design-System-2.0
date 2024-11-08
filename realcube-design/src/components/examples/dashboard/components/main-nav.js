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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Link from 'next/link'
import { cn } from '../../../../lib/utils'
export function MainNav(_a) {
    var className = _a.className,
        props = __rest(_a, ['className'])
    return _jsxs(
        'nav',
        __assign(
            {
                className: cn(
                    'flex items-center space-x-4 lg:space-x-6',
                    className,
                ),
            },
            props,
            {
                children: [
                    _jsx(Link, {
                        href: '#',
                        className:
                            'text-sm font-medium transition-colors hover:text-primary',
                        children: 'Overview',
                    }),
                    _jsx(Link, {
                        href: '#',
                        className:
                            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                        children: 'Customers',
                    }),
                    _jsx(Link, {
                        href: '#',
                        className:
                            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                        children: 'Products',
                    }),
                    _jsx(Link, {
                        href: '#',
                        className:
                            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                        children: 'Settings',
                    }),
                ],
            },
        ),
    )
}
