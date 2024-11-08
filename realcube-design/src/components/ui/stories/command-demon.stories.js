import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '../command'
//meta
var meta = {
    title: 'RealCube/command',
    component: function () {
        return _jsxs(Command, {
            className: 'rounded-lg border shadow-md',
            children: [
                _jsx(CommandInput, {
                    placeholder: 'Type a command or search...',
                }),
                _jsxs(CommandList, {
                    children: [
                        _jsx(CommandEmpty, { children: 'No results found.' }),
                        _jsxs(CommandGroup, {
                            heading: 'Suggestions',
                            children: [
                                _jsxs(CommandItem, {
                                    children: [
                                        _jsx(Calendar, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        _jsx('span', { children: 'Calendar' }),
                                    ],
                                }),
                                _jsxs(CommandItem, {
                                    children: [
                                        _jsx(Smile, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        _jsx('span', {
                                            children: 'Search Emoji',
                                        }),
                                    ],
                                }),
                                _jsxs(CommandItem, {
                                    children: [
                                        _jsx(Calculator, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        _jsx('span', {
                                            children: 'Calculator',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx(CommandSeparator, {}),
                        _jsxs(CommandGroup, {
                            heading: 'Settings',
                            children: [
                                _jsxs(CommandItem, {
                                    children: [
                                        _jsx(User, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        _jsx('span', { children: 'Profile' }),
                                        _jsx(CommandShortcut, {
                                            children: '\u2318P',
                                        }),
                                    ],
                                }),
                                _jsxs(CommandItem, {
                                    children: [
                                        _jsx(CreditCard, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        _jsx('span', { children: 'Billing' }),
                                        _jsx(CommandShortcut, {
                                            children: '\u2318B',
                                        }),
                                    ],
                                }),
                                _jsxs(CommandItem, {
                                    children: [
                                        _jsx(Settings, {
                                            className: 'mr-2 h-4 w-4',
                                        }),
                                        _jsx('span', { children: 'Settings' }),
                                        _jsx(CommandShortcut, {
                                            children: '\u2318S',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var CommandDemo = {
    args: {},
}
