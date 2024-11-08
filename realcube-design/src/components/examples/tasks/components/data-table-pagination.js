import { jsxs as _jsxs, jsx as _jsx } from 'react/jsx-runtime'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import { Button } from '../../../ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../ui/select'
export function DataTablePagination(_a) {
    var table = _a.table
    return _jsxs('div', {
        className: 'flex items-center justify-between px-2',
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
                className: 'flex items-center space-x-6 lg:space-x-8',
                children: [
                    _jsxs('div', {
                        className: 'flex items-center space-x-2',
                        children: [
                            _jsx('p', {
                                className: 'text-sm font-medium',
                                children: 'Rows per page',
                            }),
                            _jsxs(Select, {
                                value: ''.concat(
                                    table.getState().pagination.pageSize,
                                ),
                                onValueChange: function (value) {
                                    table.setPageSize(Number(value))
                                },
                                children: [
                                    _jsx(SelectTrigger, {
                                        className: 'h-8 w-[70px]',
                                        children: _jsx(SelectValue, {
                                            placeholder:
                                                table.getState().pagination
                                                    .pageSize,
                                        }),
                                    }),
                                    _jsx(SelectContent, {
                                        side: 'top',
                                        children: [10, 20, 30, 40, 50].map(
                                            function (pageSize) {
                                                return _jsx(
                                                    SelectItem,
                                                    {
                                                        value: ''.concat(
                                                            pageSize,
                                                        ),
                                                        children: pageSize,
                                                    },
                                                    pageSize,
                                                )
                                            },
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className:
                            'flex w-[100px] items-center justify-center text-sm font-medium',
                        children: [
                            'Page ',
                            table.getState().pagination.pageIndex + 1,
                            ' of',
                            ' ',
                            table.getPageCount(),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'flex items-center space-x-2',
                        children: [
                            _jsxs(Button, {
                                variant: 'outline',
                                className: 'hidden h-8 w-8 p-0 lg:flex',
                                onClick: function () {
                                    return table.setPageIndex(0)
                                },
                                disabled: !table.getCanPreviousPage(),
                                children: [
                                    _jsx('span', {
                                        className: 'sr-only',
                                        children: 'Go to first page',
                                    }),
                                    _jsx(DoubleArrowLeftIcon, {
                                        className: 'h-4 w-4',
                                    }),
                                ],
                            }),
                            _jsxs(Button, {
                                variant: 'outline',
                                className: 'h-8 w-8 p-0',
                                onClick: function () {
                                    return table.previousPage()
                                },
                                disabled: !table.getCanPreviousPage(),
                                children: [
                                    _jsx('span', {
                                        className: 'sr-only',
                                        children: 'Go to previous page',
                                    }),
                                    _jsx(ChevronLeftIcon, {
                                        className: 'h-4 w-4',
                                    }),
                                ],
                            }),
                            _jsxs(Button, {
                                variant: 'outline',
                                className: 'h-8 w-8 p-0',
                                onClick: function () {
                                    return table.nextPage()
                                },
                                disabled: !table.getCanNextPage(),
                                children: [
                                    _jsx('span', {
                                        className: 'sr-only',
                                        children: 'Go to next page',
                                    }),
                                    _jsx(ChevronRightIcon, {
                                        className: 'h-4 w-4',
                                    }),
                                ],
                            }),
                            _jsxs(Button, {
                                variant: 'outline',
                                className: 'hidden h-8 w-8 p-0 lg:flex',
                                onClick: function () {
                                    return table.setPageIndex(
                                        table.getPageCount() - 1,
                                    )
                                },
                                disabled: !table.getCanNextPage(),
                                children: [
                                    _jsx('span', {
                                        className: 'sr-only',
                                        children: 'Go to last page',
                                    }),
                                    _jsx(DoubleArrowRightIcon, {
                                        className: 'h-4 w-4',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
