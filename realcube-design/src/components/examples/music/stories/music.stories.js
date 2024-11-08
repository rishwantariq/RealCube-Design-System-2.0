import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { PlusCircleIcon } from 'lucide-react'
import { Button } from '../../../ui/button'
import { ScrollArea, ScrollBar } from '../../../ui/scroll-area'
import { Separator } from '../../../ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs'
import { AlbumArtwork } from '../components/album-artwork'
import { Menu } from '../components/menu'
import { PodcastEmptyPlaceholder } from '../components/podcast-empty-placeholder'
import { Sidebar } from '../components/sidebar'
import { listenNowAlbums, madeForYouAlbums } from '../data/albums'
import { playlists } from '../data/playlists'
import Image from 'next/image'
import ImgMusicLight from '../assets/music-light.png'
import ImgMusicDark from '../assets/music-dark.png'
var meta = {
    title: 'Examples/music',
    component: function (args) {
        return _jsxs(_Fragment, {
            children: [
                _jsxs('div', {
                    className: 'md:hidden',
                    children: [
                        _jsx(Image, {
                            src: ImgMusicLight,
                            width: 1280,
                            height: 1114,
                            alt: 'Music',
                            className: 'block dark:hidden',
                        }),
                        _jsx(Image, {
                            src: ImgMusicDark,
                            width: 1280,
                            height: 1114,
                            alt: 'Music',
                            className: 'hidden dark:block',
                        }),
                    ],
                }),
                _jsxs('div', {
                    className: 'hidden md:block',
                    children: [
                        _jsx(Menu, {}),
                        _jsx('div', {
                            className: 'border-t',
                            children: _jsx('div', {
                                className: 'bg-background',
                                children: _jsxs('div', {
                                    className: 'grid lg:grid-cols-5',
                                    children: [
                                        _jsx(Sidebar, {
                                            playlists: playlists,
                                            className: 'hidden lg:block',
                                        }),
                                        _jsx('div', {
                                            className:
                                                'col-span-3 lg:col-span-4 lg:border-l',
                                            children: _jsx('div', {
                                                className:
                                                    'h-full px-4 py-6 lg:px-8',
                                                children: _jsxs(Tabs, {
                                                    defaultValue: 'music',
                                                    className:
                                                        'h-full space-y-6',
                                                    children: [
                                                        _jsxs('div', {
                                                            className:
                                                                'space-between flex items-center',
                                                            children: [
                                                                _jsxs(
                                                                    TabsList,
                                                                    {
                                                                        children:
                                                                            [
                                                                                _jsx(
                                                                                    TabsTrigger,
                                                                                    {
                                                                                        value: 'music',
                                                                                        className:
                                                                                            'relative',
                                                                                        children:
                                                                                            'Music',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    TabsTrigger,
                                                                                    {
                                                                                        value: 'podcasts',
                                                                                        children:
                                                                                            'Podcasts',
                                                                                    },
                                                                                ),
                                                                                _jsx(
                                                                                    TabsTrigger,
                                                                                    {
                                                                                        value: 'live',
                                                                                        disabled: true,
                                                                                        children:
                                                                                            'Live',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                                _jsx('div', {
                                                                    className:
                                                                        'ml-auto mr-4',
                                                                    children:
                                                                        _jsxs(
                                                                            Button,
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            PlusCircleIcon,
                                                                                            {
                                                                                                className:
                                                                                                    'mr-2 h-4 w-4',
                                                                                            },
                                                                                        ),
                                                                                        'Add music',
                                                                                    ],
                                                                            },
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs(TabsContent, {
                                                            value: 'music',
                                                            className:
                                                                'border-none p-0 outline-none',
                                                            children: [
                                                                _jsx('div', {
                                                                    className:
                                                                        'flex items-center justify-between',
                                                                    children:
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'space-y-1',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'h2',
                                                                                            {
                                                                                                className:
                                                                                                    'text-2xl font-semibold tracking-tight',
                                                                                                children:
                                                                                                    'Listen Now',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'p',
                                                                                            {
                                                                                                className:
                                                                                                    'text-sm text-muted-foreground',
                                                                                                children:
                                                                                                    'Top picks for you. Updated daily.',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                }),
                                                                _jsx(
                                                                    Separator,
                                                                    {
                                                                        className:
                                                                            'my-4',
                                                                    },
                                                                ),
                                                                _jsx('div', {
                                                                    className:
                                                                        'relative',
                                                                    children:
                                                                        _jsxs(
                                                                            ScrollArea,
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'flex space-x-4 pb-4',
                                                                                                children:
                                                                                                    listenNowAlbums.map(
                                                                                                        function (
                                                                                                            album,
                                                                                                        ) {
                                                                                                            return _jsx(
                                                                                                                AlbumArtwork,
                                                                                                                {
                                                                                                                    album: album,
                                                                                                                    className:
                                                                                                                        'w-[250px]',
                                                                                                                    aspectRatio:
                                                                                                                        'portrait',
                                                                                                                    width: 250,
                                                                                                                    height: 330,
                                                                                                                },
                                                                                                                album.name,
                                                                                                            )
                                                                                                        },
                                                                                                    ),
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            ScrollBar,
                                                                                            {
                                                                                                orientation:
                                                                                                    'horizontal',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                }),
                                                                _jsxs('div', {
                                                                    className:
                                                                        'mt-6 space-y-1',
                                                                    children: [
                                                                        _jsx(
                                                                            'h2',
                                                                            {
                                                                                className:
                                                                                    'text-2xl font-semibold tracking-tight',
                                                                                children:
                                                                                    'Made for You',
                                                                            },
                                                                        ),
                                                                        _jsx(
                                                                            'p',
                                                                            {
                                                                                className:
                                                                                    'text-sm text-muted-foreground',
                                                                                children:
                                                                                    'Your personal playlists. Updated daily.',
                                                                            },
                                                                        ),
                                                                    ],
                                                                }),
                                                                _jsx(
                                                                    Separator,
                                                                    {
                                                                        className:
                                                                            'my-4',
                                                                    },
                                                                ),
                                                                _jsx('div', {
                                                                    className:
                                                                        'relative',
                                                                    children:
                                                                        _jsxs(
                                                                            ScrollArea,
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'flex space-x-4 pb-4',
                                                                                                children:
                                                                                                    madeForYouAlbums.map(
                                                                                                        function (
                                                                                                            album,
                                                                                                        ) {
                                                                                                            return _jsx(
                                                                                                                AlbumArtwork,
                                                                                                                {
                                                                                                                    album: album,
                                                                                                                    className:
                                                                                                                        'w-[150px]',
                                                                                                                    aspectRatio:
                                                                                                                        'square',
                                                                                                                    width: 150,
                                                                                                                    height: 150,
                                                                                                                },
                                                                                                                album.name,
                                                                                                            )
                                                                                                        },
                                                                                                    ),
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            ScrollBar,
                                                                                            {
                                                                                                orientation:
                                                                                                    'horizontal',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs(TabsContent, {
                                                            value: 'podcasts',
                                                            className:
                                                                'h-full flex-col border-none p-0 data-[state=active]:flex',
                                                            children: [
                                                                _jsx('div', {
                                                                    className:
                                                                        'flex items-center justify-between',
                                                                    children:
                                                                        _jsxs(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'space-y-1',
                                                                                children:
                                                                                    [
                                                                                        _jsx(
                                                                                            'h2',
                                                                                            {
                                                                                                className:
                                                                                                    'text-2xl font-semibold tracking-tight',
                                                                                                children:
                                                                                                    'New Episodes',
                                                                                            },
                                                                                        ),
                                                                                        _jsx(
                                                                                            'p',
                                                                                            {
                                                                                                className:
                                                                                                    'text-sm text-muted-foreground',
                                                                                                children:
                                                                                                    'Your favorite podcasts. Updated daily.',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                }),
                                                                _jsx(
                                                                    Separator,
                                                                    {
                                                                        className:
                                                                            'my-4',
                                                                    },
                                                                ),
                                                                _jsx(
                                                                    PodcastEmptyPlaceholder,
                                                                    {},
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
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
export var Music = {}
