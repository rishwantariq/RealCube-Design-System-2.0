import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { ClockIcon } from 'lucide-react'
import { Button } from '../../../ui/button'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '../../../ui/hover-card'
import { Label } from '../../../ui/label'
import { Separator } from '../../../ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs'
import { Textarea } from '../../../ui/textarea'
import { CodeViewer } from '../components/code-viewer'
import { MaxLengthSelector } from '../components/maxlength-selector'
import { ModelSelector } from '../components/model-selector'
import { PresetActions } from '../components/preset-actions'
import { PresetSave } from '../components/preset-save'
import { PresetSelector } from '../components/preset-selector'
import { PresetShare } from '../components/preset-share'
import { TemperatureSelector } from '../components/temperature-selector'
import { TopPSelector } from '../components/top-p-selector'
import { models, types } from '../data/models'
import { presets } from '../data/presets'
import Image from 'next/image'
import ImgPlaygroundDark from '../assets/playground-dark.png'
import ImgPlaygroundLight from '../assets/playground-light.png'
var meta = {
    title: 'Examples/playground',
    component: function () {
        return _jsxs(_Fragment, {
            children: [
                _jsxs('div', {
                    className: 'md:hidden',
                    children: [
                        _jsx(Image, {
                            src: ImgPlaygroundLight,
                            width: 1280,
                            height: 916,
                            alt: 'Playground',
                            className: 'block dark:hidden',
                        }),
                        _jsx(Image, {
                            src: ImgPlaygroundDark,
                            width: 1280,
                            height: 916,
                            alt: 'Playground',
                            className: 'hidden dark:block',
                        }),
                    ],
                }),
                _jsxs('div', {
                    className: 'hidden h-full flex-col md:flex',
                    children: [
                        _jsxs('div', {
                            className:
                                'container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16',
                            children: [
                                _jsx('h2', {
                                    className: 'text-lg font-semibold',
                                    children: 'Playground',
                                }),
                                _jsxs('div', {
                                    className:
                                        'ml-auto flex w-full space-x-2 sm:justify-end',
                                    children: [
                                        _jsx(PresetSelector, {
                                            presets: presets,
                                        }),
                                        _jsx(PresetSave, {}),
                                        _jsxs('div', {
                                            className:
                                                'hidden space-x-2 md:flex',
                                            children: [
                                                _jsx(CodeViewer, {}),
                                                _jsx(PresetShare, {}),
                                            ],
                                        }),
                                        _jsx(PresetActions, {}),
                                    ],
                                }),
                            ],
                        }),
                        _jsx(Separator, {}),
                        _jsx(Tabs, {
                            defaultValue: 'complete',
                            className: 'flex-1',
                            children: _jsx('div', {
                                className: 'container h-full py-6',
                                children: _jsxs('div', {
                                    className:
                                        'grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]',
                                    children: [
                                        _jsxs('div', {
                                            className:
                                                'hidden flex-col space-y-4 sm:flex md:order-2',
                                            children: [
                                                _jsxs('div', {
                                                    className: 'grid gap-2',
                                                    children: [
                                                        _jsxs(HoverCard, {
                                                            openDelay: 200,
                                                            children: [
                                                                _jsx(
                                                                    HoverCardTrigger,
                                                                    {
                                                                        asChild: true,
                                                                        children:
                                                                            _jsx(
                                                                                'span',
                                                                                {
                                                                                    className:
                                                                                        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                                                                                    children:
                                                                                        'Mode',
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    HoverCardContent,
                                                                    {
                                                                        className:
                                                                            'w-[320px] text-sm',
                                                                        side: 'left',
                                                                        children:
                                                                            'Choose the interface that best suits your task. You can provide: a simple prompt to complete, starting and ending text to insert a completion within, or some text with instructions to edit it.',
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        _jsxs(TabsList, {
                                                            className:
                                                                'grid grid-cols-3',
                                                            children: [
                                                                _jsxs(
                                                                    TabsTrigger,
                                                                    {
                                                                        value: 'complete',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'span',
                                                                                    {
                                                                                        className:
                                                                                            'sr-only',
                                                                                        children:
                                                                                            'Complete',
                                                                                    },
                                                                                ),
                                                                                _jsxs(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 20 20',
                                                                                        fill: 'none',
                                                                                        className:
                                                                                            'h-5 w-5',
                                                                                        children:
                                                                                            [
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '3',
                                                                                                        width: '12',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '7',
                                                                                                        width: '12',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '11',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '15',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '8.5',
                                                                                                        y: '11',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '8.5',
                                                                                                        y: '15',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '13',
                                                                                                        y: '11',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    TabsTrigger,
                                                                    {
                                                                        value: 'insert',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'span',
                                                                                    {
                                                                                        className:
                                                                                            'sr-only',
                                                                                        children:
                                                                                            'Insert',
                                                                                    },
                                                                                ),
                                                                                _jsxs(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 20 20',
                                                                                        fill: 'none',
                                                                                        className:
                                                                                            'h-5 w-5',
                                                                                        children:
                                                                                            [
                                                                                                _jsx(
                                                                                                    'path',
                                                                                                    {
                                                                                                        fillRule:
                                                                                                            'evenodd',
                                                                                                        clipRule:
                                                                                                            'evenodd',
                                                                                                        d: 'M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '15',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '8.5',
                                                                                                        y: '15',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '13',
                                                                                                        y: '15',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsxs(
                                                                    TabsTrigger,
                                                                    {
                                                                        value: 'edit',
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    'span',
                                                                                    {
                                                                                        className:
                                                                                            'sr-only',
                                                                                        children:
                                                                                            'Edit',
                                                                                    },
                                                                                ),
                                                                                _jsxs(
                                                                                    'svg',
                                                                                    {
                                                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                                                        viewBox:
                                                                                            '0 0 20 20',
                                                                                        fill: 'none',
                                                                                        className:
                                                                                            'h-5 w-5',
                                                                                        children:
                                                                                            [
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '3',
                                                                                                        width: '12',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '7',
                                                                                                        width: '12',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '11',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '4',
                                                                                                        y: '15',
                                                                                                        width: '4',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'rect',
                                                                                                    {
                                                                                                        x: '8.5',
                                                                                                        y: '11',
                                                                                                        width: '3',
                                                                                                        height: '2',
                                                                                                        rx: '1',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                                _jsx(
                                                                                                    'path',
                                                                                                    {
                                                                                                        d: 'M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z',
                                                                                                        fill: 'currentColor',
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsx(ModelSelector, {
                                                    types: types,
                                                    models: models,
                                                }),
                                                _jsx(TemperatureSelector, {
                                                    defaultValue: [0.56],
                                                }),
                                                _jsx(MaxLengthSelector, {
                                                    defaultValue: [256],
                                                }),
                                                _jsx(TopPSelector, {
                                                    defaultValue: [0.9],
                                                }),
                                            ],
                                        }),
                                        _jsxs('div', {
                                            className: 'md:order-1',
                                            children: [
                                                _jsx(TabsContent, {
                                                    value: 'complete',
                                                    className:
                                                        'mt-0 border-0 p-0',
                                                    children: _jsxs('div', {
                                                        className:
                                                            'flex h-full flex-col space-y-4',
                                                        children: [
                                                            _jsx(Textarea, {
                                                                placeholder:
                                                                    'Write a tagline for an ice cream shop',
                                                                className:
                                                                    'min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]',
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex items-center space-x-2',
                                                                children: [
                                                                    _jsx(
                                                                        Button,
                                                                        {
                                                                            children:
                                                                                'Submit',
                                                                        },
                                                                    ),
                                                                    _jsxs(
                                                                        Button,
                                                                        {
                                                                            variant:
                                                                                'secondary',
                                                                            children:
                                                                                [
                                                                                    _jsx(
                                                                                        'span',
                                                                                        {
                                                                                            className:
                                                                                                'sr-only',
                                                                                            children:
                                                                                                'Show history',
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        ClockIcon,
                                                                                        {
                                                                                            className:
                                                                                                'h-4 w-4',
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                _jsx(TabsContent, {
                                                    value: 'insert',
                                                    className:
                                                        'mt-0 border-0 p-0',
                                                    children: _jsxs('div', {
                                                        className:
                                                            'flex flex-col space-y-4',
                                                        children: [
                                                            _jsxs('div', {
                                                                className:
                                                                    'grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1',
                                                                children: [
                                                                    _jsx(
                                                                        Textarea,
                                                                        {
                                                                            placeholder:
                                                                                "We're writing to [inset]. Congrats from OpenAI!",
                                                                            className:
                                                                                'h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]',
                                                                        },
                                                                    ),
                                                                    _jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'rounded-md border bg-muted',
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex items-center space-x-2',
                                                                children: [
                                                                    _jsx(
                                                                        Button,
                                                                        {
                                                                            children:
                                                                                'Submit',
                                                                        },
                                                                    ),
                                                                    _jsxs(
                                                                        Button,
                                                                        {
                                                                            variant:
                                                                                'secondary',
                                                                            children:
                                                                                [
                                                                                    _jsx(
                                                                                        'span',
                                                                                        {
                                                                                            className:
                                                                                                'sr-only',
                                                                                            children:
                                                                                                'Show history',
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        ClockIcon,
                                                                                        {
                                                                                            className:
                                                                                                'h-4 w-4',
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                _jsx(TabsContent, {
                                                    value: 'edit',
                                                    className:
                                                        'mt-0 border-0 p-0',
                                                    children: _jsxs('div', {
                                                        className:
                                                            'flex flex-col space-y-4',
                                                        children: [
                                                            _jsxs('div', {
                                                                className:
                                                                    'grid h-full gap-6 lg:grid-cols-2',
                                                                children: [
                                                                    _jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'flex flex-col space-y-4',
                                                                            children:
                                                                                [
                                                                                    _jsxs(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'flex flex-1 flex-col space-y-2',
                                                                                            children:
                                                                                                [
                                                                                                    _jsx(
                                                                                                        Label,
                                                                                                        {
                                                                                                            htmlFor:
                                                                                                                'input',
                                                                                                            children:
                                                                                                                'Input',
                                                                                                        },
                                                                                                    ),
                                                                                                    _jsx(
                                                                                                        Textarea,
                                                                                                        {
                                                                                                            id: 'input',
                                                                                                            placeholder:
                                                                                                                'We is going to the market.',
                                                                                                            className:
                                                                                                                'flex-1 lg:min-h-[580px]',
                                                                                                        },
                                                                                                    ),
                                                                                                ],
                                                                                        },
                                                                                    ),
                                                                                    _jsxs(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'flex flex-col space-y-2',
                                                                                            children:
                                                                                                [
                                                                                                    _jsx(
                                                                                                        Label,
                                                                                                        {
                                                                                                            htmlFor:
                                                                                                                'instructions',
                                                                                                            children:
                                                                                                                'Instructions',
                                                                                                        },
                                                                                                    ),
                                                                                                    _jsx(
                                                                                                        Textarea,
                                                                                                        {
                                                                                                            id: 'instructions',
                                                                                                            placeholder:
                                                                                                                'Fix the grammar.',
                                                                                                        },
                                                                                                    ),
                                                                                                ],
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                    _jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]',
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                            _jsxs('div', {
                                                                className:
                                                                    'flex items-center space-x-2',
                                                                children: [
                                                                    _jsx(
                                                                        Button,
                                                                        {
                                                                            children:
                                                                                'Submit',
                                                                        },
                                                                    ),
                                                                    _jsxs(
                                                                        Button,
                                                                        {
                                                                            variant:
                                                                                'secondary',
                                                                            children:
                                                                                [
                                                                                    _jsx(
                                                                                        'span',
                                                                                        {
                                                                                            className:
                                                                                                'sr-only',
                                                                                            children:
                                                                                                'Show history',
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        ClockIcon,
                                                                                        {
                                                                                            className:
                                                                                                'h-4 w-4',
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        })
    },
}
export default meta
export var Playground = {}
