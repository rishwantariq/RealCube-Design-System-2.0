import * as React from 'react'
import { Column } from '@tanstack/react-table'
interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>
    title?: string
    options: {
        label: string
        value: string
        icon?: React.ComponentType<{
            className?: string
        }>
    }[]
}
export declare function DataTableFacetedFilter<TData, TValue>({
    column,
    title,
    options,
}: DataTableFacetedFilterProps<
    TData,
    TValue
>): import('react/jsx-runtime').JSX.Element
export {}