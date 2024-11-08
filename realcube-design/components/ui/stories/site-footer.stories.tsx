// SiteFooter.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SiteFooter } from '../site-footer'
import {
    TypographyH1,
    TypographyH2,
    TypographyInlineCode,
    TypographyP,
} from '../../typography/typography'

const meta: Meta<typeof SiteFooter> = {
    title: 'Realcube/site-footer',
    component: SiteFooter,
    argTypes: {
        sections: {
            control: 'object',
            description:
                'Array of sections for the footer, each containing a title and links.',
        },
        logoSrc: {
            control: 'text',
            description: 'URL for the footer logo image.',
        },
        companyName: {
            control: 'text',
            description: 'Name of the company displayed in the footer.',
        },
        hideInfo: {
            control: 'boolean',
            description:
                'Toggle to hide or show additional footer information.',
        },
    },
}

export default meta

type Story = StoryObj<typeof SiteFooter>
// Default Story - displays the SiteFooter with sample data
export const Default: Story = {
    args: {
        sections: [
            {
                title: 'Company',
                links: [
                    { title: 'About Us', href: '/about' },
                    { title: 'Careers', href: '/careers' },
                ],
            },
            {
                title: 'Resources',
                links: [
                    { title: 'Blog', href: '/blog' },
                    { title: 'Help Center', href: '/help' },
                ],
            },
            {
                title: 'Contact',
                links: [
                    { title: 'Contact Us', href: '/contact' },
                    { title: 'Support', href: '/support' },
                ],
            },
        ],
        logoSrc:
            'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',
        companyName: 'RealCube 2.0',
        hideInfo: false,
    },
}

// Docs Story - explains the usage and components of SiteFooter
export const Docs: Story = {
    render: () => (
        <div className="p-6 space-y-4">
            <TypographyH1>SiteFooter Component</TypographyH1>
            <TypographyP>
                The <code>SiteFooter</code> component is a flexible and reusable
                footer component that can be customized with sections, links, a
                logo, and company information. It’s ideal for use at the bottom
                of your application or website, providing navigational links and
                company branding.
            </TypographyP>

            <TypographyH2>Props</TypographyH2>
            <TypographyP>
                Below are the props available for customizing the{' '}
                <code>SiteFooter</code> component:
            </TypographyP>

            <ul className="list-disc ml-6 space-y-2">
                <li>
                    <TypographyP>
                        <strong>sections</strong> (Array) - An array of objects,
                        each containing a <code>title</code> and{' '}
                        <code>links</code> array. Each link object includes{' '}
                        <code>title</code> and <code>href</code>.
                    </TypographyP>
                </li>
                <li>
                    <TypographyP>
                        <strong>logoSrc</strong> (string) - The URL for the
                        footer logo image. This is displayed in the footer and
                        typically contains a link to your brand or homepage.
                    </TypographyP>
                </li>
                <li>
                    <TypographyP>
                        <strong>companyName</strong> (string) - The name of the
                        company displayed in the footer, used for copyright
                        text.
                    </TypographyP>
                </li>
                <li>
                    <TypographyP>
                        <strong>hideInfo</strong> (boolean) - If set to{' '}
                        <code>true</code>, additional footer sections are
                        hidden, showing only the copyright information.
                    </TypographyP>
                </li>
            </ul>

            <TypographyH2>Usage Example</TypographyH2>
            <TypographyP>
                Here is an example of how to use the <code>SiteFooter</code>{' '}
                component in your project. The component can be imported and
                configured as shown below:
            </TypographyP>
            <TypographyP className="bg-card p-4 rounded-md">
                <pre className="bg-transparent text-sm text-foreground font-mono whitespace-pre-wrap">
                    <code>
                        {`import { SiteFooter } from '@/components/site-footer';
        function AppFooter() {
        return (
            <SiteFooter
            sections={[
                {
                title: 'Company',
                links: [{ title: 'About Us', href: '/about' }, { title: 'Careers', href: '/careers' }],
                },
                {
                title: 'Resources',
                links: [{ title: 'Blog', href: '/blog' }, { title: 'Help Center', href: '/help' }],
                },
            ]}
            logoSrc="https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg"
            companyName="RealCube 2.0"
            hideInfo={false}
            />
        );
        }`}
                    </code>
                </pre>
            </TypographyP>

            <TypographyH2>Interactive Example</TypographyH2>
            <TypographyP>
                Use the <strong>Default</strong> story in Storybook to interact
                with the <code>SiteFooter</code> component. You can adjust the
                props, such as <strong>sections</strong>,{' '}
                <strong>logoSrc</strong>, and <strong>companyName</strong>, to
                see how the component responds to different configurations.
            </TypographyP>
        </div>
    ),
}
