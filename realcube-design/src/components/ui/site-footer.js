// SiteFooter.tsx
'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export function SiteFooter(_a) {
    var _b = _a.sections,
        sections = _b === void 0 ? [] : _b,
        newsletterForm = _a.newsletterForm,
        logoSrc = _a.logoSrc,
        companyName = _a.companyName,
        _c = _a.hideInfo,
        hideInfo = _c === void 0 ? true : _c
    var _d = useState(false),
        mounted = _d[0],
        setMounted = _d[1]
    useEffect(function () {
        setMounted(true)
    }, [])
    if (!mounted) return null
    return _jsxs('footer', {
        className: 'border-t py-6',
        children: [
            !hideInfo &&
                sections.length > 0 &&
                _jsxs('div', {
                    className:
                        'container max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 py-8',
                    children: [
                        sections.map(function (section) {
                            return _jsxs(
                                'div',
                                {
                                    children: [
                                        _jsx('span', {
                                            className:
                                                'text-sm font-medium text-foreground',
                                            children: section.title,
                                        }),
                                        _jsx('ul', {
                                            className: 'mt-4 space-y-3',
                                            children: section.links.map(
                                                function (link) {
                                                    return _jsx(
                                                        'li',
                                                        {
                                                            children: _jsx(
                                                                Link,
                                                                {
                                                                    href: link.href,
                                                                    className:
                                                                        'text-sm text-muted-foreground hover:text-primary',
                                                                    children:
                                                                        link.title,
                                                                },
                                                            ),
                                                        },
                                                        link.title,
                                                    )
                                                },
                                            ),
                                        }),
                                    ],
                                },
                                section.title,
                            )
                        }),
                        _jsx('div', {
                            className:
                                'mx-auto flex items-center justify-center',
                            children: _jsx(Image, {
                                src: logoSrc,
                                alt: ''.concat(companyName, ' logo'),
                                width: 200,
                                height: 200,
                            }),
                        }),
                    ],
                }),
            _jsx('div', {
                className:
                    'container max-w-6xl flex items-center justify-between mt-4',
                children: _jsx('p', {
                    className: 'text-sm text-muted-foreground',
                    children: _jsxs(Link, {
                        href: '/',
                        target: '_blank',
                        rel: 'noreferrer',
                        className: 'font-regular underline underline-offset-4',
                        children: [
                            '\u00A9 ',
                            companyName,
                            '. All rights reserved.',
                        ],
                    }),
                }),
            }),
        ],
    })
}
