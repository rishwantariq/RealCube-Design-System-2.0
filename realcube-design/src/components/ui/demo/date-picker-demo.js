'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import useDate from './useDate'
export function DatePickerDemo() {
    var _a = useDate(),
        date = _a.date,
        setDate = _a.setDate
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
                            : _jsx('span', { children: 'Escolha a data' }),
                    ],
                }),
            }),
            _jsx(PopoverContent, {
                className: 'w-auto p-0',
                children: _jsx(Calendar, {
                    mode: 'single',
                    selected: date,
                    onSelect: setDate,
                    initialFocus: true,
                }),
            }),
        ],
    })
}
