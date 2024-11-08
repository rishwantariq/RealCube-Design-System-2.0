import { ColumnDef } from '@tanstack/react-table'
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}
export declare function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>): import('react/jsx-runtime').JSX.Element
export {}
