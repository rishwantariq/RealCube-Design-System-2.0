import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { CopyIcon } from 'lucide-react'
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover'
export function PresetShare() {
    return _jsxs(Popover, {
        children: [
            _jsx(PopoverTrigger, {
                asChild: true,
                children: _jsx(Button, {
                    variant: 'secondary',
                    children: 'Share',
                }),
            }),
            _jsxs(PopoverContent, {
                align: 'end',
                className: 'w-[520px]',
                children: [
                    _jsxs('div', {
                        className:
                            'flex flex-col space-y-2 text-center sm:text-left',
                        children: [
                            _jsx('h3', {
                                className: 'text-lg font-semibold',
                                children: 'Share preset',
                            }),
                            _jsx('p', {
                                className: 'text-sm text-muted-foreground',
                                children:
                                    'Anyone who has this link and an OpenAI account will be able to view this.',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'flex items-center space-x-2 pt-4',
                        children: [
                            _jsxs('div', {
                                className: 'grid flex-1 gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'link',
                                        className: 'sr-only',
                                        children: 'Link',
                                    }),
                                    _jsx(Input, {
                                        id: 'link',
                                        defaultValue:
                                            'https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003',
                                        readOnly: true,
                                        className: 'h-9',
                                    }),
                                ],
                            }),
                            _jsxs(Button, {
                                type: 'submit',
                                size: 'sm',
                                className: 'px-3',
                                children: [
                                    _jsx('span', {
                                        className: 'sr-only',
                                        children: 'Copy',
                                    }),
                                    _jsx(CopyIcon, { className: 'h-4 w-4' }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
