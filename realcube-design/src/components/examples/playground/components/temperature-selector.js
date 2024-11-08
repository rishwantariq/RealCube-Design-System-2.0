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
export function TemperatureSelector(_a) {
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
                                        htmlFor: 'temperature',
                                        children: 'Temperature',
                                    }),
                                    _jsx('span', {
                                        className:
                                            'w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border',
                                        children: value,
                                    }),
                                ],
                            }),
                            _jsx(Slider, {
                                id: 'temperature',
                                max: 1,
                                defaultValue: value,
                                step: 0.1,
                                onValueChange: setValue,
                                className:
                                    '[&_[role=slider]]:h-4 [&_[role=slider]]:w-4',
                                'aria-label': 'Temperature',
                            }),
                        ],
                    }),
                }),
                _jsx(HoverCardContent, {
                    align: 'start',
                    className: 'w-[260px] text-sm',
                    side: 'left',
                    children:
                        'Controls randomness: lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.',
                }),
            ],
        }),
    })
}
