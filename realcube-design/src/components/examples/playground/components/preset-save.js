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
export function PresetSave() {
    return _jsxs(Dialog, {
        children: [
            _jsx(DialogTrigger, {
                asChild: true,
                children: _jsx(Button, {
                    variant: 'secondary',
                    children: 'Save',
                }),
            }),
            _jsxs(DialogContent, {
                className: 'sm:max-w-[475px]',
                children: [
                    _jsxs(DialogHeader, {
                        children: [
                            _jsx(DialogTitle, { children: 'Save preset' }),
                            _jsx(DialogDescription, {
                                children:
                                    'This will save the current playground state as a preset which you can access later or share with others.',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-4 py-4',
                        children: [
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'name',
                                        children: 'Name',
                                    }),
                                    _jsx(Input, {
                                        id: 'name',
                                        autoFocus: true,
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'grid gap-2',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'description',
                                        children: 'Description',
                                    }),
                                    _jsx(Input, { id: 'description' }),
                                ],
                            }),
                        ],
                    }),
                    _jsx(DialogFooter, {
                        children: _jsx(Button, {
                            type: 'submit',
                            children: 'Save',
                        }),
                    }),
                ],
            }),
        ],
    })
}
