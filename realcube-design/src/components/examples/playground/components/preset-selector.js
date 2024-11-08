'use client'
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
import * as React from 'react'
import { SortAsc, CheckIcon } from 'lucide-react'
import { cn } from '../../../../lib/utils'
import { Button } from '../../../ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '../../../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
export function PresetSelector(_a) {
    var presets = _a.presets,
        props = __rest(_a, ['presets'])
    var _b = React.useState(false),
        open = _b[0],
        setOpen = _b[1]
    var _c = React.useState(),
        selectedPreset = _c[0],
        setSelectedPreset = _c[1]
    // const router = useRouter()
    return _jsxs(
        Popover,
        __assign({ open: open, onOpenChange: setOpen }, props, {
            children: [
                _jsx(PopoverTrigger, {
                    asChild: true,
                    children: _jsxs(Button, {
                        variant: 'outline',
                        role: 'combobox',
                        'aria-label': 'Load a preset...',
                        'aria-expanded': open,
                        className:
                            'flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]',
                        children: [
                            selectedPreset
                                ? selectedPreset.name
                                : 'Load a preset...',
                            _jsx(SortAsc, {
                                className: 'ml-2 h-4 w-4 shrink-0 opacity-50',
                            }),
                        ],
                    }),
                }),
                _jsx(PopoverContent, {
                    className: 'w-[300px] p-0',
                    children: _jsxs(Command, {
                        children: [
                            _jsx(CommandInput, {
                                placeholder: 'Search presets...',
                            }),
                            _jsx(CommandEmpty, {
                                children: 'No presets found.',
                            }),
                            _jsx(CommandGroup, {
                                heading: 'Examples',
                                children: presets.map(function (preset) {
                                    return _jsxs(
                                        CommandItem,
                                        {
                                            onSelect: function () {
                                                setSelectedPreset(preset)
                                                setOpen(false)
                                            },
                                            children: [
                                                preset.name,
                                                _jsx(CheckIcon, {
                                                    className: cn(
                                                        'ml-auto h-4 w-4',
                                                        (selectedPreset ===
                                                            null ||
                                                        selectedPreset ===
                                                            void 0
                                                            ? void 0
                                                            : selectedPreset.id) ===
                                                            preset.id
                                                            ? 'opacity-100'
                                                            : 'opacity-0',
                                                    ),
                                                }),
                                            ],
                                        },
                                        preset.id,
                                    )
                                }),
                            }),
                            _jsx(CommandGroup, {
                                className: 'pt-0',
                                children: _jsx(CommandItem, {
                                    onSelect: function () {
                                        // router.push("#")
                                    },
                                    children: 'More examples',
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    )
}
