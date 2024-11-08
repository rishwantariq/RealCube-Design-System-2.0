import { Table } from '@tanstack/react-table'
interface DataTablePaginationProps<TData> {
    table: Table<TData>
}
export declare function DataTablePagination<TData>({
    table,
}: DataTablePaginationProps<TData>): import('react/jsx-runtime').JSX.Element
export {}
