'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    MoveRight,
    PhoneCall,
    MoveUpRight,
    Check,
    Moon,
    Sun,
    Palette,
    Type,
    Zap,
    Box,
    Layers,
    Layout,
    List,
    Sliders,
    ToggleLeft,
    User,
    Paintbrush,
    CheckCheck,
    Code,
} from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import PageContainer from '@/components/ui/page-container'
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyLead,
    TypographySmall,
} from '@/components/typography/typography'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
var Highlight = function (_a) {
    var children = _a.children
    return _jsx('span', {
        className: cn(
            'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        ),
        children: children,
    })
}
var ColorSwatch = function (_a) {
    var name = _a.name,
        color = _a.color
    return _jsxs('div', {
        className: 'flex flex-col items-center',
        children: [
            _jsx('div', { className: 'w-16 h-16 rounded-full '.concat(color) }),
            _jsx(TypographySmall, { className: 'mt-2', children: name }),
        ],
    })
}
export default function Home() {
    var _a = useTheme(),
        theme = _a.theme,
        setTheme = _a.setTheme
    var _b = useState(),
        date = _b[0],
        setDate = _b[1]
    var _c = useState(false),
        showLoader = _c[0],
        setShowLoader = _c[1]
    var _d = useState(),
        carouselApi = _d[0],
        setCarouselApi = _d[1]
    var _e = useState(0),
        current = _e[0],
        setCurrent = _e[1]
    var _f = useState(0),
        titleNumber = _f[0],
        setTitleNumber = _f[1]
    var titles = useMemo(function () {
        return ['powerful', 'flexible', 'accessible', 'modern', 'scalable']
    }, [])
    useEffect(
        function () {
            var timeoutId = setTimeout(function () {
                setTitleNumber(function (prev) {
                    return prev === titles.length - 1 ? 0 : prev + 1
                })
            }, 2000)
            return function () {
                return clearTimeout(timeoutId)
            }
        },
        [titleNumber, titles],
    )
    useEffect(
        function () {
            if (!carouselApi) return
            var interval = setInterval(function () {
                if (
                    carouselApi.selectedScrollSnap() + 1 ===
                    carouselApi.scrollSnapList().length
                ) {
                    setCurrent(0)
                    carouselApi.scrollTo(0)
                } else {
                    carouselApi.scrollNext()
                    setCurrent(current + 1)
                }
            }, 1000)
            return function () {
                return clearInterval(interval)
            }
        },
        [carouselApi, current],
    )
    useEffect(
        function () {
            if (!carouselApi) return
            var interval = setInterval(function () {
                carouselApi.scrollNext()
            }, 3000)
            return function () {
                return clearInterval(interval)
            }
        },
        [carouselApi],
    )
    var componentCategories = [
        { name: 'Layout', icon: _jsx(Layout, { className: 'w-6 h-6' }) },
        { name: 'Forms', icon: _jsx(Box, { className: 'w-6 h-6' }) },
        { name: 'Data Display', icon: _jsx(List, { className: 'w-6 h-6' }) },
        { name: 'Feedback', icon: _jsx(Zap, { className: 'w-6 h-6' }) },
        { name: 'Surfaces', icon: _jsx(Layers, { className: 'w-6 h-6' }) },
        {
            name: 'Navigation',
            icon: _jsx(ToggleLeft, { className: 'w-6 h-6' }),
        },
        { name: 'Typography', icon: _jsx(Type, { className: 'w-6 h-6' }) },
        { name: 'Theming', icon: _jsx(Palette, { className: 'w-6 h-6' }) },
        { name: 'Data Input', icon: _jsx(Sliders, { className: 'w-6 h-6' }) },
        { name: 'User', icon: _jsx(User, { className: 'w-6 h-6' }) },
    ]
    return _jsxs('div', {
        children: [
            _jsx(PageContainer, {
                children: _jsxs('div', {
                    className:
                        'flex flex-col min-h-screen bg-background text-foreground font-sans',
                    children: [
                        _jsx('header', {
                            className:
                                'sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
                            children: _jsxs('div', {
                                className:
                                    'container flex h-14 items-center justify-between',
                                children: [
                                    _jsxs('div', {
                                        className:
                                            'flex items-center space-x-4',
                                        children: [
                                            _jsx('a', {
                                                className:
                                                    'flex items-center space-x-2',
                                                href: '/',
                                                children: _jsx('span', {
                                                    className:
                                                        'font-bold sm:inline-block',
                                                    children:
                                                        'RealCube Design System',
                                                }),
                                            }),
                                            _jsxs('nav', {
                                                className:
                                                    'hidden md:flex items-center space-x-4 text-sm font-medium',
                                                children: [
                                                    _jsx('a', {
                                                        className:
                                                            'transition-colors hover:text-foreground/80 text-foreground/60',
                                                        href: '#features',
                                                        children: 'Features',
                                                    }),
                                                    _jsx('a', {
                                                        className:
                                                            'transition-colors hover:text-foreground/80 text-foreground/60',
                                                        href: '#components',
                                                        children: 'Components',
                                                    }),
                                                    _jsx('a', {
                                                        className:
                                                            'transition-colors hover:text-foreground/80 text-foreground/60',
                                                        href: '#showcase',
                                                        children: 'Showcase',
                                                    }),
                                                    _jsx('a', {
                                                        className:
                                                            'transition-colors hover:text-foreground/80 text-foreground/60',
                                                        href: '#why-design-system',
                                                        children:
                                                            'Why Design System?',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs(Button, {
                                        variant: 'ghost',
                                        size: 'icon',
                                        onClick: function () {
                                            return setTheme(
                                                theme === 'light'
                                                    ? 'dark'
                                                    : 'light',
                                            )
                                        },
                                        children: [
                                            theme === 'light'
                                                ? _jsx(Moon, {
                                                      className: 'h-5 w-5',
                                                  })
                                                : _jsx(Sun, {
                                                      className: 'h-5 w-5',
                                                  }),
                                            _jsx('span', {
                                                className: 'sr-only',
                                                children: 'Toggle theme',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40',
                            children: _jsx('div', {
                                className: 'container mx-auto',
                                children: _jsxs('div', {
                                    className:
                                        'flex gap-8 items-center justify-center flex-col',
                                    children: [
                                        _jsx('div', {
                                            children: _jsxs(Button, {
                                                variant: 'secondary',
                                                size: 'sm',
                                                className: 'gap-4',
                                                onClick: function () {
                                                    return window.open(
                                                        process.env
                                                            .NEXT_PUBLIC_STORYBOOK_URL,
                                                        '_blank',
                                                    )
                                                },
                                                children: [
                                                    'Explore our components',
                                                    ' ',
                                                    _jsx(MoveRight, {
                                                        className: 'w-4 h-4',
                                                    }),
                                                ],
                                            }),
                                        }),
                                        _jsxs('div', {
                                            className: 'flex gap-4 flex-col',
                                            children: [
                                                _jsxs('h1', {
                                                    className:
                                                        'text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular',
                                                    children: [
                                                        _jsx('span', {
                                                            className:
                                                                'text-primary',
                                                            children:
                                                                'RealCube 2.0 is',
                                                        }),
                                                        _jsxs('span', {
                                                            className:
                                                                'relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1',
                                                            children: [
                                                                '\u00A0',
                                                                titles.map(
                                                                    function (
                                                                        title,
                                                                        index,
                                                                    ) {
                                                                        return _jsx(
                                                                            motion.span,
                                                                            {
                                                                                className:
                                                                                    'absolute font-semibold',
                                                                                initial:
                                                                                    {
                                                                                        opacity: 0,
                                                                                        y: '-100',
                                                                                    },
                                                                                transition:
                                                                                    {
                                                                                        type: 'spring',
                                                                                        stiffness: 50,
                                                                                    },
                                                                                animate:
                                                                                    titleNumber ===
                                                                                    index
                                                                                        ? {
                                                                                              y: 0,
                                                                                              opacity: 1,
                                                                                          }
                                                                                        : {
                                                                                              y:
                                                                                                  titleNumber >
                                                                                                  index
                                                                                                      ? -150
                                                                                                      : 150,
                                                                                              opacity: 0,
                                                                                          },
                                                                                children:
                                                                                    title,
                                                                            },
                                                                            index,
                                                                        )
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsx(TypographyLead, {
                                                    className:
                                                        'text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center',
                                                    children:
                                                        'Elevate your design workflow with RealCube 2.0. Our comprehensive design system streamlines development, ensuring consistency and accessibility across all your projects.',
                                                }),
                                            ],
                                        }),
                                        _jsx('div', {
                                            className: 'flex flex-row gap-3',
                                            children: _jsx('div', {
                                                className:
                                                    'flex flex-row gap-3',
                                                children: _jsxs(Button, {
                                                    size: 'lg',
                                                    className: 'gap-4',
                                                    onClick: function () {
                                                        return window.open(
                                                            'https://miro.com/app/board/uXjVLTOkSSA=/?share_link_id=768981108472',
                                                            '_blank',
                                                        )
                                                    },
                                                    children: [
                                                        'View Process',
                                                        ' ',
                                                        _jsx(MoveRight, {
                                                            className:
                                                                'w-4 h-4',
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40 bg-card',
                            children: _jsx('div', {
                                className: 'container mx-auto',
                                children: _jsxs('div', {
                                    className:
                                        'grid grid-cols-1 lg:grid-cols-2 gap-10',
                                    children: [
                                        _jsxs('div', {
                                            className:
                                                'flex gap-4 flex-col items-start',
                                            children: [
                                                _jsx(Badge, {
                                                    children: 'Impact',
                                                }),
                                                _jsxs('div', {
                                                    className:
                                                        'flex gap-2 flex-col',
                                                    children: [
                                                        _jsx(TypographyH2, {
                                                            className:
                                                                'text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left',
                                                            children:
                                                                'Transforming design workflows',
                                                        }),
                                                        _jsx(TypographyP, {
                                                            className:
                                                                'text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left',
                                                            children:
                                                                'RealCube 2.0 is revolutionizing how teams approach design and development. Our comprehensive system simplifies processes, enhances consistency, and boosts productivity across projects of all sizes.',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsx('div', {
                                            className:
                                                'flex justify-center items-center',
                                            children: _jsx('div', {
                                                className:
                                                    'grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4',
                                                children: [
                                                    {
                                                        icon: _jsx(Code, {
                                                            className:
                                                                'w-6 h-6 mb-4 text-primary',
                                                        }),
                                                        count: '100+',
                                                        label: 'Components',
                                                        description:
                                                            'Ready-to-use, customizable UI elements',
                                                    },
                                                    {
                                                        icon: _jsx(
                                                            MoveUpRight,
                                                            {
                                                                className:
                                                                    'w-6 h-6 mb-4 text-primary',
                                                            },
                                                        ),
                                                        count: '50%',
                                                        label: 'Faster Development',
                                                        description:
                                                            'Development time reduction',
                                                    },
                                                    {
                                                        icon: _jsx(CheckCheck, {
                                                            className:
                                                                'w-6 h-6 mb-4 text-primary',
                                                        }),
                                                        count: 'WCAG 2.1',
                                                        label: 'Compliant',
                                                        description:
                                                            'Ensuring accessibility for all users',
                                                    },
                                                    {
                                                        icon: _jsx(Paintbrush, {
                                                            className:
                                                                'w-6 h-6 mb-4 text-primary',
                                                        }),
                                                        count: 'Adaptable',
                                                        label: 'Design System',
                                                        description:
                                                            'Adapts to different products and needs',
                                                    },
                                                ].map(function (item, index) {
                                                    return _jsxs(
                                                        'div',
                                                        {
                                                            className:
                                                                'flex flex-col justify-between p-6 border rounded-md hover:shadow-lg transition-shadow',
                                                            children: [
                                                                item.icon,
                                                                _jsxs('div', {
                                                                    className:
                                                                        'flex flex-col items-baseline gap-2',
                                                                    children: [
                                                                        _jsx(
                                                                            Badge,
                                                                            {
                                                                                variant:
                                                                                    'secondary',
                                                                                className:
                                                                                    'text-xs font-medium px-2 py-1',
                                                                                children:
                                                                                    item.label,
                                                                            },
                                                                        ),
                                                                        _jsx(
                                                                            'h2',
                                                                            {
                                                                                className:
                                                                                    'text-4xl tracking-tighter font-semibold text-left',
                                                                                children:
                                                                                    item.count,
                                                                            },
                                                                        ),
                                                                    ],
                                                                }),
                                                                _jsx('p', {
                                                                    className:
                                                                        'mt-2 text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left',
                                                                    children:
                                                                        item.description,
                                                                }),
                                                            ],
                                                        },
                                                        index,
                                                    )
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40',
                            children: _jsx('div', {
                                className: 'container mx-auto',
                                children: _jsxs('div', {
                                    className:
                                        'flex gap-4 flex-col items-start',
                                    children: [
                                        _jsx(Badge, { children: 'Features' }),
                                        _jsxs('div', {
                                            className: 'flex gap-2 flex-col',
                                            children: [
                                                _jsx(TypographyH2, {
                                                    className:
                                                        'text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular',
                                                    children:
                                                        'Why choose RealCube 2.0?',
                                                }),
                                                _jsx(TypographyP, {
                                                    className:
                                                        'text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground',
                                                    children:
                                                        'Our design system is built to empower your team and streamline your workflow.',
                                                }),
                                            ],
                                        }),
                                        _jsx('div', {
                                            className:
                                                'flex gap-10 pt-12 flex-col w-full',
                                            children: _jsxs('div', {
                                                className:
                                                    'grid grid-cols-2 items-start lg:grid-cols-3 gap-10',
                                                children: [
                                                    _jsxs('div', {
                                                        className:
                                                            'flex flex-row gap-6 w-full items-start',
                                                        children: [
                                                            _jsx(Check, {
                                                                className:
                                                                    'w-4 h-4 mt-2 text-primary',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex flex-col gap-1',
                                                                children: [
                                                                    _jsx('p', {
                                                                        children:
                                                                            'Comprehensive Component Library',
                                                                    }),
                                                                    _jsx('p', {
                                                                        className:
                                                                            'text-muted-foreground text-sm',
                                                                        children:
                                                                            '100+ customizable, ready-to-use components.',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        className:
                                                            'flex flex-row gap-6 items-start',
                                                        children: [
                                                            _jsx(Check, {
                                                                className:
                                                                    'w-4 h-4 mt-2 text-primary',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex flex-col gap-1',
                                                                children: [
                                                                    _jsx('p', {
                                                                        children:
                                                                            'Accessibility First',
                                                                    }),
                                                                    _jsx('p', {
                                                                        className:
                                                                            'text-muted-foreground text-sm',
                                                                        children:
                                                                            'WCAG 2.1 AA compliant out of the box.',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        className:
                                                            'flex flex-row gap-6 items-start',
                                                        children: [
                                                            _jsx(Check, {
                                                                className:
                                                                    'w-4 h-4 mt-2 text-primary',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex flex-col gap-1',
                                                                children: [
                                                                    _jsx('p', {
                                                                        children:
                                                                            'Flexible Theming',
                                                                    }),
                                                                    _jsx('p', {
                                                                        className:
                                                                            'text-muted-foreground text-sm',
                                                                        children:
                                                                            'Easily customize to match your brand.',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        className:
                                                            'flex flex-row gap-6 w-full items-start',
                                                        children: [
                                                            _jsx(Check, {
                                                                className:
                                                                    'w-4 h-4 mt-2 text-primary',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex flex-col gap-1',
                                                                children: [
                                                                    _jsx('p', {
                                                                        children:
                                                                            'Responsive Design',
                                                                    }),
                                                                    _jsx('p', {
                                                                        className:
                                                                            'text-muted-foreground text-sm',
                                                                        children:
                                                                            'Optimized for all screen sizes and devices.',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        className:
                                                            'flex flex-row gap-6 items-start',
                                                        children: [
                                                            _jsx(Check, {
                                                                className:
                                                                    'w-4 h-4 mt-2 text-primary',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex flex-col gap-1',
                                                                children: [
                                                                    _jsx('p', {
                                                                        children:
                                                                            'Developer Friendly',
                                                                    }),
                                                                    _jsx('p', {
                                                                        className:
                                                                            'text-muted-foreground text-sm',
                                                                        children:
                                                                            'Built with modern web technologies.',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs('div', {
                                                        className:
                                                            'flex flex-row gap-6 items-start',
                                                        children: [
                                                            _jsx(Check, {
                                                                className:
                                                                    'w-4 h-4 mt-2 text-primary',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex flex-col gap-1',
                                                                children: [
                                                                    _jsx('p', {
                                                                        children:
                                                                            'Regular Updates',
                                                                    }),
                                                                    _jsx('p', {
                                                                        className:
                                                                            'text-muted-foreground text-sm',
                                                                        children:
                                                                            'Continuous improvements and new features.',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40 bg-background',
                            children: _jsxs('div', {
                                className: 'container mx-auto',
                                children: [
                                    _jsx(TypographyH2, {
                                        className:
                                            'text-3xl md:text-4xl font-bold mb-8 text-center',
                                        children:
                                            'RealCube 2.0 Component Library',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-center mb-12 text-muted-foreground',
                                        children:
                                            'Explore our comprehensive set of customizable, accessible components',
                                    }),
                                    _jsx('div', {
                                        className: 'mb-0',
                                        children: _jsxs(Carousel, {
                                            setApi: setCarouselApi,
                                            className: 'w-full',
                                            children: [
                                                _jsx(CarouselContent, {
                                                    children:
                                                        componentCategories.map(
                                                            function (
                                                                category,
                                                                index,
                                                            ) {
                                                                return _jsx(
                                                                    CarouselItem,
                                                                    {
                                                                        className:
                                                                            'basis-1/2 md:basis-1/3 lg:basis-1/5',
                                                                        children:
                                                                            _jsxs(
                                                                                'div',
                                                                                {
                                                                                    className:
                                                                                        'flex flex-col items-center justify-center p-4 bg-card rounded-lg h-32',
                                                                                    children:
                                                                                        [
                                                                                            category.icon,
                                                                                            _jsx(
                                                                                                'span',
                                                                                                {
                                                                                                    className:
                                                                                                        'mt-2 text-sm font-semibold',
                                                                                                    children:
                                                                                                        category.name,
                                                                                                },
                                                                                            ),
                                                                                        ],
                                                                                },
                                                                            ),
                                                                    },
                                                                    index,
                                                                )
                                                            },
                                                        ),
                                                }),
                                                _jsx(CarouselPrevious, {}),
                                                _jsx(CarouselNext, {}),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40 bg-background',
                            children: _jsxs('div', {
                                className: 'container mx-auto',
                                children: [
                                    _jsx(Badge, {
                                        children: 'Component Showcase',
                                    }),
                                    _jsx(TypographyH2, {
                                        className:
                                            'text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular mt-4',
                                        children:
                                            'Explore Essential UI Components',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground mt-4',
                                        children:
                                            'Our library includes versatile components that elevate your projects.',
                                    }),
                                    _jsxs('div', {
                                        className:
                                            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8',
                                        children: [
                                            _jsxs(Card, {
                                                children: [
                                                    _jsxs(CardHeader, {
                                                        children: [
                                                            _jsx(CardTitle, {
                                                                children:
                                                                    'Button',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Interactive button component with variants',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs(CardContent, {
                                                        className:
                                                            'flex flex-wrap gap-2',
                                                        children: [
                                                            _jsx(Button, {
                                                                variant:
                                                                    'default',
                                                                children:
                                                                    'Default',
                                                            }),
                                                            _jsx(Button, {
                                                                variant:
                                                                    'secondary',
                                                                children:
                                                                    'Secondary',
                                                            }),
                                                            _jsx(Button, {
                                                                variant:
                                                                    'outline',
                                                                children:
                                                                    'Outline',
                                                            }),
                                                            _jsx(Button, {
                                                                variant:
                                                                    'ghost',
                                                                children:
                                                                    'Ghost',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Card, {
                                                children: [
                                                    _jsxs(CardHeader, {
                                                        children: [
                                                            _jsx(CardTitle, {
                                                                children:
                                                                    'Input',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Flexible input component for various data types',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(CardContent, {
                                                        children: _jsx(Input, {
                                                            type: 'email',
                                                            placeholder:
                                                                'Email',
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
                                                                    'Tabs',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Organize content into separate views',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(CardContent, {
                                                        children: _jsxs(Tabs, {
                                                            defaultValue:
                                                                'account',
                                                            children: [
                                                                _jsxs(
                                                                    TabsList,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    TabsTrigger,
                                                                                    {
                                                                                        value: 'account',
                                                                                        children:
                                                                                            'Account',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    TabsTrigger,
                                                                                    {
                                                                                        value: 'password',
                                                                                        children:
                                                                                            'Password',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    TabsContent,
                                                                    {
                                                                        value: 'account',
                                                                        children:
                                                                            'Account settings',
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    TabsContent,
                                                                    {
                                                                        value: 'password',
                                                                        children:
                                                                            'Change password',
                                                                    },
                                                                ),
                                                            ],
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
                                                                    'Checkbox',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Selectable input for multiple options',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs(CardContent, {
                                                        className:
                                                            'flex items-center space-x-2',
                                                        children: [
                                                            _jsx(Checkbox, {
                                                                id: 'terms',
                                                            }),
                                                            _jsx(Label, {
                                                                htmlFor:
                                                                    'terms',
                                                                children:
                                                                    'Accept terms and conditions',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Card, {
                                                children: [
                                                    _jsxs(CardHeader, {
                                                        children: [
                                                            _jsx(CardTitle, {
                                                                children:
                                                                    'Select',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Dropdown selection component',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(CardContent, {
                                                        children: _jsxs(
                                                            Select,
                                                            {
                                                                children: [
                                                                    _jsx(
                                                                        SelectTrigger,
                                                                        {
                                                                            children:
                                                                                _jsx(
                                                                                    SelectValue,
                                                                                    {
                                                                                        placeholder:
                                                                                            'Select a fruit',
                                                                                    },
                                                                                ),
                                                                        },
                                                                    ),
                                                                    _jsxs(
                                                                        SelectContent,
                                                                        {
                                                                            children:
                                                                                [
                                                                                    _jsx(
                                                                                        SelectItem,
                                                                                        {
                                                                                            value: 'apple',
                                                                                            children:
                                                                                                'Apple',
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        SelectItem,
                                                                                        {
                                                                                            value: 'banana',
                                                                                            children:
                                                                                                'Banana',
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        SelectItem,
                                                                                        {
                                                                                            value: 'orange',
                                                                                            children:
                                                                                                'Orange',
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                ],
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Card, {
                                                children: [
                                                    _jsxs(CardHeader, {
                                                        children: [
                                                            _jsx(CardTitle, {
                                                                children:
                                                                    'Slider',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Select a value from a range',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsx(CardContent, {
                                                        children: _jsx(Slider, {
                                                            defaultValue: [50],
                                                            max: 100,
                                                            step: 1,
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
                                                                    'Switch',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Toggle between two states',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs(CardContent, {
                                                        className:
                                                            'flex items-center space-x-2',
                                                        children: [
                                                            _jsx(Switch, {
                                                                id: 'airplane-mode',
                                                            }),
                                                            _jsx(Label, {
                                                                htmlFor:
                                                                    'airplane-mode',
                                                                children:
                                                                    'Airplane Mode',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Card, {
                                                children: [
                                                    _jsxs(CardHeader, {
                                                        children: [
                                                            _jsx(CardTitle, {
                                                                children:
                                                                    'Badge',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Small status descriptors',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs(CardContent, {
                                                        className:
                                                            'flex flex-wrap gap-2',
                                                        children: [
                                                            _jsx(Badge, {
                                                                children:
                                                                    'Default',
                                                            }),
                                                            _jsx(Badge, {
                                                                variant:
                                                                    'secondary',
                                                                children:
                                                                    'Secondary',
                                                            }),
                                                            _jsx(Badge, {
                                                                variant:
                                                                    'outline',
                                                                children:
                                                                    'Outline',
                                                            }),
                                                            _jsx(Badge, {
                                                                variant:
                                                                    'destructive',
                                                                children:
                                                                    'Destructive',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs(Card, {
                                                children: [
                                                    _jsxs(CardHeader, {
                                                        children: [
                                                            _jsx(CardTitle, {
                                                                children:
                                                                    'Avatar',
                                                            }),
                                                            _jsx(
                                                                CardDescription,
                                                                {
                                                                    children:
                                                                        'Visual representation of a user',
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                    _jsxs(CardContent, {
                                                        className:
                                                            'flex space-x-4',
                                                        children: [
                                                            _jsxs(Avatar, {
                                                                children: [
                                                                    _jsx(
                                                                        AvatarImage,
                                                                        {
                                                                            src: 'https://github.com/shadcn.png',
                                                                            alt: '@shadcn',
                                                                        },
                                                                    ),
                                                                    _jsx(
                                                                        AvatarFallback,
                                                                        {
                                                                            children:
                                                                                'CN',
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                            _jsxs(Avatar, {
                                                                children: [
                                                                    _jsx(
                                                                        AvatarImage,
                                                                        {
                                                                            src: 'https://github.com/vercel.png',
                                                                            alt: '@vercel',
                                                                        },
                                                                    ),
                                                                    _jsx(
                                                                        AvatarFallback,
                                                                        {
                                                                            children:
                                                                                'VC',
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsx('div', {
                                        className: 'mt-12 text-center',
                                        children: _jsx(Button, {
                                            size: 'lg',
                                            onClick: function () {
                                                return window.open(
                                                    process.env
                                                        .NEXT_PUBLIC_STORYBOOK_URL,
                                                    '_blank',
                                                )
                                            },
                                            children: 'Explore All Components',
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40',
                            children: _jsxs('div', {
                                className: 'container mx-auto',
                                children: [
                                    _jsx(Badge, { children: 'Color System' }),
                                    _jsx(TypographyH2, {
                                        className:
                                            'text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular mt-4',
                                        children:
                                            'Harmonious and Accessible Color Palette',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground mt-4',
                                        children:
                                            'Our carefully crafted color system ensures consistency, accessibility, and flexibility across all your projects.',
                                    }),
                                    _jsxs('div', {
                                        className:
                                            'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-12',
                                        children: [
                                            _jsx(ColorSwatch, {
                                                name: 'Primary',
                                                color: 'bg-primary',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Secondary',
                                                color: 'bg-secondary',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Accent',
                                                color: 'bg-accent',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Muted',
                                                color: 'bg-muted',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Card',
                                                color: 'bg-card',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Destructive',
                                                color: 'bg-destructive',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Success',
                                                color: 'bg-success',
                                            }),
                                            _jsx(ColorSwatch, {
                                                name: 'Warning',
                                                color: 'bg-warning',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40 bg-card',
                            children: _jsxs('div', {
                                className: 'container mx-auto',
                                children: [
                                    _jsx(Badge, { children: 'Typography' }),
                                    _jsx(TypographyH2, {
                                        className:
                                            'text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular mt-4',
                                        children:
                                            'Clear and Consistent Typography with Poppins',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground mt-4',
                                        children:
                                            'Our typography system is designed for readability and scalability across all devices and platforms.',
                                    }),
                                    _jsxs('div', {
                                        className: 'mt-12 space-y-8',
                                        children: [
                                            _jsxs('div', {
                                                children: [
                                                    _jsx(TypographyH1, {
                                                        children: 'Heading 1',
                                                    }),
                                                    _jsx(TypographySmall, {
                                                        className:
                                                            'text-muted-foreground',
                                                        children:
                                                            'Used for main page titles',
                                                    }),
                                                ],
                                            }),
                                            _jsxs('div', {
                                                children: [
                                                    _jsx(TypographyH2, {
                                                        children: 'Heading 2',
                                                    }),
                                                    _jsx(TypographySmall, {
                                                        className:
                                                            'text-muted-foreground',
                                                        children:
                                                            'Used for section headers',
                                                    }),
                                                ],
                                            }),
                                            _jsxs('div', {
                                                children: [
                                                    _jsx(TypographyH3, {
                                                        children: 'Heading 3',
                                                    }),
                                                    _jsx(TypographySmall, {
                                                        className:
                                                            'text-muted-foreground',
                                                        children:
                                                            'Used for subsection headers',
                                                    }),
                                                ],
                                            }),
                                            _jsxs('div', {
                                                children: [
                                                    _jsx(TypographyP, {
                                                        children: 'Body Text',
                                                    }),
                                                    _jsx(TypographySmall, {
                                                        className:
                                                            'text-muted-foreground',
                                                        children:
                                                            'Used for main content',
                                                    }),
                                                ],
                                            }),
                                            _jsxs('div', {
                                                children: [
                                                    _jsx(TypographySmall, {
                                                        children: 'Small Text',
                                                    }),
                                                    _jsx('br', {}),
                                                    _jsx(TypographySmall, {
                                                        className:
                                                            'text-muted-foreground',
                                                        children:
                                                            'Used for captions and helper text',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        _jsx('section', {
                            className: 'w-full py-20 lg:py-40 bg-background',
                            children: _jsx('div', {
                                className: 'container mx-auto',
                                children: _jsxs('div', {
                                    className: 'grid lg:grid-cols-2 gap-10',
                                    children: [
                                        _jsxs('div', {
                                            children: [
                                                _jsx(Badge, {
                                                    variant: 'outline',
                                                    children: 'FAQ',
                                                }),
                                                _jsx(TypographyH2, {
                                                    className:
                                                        'text-3xl md:text-5xl tracking-tighter font-regular mt-4',
                                                    children:
                                                        'Frequently Asked Questions',
                                                }),
                                                _jsx(TypographyP, {
                                                    className:
                                                        'text-lg max-w-lg leading-relaxed tracking-tight text-muted-foreground mt-4',
                                                    children:
                                                        'Get answers to common questions about RealCube 2.0 Design System and how it can benefit your projects.',
                                                }),
                                                _jsxs(Button, {
                                                    className: 'gap-4 mt-4',
                                                    variant: 'outline',
                                                    children: [
                                                        'Contact Support',
                                                        ' ',
                                                        _jsx(PhoneCall, {
                                                            className:
                                                                'w-4 h-4',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs(Accordion, {
                                            type: 'single',
                                            collapsible: true,
                                            className: 'w-full',
                                            children: [
                                                _jsxs(AccordionItem, {
                                                    value: 'item-1',
                                                    children: [
                                                        _jsx(AccordionTrigger, {
                                                            children:
                                                                'What is RealCube 2.0 Design System?',
                                                        }),
                                                        _jsx(AccordionContent, {
                                                            children:
                                                                'RealCube 2.0 is a comprehensive design system that provides a set of reusable components, guidelines, and tools to create consistent and accessible user interfaces for web applications.',
                                                        }),
                                                    ],
                                                }),
                                                _jsxs(AccordionItem, {
                                                    value: 'item-2',
                                                    children: [
                                                        _jsx(AccordionTrigger, {
                                                            children:
                                                                'How does RealCube 2.0 ensure accessibility?',
                                                        }),
                                                        _jsx(AccordionContent, {
                                                            children:
                                                                'All components in RealCube 2.0 are designed and tested to meet WCAG 2.1 AA standards, ensuring that your applications are accessible to a wide range of users, including those with disabilities.',
                                                        }),
                                                    ],
                                                }),
                                                _jsxs(AccordionItem, {
                                                    value: 'item-3',
                                                    children: [
                                                        _jsx(AccordionTrigger, {
                                                            children:
                                                                'Can I customize RealCube 2.0 to match my brand?',
                                                        }),
                                                        _jsx(AccordionContent, {
                                                            children:
                                                                'Yes, RealCube 2.0 is highly customizable. You can easily modify colors, typography, and other design tokens to align with your brand guidelines while maintaining consistency across your projects.',
                                                        }),
                                                    ],
                                                }),
                                                _jsxs(AccordionItem, {
                                                    value: 'item-4',
                                                    children: [
                                                        _jsx(AccordionTrigger, {
                                                            children:
                                                                'Is RealCube 2.0 suitable for large-scale applications?',
                                                        }),
                                                        _jsx(AccordionContent, {
                                                            children:
                                                                'Absolutely. RealCube 2.0 is built to scale, with performance optimizations and a modular architecture that makes it suitable for projects of any size, from small websites to large enterprise applications.',
                                                        }),
                                                    ],
                                                }),
                                                _jsxs(AccordionItem, {
                                                    value: 'item-5',
                                                    children: [
                                                        _jsx(AccordionTrigger, {
                                                            children:
                                                                'How often is RealCube 2.0 updated?',
                                                        }),
                                                        _jsx(AccordionContent, {
                                                            children:
                                                                'We regularly update RealCube 2.0 with new features, components, and improvements. Our team is committed to keeping the design system current with the latest web standards and best practices.',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            _jsx('section', {
                className:
                    'w-full py-20 lg:py-40 bg-primary text-primary-foreground',
                children: _jsxs('div', {
                    className: 'container mx-auto text-center',
                    children: [
                        _jsx(TypographyH2, {
                            className:
                                'text-3xl md:text-5xl tracking-tighter font-regular mb-4',
                            children: 'Ready to elevate your design workflow?',
                        }),
                        _jsx(TypographyP, {
                            className: 'text-xl max-w-2xl mx-auto mb-8',
                            children:
                                'Start building beautiful, accessible, and consistent user interfaces with RealCube 2.0 Design System today.',
                        }),
                        _jsx('div', {
                            className:
                                'flex flex-col sm:flex-row justify-center gap-4',
                            children: _jsx(Button, {
                                size: 'lg',
                                variant: 'secondary',
                                children: 'View Storybook',
                            }),
                        }),
                    ],
                }),
            }),
            _jsxs('footer', {
                className: 'w-full py-12 bg-background border-t',
                children: [
                    _jsxs('div', {
                        className:
                            'container mx-auto grid gap-8 lg:grid-cols-3',
                        children: [
                            _jsxs('div', {
                                children: [
                                    _jsx(TypographyH3, {
                                        className: 'text-lg font-semibold mb-4',
                                        children: 'RealCube Design System 2.0',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-sm text-muted-foreground',
                                        children:
                                            'Building the future of web design, one component at a time.',
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'grid grid-cols-2 gap-8',
                                children: [
                                    _jsxs('div', {
                                        children: [
                                            _jsx(TypographyH4, {
                                                className:
                                                    'text-sm font-semibold mb-4',
                                                children: 'Resources',
                                            }),
                                            _jsxs('ul', {
                                                className: 'space-y-2',
                                                children: [
                                                    _jsx('li', {
                                                        children: _jsx('a', {
                                                            href: '#',
                                                            className:
                                                                'text-sm text-muted-foreground hover:text-foreground',
                                                            children:
                                                                'Documentation',
                                                        }),
                                                    }),
                                                    _jsx('li', {
                                                        children: _jsx('a', {
                                                            href: '#',
                                                            className:
                                                                'text-sm text-muted-foreground hover:text-foreground',
                                                            children:
                                                                'Components',
                                                        }),
                                                    }),
                                                    _jsx('li', {
                                                        children: _jsx('a', {
                                                            href: '#',
                                                            className:
                                                                'text-sm text-muted-foreground hover:text-foreground',
                                                            children:
                                                                'Examples',
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        children: [
                                            _jsx(TypographyH4, {
                                                className:
                                                    'text-sm font-semibold mb-4',
                                                children: 'Company',
                                            }),
                                            _jsxs('ul', {
                                                className: 'space-y-2',
                                                children: [
                                                    _jsx('li', {
                                                        children: _jsx('a', {
                                                            href: '#',
                                                            className:
                                                                'text-sm text-muted-foreground hover:text-foreground',
                                                            children: 'About',
                                                        }),
                                                    }),
                                                    _jsx('li', {
                                                        children: _jsx('a', {
                                                            href: '#',
                                                            className:
                                                                'text-sm text-muted-foreground hover:text-foreground',
                                                            children: 'Blog',
                                                        }),
                                                    }),
                                                    _jsx('li', {
                                                        children: _jsx('a', {
                                                            href: '#',
                                                            className:
                                                                'text-sm text-muted-foreground hover:text-foreground',
                                                            children: 'Careers',
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                children: [
                                    _jsx(TypographyH4, {
                                        className: 'text-sm font-semibold mb-4',
                                        children: 'Stay Updated',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-sm text-muted-foreground mb-4',
                                        children:
                                            'Subscribe to our newsletter for the latest updates and features.',
                                    }),
                                    _jsxs('div', {
                                        className: 'flex space-x-2',
                                        children: [
                                            _jsx('input', {
                                                type: 'email',
                                                placeholder: 'Enter your email',
                                                className:
                                                    'flex-1 px-3 py-2 bg-background border rounded-md text-sm',
                                            }),
                                            _jsx(Button, {
                                                children: 'Subscribe',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx('div', {
                        className: 'container mx-auto mt-8 pt-8 border-t',
                        children: _jsx(TypographySmall, {
                            className: 'text-center text-muted-foreground',
                            children:
                                '\u00A9 2024 RealCube Design System. All rights reserved.',
                        }),
                    }),
                ],
            }),
        ],
    })
}
