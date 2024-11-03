import React from 'react'
import { Meta, Story } from '@storybook/react'
import PageContainer from '../page-container'
import { SiteFooter } from '../site-footer'
import {
    TypographyH1,
    TypographyP,
    TypographyH2,
} from '../../typography/typography'

const meta: Meta<typeof PageContainer> = {
    title: 'RealCube/page-container',
    component: PageContainer,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        scrollable: {
            control: 'boolean',
            defaultValue: false,
        },
        footerSections: {
            control: 'object',
            description: 'Footer sections array for footer links and content.',
        },
        logoSrc: {
            control: 'text',
            description: 'URL for footer logo.',
        },
        companyName: {
            control: 'text',
            description: 'Name of the company for the footer.',
        },
        hideInfo: {
            control: 'boolean',
            description: 'Option to hide additional footer information.',
            defaultValue: false,
        },
    },
}

export default meta

const Template: Story = (args) => (
    <PageContainer {...args}>
        <div className="p-8 space-y-4 bg-background">
            <TypographyH1>PageContainer Component</TypographyH1>
            <TypographyP>
                The <code>PageContainer</code> component serves as a reusable
                layout wrapper, maintaining consistent padding, alignment, and
                layout across all pages of the application. It enhances
                accessibility by adhering to WCAG guidelines and ensures that
                content is displayed uniformly on every page.
                <br></br>
                <br></br>This page is wrapped in a page container.
            </TypographyP>

            <TypographyH2>Purpose</TypographyH2>
            <TypographyP>
                Using <code>PageContainer</code> on all pages helps to create a
                unified user experience by standardizing margins, paddings, and
                content alignment. It also supports optional scrolling for pages
                with extensive content, keeping the layout visually stable and
                easy to navigate.
            </TypographyP>

            <TypographyH2>Props</TypographyH2>
            <ul className="list-disc ml-6 space-y-2">
                <li>
                    <TypographyP>
                        <strong>children</strong> (ReactNode): The main content
                        to be displayed within the container.
                    </TypographyP>
                </li>
                <li>
                    <TypographyP>
                        <strong>scrollable</strong> (boolean): When set to true,
                        enables a scrollable area for the main content, allowing
                        for better navigation of long content sections.
                    </TypographyP>
                </li>
            </ul>

            <TypographyH2>Example Usage</TypographyH2>
            <TypographyP>
                Below is an example of how to use <code>PageContainer</code> to
                wrap main content on a page:
            </TypographyP>
            <pre className="bg-card p-4 rounded-md text-sm">
                <code>
                    {`import PageContainer from '@/components/PageContainer';
            function MyPage() {
            return (
                <PageContainer scrollable={true}>
                <div className="text-center text-lg p-6">Main Content Here</div>
                </PageContainer>
            );
            }`}
                </code>
            </pre>
            <TypographyH2>Accessibility Considerations</TypographyH2>
            <TypographyP>
                The <code>PageContainer</code> component is designed with WCAG
                accessibility guidelines in mind, ensuring readable text
                alignment, consistent spacing, and proper structure. Using this
                component on every page promotes an accessible and cohesive
                layout for all users.
            </TypographyP>
        </div>
    </PageContainer>
)

export const Default = Template.bind({})
Default.args = {
    scrollable: true,
    footerSections: [
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
}
