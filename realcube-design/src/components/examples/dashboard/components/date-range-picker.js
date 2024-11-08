'use client'
import {
    jsx as _jsx,
    Fragment as _Fragment,
    jsxs as _jsxs,
} from 'react/jsx-runtime'
import * as React from 'react'
import { CalendarIcon } from 'lucide-react'
import { addDays, format } from 'date-fns'
import { cn } from '../../../../lib/utils'
import { Button } from '../../../ui/button'
import { Calendar } from '../../../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
export function CalendarDateRangePicker(_a) {
    var className = _a.className
    var _b = React.useState({
            from: new Date(2023, 0, 20),
            to: addDays(new Date(2023, 0, 20), 20),
        }),
        date = _b[0],
        setDate = _b[1]
    return _jsx('div', {
        className: cn('grid gap-2', className),
        children: _jsxs(Popover, {
            children: [
                _jsx(PopoverTrigger, {
                    asChild: true,
                    children: _jsxs(Button, {
                        id: 'date',
                        variant: 'outline',
                        className: cn(
                            'w-[260px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground',
                        ),
                        children: [
                            _jsx(CalendarIcon, { className: 'mr-2 h-4 w-4' }),
                            (
                                date === null || date === void 0
                                    ? void 0
                                    : date.from
                            )
                                ? date.to
                                    ? _jsxs(_Fragment, {
                                          children: [
                                              format(date.from, 'LLL dd, y'),
                                              ' -',
                                              ' ',
                                              format(date.to, 'LLL dd, y'),
                                          ],
                                      })
                                    : format(date.from, 'LLL dd, y')
                                : _jsx('span', { children: 'Pick a date' }),
                        ],
                    }),
                }),
                _jsx(PopoverContent, {
                    className: 'w-auto p-0',
                    align: 'end',
                    children: _jsx(Calendar, {
                        initialFocus: true,
                        mode: 'range',
                        defaultMonth:
                            date === null || date === void 0
                                ? void 0
                                : date.from,
                        selected: date,
                        onSelect: setDate,
                        numberOfMonths: 2,
                    }),
                }),
            ],
        }),
    })
}
