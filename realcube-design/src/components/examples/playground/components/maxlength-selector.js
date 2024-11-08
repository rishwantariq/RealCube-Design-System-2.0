'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import * as React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '../../../ui/hover-card'
import { Label } from '../../../ui/label'
import { Slider } from '../../../ui/slider'
export function MaxLengthSelector(_a) {
    var defaultValue = _a.defaultValue
    var _b = React.useState(defaultValue),
        value = _b[0],
        setValue = _b[1]
    return _jsx('div', {
        className: 'grid gap-2 pt-2',
        children: _jsxs(HoverCard, {
            openDelay: 200,
            children: [
                _jsx(HoverCardTrigger, {
                    asChild: true,
                    children: _jsxs('div', {
                        className: 'grid gap-4',
                        children: [
                            _jsxs('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'maxlength',
                                        children: 'Maximum Length',
                                    }),
                                    _jsx('span', {
                                        className:
                                            'w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border',
                                        children: value,
                                    }),
                                ],
                            }),
                            _jsx(Slider, {
                                id: 'maxlength',
                                max: 4000,
                                defaultValue: value,
                                step: 10,
                                onValueChange: setValue,
                                className:
                                    '[&_[role=slider]]:h-4 [&_[role=slider]]:w-4',
                                'aria-label': 'Maximum Length',
                            }),
                        ],
                    }),
                }),
                _jsx(HoverCardContent, {
                    align: 'start',
                    className: 'w-[260px] text-sm',
                    side: 'left',
                    children:
                        'The maximum number of tokens to generate. Requests can use up to 2,048 or 4,000 tokens, shared between prompt and completion. The exact limit varies by model.',
                }),
            ],
        }),
    })
}
