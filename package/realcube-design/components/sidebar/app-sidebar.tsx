'use client'

import * as React from 'react'
import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    LucideIcon,
    Map,
    PieChart,
    Send,
    Settings2,
    Terminal,
} from 'lucide-react'

import { NavMain } from './nav-main'
import { NavProjects } from './nav-projects'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from '../ui/sidebar'

interface NavItem {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: { title: string; url: string }[]
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

export function AppSidebar({
    user,
    navMain,
    navSecondary,
    projects,
    hideUserSection = false,
    hideNavMain = false,
    hideProjects = false,
    hideNavSecondary = false,
    ...props
}: AppSidebarProps) {
    return (
        <SidebarProvider>
            <Sidebar variant="inset" {...props}>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="#">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <Command className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            RealCube
                                        </span>
                                        <span className="truncate text-xs">
                                            Estate
                                        </span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    {!hideNavMain && navMain && <NavMain items={navMain} />}
                    {!hideProjects && projects && (
                        <NavProjects projects={projects} />
                    )}
                    {!hideNavSecondary && navSecondary && (
                        <NavSecondary
                            items={navSecondary}
                            className="mt-auto"
                        />
                    )}
                </SidebarContent>

                {!hideUserSection && user && (
                    <SidebarFooter>
                        <NavUser user={user} />
                    </SidebarFooter>
                )}
            </Sidebar>
        </SidebarProvider>
    )
}
