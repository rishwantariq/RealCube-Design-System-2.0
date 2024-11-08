import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../card'
import { Input } from '../input'
import { Label } from '../label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../select'
export function CardWithForm() {
    return _jsxs(Card, {
        className: 'w-[350px]',
        children: [
            _jsxs(CardHeader, {
                children: [
                    _jsx(CardTitle, { children: 'Create project' }),
                    _jsx(CardDescription, {
                        children: 'Deploy your new project in one-click.',
                    }),
                ],
            }),
            _jsx(CardContent, {
                children: _jsx('form', {
                    children: _jsxs('div', {
                        className: 'grid w-full items-center gap-4',
                        children: [
                            _jsxs('div', {
                                className: 'flex flex-col space-y-1.5',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'name',
                                        children: 'Name',
                                    }),
                                    _jsx(Input, {
                                        id: 'name',
                                        placeholder: 'Name of your project',
                                    }),
                                ],
                            }),
                            _jsxs('div', {
                                className: 'flex flex-col space-y-1.5',
                                children: [
                                    _jsx(Label, {
                                        htmlFor: 'framework',
                                        children: 'Framework',
                                    }),
                                    _jsxs(Select, {
                                        children: [
                                            _jsx(SelectTrigger, {
                                                id: 'framework',
                                                children: _jsx(SelectValue, {
                                                    placeholder: 'Select',
                                                }),
                                            }),
                                            _jsxs(SelectContent, {
                                                position: 'popper',
                                                children: [
                                                    _jsx(SelectItem, {
                                                        value: 'next',
                                                        children: 'Next.js',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'sveltekit',
                                                        children: 'SvelteKit',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'astro',
                                                        children: 'Astro',
                                                    }),
                                                    _jsx(SelectItem, {
                                                        value: 'nuxt',
                                                        children: 'Nuxt.js',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            _jsxs(CardFooter, {
                className: 'flex justify-between',
                children: [
                    _jsx(Button, { variant: 'outline', children: 'Cancel' }),
                    _jsx(Button, { children: 'Deploy' }),
                ],
            }),
        ],
    })
}
