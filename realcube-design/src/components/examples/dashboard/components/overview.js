'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
var data = [
    {
        name: 'Jan',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Feb',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Mar',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Apr',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'May',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jun',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jul',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Aug',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Sep',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Oct',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Nov',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Dec',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]
export function Overview() {
    return _jsx(ResponsiveContainer, {
        width: '100%',
        height: 350,
        children: _jsxs(BarChart, {
            data: data,
            children: [
                _jsx(XAxis, {
                    dataKey: 'name',
                    stroke: '#888888',
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false,
                }),
                _jsx(YAxis, {
                    stroke: '#888888',
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false,
                    tickFormatter: function (value) {
                        return '$'.concat(value)
                    },
                }),
                _jsx(Bar, {
                    dataKey: 'total',
                    fill: 'hsl(38 70% 55%)',
                    radius: [4, 4, 0, 0],
                }),
            ],
        }),
    })
}
