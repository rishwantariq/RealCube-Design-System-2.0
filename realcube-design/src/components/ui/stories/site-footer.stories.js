import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { SiteFooter } from '../site-footer'
import {
    TypographyH1,
    TypographyH2,
    TypographyP,
} from '../../typography/typography'
var meta = {
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
// Default Story - displays the SiteFooter with sample data
export var Default = {
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
export var Docs = {
    render: function () {
        return _jsxs('div', {
            className: 'p-6 space-y-4',
            children: [
                _jsx(TypographyH1, { children: 'SiteFooter Component' }),
                _jsxs(TypographyP, {
                    children: [
                        'The ',
                        _jsx('code', { children: 'SiteFooter' }),
                        ' component is a flexible and reusable footer component that can be customized with sections, links, a logo, and company information. It\u2019s ideal for use at the bottom of your application or website, providing navigational links and company branding.',
                    ],
                }),
                _jsx(TypographyH2, { children: 'Props' }),
                _jsxs(TypographyP, {
                    children: [
                        'Below are the props available for customizing the',
                        ' ',
                        _jsx('code', { children: 'SiteFooter' }),
                        ' component:',
                    ],
                }),
                _jsxs('ul', {
                    className: 'list-disc ml-6 space-y-2',
                    children: [
                        _jsx('li', {
                            children: _jsxs(TypographyP, {
                                children: [
                                    _jsx('strong', { children: 'sections' }),
                                    ' (Array) - An array of objects, each containing a ',
                                    _jsx('code', { children: 'title' }),
                                    ' and',
                                    ' ',
                                    _jsx('code', { children: 'links' }),
                                    ' array. Each link object includes',
                                    ' ',
                                    _jsx('code', { children: 'title' }),
                                    ' and ',
                                    _jsx('code', { children: 'href' }),
                                    '.',
                                ],
                            }),
                        }),
                        _jsx('li', {
                            children: _jsxs(TypographyP, {
                                children: [
                                    _jsx('strong', { children: 'logoSrc' }),
                                    ' (string) - The URL for the footer logo image. This is displayed in the footer and typically contains a link to your brand or homepage.',
                                ],
                            }),
                        }),
                        _jsx('li', {
                            children: _jsxs(TypographyP, {
                                children: [
                                    _jsx('strong', { children: 'companyName' }),
                                    ' (string) - The name of the company displayed in the footer, used for copyright text.',
                                ],
                            }),
                        }),
                        _jsx('li', {
                            children: _jsxs(TypographyP, {
                                children: [
                                    _jsx('strong', { children: 'hideInfo' }),
                                    ' (boolean) - If set to',
                                    ' ',
                                    _jsx('code', { children: 'true' }),
                                    ', additional footer sections are hidden, showing only the copyright information.',
                                ],
                            }),
                        }),
                    ],
                }),
                _jsx(TypographyH2, { children: 'Usage Example' }),
                _jsxs(TypographyP, {
                    children: [
                        'Here is an example of how to use the ',
                        _jsx('code', { children: 'SiteFooter' }),
                        ' ',
                        'component in your project. The component can be imported and configured as shown below:',
                    ],
                }),
                _jsx(TypographyP, {
                    className: 'bg-card p-4 rounded-md',
                    children: _jsx('pre', {
                        className:
                            'bg-transparent text-sm text-foreground font-mono whitespace-pre-wrap',
                        children: _jsx('code', {
                            children:
                                "import { SiteFooter } from '@/components/site-footer';\n        function AppFooter() {\n        return (\n            <SiteFooter\n            sections={[\n                {\n                title: 'Company',\n                links: [{ title: 'About Us', href: '/about' }, { title: 'Careers', href: '/careers' }],\n                },\n                {\n                title: 'Resources',\n                links: [{ title: 'Blog', href: '/blog' }, { title: 'Help Center', href: '/help' }],\n                },\n            ]}\n            logoSrc=\"https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg\"\n            companyName=\"RealCube 2.0\"\n            hideInfo={false}\n            />\n        );\n        }",
                        }),
                    }),
                }),
                _jsx(TypographyH2, { children: 'Interactive Example' }),
                _jsxs(TypographyP, {
                    children: [
                        'Use the ',
                        _jsx('strong', { children: 'Default' }),
                        ' story in Storybook to interact with the ',
                        _jsx('code', { children: 'SiteFooter' }),
                        ' component. You can adjust the props, such as ',
                        _jsx('strong', { children: 'sections' }),
                        ',',
                        ' ',
                        _jsx('strong', { children: 'logoSrc' }),
                        ', and ',
                        _jsx('strong', { children: 'companyName' }),
                        ', to see how the component responds to different configurations.',
                    ],
                }),
            ],
        })
    },
}
