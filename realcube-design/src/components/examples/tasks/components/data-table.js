'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import * as React from 'react'
import {
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../../ui/table'
import { DataTablePagination } from '../components/data-table-pagination'
import { DataTableToolbar } from '../components/data-table-toolbar'
export function DataTable(_a) {
    var _b
    var columns = _a.columns,
        data = _a.data
    var _c = React.useState({}),
        rowSelection = _c[0],
        setRowSelection = _c[1]
    var _d = React.useState({}),
        columnVisibility = _d[0],
        setColumnVisibility = _d[1]
    var _e = React.useState([]),
        columnFilters = _e[0],
        setColumnFilters = _e[1]
    var _f = React.useState([]),
        sorting = _f[0],
        setSorting = _f[1]
    var table = useReactTable({
        data: data,
        columns: columns,
        state: {
            sorting: sorting,
            columnVisibility: columnVisibility,
            rowSelection: rowSelection,
            columnFilters: columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })
    return _jsxs('div', {
        className: 'space-y-4',
        children: [
            _jsx(DataTableToolbar, { table: table }),
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
                                                            colSpan:
                                                                header.colSpan,
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
                                (_b = table.getRowModel().rows) === null ||
                                _b === void 0
                                    ? void 0
                                    : _b.length
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
            _jsx(DataTablePagination, { table: table }),
        ],
    })
}
