import * as React from 'react'
import { type LucideIcon } from 'lucide-react'
import { SidebarGroup } from '../ui/sidebar'
export declare function NavSecondary({
    items,
    ...props
}: {
    items: {
        title: string
        url: string
        icon: LucideIcon
    }[]
} & React.ComponentPropsWithoutRef<
    typeof SidebarGroup
>): import('react/jsx-runtime').JSX.Element
