'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import * as React from 'react'
import { Button } from '../button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../dropdown-menu'
export function DropdownMenuRadioGroupDemo() {
    var _a = React.useState('bottom'),
        position = _a[0],
        setPosition = _a[1]
    return _jsxs(DropdownMenu, {
        children: [
            _jsx(DropdownMenuTrigger, {
                asChild: true,
                children: _jsx(Button, {
                    variant: 'outline',
                    children: 'Open',
                }),
            }),
            _jsxs(DropdownMenuContent, {
                className: 'w-56',
                children: [
                    _jsx(DropdownMenuLabel, { children: 'Panel Position' }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsxs(DropdownMenuRadioGroup, {
                        value: position,
                        onValueChange: setPosition,
                        children: [
                            _jsx(DropdownMenuRadioItem, {
                                value: 'top',
                                children: 'Top',
                            }),
                            _jsx(DropdownMenuRadioItem, {
                                value: 'bottom',
                                children: 'Bottom',
                            }),
                            _jsx(DropdownMenuRadioItem, {
                                value: 'right',
                                children: 'Right',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
