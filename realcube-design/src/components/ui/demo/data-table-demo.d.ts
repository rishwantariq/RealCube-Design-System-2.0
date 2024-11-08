import { ColumnDef } from '@tanstack/react-table'
export type Payment = {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed'
    email: string
}
export declare const columns: ColumnDef<Payment>[]
export declare function DataTableDemo(): import('react/jsx-runtime').JSX.Element
