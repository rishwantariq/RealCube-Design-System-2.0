'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import * as React from 'react'
import { Button } from '../button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../dropdown-menu'
export function DropdownMenuCheckboxesDemo() {
    var _a = React.useState(true),
        showStatusBar = _a[0],
        setShowStatusBar = _a[1]
    var _b = React.useState(false),
        showActivityBar = _b[0],
        setShowActivityBar = _b[1]
    var _c = React.useState(false),
        showPanel = _c[0],
        setShowPanel = _c[1]
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
                    _jsx(DropdownMenuLabel, { children: 'Appearance' }),
                    _jsx(DropdownMenuSeparator, {}),
                    _jsx(DropdownMenuCheckboxItem, {
                        checked: showStatusBar,
                        onCheckedChange: setShowStatusBar,
                        children: 'Status Bar',
                    }),
                    _jsx(DropdownMenuCheckboxItem, {
                        checked: showActivityBar,
                        onCheckedChange: setShowActivityBar,
                        disabled: true,
                        children: 'Activity Bar',
                    }),
                    _jsx(DropdownMenuCheckboxItem, {
                        checked: showPanel,
                        onCheckedChange: setShowPanel,
                        children: 'Panel',
                    }),
                ],
            }),
        ],
    })
}
