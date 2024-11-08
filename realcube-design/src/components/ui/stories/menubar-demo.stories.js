import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '../menubar'
var meta = {
    title: 'RealCube/menubar',
    component: function () {
        return _jsxs(Menubar, {
            children: [
                _jsxs(MenubarMenu, {
                    children: [
                        _jsx(MenubarTrigger, { children: 'File' }),
                        _jsxs(MenubarContent, {
                            children: [
                                _jsxs(MenubarItem, {
                                    children: [
                                        'New Tab ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u2318T',
                                        }),
                                    ],
                                }),
                                _jsxs(MenubarItem, {
                                    children: [
                                        'New Window ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u2318N',
                                        }),
                                    ],
                                }),
                                _jsx(MenubarItem, {
                                    disabled: true,
                                    children: 'New Incognito Window',
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsxs(MenubarSub, {
                                    children: [
                                        _jsx(MenubarSubTrigger, {
                                            children: 'Share',
                                        }),
                                        _jsxs(MenubarSubContent, {
                                            children: [
                                                _jsx(MenubarItem, {
                                                    children: 'Email link',
                                                }),
                                                _jsx(MenubarItem, {
                                                    children: 'Messages',
                                                }),
                                                _jsx(MenubarItem, {
                                                    children: 'Notes',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsxs(MenubarItem, {
                                    children: [
                                        'Print... ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u2318P',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                _jsxs(MenubarMenu, {
                    children: [
                        _jsx(MenubarTrigger, { children: 'Edit' }),
                        _jsxs(MenubarContent, {
                            children: [
                                _jsxs(MenubarItem, {
                                    children: [
                                        'Undo ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u2318Z',
                                        }),
                                    ],
                                }),
                                _jsxs(MenubarItem, {
                                    children: [
                                        'Redo ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u21E7\u2318Z',
                                        }),
                                    ],
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsxs(MenubarSub, {
                                    children: [
                                        _jsx(MenubarSubTrigger, {
                                            children: 'Find',
                                        }),
                                        _jsxs(MenubarSubContent, {
                                            children: [
                                                _jsx(MenubarItem, {
                                                    children: 'Search the web',
                                                }),
                                                _jsx(MenubarSeparator, {}),
                                                _jsx(MenubarItem, {
                                                    children: 'Find...',
                                                }),
                                                _jsx(MenubarItem, {
                                                    children: 'Find Next',
                                                }),
                                                _jsx(MenubarItem, {
                                                    children: 'Find Previous',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsx(MenubarItem, { children: 'Cut' }),
                                _jsx(MenubarItem, { children: 'Copy' }),
                                _jsx(MenubarItem, { children: 'Paste' }),
                            ],
                        }),
                    ],
                }),
                _jsxs(MenubarMenu, {
                    children: [
                        _jsx(MenubarTrigger, { children: 'View' }),
                        _jsxs(MenubarContent, {
                            children: [
                                _jsx(MenubarCheckboxItem, {
                                    children: 'Always Show Bookmarks Bar',
                                }),
                                _jsx(MenubarCheckboxItem, {
                                    checked: true,
                                    children: 'Always Show Full URLs',
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsxs(MenubarItem, {
                                    inset: true,
                                    children: [
                                        'Reload ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u2318R',
                                        }),
                                    ],
                                }),
                                _jsxs(MenubarItem, {
                                    disabled: true,
                                    inset: true,
                                    children: [
                                        'Force Reload ',
                                        _jsx(MenubarShortcut, {
                                            children: '\u21E7\u2318R',
                                        }),
                                    ],
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsx(MenubarItem, {
                                    inset: true,
                                    children: 'Toggle Fullscreen',
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsx(MenubarItem, {
                                    inset: true,
                                    children: 'Hide Sidebar',
                                }),
                            ],
                        }),
                    ],
                }),
                _jsxs(MenubarMenu, {
                    children: [
                        _jsx(MenubarTrigger, { children: 'Profiles' }),
                        _jsxs(MenubarContent, {
                            children: [
                                _jsxs(MenubarRadioGroup, {
                                    value: 'benoit',
                                    children: [
                                        _jsx(MenubarRadioItem, {
                                            value: 'andy',
                                            children: 'Andy',
                                        }),
                                        _jsx(MenubarRadioItem, {
                                            value: 'benoit',
                                            children: 'Benoit',
                                        }),
                                        _jsx(MenubarRadioItem, {
                                            value: 'Luis',
                                            children: 'Luis',
                                        }),
                                    ],
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsx(MenubarItem, {
                                    inset: true,
                                    children: 'Edit...',
                                }),
                                _jsx(MenubarSeparator, {}),
                                _jsx(MenubarItem, {
                                    inset: true,
                                    children: 'Add Profile...',
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
export var MenubarDemo = {
    args: {},
}
