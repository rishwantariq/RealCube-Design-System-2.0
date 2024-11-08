'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
    TypographySmall,
} from '../components/typography/typography'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '../components/ui/card'
function Introduction() {
    var theme = useTheme().theme // Hook to get the theme
    return _jsxs('main', {
        className: 'py-12 px-6',
        children: [
            _jsxs('div', {
                className: 'flex flex-col gap-4',
                children: [
                    _jsx(TypographyH1, {
                        children: 'Introduction to the Realcube Design System',
                    }),
                    _jsx(TypographyMuted, {
                        className: 'mt-2',
                        children:
                            'A dedicated design system for Realcube, built on top of ShadCN and Radix UI with custom branding and unique components.',
                    }),
                ],
            }),
            _jsx(TypographyP, {
                className: 'max-w-2xl mt-6',
                children:
                    'Realcube\u2019s design system is a centralized collection of reusable components tailored specifically for Realcube\u2019s applications and branding. It\u2019s not just a component library\u2014it\u2019s a standalone Storybook-based package distributed via npm for seamless integration across projects.',
            }),
            _jsxs('section', {
                className: 'mt-12',
                children: [
                    _jsx(TypographyH2, {
                        children: 'Why Realcube Needs Its Own Design System',
                    }),
                    _jsx(TypographyP, {
                        className: 'max-w-2xl mt-4',
                        children:
                            'While ShadCN provides a powerful foundation of generic components, it lacks customization specific to Realcube\u2019s branding and user needs. To build our unique brand identity, we needed customizations that go beyond ShadCN\u2019s generic components. Realcube\u2019s design system incorporates these customizations and extensions, giving us consistent, branded components like configurable sidebars, customized top navigation, dynamic progress forms, and customizable data tables.',
                    }),
                    _jsx(TypographyP, {
                        className: 'max-w-2xl mt-4',
                        children:
                            'This design system is critical to ensure that all Realcube applications have a cohesive look and feel while remaining flexible enough for future scaling. By distributing it as a central npm package, we eliminate the need for manual component usage across projects, ensuring consistent updates and performance improvements.',
                    }),
                    _jsx(TypographySmall, {
                        className: 'italic mt-4',
                        children:
                            'Our design system is a single source of truth, allowing designers, developers, and stakeholders a unified point of reference for building Realcube products.',
                    }),
                    _jsxs(TypographyP, {
                        className: 'max-w-2xl mt-4',
                        children: [
                            'For a comprehensive overview of the process for versioning, adding new components, and overall workflow, please refer to our Miro board below.',
                            _jsx('br', {}),
                            _jsx('a', {
                                href: 'https://miro.com/app/board/uXjVLTOkSSA=/?share_link_id=9212010908',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: 'text-primary underline',
                                children:
                                    'Realcube Design System Process Board',
                            }),
                        ],
                    }),
                ],
            }),
            _jsx('section', {
                id: 'flow-diagrams',
                className: 'w-full py-12 md:py-24 lg:py-32 mt-12',
                children: _jsxs('div', {
                    className: 'container px-4 md:px-6',
                    children: [
                        _jsx(TypographyH2, {
                            className:
                                'tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center',
                            children: 'Design System Workflow',
                        }),
                        _jsxs('div', {
                            className: 'grid gap-6 lg:grid-cols-2',
                            children: [
                                _jsxs(Card, {
                                    children: [
                                        _jsxs(CardHeader, {
                                            children: [
                                                _jsx(CardTitle, {
                                                    children:
                                                        'Creation Process',
                                                }),
                                                _jsx(CardDescription, {
                                                    children:
                                                        'The journey from concept to a fully-fledged design system',
                                                }),
                                            ],
                                        }),
                                        _jsx(CardContent, {
                                            children: _jsx(Image, {
                                                src: '/assets/UI-1.jpg',
                                                alt: 'Design System Creation Process',
                                                width: 600,
                                                height: 400,
                                                className:
                                                    'rounded-lg object-cover w-full h-auto',
                                                style: {
                                                    filter:
                                                        theme === 'dark'
                                                            ? 'invert(1)'
                                                            : 'none',
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                _jsxs(Card, {
                                    children: [
                                        _jsxs(CardHeader, {
                                            children: [
                                                _jsx(CardTitle, {
                                                    children:
                                                        'Maintenance Workflow',
                                                }),
                                                _jsx(CardDescription, {
                                                    children:
                                                        'Keeping the design system up-to-date and evolving with your needs',
                                                }),
                                            ],
                                        }),
                                        _jsx(CardContent, {
                                            children: _jsx(Image, {
                                                src: '/assets/UI-2.jpg',
                                                alt: 'Design System Maintenance Workflow',
                                                width: 600,
                                                height: 400,
                                                className:
                                                    'rounded-lg object-cover w-full h-auto',
                                                style: {
                                                    filter:
                                                        theme === 'dark'
                                                            ? 'invert(1)'
                                                            : 'none',
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            _jsxs('section', {
                className: 'mt-12',
                children: [
                    _jsx(TypographyH2, { children: 'FAQ' }),
                    _jsxs(Accordion, {
                        type: 'single',
                        collapsible: true,
                        className: 'max-w-xs md:max-w-sm lg:max-w-2xl mt-6',
                        children: [
                            _jsxs(AccordionItem, {
                                value: 'item-1',
                                children: [
                                    _jsx(AccordionTrigger, {
                                        children:
                                            'Why does Realcube use ShadCN as a base?',
                                    }),
                                    _jsx(AccordionContent, {
                                        children: _jsx(TypographyP, {
                                            className: 'max-w-2xl',
                                            children:
                                                'ShadCN offers a strong foundation of base components and utilities built with Radix UI and Tailwind CSS, making it an efficient starting point. However, ShadCN is generic by nature and widely used by other applications, so Realcube\u2019s design system extends it with unique branding and functionalities.',
                                        }),
                                    }),
                                ],
                            }),
                            _jsxs(AccordionItem, {
                                value: 'item-2',
                                children: [
                                    _jsx(AccordionTrigger, {
                                        children:
                                            'Why is Storybook necessary for Realcube?',
                                    }),
                                    _jsx(AccordionContent, {
                                        children: _jsx(TypographyP, {
                                            className: 'max-w-2xl',
                                            children:
                                                'Storybook provides an interactive platform for developing, testing, and documenting components in isolation. For Realcube, it\u2019s essential to have a clear, centralized point where all team members can view and test components consistently. This ensures that the design system evolves seamlessly and remains aligned with Realcube\u2019s branding.',
                                        }),
                                    }),
                                ],
                            }),
                            _jsxs(AccordionItem, {
                                value: 'item-3',
                                children: [
                                    _jsx(AccordionTrigger, {
                                        children:
                                            'Why distribute Realcube\u2019s design system as an npm package?',
                                    }),
                                    _jsxs(AccordionContent, {
                                        children: [
                                            _jsx(TypographyP, {
                                                className: 'max-w-2xl',
                                                children:
                                                    'Publishing the design system as an npm package allows for consistent and rapid adoption of Realcube\u2019s components across projects. This approach avoids manual copying and pasting of components, which would lead to inconsistencies and maintenance challenges over time.',
                                            }),
                                            _jsx(TypographyP, {
                                                className: 'max-w-2xl',
                                                children:
                                                    'As a central package, it ensures easy access to the latest updates, performance improvements, and bug fixes.',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs(AccordionItem, {
                                value: 'item-4',
                                children: [
                                    _jsx(AccordionTrigger, {
                                        children:
                                            'What additional components are included in Realcube\u2019s design system?',
                                    }),
                                    _jsxs(AccordionContent, {
                                        children: [
                                            _jsx(TypographyP, {
                                                className: 'max-w-2xl',
                                                children:
                                                    'Beyond the basic components provided by ShadCN, Realcube\u2019s design system includes:',
                                            }),
                                            _jsxs('ul', {
                                                className: 'list-disc ml-5',
                                                children: [
                                                    _jsx('li', {
                                                        children:
                                                            'Configurable Sidebar with multi-level navigation',
                                                    }),
                                                    _jsx('li', {
                                                        children:
                                                            'Top Navigation with customizable menus and actions',
                                                    }),
                                                    _jsx('li', {
                                                        children:
                                                            'Dynamic Progress Forms that adapt to user input',
                                                    }),
                                                    _jsx('li', {
                                                        children:
                                                            'Advanced, customizable Data Tables',
                                                    }),
                                                    _jsx('li', {
                                                        children:
                                                            'And much more, with additional components being added continuously',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs(AccordionItem, {
                                value: 'item-5',
                                children: [
                                    _jsx(AccordionTrigger, {
                                        children:
                                            'How will new components be added?',
                                    }),
                                    _jsx(AccordionContent, {
                                        children: _jsx(TypographyP, {
                                            className: 'max-w-2xl',
                                            children:
                                                'As Realcube\u2019s requirements evolve, new components will be developed and added to the design system. Each addition will follow a strict review and testing process within Storybook to ensure that it meets Realcube\u2019s standards for usability and branding consistency.',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
export default Introduction
