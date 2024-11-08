var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import PageContainer from '../page-container'
import {
    TypographyH1,
    TypographyP,
    TypographyH2,
} from '../../typography/typography'
var meta = {
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
var Template = function (args) {
    return _jsx(
        PageContainer,
        __assign({}, args, {
            children: _jsxs('div', {
                className: 'p-8 space-y-4 bg-background',
                children: [
                    _jsx(TypographyH1, { children: 'PageContainer Component' }),
                    _jsxs(TypographyP, {
                        children: [
                            'The ',
                            _jsx('code', { children: 'PageContainer' }),
                            ' component serves as a reusable layout wrapper, maintaining consistent padding, alignment, and layout across all pages of the application. It enhances accessibility by adhering to WCAG guidelines and ensures that content is displayed uniformly on every page.',
                            _jsx('br', {}),
                            _jsx('br', {}),
                            'This page is wrapped in a page container.',
                        ],
                    }),
                    _jsx(TypographyH2, { children: 'Purpose' }),
                    _jsxs(TypographyP, {
                        children: [
                            'Using ',
                            _jsx('code', { children: 'PageContainer' }),
                            ' on all pages helps to create a unified user experience by standardizing margins, paddings, and content alignment. It also supports optional scrolling for pages with extensive content, keeping the layout visually stable and easy to navigate.',
                        ],
                    }),
                    _jsx(TypographyH2, { children: 'Props' }),
                    _jsxs('ul', {
                        className: 'list-disc ml-6 space-y-2',
                        children: [
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'children',
                                        }),
                                        ' (ReactNode): The main content to be displayed within the container.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'scrollable',
                                        }),
                                        ' (boolean): When set to true, enables a scrollable area for the main content, allowing for better navigation of long content sections.',
                                    ],
                                }),
                            }),
                        ],
                    }),
                    _jsx(TypographyH2, { children: 'Example Usage' }),
                    _jsxs(TypographyP, {
                        children: [
                            'Below is an example of how to use ',
                            _jsx('code', { children: 'PageContainer' }),
                            ' to wrap main content on a page:',
                        ],
                    }),
                    _jsx('pre', {
                        className: 'bg-card p-4 rounded-md text-sm',
                        children: _jsx('code', {
                            children:
                                'import PageContainer from \'@/components/PageContainer\';\n            function MyPage() {\n            return (\n                <PageContainer scrollable={true}>\n                <div className="text-center text-lg p-6">Main Content Here</div>\n                </PageContainer>\n            );\n            }',
                        }),
                    }),
                    _jsx(TypographyH2, {
                        children: 'Accessibility Considerations',
                    }),
                    _jsxs(TypographyP, {
                        children: [
                            'The ',
                            _jsx('code', { children: 'PageContainer' }),
                            ' component is designed with WCAG accessibility guidelines in mind, ensuring readable text alignment, consistent spacing, and proper structure. Using this component on every page promotes an accessible and cohesive layout for all users.',
                        ],
                    }),
                ],
            }),
        }),
    )
}
export var Default = Template.bind({})
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
