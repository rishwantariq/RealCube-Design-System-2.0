'use client'
import { jsx as _jsx } from 'react/jsx-runtime'
import { ptBR } from 'date-fns/locale'
import { Calendar } from '../calendar'
import useDate from './useDate'
export function CalendarDemo() {
    var _a = useDate(),
        date = _a.date,
        setDate = _a.setDate
    return _jsx(Calendar, {
        mode: 'single',
        locale: ptBR,
        selected: date,
        onSelect: setDate,
        className: 'rounded-md border',
    })
}
