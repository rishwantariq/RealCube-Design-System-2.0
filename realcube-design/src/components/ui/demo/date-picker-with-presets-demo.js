'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { addDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../select'
export function DatePickerWithPresets() {
    var _a = React.useState(),
        date = _a[0],
        setDate = _a[1]
    return _jsxs(Popover, {
        children: [
            _jsx(PopoverTrigger, {
                asChild: true,
                children: _jsxs(Button, {
                    variant: 'outline',
                    className: cn(
                        'w-[280px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                    ),
                    children: [
                        _jsx(CalendarIcon, { className: 'mr-2 h-4 w-4' }),
                        date
                            ? format(date, 'PPP', { locale: ptBR })
                            : _jsx('span', { children: 'Escolha data' }),
                    ],
                }),
            }),
            _jsxs(PopoverContent, {
                className: 'flex w-auto flex-col space-y-2 p-2',
                children: [
                    _jsxs(Select, {
                        onValueChange: function (value) {
                            return setDate(addDays(new Date(), parseInt(value)))
                        },
                        children: [
                            _jsx(SelectTrigger, {
                                children: _jsx(SelectValue, {
                                    placeholder: 'Select',
                                }),
                            }),
                            _jsxs(SelectContent, {
                                position: 'popper',
                                children: [
                                    _jsx(SelectItem, {
                                        value: '0',
                                        children: 'Hoje',
                                    }),
                                    _jsx(SelectItem, {
                                        value: '1',
                                        children: 'Amanh\u00E3',
                                    }),
                                    _jsx(SelectItem, {
                                        value: '3',
                                        children: 'em 3 dias',
                                    }),
                                    _jsx(SelectItem, {
                                        value: '7',
                                        children: 'em uma semana',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx('div', {
                        className: 'rounded-md border',
                        children: _jsx(Calendar, {
                            mode: 'single',
                            selected: date,
                            onSelect: setDate,
                            locale: ptBR,
                        }),
                    }),
                ],
            }),
        ],
    })
}
