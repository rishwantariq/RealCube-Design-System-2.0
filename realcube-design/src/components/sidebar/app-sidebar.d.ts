import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { Sidebar } from '../ui/sidebar'
interface NavItem {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
        title: string
        url: string
    }[]
}
interface ProjectItem {
    name: string
    url: string
    icon: LucideIcon
}
interface User {
    name: string
    email: string
    avatar: string
}
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    user?: User
    navMain?: NavItem[]
    navSecondary?: NavItem[]
    projects?: ProjectItem[]
    hideUserSection?: boolean
    hideNavMain?: boolean
    hideProjects?: boolean
    hideNavSecondary?: boolean
}
export declare function AppSidebar({
    user,
    navMain,
    navSecondary,
    projects,
    hideUserSection,
    hideNavMain,
    hideProjects,
    hideNavSecondary,
    ...props
}: AppSidebarProps): import('react/jsx-runtime').JSX.Element
export {}
