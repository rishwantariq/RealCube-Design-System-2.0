'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Badge } from '../../../ui/badge'
import { Checkbox } from '../../../ui/checkbox'
import { labels, priorities, statuses } from '../data/data'
import { DataTableColumnHeader } from '../components/data-table-column-header'
import { DataTableRowActions } from '../components/data-table-row-actions'
export var columns = [
    {
        id: 'select',
        header: function (_a) {
            var table = _a.table
            return _jsx(Checkbox, {
                checked:
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate'),
                onCheckedChange: function (value) {
                    return table.toggleAllPageRowsSelected(!!value)
                },
                'aria-label': 'Select all',
                className: 'translate-y-[2px]',
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
                className: 'translate-y-[2px]',
            })
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: function (_a) {
            var column = _a.column
            return _jsx(DataTableColumnHeader, {
                column: column,
                title: 'Task',
            })
        },
        cell: function (_a) {
            var row = _a.row
            return _jsx('div', {
                className: 'w-[80px]',
                children: row.getValue('id'),
            })
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'title',
        header: function (_a) {
            var column = _a.column
            return _jsx(DataTableColumnHeader, {
                column: column,
                title: 'Title',
            })
        },
        cell: function (_a) {
            var row = _a.row
            var label = labels.find(function (label) {
                return label.value === row.original.label
            })
            return _jsxs('div', {
                className: 'flex space-x-2',
                children: [
                    label &&
                        _jsx(Badge, {
                            variant: 'outline',
                            children: label.label,
                        }),
                    _jsx('span', {
                        className: 'max-w-[500px] truncate font-medium',
                        children: row.getValue('title'),
                    }),
                ],
            })
        },
    },
    {
        accessorKey: 'status',
        header: function (_a) {
            var column = _a.column
            return _jsx(DataTableColumnHeader, {
                column: column,
                title: 'Status',
            })
        },
        cell: function (_a) {
            var row = _a.row
            var status = statuses.find(function (status) {
                return status.value === row.getValue('status')
            })
            if (!status) {
                return null
            }
            return _jsxs('div', {
                className: 'flex w-[100px] items-center',
                children: [
                    status.icon &&
                        _jsx(status.icon, {
                            className: 'mr-2 h-4 w-4 text-muted-foreground',
                        }),
                    _jsx('span', { children: status.label }),
                ],
            })
        },
        filterFn: function (row, id, value) {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'priority',
        header: function (_a) {
            var column = _a.column
            return _jsx(DataTableColumnHeader, {
                column: column,
                title: 'Priority',
            })
        },
        cell: function (_a) {
            var row = _a.row
            var priority = priorities.find(function (priority) {
                return priority.value === row.getValue('priority')
            })
            if (!priority) {
                return null
            }
            return _jsxs('div', {
                className: 'flex items-center',
                children: [
                    priority.icon &&
                        _jsx(priority.icon, {
                            className: 'mr-2 h-4 w-4 text-muted-foreground',
                        }),
                    _jsx('span', { children: priority.label }),
                ],
            })
        },
        filterFn: function (row, id, value) {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: 'actions',
        cell: function (_a) {
            var row = _a.row
            return _jsx(DataTableRowActions, { row: row })
        },
    },
]
