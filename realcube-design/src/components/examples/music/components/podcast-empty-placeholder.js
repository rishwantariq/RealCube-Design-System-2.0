import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../../../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../ui/dialog'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
export function PodcastEmptyPlaceholder() {
    return _jsx('div', {
        className:
            'flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed',
        children: _jsxs('div', {
            className:
                'mx-auto flex max-w-[420px] flex-col items-center justify-center text-center',
            children: [
                _jsxs('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    className: 'h-10 w-10 text-muted-foreground',
                    viewBox: '0 0 24 24',
                    children: [
                        _jsx('circle', { cx: '12', cy: '11', r: '1' }),
                        _jsx('path', {
                            d: 'M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0',
                        }),
                        _jsx('path', { d: 'M17 18.5a9 9 0 1 0-10 0' }),
                    ],
                }),
                _jsx('h3', {
                    className: 'mt-4 text-lg font-semibold',
                    children: 'No episodes added',
                }),
                _jsx('p', {
                    className: 'mb-4 mt-2 text-sm text-muted-foreground',
                    children: 'You have not added any podcasts. Add one below.',
                }),
                _jsxs(Dialog, {
                    children: [
                        _jsx(DialogTrigger, {
                            asChild: true,
                            children: _jsx(Button, {
                                size: 'sm',
                                className: 'relative',
                                children: 'Add Podcast',
                            }),
                        }),
                        _jsxs(DialogContent, {
                            children: [
                                _jsxs(DialogHeader, {
                                    children: [
                                        _jsx(DialogTitle, {
                                            children: 'Add Podcast',
                                        }),
                                        _jsx(DialogDescription, {
                                            children:
                                                'Copy and paste the podcast feed URL to import.',
                                        }),
                                    ],
                                }),
                                _jsx('div', {
                                    className: 'grid gap-4 py-4',
                                    children: _jsxs('div', {
                                        className: 'grid gap-2',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'url',
                                                children: 'Podcast URL',
                                            }),
                                            _jsx(Input, {
                                                id: 'url',
                                                placeholder:
                                                    'https://example.com/feed.xml',
                                            }),
                                        ],
                                    }),
                                }),
                                _jsx(DialogFooter, {
                                    children: _jsx(Button, {
                                        children: 'Import Podcast',
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    })
}
