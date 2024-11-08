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
import { cn } from '../../lib/utils'
export function TypographyH1(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'h1',
        __assign(
            {
                className: cn(
                    'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyH2(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'h2',
        __assign(
            {
                className: cn(
                    'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyH3(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'h3',
        __assign(
            {
                className: cn(
                    'scroll-m-20 text-2xl font-semibold tracking-tight',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyH4(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'h4',
        __assign(
            {
                className: cn(
                    'scroll-m-20 text-xl font-semibold tracking-tight',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyP(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'p',
        __assign(
            {
                className: cn(
                    'leading-7 [&:not(:first-child)]:mt-6',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyBlockquote(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'blockquote',
        __assign(
            { className: cn('mt-6 border-l-2 pl-6 italic', className) },
            props,
            { children: children },
        ),
    )
}
export var Tr = function (_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'tr',
        __assign(
            { className: cn('m-0 border-t p-0 even:bg-muted', className) },
            props,
            { children: children },
        ),
    )
}
export var Th = function (_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'th',
        __assign(
            {
                className: cn(
                    'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export var Td = function (_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'td',
        __assign(
            {
                className: cn(
                    'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyTable(props) {
    return _jsx('div', {
        className: 'my-6 w-full overflow-y-auto',
        children: _jsxs('table', {
            className: 'w-full',
            children: [
                _jsx('thead', {
                    children: _jsxs(Tr, {
                        children: [
                            _jsx(Th, {
                                className:
                                    'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                                children: 'King"s Treasury',
                            }),
                            _jsx(Th, {
                                className:
                                    'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                                children: 'People"s happiness',
                            }),
                        ],
                    }),
                }),
                _jsxs('tbody', {
                    children: [
                        _jsxs(Tr, {
                            children: [
                                _jsx(Td, {
                                    className:
                                        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    children: 'Empty',
                                }),
                                _jsx(Td, {
                                    className:
                                        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    children: 'Overflowing',
                                }),
                            ],
                        }),
                        _jsxs(Tr, {
                            children: [
                                _jsx(Td, {
                                    className:
                                        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    children: 'Modest',
                                }),
                                _jsx(Td, {
                                    className:
                                        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    children: 'Satisfied',
                                }),
                            ],
                        }),
                        _jsxs(Tr, {
                            children: [
                                _jsx(Td, {
                                    className:
                                        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    children: 'Full',
                                }),
                                _jsx(Td, {
                                    className:
                                        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                                    children: 'Ecstatic',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    })
}
export var TypographyListItem = function (_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'li',
        __assign({ className: cn('', className) }, props, {
            children: children,
        }),
    )
}
export function TypographyList(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'ul',
        __assign(
            { className: cn('my-6 ml-6 list-disc [&>li]:mt-2', className) },
            props,
            { children: children },
        ),
    )
}
export function TypographyInlineCode(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'code',
        __assign(
            {
                className: cn(
                    'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
                    className,
                ),
            },
            props,
            { children: children },
        ),
    )
}
export function TypographyLead(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'p',
        __assign(
            { className: cn('text-xl text-muted-foreground', className) },
            props,
            { children: children },
        ),
    )
}
export function TypographyLarge(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'div',
        __assign({ className: cn('text-lg font-semibold', className) }, props, {
            children: children,
        }),
    )
}
export function TypographySmall(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'small',
        __assign(
            { className: cn('text-sm font-medium leading-none', className) },
            props,
            { children: children },
        ),
    )
}
export function TypographyMuted(_a) {
    var className = _a.className,
        children = _a.children,
        props = __rest(_a, ['className', 'children'])
    return _jsx(
        'p',
        __assign(
            { className: cn('text-sm text-muted-foreground', className) },
            props,
            { children: children },
        ),
    )
}
