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
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar'
export function NavSecondary(_a) {
    var items = _a.items,
        props = __rest(_a, ['items'])
    return _jsx(
        SidebarGroup,
        __assign({}, props, {
            children: _jsx(SidebarGroupContent, {
                children: _jsx(SidebarMenu, {
                    children: items.map(function (item) {
                        return _jsx(
                            SidebarMenuItem,
                            {
                                children: _jsx(SidebarMenuButton, {
                                    asChild: true,
                                    size: 'sm',
                                    children: _jsxs('a', {
                                        href: item.url,
                                        children: [
                                            _jsx(item.icon, {}),
                                            _jsx('span', {
                                                children: item.title,
                                            }),
                                        ],
                                    }),
                                }),
                            },
                            item.title,
                        )
                    }),
                }),
            }),
        }),
    )
}
