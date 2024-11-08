'use client'
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import * as React from 'react'
import { Dialog } from '@radix-ui/react-dialog'
import { DotIcon } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../../../ui/alert-dialog'
import { Button } from '../../../ui/button'
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../../../ui/dialog'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../../ui/dropdown-menu'
import { Label } from '../../../ui/label'
import { Switch } from '../../../ui/switch'
import { toast } from '../../../ui/use-toast'
export function PresetActions() {
    var _a = React.useState(false),
        open = _a[0],
        setIsOpen = _a[1]
    var _b = React.useState(false),
        showDeleteDialog = _b[0],
        setShowDeleteDialog = _b[1]
    return _jsxs(_Fragment, {
        children: [
            _jsxs(DropdownMenu, {
                children: [
                    _jsx(DropdownMenuTrigger, {
                        asChild: true,
                        children: _jsxs(Button, {
                            variant: 'secondary',
                            children: [
                                _jsx('span', {
                                    className: 'sr-only',
                                    children: 'Actions',
                                }),
                                _jsxs('div', {
                                    className: 'flex',
                                    children: [
                                        _jsx(DotIcon, { className: 'w-3 h-3' }),
                                        _jsx(DotIcon, { className: 'w-3 h-3' }),
                                        _jsx(DotIcon, { className: 'w-3 h-3' }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    _jsxs(DropdownMenuContent, {
                        align: 'end',
                        children: [
                            _jsx(DropdownMenuItem, {
                                onSelect: function () {
                                    return setIsOpen(true)
                                },
                                children: 'Content filter preferences',
                            }),
                            _jsx(DropdownMenuSeparator, {}),
                            _jsx(DropdownMenuItem, {
                                onSelect: function () {
                                    return setShowDeleteDialog(true)
                                },
                                className: 'text-red-600',
                                children: 'Delete preset',
                            }),
                        ],
                    }),
                ],
            }),
            _jsx(Dialog, {
                open: open,
                onOpenChange: setIsOpen,
                children: _jsxs(DialogContent, {
                    children: [
                        _jsxs(DialogHeader, {
                            children: [
                                _jsx(DialogTitle, {
                                    children: 'Content filter preferences',
                                }),
                                _jsx(DialogDescription, {
                                    children:
                                        "The content filter flags text that may violate our content policy. It's powered by our moderation endpoint which is free to use to moderate your OpenAI API traffic. Learn more.",
                                }),
                            ],
                        }),
                        _jsxs('div', {
                            className: 'py-6',
                            children: [
                                _jsx('h4', {
                                    className: 'text-sm text-muted-foreground',
                                    children: 'Playground Warnings',
                                }),
                                _jsxs('div', {
                                    className:
                                        'flex items-start justify-between space-x-4 pt-3',
                                    children: [
                                        _jsx(Switch, {
                                            name: 'show',
                                            id: 'show',
                                            defaultChecked: true,
                                        }),
                                        _jsxs(Label, {
                                            className: 'grid gap-1 font-normal',
                                            htmlFor: 'show',
                                            children: [
                                                _jsx('span', {
                                                    className: 'font-semibold',
                                                    children:
                                                        'Show a warning when content is flagged',
                                                }),
                                                _jsx('span', {
                                                    className:
                                                        'text-sm text-muted-foreground',
                                                    children:
                                                        'A warning will be shown when sexual, hateful, violent or self-harm content is detected.',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx(DialogFooter, {
                            children: _jsx(Button, {
                                variant: 'secondary',
                                onClick: function () {
                                    return setIsOpen(false)
                                },
                                children: 'Close',
                            }),
                        }),
                    ],
                }),
            }),
            _jsx(AlertDialog, {
                open: showDeleteDialog,
                onOpenChange: setShowDeleteDialog,
                children: _jsxs(AlertDialogContent, {
                    children: [
                        _jsxs(AlertDialogHeader, {
                            children: [
                                _jsx(AlertDialogTitle, {
                                    children: 'Are you sure absolutely sure?',
                                }),
                                _jsx(AlertDialogDescription, {
                                    children:
                                        "This action cannot be undone. This preset will no longer be accessible by you or others you've shared it with.",
                                }),
                            ],
                        }),
                        _jsxs(AlertDialogFooter, {
                            children: [
                                _jsx(AlertDialogCancel, { children: 'Cancel' }),
                                _jsx(Button, {
                                    variant: 'destructive',
                                    onClick: function () {
                                        setShowDeleteDialog(false)
                                        toast({
                                            description:
                                                'This preset has been deleted.',
                                        })
                                    },
                                    children: 'Delete',
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    })
}
