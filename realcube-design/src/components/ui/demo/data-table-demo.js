'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../dropdown-menu'
import { Input } from '../input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../table'
var data = [
    {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
    },
    {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
    },
    {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
    },
    {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
    },
    {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
    },
]
export var columns = [
    {
        id: 'select',
        header: function (_a) {
            var table = _a.table
            return _jsx(Checkbox, {
                checked: table.getIsAllPageRowsSelected(),
                onCheckedChange: function (value) {
                    return table.toggleAllPageRowsSelected(!!value)
                },
                'aria-label': 'Select all',
            })
        },
        cell: function (_a) {
            var row = _a.row
            return _jsx(Checkbox, {
                checked: row.getIsSelected(),
                onCheckedChange: function (value) {
                    return row.toggleSelected(!!value)
                },
                'aria-label': 'Select row',
            })
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: function (_a) {
            var row = _a.row
            return _jsx('div', {
                className: 'capitalize',
                children: row.getValue('status'),
            })
        },
    },
    {
        accessorKey: 'email',
        header: function (_a) {
            var column = _a.column
            return _jsxs(Button, {
                variant: 'ghost',
                onClick: function () {
                    return column.toggleSorting(column.getIsSorted() === 'asc')
                },
                children: [
                    'Email',
                    _jsx(ArrowUpDown, { className: 'ml-2 h-4 w-4' }),
                ],
            })
        },
        cell: function (_a) {
            var row = _a.row
            return _jsx('div', {
                className: 'lowercase',
                children: row.getValue('email'),
            })
        },
    },
    {
        accessorKey: 'amount',
        header: function () {
            return _jsx('div', { className: 'text-right', children: 'Amount' })
        },
        cell: function (_a) {
            var row = _a.row
            var amount = parseFloat(row.getValue('amount'))
            // Format the amount as a dollar amount
            var formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount)
            return _jsx('div', {
                className: 'text-right font-medium',
                children: formatted,
            })
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: function (_a) {
            var row = _a.row
            var payment = row.original
            return _jsxs(DropdownMenu, {
                children: [
                    _jsx(DropdownMenuTrigger, {
                        asChild: true,
                        children: _jsxs(Button, {
                            variant: 'ghost',
                            className: 'h-8 w-8 p-0',
                            children: [
                                _jsx('span', {
                                    className: 'sr-only',
                                    children: 'Open menu',
                                }),
                                _jsx(MoreHorizontal, { className: 'h-4 w-4' }),
                            ],
                        }),
                    }),
                    _jsxs(DropdownMenuContent, {
                        align: 'end',
                        children: [
                            _jsx(DropdownMenuLabel, { children: 'Actions' }),
                            _jsx(DropdownMenuItem, {
                                onClick: function () {
                                    return navigator.clipboard.writeText(
                                        payment.id,
                                    )
                                },
                                children: 'Copy payment ID',
                            }),
                            _jsx(DropdownMenuSeparator, {}),
                            _jsx(DropdownMenuItem, {
                                children: 'View customer',
                            }),
                            _jsx(DropdownMenuItem, {
                                children: 'View payment details',
                            }),
                        ],
                    }),
                ],
            })
        },
    },
]
export function DataTableDemo() {
    var _a, _b, _c
    var _d = React.useState([]),
        sorting = _d[0],
        setSorting = _d[1]
    var _e = React.useState([]),
        columnFilters = _e[0],
        setColumnFilters = _e[1]
    var _f = React.useState({}),
        columnVisibility = _f[0],
        setColumnVisibility = _f[1]
    var _g = React.useState({}),
        rowSelection = _g[0],
        setRowSelection = _g[1]
    var table = useReactTable({
        data: data,
        columns: columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting: sorting,
            columnFilters: columnFilters,
            columnVisibility: columnVisibility,
            rowSelection: rowSelection,
        },
    })
    return _jsxs('div', {
        className: 'w-full',
        children: [
            _jsxs('div', {
                className: 'flex items-center py-4',
                children: [
                    _jsx(Input, {
                        placeholder: 'Filter emails...',
                        value:
                            (_b =
                                (_a = table.getColumn('email')) === null ||
                                _a === void 0
                                    ? void 0
                                    : _a.getFilterValue()) !== null &&
                            _b !== void 0
                                ? _b
                                : '',
                        onChange: function (event) {
                            var _a
                            return (_a = table.getColumn('email')) === null ||
                                _a === void 0
                                ? void 0
                                : _a.setFilterValue(event.target.value)
                        },
                        className: 'max-w-sm',
                    }),
                    _jsxs(DropdownMenu, {
                        children: [
                            _jsx(DropdownMenuTrigger, {
                                asChild: true,
                                children: _jsxs(Button, {
                                    variant: 'outline',
                                    className: 'ml-auto',
                                    children: [
                                        'Columns ',
                                        _jsx(ChevronDown, {
                                            className: 'ml-2 h-4 w-4',
                                        }),
                                    ],
                                }),
                            }),
                            _jsx(DropdownMenuContent, {
                                align: 'end',
                                children: table
                                    .getAllColumns()
                                    .filter(function (column) {
                                        return column.getCanHide()
                                    })
                                    .map(function (column) {
                                        return _jsx(
                                            DropdownMenuCheckboxItem,
                                            {
                                                className: 'capitalize',
                                                checked: column.getIsVisible(),
                                                onCheckedChange: function (
                                                    value,
                                                ) {
                                                    return column.toggleVisibility(
                                                        !!value,
                                                    )
                                                },
                                                children: column.id,
                                            },
                                            column.id,
                                        )
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            _jsx('div', {
                className: 'rounded-md border',
                children: _jsxs(Table, {
                    children: [
                        _jsx(TableHeader, {
                            children: table
                                .getHeaderGroups()
                                .map(function (headerGroup) {
                                    return _jsx(
                                        TableRow,
                                        {
                                            children: headerGroup.headers.map(
                                                function (header) {
                                                    return _jsx(
                                                        TableHead,
                                                        {
                                                            children:
                                                                header.isPlaceholder
                                                                    ? null
                                                                    : flexRender(
                                                                          header
                                                                              .column
                                                                              .columnDef
                                                                              .header,
                                                                          header.getContext(),
                                                                      ),
                                                        },
                                                        header.id,
                                                    )
                                                },
                                            ),
                                        },
                                        headerGroup.id,
                                    )
                                }),
                        }),
                        _jsx(TableBody, {
                            children: (
                                (_c = table.getRowModel().rows) === null ||
                                _c === void 0
                                    ? void 0
                                    : _c.length
                            )
                                ? table.getRowModel().rows.map(function (row) {
                                      return _jsx(
                                          TableRow,
                                          {
                                              'data-state':
                                                  row.getIsSelected() &&
                                                  'selected',
                                              children: row
                                                  .getVisibleCells()
                                                  .map(function (cell) {
                                                      return _jsx(
                                                          TableCell,
                                                          {
                                                              children:
                                                                  flexRender(
                                                                      cell
                                                                          .column
                                                                          .columnDef
                                                                          .cell,
                                                                      cell.getContext(),
                                                                  ),
                                                          },
                                                          cell.id,
                                                      )
                                                  }),
                                          },
                                          row.id,
                                      )
                                  })
                                : _jsx(TableRow, {
                                      children: _jsx(TableCell, {
                                          colSpan: columns.length,
                                          className: 'h-24 text-center',
                                          children: 'No results.',
                                      }),
                                  }),
                        }),
                    ],
                }),
            }),
            _jsxs('div', {
                className: 'flex items-center justify-end space-x-2 py-4',
                children: [
                    _jsxs('div', {
                        className: 'flex-1 text-sm text-muted-foreground',
                        children: [
                            table.getFilteredSelectedRowModel().rows.length,
                            ' of',
                            ' ',
                            table.getFilteredRowModel().rows.length,
                            ' row(s) selected.',
                        ],
                    }),
                    _jsxs('div', {
                        className: 'space-x-2',
                        children: [
                            _jsx(Button, {
                                variant: 'outline',
                                size: 'sm',
                                onClick: function () {
                                    return table.previousPage()
                                },
                                disabled: !table.getCanPreviousPage(),
                                children: 'Previous',
                            }),
                            _jsx(Button, {
                                variant: 'outline',
                                size: 'sm',
                                onClick: function () {
                                    return table.nextPage()
                                },
                                disabled: !table.getCanNextPage(),
                                children: 'Next',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
