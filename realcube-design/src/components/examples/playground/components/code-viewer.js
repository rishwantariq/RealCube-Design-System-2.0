import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Button } from '../../../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../ui/dialog'
export function CodeViewer() {
    return _jsxs(Dialog, {
        children: [
            _jsx(DialogTrigger, {
                asChild: true,
                children: _jsx(Button, {
                    variant: 'secondary',
                    children: 'View code',
                }),
            }),
            _jsxs(DialogContent, {
                className: 'sm:max-w-[625px]',
                children: [
                    _jsxs(DialogHeader, {
                        children: [
                            _jsx(DialogTitle, { children: 'View code' }),
                            _jsx(DialogDescription, {
                                children:
                                    'You can use the following code to start integrating your current prompt and settings into your application.',
                            }),
                        ],
                    }),
                    _jsxs('div', {
                        className: 'grid gap-4',
                        children: [
                            _jsx('div', {
                                className: 'rounded-md bg-black p-6',
                                children: _jsx('pre', {
                                    children: _jsxs('code', {
                                        className:
                                            'grid gap-1 text-sm text-muted-foreground [&_span]:h-4',
                                        children: [
                                            _jsxs('span', {
                                                children: [
                                                    _jsx('span', {
                                                        className:
                                                            'text-sky-300',
                                                        children: 'import',
                                                    }),
                                                    ' ',
                                                    'os',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    _jsx('span', {
                                                        className:
                                                            'text-sky-300',
                                                        children: 'import',
                                                    }),
                                                    ' ',
                                                    'openai',
                                                ],
                                            }),
                                            _jsx('span', {}),
                                            _jsxs('span', {
                                                children: [
                                                    'openai.api_key = os.getenv(',
                                                    _jsx('span', {
                                                        className:
                                                            'text-green-300',
                                                        children:
                                                            '"OPENAI_API_KEY"',
                                                    }),
                                                    ')',
                                                ],
                                            }),
                                            _jsx('span', {}),
                                            _jsx('span', {
                                                children:
                                                    'response = openai.Completion.create(',
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'model=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-green-300',
                                                        children: '"davinci"',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'prompt=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-amber-300',
                                                        children: '""',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'temperature=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-amber-300',
                                                        children: '0.9',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'max_tokens=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-amber-300',
                                                        children: '5',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'top_p=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-amber-300',
                                                        children: '1',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'frequency_penalty=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-amber-300',
                                                        children: '0',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsxs('span', {
                                                children: [
                                                    ' ',
                                                    'presence_penalty=',
                                                    _jsx('span', {
                                                        className:
                                                            'text-green-300',
                                                        children: '0',
                                                    }),
                                                    ',',
                                                ],
                                            }),
                                            _jsx('span', { children: ')' }),
                                        ],
                                    }),
                                }),
                            }),
                            _jsx('div', {
                                children: _jsx('p', {
                                    className: 'text-sm text-muted-foreground',
                                    children:
                                        'Your API Key can be found here. You should use environment variables or a secret management tool to expose your key to your applications.',
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
