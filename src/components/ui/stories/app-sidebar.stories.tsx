import { Meta, StoryObj } from '@storybook/react'
import { AppSidebar } from '../../sidebar/app-sidebar'
import {
    Terminal,
    Bot,
    BookOpen,
    Settings2,
    LifeBuoy,
    Send,
    Frame,
    PieChart,
    Map,
} from 'lucide-react'

const data = {
    user: {
        name: 'Rishwan Tariq',
        email: 'rishwan.tariq@exalogic.co',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Playground',
            url: '#',
            icon: Terminal,
            isActive: true,
            items: [
                { title: 'History', url: '#' },
                { title: 'Starred', url: '#' },
                { title: 'Settings', url: '#' },
            ],
        },
        {
            title: 'Models',
            url: '#',
            icon: Bot,
            items: [
                { title: 'Genesis', url: '#' },
                { title: 'Explorer', url: '#' },
                { title: 'Quantum', url: '#' },
            ],
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                { title: 'Introduction', url: '#' },
                { title: 'Get Started', url: '#' },
                { title: 'Tutorials', url: '#' },
                { title: 'Changelog', url: '#' },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                { title: 'General', url: '#' },
                { title: 'Team', url: '#' },
                { title: 'Billing', url: '#' },
                { title: 'Limits', url: '#' },
            ],
        },
    ],
    navSecondary: [
        { title: 'Support', url: '#', icon: LifeBuoy },
        { title: 'Feedback', url: '#', icon: Send },
    ],
    projects: [
        { name: 'Design Engineering', url: '#', icon: Frame },
        { name: 'Sales & Marketing', url: '#', icon: PieChart },
        { name: 'Travel', url: '#', icon: Map },
    ],
}

const meta: Meta<typeof AppSidebar> = {
    title: 'RealCube/app-sidebar',
    component: AppSidebar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
          ### AppSidebar Component
          The **AppSidebar** component provides a customizable sidebar with sections for navigation, projects, and user information.

          - **User**: Displays user information like name, email, and avatar.
          - **Main Navigation**: Primary navigation links with optional sub-items and icons.
          - **Projects**: List of projects with associated icons.
          - **Secondary Navigation**: Additional options for support or feedback.
          
          You can control the visibility of each section with the \`hide*\` props.
        `,
            },
        },
    },
    argTypes: {
        user: {
            control: 'object',
            description: 'User information with name, email, and avatar URL.',
            defaultValue: data.user,
        },
        navMain: {
            control: 'object',
            description:
                'Primary navigation items with title, URL, icon, and optional sub-items.',
            defaultValue: data.navMain,
        },
        navSecondary: {
            control: 'object',
            description:
                'Secondary navigation items for additional actions such as support.',
            defaultValue: data.navSecondary,
        },
        projects: {
            control: 'object',
            description: 'List of projects with names, URLs, and icons.',
            defaultValue: data.projects,
        },
        hideUserSection: {
            control: 'boolean',
            description: 'Hides the user section when true.',
            defaultValue: false,
        },
        hideNavMain: {
            control: 'boolean',
            description: 'Hides the main navigation section when true.',
            defaultValue: false,
        },
        hideProjects: {
            control: 'boolean',
            description: 'Hides the projects section when true.',
            defaultValue: false,
        },
        hideNavSecondary: {
            control: 'boolean',
            description: 'Hides the secondary navigation section when true.',
            defaultValue: false,
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        user: data.user,
        navMain: data.navMain,
        navSecondary: data.navSecondary,
        projects: data.projects,
        hideUserSection: false,
        hideNavMain: false,
        hideProjects: false,
        hideNavSecondary: false,
    },
}
