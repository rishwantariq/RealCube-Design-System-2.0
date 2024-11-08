'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { DataTableViewOptions } from '../components/data-table-view-options'
import { priorities, statuses } from '../data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
export function DataTableToolbar(_a) {
    var _b, _c
    var table = _a.table
    var isFiltered = table.getState().columnFilters.length > 0
    return _jsxs('div', {
        className: 'flex items-center justify-between',
        children: [
            _jsxs('div', {
                className: 'flex flex-1 items-center space-x-2',
                children: [
                    _jsx(Input, {
                        placeholder: 'Filter tasks...',
                        value:
                            (_c =
                                (_b = table.getColumn('title')) === null ||
                                _b === void 0
                                    ? void 0
                                    : _b.getFilterValue()) !== null &&
                            _c !== void 0
                                ? _c
                                : '',
                        onChange: function (event) {
                            var _a
                            return (_a = table.getColumn('title')) === null ||
                                _a === void 0
                                ? void 0
                                : _a.setFilterValue(event.target.value)
                        },
                        className: 'h-8 w-[150px] lg:w-[250px]',
                    }),
                    table.getColumn('status') &&
                        _jsx(DataTableFacetedFilter, {
                            column: table.getColumn('status'),
                            title: 'Status',
                            options: statuses,
                        }),
                    table.getColumn('priority') &&
                        _jsx(DataTableFacetedFilter, {
                            column: table.getColumn('priority'),
                            title: 'Priority',
                            options: priorities,
                        }),
                    isFiltered &&
                        _jsxs(Button, {
                            variant: 'ghost',
                            onClick: function () {
                                return table.resetColumnFilters()
                            },
                            className: 'h-8 px-2 lg:px-3',
                            children: [
                                'Reset',
                                _jsx(Cross2Icon, { className: 'ml-2 h-4 w-4' }),
                            ],
                        }),
                ],
            }),
            _jsx(DataTableViewOptions, { table: table }),
        ],
    })
}
