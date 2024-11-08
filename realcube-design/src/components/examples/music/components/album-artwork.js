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
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Image from 'next/image'
import { PlusCircle } from 'lucide-react'
import { cn } from '../../../../lib/utils'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '../../../ui/context-menu'
import { playlists } from '../data/playlists'
export function AlbumArtwork(_a) {
    var album = _a.album,
        _b = _a.aspectRatio,
        aspectRatio = _b === void 0 ? 'portrait' : _b,
        width = _a.width,
        height = _a.height,
        className = _a.className,
        props = __rest(_a, [
            'album',
            'aspectRatio',
            'width',
            'height',
            'className',
        ])
    return _jsxs(
        'div',
        __assign({ className: cn('space-y-3', className) }, props, {
            children: [
                _jsxs(ContextMenu, {
                    children: [
                        _jsx(ContextMenuTrigger, {
                            children: _jsx('div', {
                                className: 'overflow-hidden rounded-md',
                                children: _jsx(Image, {
                                    src: album.cover,
                                    alt: album.name,
                                    width: width,
                                    height: height,
                                    className: cn(
                                        'h-auto w-auto object-cover transition-all hover:scale-105',
                                        aspectRatio === 'portrait'
                                            ? 'aspect-[3/4]'
                                            : 'aspect-square',
                                    ),
                                }),
                            }),
                        }),
                        _jsxs(ContextMenuContent, {
                            className: 'w-40',
                            children: [
                                _jsx(ContextMenuItem, {
                                    children: 'Add to Library',
                                }),
                                _jsxs(ContextMenuSub, {
                                    children: [
                                        _jsx(ContextMenuSubTrigger, {
                                            children: 'Add to Playlist',
                                        }),
                                        _jsxs(ContextMenuSubContent, {
                                            className: 'w-48',
                                            children: [
                                                _jsxs(ContextMenuItem, {
                                                    children: [
                                                        _jsx(PlusCircle, {
                                                            className:
                                                                'mr-2 h-4 w-4',
                                                        }),
                                                        'New Playlist',
                                                    ],
                                                }),
                                                _jsx(ContextMenuSeparator, {}),
                                                playlists.map(
                                                    function (playlist) {
                                                        return _jsxs(
                                                            ContextMenuItem,
                                                            {
                                                                children: [
                                                                    _jsx(
                                                                        'svg',
                                                                        {
                                                                            xmlns: 'http://www.w3.org/2000/svg',
                                                                            fill: 'none',
                                                                            stroke: 'currentColor',
                                                                            strokeLinecap:
                                                                                'round',
                                                                            strokeLinejoin:
                                                                                'round',
                                                                            strokeWidth:
                                                                                '2',
                                                                            className:
                                                                                'mr-2 h-4 w-4',
                                                                            viewBox:
                                                                                '0 0 24 24',
                                                                            children:
                                                                                _jsx(
                                                                                    'path',
                                                                                    {
                                                                                        d: 'M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3',
                                                                                    },
                                                                                ),
                                                                        },
                                                                    ),
                                                                    playlist,
                                                                ],
                                                            },
                                                            playlist,
                                                        )
                                                    },
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx(ContextMenuSeparator, {}),
                                _jsx(ContextMenuItem, {
                                    children: 'Play Next',
                                }),
                                _jsx(ContextMenuItem, {
                                    children: 'Play Later',
                                }),
                                _jsx(ContextMenuItem, {
                                    children: 'Create Station',
                                }),
                                _jsx(ContextMenuSeparator, {}),
                                _jsx(ContextMenuItem, { children: 'Like' }),
                                _jsx(ContextMenuItem, { children: 'Share' }),
                            ],
                        }),
                    ],
                }),
                _jsxs('div', {
                    className: 'space-y-1 text-sm',
                    children: [
                        _jsx('h3', {
                            className: 'font-medium leading-none',
                            children: album.name,
                        }),
                        _jsx('p', {
                            className: 'text-xs text-muted-foreground',
                            children: album.artist,
                        }),
                    ],
                }),
            ],
        }),
    )
}
