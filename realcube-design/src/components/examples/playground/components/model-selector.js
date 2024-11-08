'use client'
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
import * as React from 'react'
import { SortAsc, CheckIcon } from 'lucide-react'
import { cn } from '../../../../lib/utils'
import { useMutationObserver } from '../../../../hooks/use-mutation-observer'
import { Button } from '../../../ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../../../ui/command'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '../../../ui/hover-card'
import { Label } from '../../../ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
export function ModelSelector(_a) {
    var models = _a.models,
        types = _a.types,
        props = __rest(_a, ['models', 'types'])
    var _b = React.useState(false),
        open = _b[0],
        setOpen = _b[1]
    var _c = React.useState(models[0]),
        selectedModel = _c[0],
        setSelectedModel = _c[1]
    var _d = React.useState(models[0]),
        peekedModel = _d[0],
        setPeekedModel = _d[1]
    return _jsxs('div', {
        className: 'grid gap-2',
        children: [
            _jsxs(HoverCard, {
                openDelay: 200,
                children: [
                    _jsx(HoverCardTrigger, {
                        asChild: true,
                        children: _jsx(Label, {
                            htmlFor: 'model',
                            children: 'Model',
                        }),
                    }),
                    _jsx(HoverCardContent, {
                        align: 'start',
                        className: 'w-[260px] text-sm',
                        side: 'left',
                        children:
                            'The model which will generate the completion. Some models are suitable for natural language tasks, others specialize in code. Learn more.',
                    }),
                ],
            }),
            _jsxs(
                Popover,
                __assign({ open: open, onOpenChange: setOpen }, props, {
                    children: [
                        _jsx(PopoverTrigger, {
                            asChild: true,
                            children: _jsxs(Button, {
                                variant: 'outline',
                                role: 'combobox',
                                'aria-expanded': open,
                                'aria-label': 'Select a model',
                                className: 'w-full justify-between',
                                children: [
                                    selectedModel
                                        ? selectedModel.name
                                        : 'Select a model...',
                                    _jsx(SortAsc, {
                                        className:
                                            'ml-2 h-4 w-4 shrink-0 opacity-50',
                                    }),
                                ],
                            }),
                        }),
                        _jsx(PopoverContent, {
                            align: 'end',
                            className: 'w-[250px] p-0',
                            children: _jsxs(HoverCard, {
                                children: [
                                    _jsx(HoverCardContent, {
                                        side: 'left',
                                        align: 'start',
                                        forceMount: true,
                                        className: 'min-h-[280px]',
                                        children: _jsxs('div', {
                                            className: 'grid gap-2',
                                            children: [
                                                _jsx('h4', {
                                                    className:
                                                        'font-medium leading-none',
                                                    children: peekedModel.name,
                                                }),
                                                _jsx('div', {
                                                    className:
                                                        'text-sm text-muted-foreground',
                                                    children:
                                                        peekedModel.description,
                                                }),
                                                peekedModel.strengths
                                                    ? _jsxs('div', {
                                                          className:
                                                              'mt-4 grid gap-2',
                                                          children: [
                                                              _jsx('h5', {
                                                                  className:
                                                                      'text-sm font-medium leading-none',
                                                                  children:
                                                                      'Strengths',
                                                              }),
                                                              _jsx('ul', {
                                                                  className:
                                                                      'text-sm text-muted-foreground',
                                                                  children:
                                                                      peekedModel.strengths,
                                                              }),
                                                          ],
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    }),
                                    _jsx(Command, {
                                        loop: true,
                                        children: _jsxs(CommandList, {
                                            className:
                                                'h-[var(--cmdk-list-height)] max-h-[400px]',
                                            children: [
                                                _jsx(CommandInput, {
                                                    placeholder:
                                                        'Search Models...',
                                                }),
                                                _jsx(CommandEmpty, {
                                                    children:
                                                        'No Models found.',
                                                }),
                                                _jsx(HoverCardTrigger, {}),
                                                types.map(function (type) {
                                                    return _jsx(
                                                        CommandGroup,
                                                        {
                                                            heading: type,
                                                            children: models
                                                                .filter(
                                                                    function (
                                                                        model,
                                                                    ) {
                                                                        return (
                                                                            model.type ===
                                                                            type
                                                                        )
                                                                    },
                                                                )
                                                                .map(
                                                                    function (
                                                                        model,
                                                                    ) {
                                                                        return _jsx(
                                                                            ModelItem,
                                                                            {
                                                                                model: model,
                                                                                isSelected:
                                                                                    (selectedModel ===
                                                                                        null ||
                                                                                    selectedModel ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : selectedModel.id) ===
                                                                                    model.id,
                                                                                onPeek: function (
                                                                                    model,
                                                                                ) {
                                                                                    return setPeekedModel(
                                                                                        model,
                                                                                    )
                                                                                },
                                                                                onSelect:
                                                                                    function () {
                                                                                        setSelectedModel(
                                                                                            model,
                                                                                        )
                                                                                        setOpen(
                                                                                            false,
                                                                                        )
                                                                                    },
                                                                            },
                                                                            model.id,
                                                                        )
                                                                    },
                                                                ),
                                                        },
                                                        type,
                                                    )
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ),
        ],
    })
}
function ModelItem(_a) {
    var model = _a.model,
        isSelected = _a.isSelected,
        onSelect = _a.onSelect,
        onPeek = _a.onPeek
    var ref = React.useRef(null)
    useMutationObserver(ref, function (mutations) {
        for (
            var _i = 0, mutations_1 = mutations;
            _i < mutations_1.length;
            _i++
        ) {
            var mutation = mutations_1[_i]
            if (mutation.type === 'attributes') {
                if (mutation.attributeName === 'aria-selected') {
                    onPeek(model)
                }
            }
        }
    })
    return _jsxs(
        CommandItem,
        {
            onSelect: onSelect,
            ref: ref,
            className:
                'aria-selected:bg-primary aria-selected:text-primary-foreground',
            children: [
                model.name,
                _jsx(CheckIcon, {
                    className: cn(
                        'ml-auto h-4 w-4',
                        isSelected ? 'opacity-100' : 'opacity-0',
                    ),
                }),
            ],
        },
        model.id,
    )
}
