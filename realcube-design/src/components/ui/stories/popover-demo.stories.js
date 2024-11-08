import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
var meta = {
    title: 'RealCube/popover',
    component: function () {
        return _jsxs(Popover, {
            children: [
                _jsx(PopoverTrigger, {
                    asChild: true,
                    children: _jsx(Button, {
                        variant: 'outline',
                        children: 'Open popover',
                    }),
                }),
                _jsx(PopoverContent, {
                    className: 'w-80',
                    children: _jsxs('div', {
                        className: 'grid gap-4',
                        children: [
                            _jsxs('div', {
                                className: 'space-y-2',
                                children: [
                                    _jsx('h4', {
                                        className: 'font-medium leading-none',
                                        children: 'Dimensions',
                                    }),
                                    _jsx('p', {
                                        className:
                                            'text-sm text-muted-foreground',
                                        children:
                                            'Set the dimensions for the layer.',
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsxs('div', {
                                        className:
                                            'grid grid-cols-3 items-center gap-4',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'width',
                                                children: 'Width',
                                            }),
                                            _jsx(Input, {
                                                id: 'width',
                                                defaultValue: '100%',
                                                className: 'col-span-2 h-8',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        className:
                                            'grid grid-cols-3 items-center gap-4',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'maxWidth',
                                                children: 'Max. width',
                                            }),
                                            _jsx(Input, {
                                                id: 'maxWidth',
                                                defaultValue: '300px',
                                                className: 'col-span-2 h-8',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        className:
                                            'grid grid-cols-3 items-center gap-4',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'height',
                                                children: 'Height',
                                            }),
                                            _jsx(Input, {
                                                id: 'height',
                                                defaultValue: '25px',
                                                className: 'col-span-2 h-8',
                                            }),
                                        ],
                                    }),
                                    _jsxs('div', {
                                        className:
                                            'grid grid-cols-3 items-center gap-4',
                                        children: [
                                            _jsx(Label, {
                                                htmlFor: 'maxHeight',
                                                children: 'Max. height',
                                            }),
                                            _jsx(Input, {
                                                id: 'maxHeight',
                                                defaultValue: 'none',
                                                className: 'col-span-2 h-8',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var PopoverDemo = {
    args: {},
}
