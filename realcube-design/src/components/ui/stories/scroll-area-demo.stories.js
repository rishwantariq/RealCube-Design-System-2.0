import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import Image from 'next/image'
import { ScrollAreaDemo } from '../demo/Scroll-area-demo'
import { ScrollArea, ScrollBar } from '../scroll-area'
var works = [
    {
        artist: 'Ornella Binni',
        art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Tom Byrom',
        art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Vladimir Malyavko',
        art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    },
]
//meta === docs do componente, os types de controls, posição do elemento, valores inicias, armazenar o componente
var meta = {
    title: 'RealCube/scroll-area',
    component: ScrollAreaDemo,
    parameters: {
        layout: 'centered',
    },
}
export default meta
//render componente
export var ScrollAreaVertical = {
    args: {},
}
export var ScrollAreaHorizontal = {
    args: {},
    render: function () {
        return _jsx(_Fragment, {
            children: _jsxs(ScrollArea, {
                className: 'w-96 whitespace-nowrap rounded-md border',
                children: [
                    _jsx('div', {
                        className: 'flex w-max space-x-4 p-4',
                        children: works.map(function (artwork) {
                            return _jsxs(
                                'figure',
                                {
                                    className: 'shrink-0',
                                    children: [
                                        _jsx('div', {
                                            className:
                                                'overflow-hidden rounded-md',
                                            children: _jsx(Image, {
                                                src: artwork.art,
                                                alt: 'Photo by '.concat(
                                                    artwork.artist,
                                                ),
                                                className:
                                                    'aspect-[3/4] h-fit w-fit object-cover',
                                                width: 300,
                                                height: 400,
                                            }),
                                        }),
                                        _jsxs('figcaption', {
                                            className:
                                                'pt-2 text-xs text-muted-foreground',
                                            children: [
                                                'Photo by',
                                                ' ',
                                                _jsx('span', {
                                                    className:
                                                        'font-semibold text-foreground',
                                                    children: artwork.artist,
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                artwork.artist,
                            )
                        }),
                    }),
                    _jsx(ScrollBar, { orientation: 'horizontal' }),
                ],
            }),
        })
    },
}
